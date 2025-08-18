import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { event, data } = await request.json();

    // Log do evento para debugging
    console.log('Tracking Event:', { event, data, timestamp: new Date().toISOString() });

    // Google Analytics 4 - Server Side
    // Nota: Para funcionar do lado servidor, você precisa usar Measurement Protocol
    // Referência: https://developers.google.com/analytics/devguides/collection/protocol/ga4
    
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    const GA_API_SECRET = process.env.GA_API_SECRET;

    if (GA_MEASUREMENT_ID && GA_API_SECRET) {
      try {
        await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
          method: 'POST',
          body: JSON.stringify({
            client_id: data.client_id || 'server_side_client',
            events: [{
              name: event,
              params: data
            }]
          })
        });
      } catch (gaError) {
        console.error('Erro ao enviar para GA:', gaError);
      }
    }

    // Facebook Conversions API (Server Side)
    const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL;
    const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

    if (FB_PIXEL_ID && FB_ACCESS_TOKEN) {
      try {
        const fbEventData = {
          data: [{
            event_name: mapEventToFacebook(event),
            event_time: Math.floor(Date.now() / 1000),
            user_data: {
              em: data.email ? hashEmail(data.email) : undefined,
              ph: data.phone ? hashPhone(data.phone) : undefined
            },
            custom_data: data
          }]
        };

        await fetch(`https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fbEventData)
        });
      } catch (fbError) {
        console.error('Erro ao enviar para Facebook:', fbError);
      }
    }

    // Mixpanel ou Amplitude (opcional)
    // Se você tiver configurado, adicione aqui

    return NextResponse.json({ 
      success: true,
      message: 'Evento rastreado com sucesso'
    });

  } catch (error) {
    console.error('Erro no tracking:', error);
    return NextResponse.json(
      { error: 'Erro ao processar tracking' },
      { status: 500 }
    );
  }
}

// Mapear eventos customizados para eventos padrão do Facebook
function mapEventToFacebook(event) {
  const eventMap = {
    'quiz_start': 'InitiateCheckout',
    'quiz_complete': 'CompleteRegistration',
    'quiz_progress': 'ViewContent',
    'whatsapp_click': 'Contact',
    'lead_captured': 'Lead',
    'page_view': 'PageView'
  };

  return eventMap[event] || event;
}

// Hash de email para Facebook (SHA256)
function hashEmail(email) {
  // Em produção, use uma biblioteca de crypto adequada
  // Este é um placeholder
  return email.toLowerCase().trim();
}

// Hash de telefone para Facebook (SHA256)
function hashPhone(phone) {
  // Em produção, use uma biblioteca de crypto adequada
  // Este é um placeholder - remova caracteres não numéricos
  return phone.replace(/\D/g, '');
}