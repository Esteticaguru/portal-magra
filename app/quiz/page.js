'use client';

import React, { useEffect, useMemo, useState } from 'react';

// 🔧 CONFIGURAÇÕES
const WHATSAPP_NUMBER = '17862535032'; // Substitua pelo seu número
const RESULT_DELAY_MS = 1200; // Loading para dar sensação de análise

export default function QuizPortalMagra() {
  // Capturar UTM params diretamente da URL
  const getUrlParams = () => {
    if (typeof window === 'undefined') return { ref: '', utm_source: 'quiz' };
    const urlParams = new URLSearchParams(window.location.search);
    return {
      ref: urlParams.get('ref') || '',
      utm_source: urlParams.get('utm_source') || 'quiz'
    };
  };

  const [urlParams] = useState(getUrlParams);

  // Estado do fluxo
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [profileKey, setProfileKey] = useState(null);

  const total = 7;

  // 🔥 7 PERGUNTAS EMOCIONAIS E DIRETAS
  const questions = useMemo(() => [
    {
      id: 1,
      numberLabel: `Pergunta 1 de ${total}`,
      title: 'Quando você se olha no espelho, o que mais sente?',
      options: [
        { 
          value: 'cansaco', 
          text: 'Cansaço e falta de energia', 
          emoji: '😮‍💨', 
          score: 'acelerada=2,invisivel=1' 
        },
        { 
          value: 'vergonha', 
          text: 'Vergonha do corpo que mudou depois de vir para cá', 
          emoji: '🪞', 
          score: 'invisivel=3,nostalgica=1' 
        },
        { 
          value: 'falta', 
          text: 'Orgulho, mas sinto que falta algo', 
          emoji: '✨', 
          score: 'resistente=2,nostalgica=1' 
        },
      ],
    },
    {
      id: 2,
      numberLabel: `Pergunta 2 de ${total}`,
      title: 'Se pudesse mudar UMA coisa HOJE, qual seria?',
      options: [
        { 
          value: 'desinchar', 
          text: 'Perder o inchaço e a barriga', 
          emoji: '🎈', 
          score: 'acelerada=1,resistente=2' 
        },
        { 
          value: 'emagrecer', 
          text: 'Emagrecer de vez', 
          emoji: '🎯', 
          score: 'resistente=2,invisivel=1' 
        },
        { 
          value: 'autoestima', 
          text: 'Voltar a gostar de mim', 
          emoji: '💖', 
          score: 'invisivel=3,nostalgica=1' 
        },
      ],
    },
    {
      id: 3,
      numberLabel: `Pergunta 3 de ${total}`,
      title: 'Na sua rotina nos EUA, o que mais te atrapalha?',
      options: [
        { 
          value: 'fastfood', 
          text: 'Comida rápida e fast food', 
          emoji: '🍔', 
          score: 'resistente=1,acelerada=2,recem=1' 
        },
        { 
          value: 'tempo', 
          text: 'Trabalho intenso, sem tempo para mim', 
          emoji: '⏰', 
          score: 'acelerada=3' 
        },
        { 
          value: 'saudade', 
          text: 'Ansiedade e saudade do Brasil', 
          emoji: '🇧🇷', 
          score: 'nostalgica=3,recem=1' 
        },
      ],
    },
    {
      id: 4,
      numberLabel: `Pergunta 4 de ${total}`,
      title: 'Quando fala com sua família no Brasil, você...',
      options: [
        { 
          value: 'evita', 
          text: 'Evita mostrar a câmera', 
          emoji: '📵', 
          score: 'invisivel=3' 
        },
        { 
          value: 'desconforto', 
          text: 'Fica desconfortável com sua aparência', 
          emoji: '😬', 
          score: 'invisivel=2,resistente=1' 
        },
        { 
          value: 'sorriso', 
          text: 'Sorri, mas por dentro queria estar melhor', 
          emoji: '🙂', 
          score: 'nostalgica=2,acelerada=1,recem=1' 
        },
      ],
    },
    {
      id: 5,
      numberLabel: `Pergunta 5 de ${total}`,
      title: 'Qual é sua maior luta com saúde aqui nos EUA?',
      options: [
        { 
          value: 'dietas', 
          text: 'Já tentei várias dietas e não consegui manter', 
          emoji: '🥗', 
          score: 'resistente=3' 
        },
        { 
          value: 'exausta', 
          text: 'Sinto que vivo cansada e sem energia', 
          emoji: '😵‍💫', 
          score: 'acelerada=3' 
        },
        { 
          value: 'adaptacao', 
          text: 'Ainda estou me adaptando ao estilo de vida daqui', 
          emoji: '🔄', 
          score: 'recem=3,nostalgica=1' 
        },
      ],
    },
    {
      id: 6,
      numberLabel: `Pergunta 6 de ${total}`,
      title: 'Se em 30 dias pudesse conquistar algo, o que escolheria?',
      options: [
        { 
          value: 'roupa', 
          text: 'Entrar em uma roupa que hoje não serve', 
          emoji: '👗', 
          score: 'resistente=2,invisivel=1' 
        },
        { 
          value: 'disposicao', 
          text: 'Voltar a ter disposição e energia', 
          emoji: '⚡', 
          score: 'acelerada=2,recem=1' 
        },
        { 
          value: 'espelho', 
          text: 'Olhar no espelho e gostar do que vejo', 
          emoji: '🪞', 
          score: 'invisivel=2,nostalgica=1' 
        },
      ],
    },
    {
      id: 7,
      numberLabel: `Pergunta 7 de ${total}`,
      title: 'Se não mudar nada agora, o que mais teme para daqui 1 ano?',
      options: [
        { 
          value: 'saude', 
          text: 'Estar com mais peso e saúde pior', 
          emoji: '⚠️', 
          score: 'resistente=2,acelerada=1' 
        },
        { 
          value: 'autoestimapior', 
          text: 'Perder ainda mais autoestima', 
          emoji: '💔', 
          score: 'invisivel=2,nostalgica=1' 
        },
        { 
          value: 'seguir', 
          text: 'Continuar correndo pela vida e me esquecendo', 
          emoji: '🏃‍♀️', 
          score: 'acelerada=2,nostalgica=1' 
        },
      ],
    },
  ], [total]);

  // 🎯 5 ARQUÉTIPOS COMPLETOS
  const profiles = {
    recem: {
      emoji: '🌱',
      title: 'A Recém-Chegada',
      subtitle: 'Você está em processo de adaptação aos EUA',
      description: 'Seu corpo está se ajustando à nova rotina, novos alimentos e muita ansiedade da mudança. É normal se sentir perdida, mas você está no caminho certo para se encontrar.',
      whatsappPitch: 'Receba seu plano de adaptação de 7 dias + guia completo para começar sua jornada de bem-estar nos EUA.'
    },
    acelerada: {
      emoji: '🚀',
      title: 'A Acelerada',
      subtitle: 'Você faz mil coisas e se deixa por último',
      description: 'Trabalho, casa, família... você cuida de tudo e todos, menos de você mesma. Seu corpo está pedindo socorro e você sabe que precisa de uma mudança urgente.',
      whatsappPitch: 'Receba 3 estratégias de 10 minutos que cabem na sua agenda + rotina express para mulheres ocupadas.'
    },
    resistente: {
      emoji: '💪',
      title: 'A Resistente',
      subtitle: 'Você já tentou de tudo e nada funcionou',
      description: 'Dietas, exercícios, aplicativos... você já tentou tudo, mas nada dura. O problema não é você - é o método que não se adapta à sua realidade de brasileira nos EUA.',
      whatsappPitch: 'Receba o método que funciona + 3 erros que sabotam seus resultados + plano que respeita sua rotina.'
    },
    invisivel: {
      emoji: '🪞',
      title: 'A Invisível',
      subtitle: 'Autoestima em baixa, você se esconde do espelho',
      description: 'Você evita fotos, espelhos viraram inimigos e sua autoestima está no chão. Mas chegou a hora de virar esse jogo e voltar a se amar.',
      whatsappPitch: 'Receba seu plano de resgate da autoestima + 3 passos para voltar a se olhar com orgulho no espelho.'
    },
    nostalgica: {
      emoji: '🇧🇷',
      title: 'A Nostálgica',
      subtitle: 'Coração no Brasil, vida nos EUA',
      description: 'A saudade de casa mexe com suas emoções e isso tem refletido na sua saúde. Você come por ansiedade e a distância da família pesa no seu bem-estar.',
      whatsappPitch: 'Receba hábitos que acolhem a saudade + estratégias para cuidar da saúde emocional e física longe de casa.'
    },
  };

  // 🔢 Cálculo de pontuação
  const calcProfile = () => {
    const acc = {
      recem: 0,
      acelerada: 0,
      resistente: 0,
      invisivel: 0,
      nostalgica: 0,
    };

    Object.values(answers).forEach((opt) => {
      if (!opt) return;
      opt.score.split(',').forEach((pair) => {
        const [k, v] = pair.split('=');
        const key = k.trim();
        const val = parseInt(v.trim(), 10) || 0;
        if (acc[key] !== undefined) acc[key] += val;
      });
    });

    // Maior pontuação ganha
    let winner = 'acelerada';
    let best = -1;
    Object.keys(acc).forEach((k) => {
      if (acc[k] > best) { 
        best = acc[k]; 
        winner = k; 
      }
    });

    return winner;
  };

  // 📈 Tracking
  const track = (event, data) => {
    // Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      try { 
        window.fbq('trackCustom', event, data || {}); 
      } catch (e) {
        console.log('Facebook Pixel error:', e);
      }
    }
    // GA4
    if (typeof window !== 'undefined' && window.gtag) {
      try { 
        window.gtag('event', event, data || {}); 
      } catch (e) {
        console.log('GA4 error:', e);
      }
    }
    // Console log para debug (remover em produção)
    console.log('Quiz Event:', event, data);
  };

  // Início
  useEffect(() => {
    track('QuizStart', { ref: urlParams.ref, utm_source: urlParams.utm_source });
    setTimeout(() => focusFirstOption(), 50);
  }, []);

  const focusFirstOption = () => {
    const btn = document.querySelector('button[data-option="true"]');
    if (btn) btn.focus();
  };

  const currentQuestion = questions[currentIdx];
  const progress = Math.round(((currentIdx + 1) / total) * 100);

  const selectOption = (opt) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: opt }));
    track('QuizAnswer', { qid: currentQuestion.id, value: opt.value });
  };

  const next = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
      setTimeout(() => focusFirstOption(), 50);
    } else {
      // Finaliza quiz
      setShowLoading(true);
      const winner = calcProfile();
      setProfileKey(winner);
      track('QuizComplete', { profile: winner });
      
      setTimeout(() => {
        setShowLoading(false);
        setShowResult(true);
      }, RESULT_DELAY_MS);
    }
  };

  const prev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((i) => i - 1);
      setTimeout(() => focusFirstOption(), 50);
    }
  };

  // Teclado
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' && answers[currentQuestion.id]) next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // 📱 Compartilhar resultado
  const shareResult = () => {
    if (!profileKey) return;
    const p = profiles[profileKey];
    const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const shareText = `Descobri que sou ${p.title} ${p.emoji}! 

Fiz o teste de 1 minuto e o resultado foi surpreendente. 

Faça o seu também: ${currentUrl}/quiz`;
    
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ 
        title: 'Quiz Portal Magra', 
        text: shareText, 
        url: `${currentUrl}/quiz` 
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('✅ Texto copiado! Cole no WhatsApp ou Stories para suas amigas fazerem o teste também.');
      });
    } else {
      // Fallback para quando clipboard não está disponível
      alert(`Compartilhe este texto:\n\n${shareText}`);
    }
    track('QuizShareClick', { profile: profileKey });
  };

  // 💬 WhatsApp
  const goWhatsApp = () => {
    const profile = profileKey || calcProfile();
    const p = profiles[profile];
    
    const msg = `Olá! Acabei de fazer o Quiz do Portal Magra 🎯

✨ MEU RESULTADO: ${p.title.toUpperCase()}

${p.description}

Quero receber meu material completo:
📋 Plano personalizado de 7 dias
💡 Estratégias específicas para meu perfil  
🎯 Guia completo de bem-estar
📸 Card do meu resultado para postar

Por favor, me envie tudo! 🙏`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    track('WhatsAppClick', { profile, ref: urlParams.ref, utm_source: urlParams.utm_source });
    window.open(url, '_blank');
  };

  // Componente Botão Opção
  const OptionBtn = ({ opt, selected, onClick }) => (
    <button
      data-option="true"
      onClick={onClick}
      className={`w-full text-left rounded-xl border p-4 mb-3 transition-all duration-200 focus:outline-none focus:ring-2`}
      style={{
        borderColor: selected ? '#FF6B8D' : '#e5e7eb',
        backgroundColor: selected ? '#fff0f3' : '#ffffff',
        focusRingColor: '#FF6B8D'
      }}
      onFocus={(e) => {
        e.target.style.ring = '2px solid #FF6B8D';
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{opt.emoji || '✨'}</span>
        <span className="text-base md:text-lg font-medium">{opt.text}</span>
      </div>
    </button>
  );

  // ======== TELAS ========

  // LOADING
  if (showLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4" style={{
        background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8ed 100%)'
      }}>
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mx-auto h-16 w-16 border-4 border-pink-200 rounded-full animate-spin mb-6" style={{
              borderTopColor: '#FF6B8D'
            }}></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Analisando suas respostas...</h2>
            <p className="text-gray-600 mb-4">Descobrindo seu arquétipo único de brasileira nos EUA</p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full animate-pulse" style={{
                background: 'linear-gradient(90deg, #FF6B8D 0%, #FF8FA3 100%)'
              }}></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // RESULTADO
  if (showResult && profileKey) {
    const p = profiles[profileKey];
    return (
      <main className="min-h-screen py-8 px-4" style={{
        background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8ed 100%)'
      }}>
        <div className="max-w-lg mx-auto">
          {/* Header com bandeiras */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              🇧🇷 Seu resultado está pronto! 🇺🇸 🎉
            </h1>
            <p className="text-gray-600">Descobrimos seu arquétipo de brasileira nos EUA</p>
          </div>

          {/* Card Resultado */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">{p.emoji}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{p.title}</h2>
              <p className="text-lg font-semibold mb-4" style={{ color: '#FF6B8D' }}>{p.subtitle}</p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-gray-700 leading-relaxed">{p.description}</p>
              </div>
            </div>

            {/* Próximo Passo */}
            <div className="rounded-xl p-4 mb-6" style={{
              background: 'linear-gradient(135deg, #fff0f3 0%, #ffe6ea 100%)'
            }}>
              <h3 className="font-bold text-gray-800 mb-2">🎁 Próximo passo (grátis):</h3>
              <p className="text-gray-700 text-sm">{p.whatsappPitch}</p>
            </div>

            {/* Botões */}
            <div className="space-y-3">
              <button 
                onClick={goWhatsApp}
                className="w-full text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FF6B8D 0%, #FF8FA3 100%)'
                }}
              >
                💬 Receber meu material completo no WhatsApp
              </button>
              
              <button 
                onClick={shareResult}
                className="w-full border-2 py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:bg-pink-50"
                style={{
                  borderColor: '#FF6B8D',
                  color: '#FF6B8D'
                }}
              >
                📱 Compartilhar meu resultado
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Ao continuar, você receberá seu material personalizado. Pode cancelar quando quiser.
            </p>
          </div>

          {/* Call to Action Viral */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Ajude suas amigas também!</strong> Compartilhe para elas descobrirem o arquétipo delas 💕
            </p>
          </div>
        </div>
      </main>
    );
  }

  // QUIZ
  return (
    <main className="min-h-screen py-8 px-4" style={{
      background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8ed 100%)'
    }}>
      <div className="max-w-lg mx-auto">
        {/* Header com bandeiras */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🇧🇷 Qual tipo de brasileira nos EUA você é? 🇺🇸
          </h1>
          <p className="text-gray-600 mb-4">
            Descubra em 1 minuto e receba seu guia personalizado grátis 🎁
          </p>
          
          {/* Progresso */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>{currentQuestion.numberLabel}</span>
              <span>{progress}% completo</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-300 ease-out" 
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #FF6B8D 0%, #FF8FA3 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Card Pergunta */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            {currentQuestion.title}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((opt) => (
              <OptionBtn
                key={opt.value}
                opt={opt}
                selected={answers[currentQuestion.id]?.value === opt.value}
                onClick={() => selectOption(opt)}
              />
            ))}
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <button
              onClick={prev}
              className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                currentIdx === 0 
                  ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400' 
                  : 'hover:bg-pink-50'
              }`}
              disabled={currentIdx === 0}
              style={{
                borderColor: currentIdx === 0 ? '#e5e7eb' : '#FF6B8D',
                color: currentIdx === 0 ? '#9ca3af' : '#FF6B8D'
              }}
            >
              ⬅ Anterior
            </button>

            <button
              onClick={next}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                answers[currentQuestion.id]
                  ? 'text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!answers[currentQuestion.id]}
              style={{
                background: answers[currentQuestion.id] 
                  ? 'linear-gradient(135deg, #FF6B8D 0%, #FF8FA3 100%)'
                  : '#e5e7eb'
              }}
            >
              {currentIdx === total - 1 ? 'Ver meu resultado 🎯' : 'Próxima ➡'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            ⏱ Leva apenas 1 minuto • 🔒 Suas respostas são privadas • 📱 Resultado completo no WhatsApp
          </p>
        </div>
      </div>
    </main>
  );
}