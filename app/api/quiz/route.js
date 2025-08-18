import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, quizAnswers, userProfile, phoneNumber } = data;

    // 1. Salvar no banco de dados (exemplo com Supabase - descomente quando configurar)
    // const { data: lead, error } = await supabase
    //   .from('leads')
    //   .insert([{
    //     email,
    //     phone: phoneNumber,
    //     quiz_results: quizAnswers,
    //     profile: userProfile,
    //     created_at: new Date()
    //   }]);

    // 2. Enviar para ActiveCampaign/Mailchimp
    await sendToEmailAutomation(email, userProfile, quizAnswers);

    // 3. Enviar para Google Sheets (backup)
    await sendToGoogleSheets(email, phoneNumber, userProfile);

    // 4. Disparar webhook para ManyChat
    await triggerManyChatFlow(phoneNumber, userProfile);

    // 5. Enviar notificação para equipe
    await notifyTeam(email, userProfile, phoneNumber);

    return NextResponse.json({ 
      success: true, 
      message: 'Lead capturado com sucesso' 
    });

  } catch (error) {
    console.error('Erro ao processar quiz:', error);
    return NextResponse.json(
      { error: 'Erro ao processar dados' },
      { status: 500 }
    );
  }
}

// -----------------------------------
// INTEGRAÇÃO COM ACTIVECAMPAIGN
// -----------------------------------
async function sendToEmailAutomation(email, profile, answers) {
  const AC_API_URL = process.env.ACTIVECAMPAIGN_URL;
  const AC_API_KEY = process.env.ACTIVECAMPAIGN_KEY;

  // Se não tiver configurado, apenas loga
  if (!AC_API_URL || !AC_API_KEY) {
    console.log('ActiveCampaign não configurado - Lead:', { email, profile });
    return;
  }

  // Determinar qual automação triggerar baseado no perfil
  const automationMap = {
    'high-priority': 'urgent-care-sequence',
    'medium-priority': 'nurture-sequence',
    'low-priority': 'education-sequence'
  };

  const contact = {
    email: email,
    firstName: email.split('@')[0], // Temporário até coletar nome
    fieldValues: [
      {
        field: 'quiz_profile',
        value: profile
      },
      {
        field: 'quiz_score',
        value: calculateQuizScore(answers)
      },
      {
        field: 'lead_source',
        value: 'quiz_portal_magra'
      }
    ],
    tags: [`quiz_${profile}`, 'portal_magra', 'brasileira_usa']
  };

  try {
    // Criar/atualizar contato
    const response = await fetch(`${AC_API_URL}/api/3/contacts`, {
      method: 'POST',
      headers: {
        'Api-Token': AC_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ contact })
    });

    const data = await response.json();

    // Adicionar à automação específica
    if (data.contact) {
      await fetch(`${AC_API_URL}/api/3/contactAutomations`, {
        method: 'POST',
        headers: {
          'Api-Token': AC_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contactAutomation: {
            contact: data.contact.id,
            automation: automationMap[profile]
          }
        })
      });
    }

    return data;
  } catch (error) {
    console.error('Erro ActiveCampaign:', error);
    throw error;
  }
}

// -----------------------------------
// INTEGRAÇÃO COM GOOGLE SHEETS
// -----------------------------------
async function sendToGoogleSheets(email, phone, profile) {
  // Usar Google Sheets API ou Zapier Webhook
  const ZAPIER_WEBHOOK = process.env.ZAPIER_WEBHOOK_URL;

  if (!ZAPIER_WEBHOOK) {
    console.log('Zapier não configurado - Lead:', { email, phone, profile });
    return;
  }

  try {
    await fetch(ZAPIER_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        phone,
        profile,
        timestamp: new Date().toISOString(),
        source: 'quiz',
        utm_source: 'instagram',
        utm_campaign: 'portal_magra_quiz'
      })
    });
  } catch (error) {
    console.error('Erro Google Sheets:', error);
  }
}

// -----------------------------------
// INTEGRAÇÃO COM MANYCHAT
// -----------------------------------
async function triggerManyChatFlow(phoneNumber, profile) {
  const MANYCHAT_API_KEY = process.env.MANYCHAT_API_KEY;
  const FLOW_NS = process.env.MANYCHAT_FLOW_NS;

  if (!MANYCHAT_API_KEY || !FLOW_NS) {
    console.log('ManyChat não configurado - Phone:', phoneNumber);
    return;
  }

  // Mapear perfil para flow específico
  const flowMap = {
    'high-priority': 'flow_urgent_followup',
    'medium-priority': 'flow_standard_nurture',
    'low-priority': 'flow_education'
  };

  try {
    await fetch('https://api.manychat.com/fb/sending/sendFlow', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MANYCHAT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subscriber_id: phoneNumber, // ou use o PSID do Facebook
        flow_ns: FLOW_NS,
        flow_name: flowMap[profile]
      })
    });
  } catch (error) {
    console.error('Erro ManyChat:', error);
  }
}

// -----------------------------------
// NOTIFICAÇÃO PARA EQUIPE
// -----------------------------------
async function notifyTeam(email, profile, phoneNumber) {
  // Enviar para Slack ou WhatsApp da equipe
  const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;

  const messageMap = {
    'high-priority': '🔥 LEAD QUENTE',
    'medium-priority': '✨ Lead Qualificado',
    'low-priority': '📝 Lead para Nutrição'
  };

  // Se não tiver Slack configurado, pelo menos loga no console
  console.log(`${messageMap[profile]}: Novo lead do quiz!`, {
    email,
    profile,
    phone: phoneNumber,
    time: new Date().toLocaleString('pt-BR')
  });

  if (!SLACK_WEBHOOK) {
    return;
  }

  try {
    await fetch(SLACK_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: `${messageMap[profile]}: Novo lead do quiz!`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${messageMap[profile]}*\n• Email: ${email}\n• Telefone: ${phoneNumber}\n• Perfil: ${profile}\n• Hora: ${new Date().toLocaleString('pt-BR')}`
            }
          }
        ]
      })
    });
  } catch (error) {
    console.error('Erro Slack:', error);
  }
}

// -----------------------------------
// HELPERS
// -----------------------------------
function calculateQuizScore(answers) {
  return Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
}