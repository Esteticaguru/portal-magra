'use client';

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';

// 🔧 CONFIGURAÇÕES
const WHATSAPP_NUMBER = '17862535032';
const RESULT_DELAY_MS = 1200;

export default function QuizPage() {
  // Capturar UTM params
  const getUrlParams = () => {
    if (typeof window === 'undefined') return { ref: '', utm_source: 'quiz' };
    const urlParams = new URLSearchParams(window.location.search);
    return {
      ref: urlParams.get('ref') || '',
      utm_source: urlParams.get('utm_source') || 'quiz'
    };
  };

  const [urlParams] = useState(getUrlParams);
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
    },
    acelerada: {
      emoji: '🚀',
      title: 'A Acelerada',
      subtitle: 'Você faz mil coisas e se deixa por último',
      description: 'Trabalho, casa, família... você cuida de tudo e todos, menos de você mesma. Seu corpo está pedindo socorro e você sabe que precisa de uma mudança urgente.',
    },
    resistente: {
      emoji: '💪',
      title: 'A Resistente',
      subtitle: 'Você já tentou de tudo e nada funcionou',
      description: 'Dietas, exercícios, aplicativos... você já tentou tudo, mas nada dura. O problema não é você - é o método que não se adapta à sua realidade de brasileira nos EUA.',
    },
    invisivel: {
      emoji: '🪞',
      title: 'A Invisível',
      subtitle: 'Autoestima em baixa, você se esconde do espelho',
      description: 'Você evita fotos, espelhos viraram inimigos e sua autoestima está no chão. Mas chegou a hora de virar esse jogo e voltar a se amar.',
    },
    nostalgica: {
      emoji: '🇧🇷',
      title: 'A Nostálgica',
      subtitle: 'Coração no Brasil, vida nos EUA',
      description: 'A saudade de casa mexe com suas emoções e isso tem refletido na sua saúde. Você come por ansiedade e a distância da família pesa no seu bem-estar.',
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
    if (typeof window !== 'undefined' && window.fbq) {
      try { 
        window.fbq('trackCustom', event, data || {}); 
      } catch (e) {
        console.log('Facebook Pixel error:', e);
      }
    }
    if (typeof window !== 'undefined' && window.gtag) {
      try { 
        window.gtag('event', event, data || {}); 
      } catch (e) {
        console.log('GA4 error:', e);
      }
    }
    console.log('Quiz Event:', event, data);
  };

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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' && answers[currentQuestion.id]) next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // 📱 Compartilhar Quiz
  const shareQuizLink = () => {
    const profile = profileKey || calcProfile();
    const p = profiles[profile];
    
    const shareMessage = `🔥 GENTE! Descobri que brasileira eu sou nos Estados Unidos! 

Sou "${p.title}" ${p.emoji} e o resultado foi CERTEIRO! 

✨ E vocês? Que brasileira vocês são nos EUA?

Façam o teste de 1 minuto: https://portalmagra.com/quiz

🇧🇷 #PortalMagra #BrasileiranosEUA`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    track('QuizShareClick', { profile: profileKey });
  };

  // 💬 WhatsApp
  const goWhatsApp = () => {
    const profile = profileKey || calcProfile();
    const p = profiles[profile];
    
    const msg = `Olá! 👋

Acabei de fazer o Quiz do Portal Magra e descobri meu arquétipo:

🎯 MEU RESULTADO: ${p.title.toUpperCase()}

${p.description}

⏰ URGENTE: Tenho 24h para acessar meu material gratuito!

✅ Quero receber meu MATERIAL COMPLETO:

• Plano de 7 dias específico para meu arquétipo
• 3 estratégias que cabem na minha rotina nos EUA  
• Guia "Brasileira Magra nos EUA" (PDF exclusivo)
• Acesso ao grupo VIP de brasileiras

Por favor, me envie tudo AGORA! 🙏

Obrigada! 💖`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    track('WhatsAppClick', { profile, ref: urlParams.ref, utm_source: urlParams.utm_source });
    window.open(url, '_blank');
  };

  // Componente Botão Opção
  const OptionBtn = ({ opt, selected, onClick }) => (
    <button
      data-option="true"
      onClick={onClick}
      className={`w-full text-left rounded-xl border p-4 mb-3 transition-all duration-200 focus:outline-none focus:ring-2 ${
        selected ? 'border-pink-500 bg-pink-50' : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{opt.emoji || '✨'}</span>
        <span className="text-base md:text-lg font-medium">{opt.text}</span>
      </div>
    </button>
  );

  return (
    <>
      <Head>
        <title>🇧🇷 Que brasileira você é nos Estados Unidos? | Portal Magra</title>
        <meta name="description" content="Descubra que tipo de brasileira você é nos EUA em 1 minuto! Teste gratuito + guia personalizado de bem-estar. Feito especialmente para brasileiras nos Estados Unidos." />
        
        <meta property="og:title" content="🇧🇷 Que brasileira você é nos Estados Unidos? 🇺🇸" />
        <meta property="og:description" content="Descubra em 1 minuto que tipo de brasileira você é nos EUA! Teste gratuito + guia personalizado de bem-estar." />
        <meta property="og:image" content="https://portalmagra.com/imagens/quiz-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://portalmagra.com/quiz" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portal Magra" />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🇧🇷 Que brasileira você é nos Estados Unidos? 🇺🇸" />
        <meta name="twitter:description" content="Descubra em 1 minuto que tipo de brasileira você é nos EUA! Teste gratuito + guia personalizado." />
        <meta name="twitter:image" content="https://portalmagra.com/imagens/quiz-preview.jpg" />
        
        <meta property="og:image:alt" content="Portal Magra - Quiz para descobrir que brasileira você é nos Estados Unidos" />
        <link rel="canonical" href="https://portalmagra.com/quiz" />
        <meta name="keywords" content="brasileira, Estados Unidos, EUA, bem-estar, qualidade de vida, brasileiros no exterior, Portal Magra, quiz, teste personalizado" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* LOADING */}
      {showLoading && (
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
      )}

      {/* RESULTADO */}
      {showResult && profileKey && (
        <main className="min-h-screen py-8 px-4" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-6 animate-pulse">
              <div className="text-6xl mb-4">🎉✨🎊✨🎉</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                RESULTADO EXCLUSIVO REVELADO!
              </h1>
              <p className="text-xl text-blue-100">Você é única! Veja só...</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-4" style={{
              borderColor: '#FF6B8D',
              transform: 'scale(1.02)'
            }}>
              <div className="text-center">
                <div className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white mb-4" style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                }}>
                  ⭐ ARQUÉTIPO IDENTIFICADO ⭐
                </div>
                
                <div className="text-8xl mb-4 animate-bounce">{profiles[profileKey].emoji}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{profiles[profileKey].title}</h2>
                <p className="text-xl font-bold mb-6" style={{ color: '#FF6B8D' }}>{profiles[profileKey].subtitle}</p>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6 border-l-4" style={{
                  borderColor: '#FF6B8D'
                }}>
                  <h3 className="font-bold text-gray-800 mb-3">💡 Sua Revelação Personalizada:</h3>
                  <p className="text-gray-700 leading-relaxed text-left">{profiles[profileKey].description}</p>
                </div>
              </div>

              <div className="rounded-2xl p-6 mb-6" style={{
                background: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 100%)',
                border: '2px solid #FF6B8D'
              }}>
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">
                    ⏰ ATENÇÃO: Oferta Limitada e GRATUITA!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Você tem <strong style={{ color: '#FF6B8D' }}>24 horas</strong> para acessar 
                    seu material personalizado <strong style={{ color: '#FF6B8D' }}>GRATUITAMENTE</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border-2" style={{ borderColor: '#FF6B8D' }}>
                    <p className="text-sm font-bold" style={{ color: '#FF6B8D' }}>
                      🚨 CLIQUE IMEDIATAMENTE para não perder!
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                      Após 24h, o material volta a ser pago ($47)
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 mb-6" style={{
                background: 'linear-gradient(135deg, #E8F5E8 0%, #F0FFF0 100%)',
                border: '2px solid #4CAF50'
              }}>
                <h3 className="font-bold text-gray-800 mb-4 text-center text-lg">
                  🎁 SEU MATERIAL EXCLUSIVO INCLUI:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium">Plano de 7 dias específico para seu arquétipo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium">3 estratégias que cabem na sua rotina nos EUA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium">Guia "Brasileira Magra nos EUA" (PDF exclusivo)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium">Acesso ao grupo VIP de brasileiras (limitado)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={goWhatsApp}
                  className="w-full text-white py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B8D 0%, #FF8FA3 100%)'
                  }}
                >
                  <span className="relative z-10">
                    💬 LIBERAR MATERIAL GRÁTIS (24H)
                  </span>
                  <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                🔒 100% gratuito • ⏱ Entrega imediata • 🇧🇷 Feito para brasileiras nos EUA
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 text-center mb-6">
              <h3 className="font-bold text-gray-800 mb-4">📱 Compartilhe com suas amigas!</h3>
              <p className="text-gray-600 text-sm mb-4">
                Suas amigas brasileiras nos EUA também merecem descobrir o arquétipo delas!
              </p>
              
              <button 
                onClick={shareQuizLink}
                className="w-full border-2 py-4 px-6 rounded-xl font-bold transition-all duration-200 hover:bg-pink-50 hover:scale-105 mb-4"
                style={{
                  borderColor: '#FF6B8D',
                  color: '#FF6B8D'
                }}
              >
                💬 COMPARTILHAR VIA WHATSAPP
              </button>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <div className="text-xl font-bold" style={{ color: '#FF6B8D' }}>847</div>
                  <p className="text-xs text-gray-600">Brasileiras testaram</p>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: '#FF6B8D' }}>94%</div>
                  <p className="text-xs text-gray-600">Recomendaram</p>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: '#FF6B8D' }}>1 min e meio</div>
                  <p className="text-xs text-gray-600">Tempo médio</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-center text-white">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">AJUDE SUAS AMIGAS BRASILEIRAS!</h3>
              <p className="text-sm mb-4">
                <strong>847 brasileiras já descobriram seu arquétipo!</strong><br />
                Compartilhe com suas amigas para elas também se conhecerem melhor 💝
              </p>
              <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-4">
                <p className="text-xs">
                  🎯 <strong>MISSÃO:</strong> Ajude 3 amigas a descobrirem o arquétipo delas
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* QUIZ */}
      {!showLoading && !showResult && (
        <main className="min-h-screen py-8 px-4" style={{
          background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8ed 100%)'
        }}>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                🇧🇷 Que brasileira você é nos Estados Unidos? 🇺🇸
              </h1>
              <p className="text-gray-600 mb-4">
                Descubra em 1 minuto e receba seu guia personalizado grátis 🎁
              </p>
              
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

              <div className="flex items-center justify-between mt-8 gap-4">
                <button
                  onClick={prev}
                  className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                    currentIdx === 0 
                      ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400' 
                      : 'hover:bg-pink-50 border-pink-500 text-pink-500'
                  }`}
                  disabled={currentIdx === 0}
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

            <div className="text-center">
              <p className="text-xs text-gray-500">
                ⏱ Leva apenas 1 minuto • 🔒 Suas respostas são privadas • 📱 Resultado completo no WhatsApp
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}