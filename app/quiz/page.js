'use client';

import React, { useState, useEffect } from 'react';
import '../globals.css';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({
    recente: 0,
    veterana: 0,
    ocupada: 0,
    autoestima: 0
  });
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [userProfile, setUserProfile] = useState('');

  // Configuração WhatsApp
  const WHATSAPP_NUMBER = '17862535032';

  // Perguntas do Quiz
  const totalQuestions = 7;
  const questions = [
    {
      id: 1,
      number: "Pergunta 1 de 7",
      title: "Há quanto tempo você mora nos Estados Unidos?",
      options: [
        { value: "new", emoji: "🆕", text: "Menos de 1 ano", score: "recente=3" },
        { value: "learning", emoji: "📚", text: "De 1 a 3 anos", score: "recente=2,veterana=1" },
        { value: "established", emoji: "🏠", text: "Mais de 3 anos", score: "veterana=2,ocupada=1" }
      ]
    },
    {
      id: 2,
      number: "Pergunta 2 de 7",
      title: "O que mais mudou no seu corpo desde que chegou?",
      options: [
        { value: "weight", emoji: "⚖️", text: "Ganhei peso", score: "autoestima=2,veterana=2" },
        { value: "energy", emoji: "😴", text: "Perdi energia", score: "ocupada=3,autoestima=1" },
        { value: "digestion", emoji: "🤢", text: "Intestino não funciona como antes", score: "recente=2,ocupada=1" },
        { value: "bloating", emoji: "🎈", text: "Estou sempre inchada", score: "veterana=1,ocupada=2,autoestima=1" }
      ]
    },
    {
      id: 3,
      number: "Pergunta 3 de 7",
      title: "Qual frase mais parece com você?",
      options: [
        { value: "running", emoji: "🏃‍♀️", text: '"Corro o dia inteiro e esqueço de mim"', score: "ocupada=3" },
        { value: "trying", emoji: "🔄", text: '"Já tentei melhorar, mas não consigo manter"', score: "veterana=3,autoestima=1" },
        { value: "ashamed", emoji: "🪞", text: '"Tenho vergonha do espelho, mas não sei por onde começar"', score: "autoestima=3,recente=1" }
      ]
    },
    {
      id: 4,
      number: "Pergunta 4 de 7",
      title: "Quanto tempo você tem para cuidar de si por semana?",
      options: [
        { value: "none", emoji: "⏰", text: "Quase nada", score: "ocupada=3,autoestima=1" },
        { value: "little", emoji: "🕐", text: "Poucas horas", score: "ocupada=2,veterana=1,recente=1" },
        { value: "some", emoji: "📅", text: "Consigo reservar algum tempo", score: "recente=2,veterana=1" }
      ]
    },
    {
      id: 5,
      number: "Pergunta 5 de 7",
      title: "Como você se sente quando fala com a família no Brasil?",
      options: [
        { value: "avoid", emoji: "📵", text: "Evito ligar a câmera", score: "autoestima=3" },
        { value: "uncomfortable", emoji: "😰", text: "Desconfortável com minha aparência", score: "autoestima=2,veterana=1" },
        { value: "normal", emoji: "😊", text: "Normal, mas queria estar melhor", score: "ocupada=1,recente=2" }
      ]
    },
    {
      id: 6,
      number: "Pergunta 6 de 7",
      title: "Já tentou emagrecer morando aqui?",
      options: [
        { value: "never", emoji: "🤔", text: "Nunca tentei seriamente", score: "recente=3" },
        { value: "alone", emoji: "😤", text: "Tentei sozinha e falhei", score: "autoestima=2,ocupada=1" },
        { value: "diets", emoji: "🥗", text: "Fiz dietas americanas sem sucesso", score: "veterana=3" },
        { value: "everything", emoji: "😩", text: "Já tentei de tudo", score: "veterana=2,autoestima=2" }
      ]
    },
    {
      id: 7,
      number: "Pergunta 7 de 7",
      title: "O que você mais deseja agora?",
      options: [
        { value: "energy", emoji: "⚡", text: "Desinchar e ter energia", score: "ocupada=2,recente=1" },
        { value: "lose-weight", emoji: "🎯", text: "Emagrecer e me sentir leve", score: "veterana=2,autoestima=1" },
        { value: "confidence", emoji: "💖", text: "Voltar a gostar do espelho", score: "autoestima=3" }
      ]
    }
  ];

  // Track eventos
  const trackEvent = async (event, data) => {
    try {
      await fetch('/api/tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, data })
      });
    } catch (error) {
      console.error('Error tracking:', error);
    }
  };

  // Inicializar quiz
  useEffect(() => {
    trackEvent('quiz_start', { timestamp: new Date().toISOString() });
  }, []);

  // Selecionar opção
  const handleOptionSelect = (questionId, option) => {
    const newAnswers = {
      ...answers,
      [questionId]: {
        value: option.value,
        score: option.score,
        text: option.text
      }
    };
    setAnswers(newAnswers);

    trackEvent('quiz_answer', {
      question: questionId,
      answer: option.value
    });
  };

  // Navegar entre perguntas
  const changeQuestion = (direction) => {
    if (direction === 1) {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult();
      }
    } else if (direction === -1 && currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Calcular resultado
  const calculateResult = () => {
    setShowLoading(true);

    // Reset scores
    const newScores = { recente: 0, veterana: 0, ocupada: 0, autoestima: 0 };

    // Calculate scores
    Object.values(answers).forEach(answer => {
      if (answer.score) {
        const scoreData = answer.score.split(',');
        scoreData.forEach(item => {
          const [key, value] = item.split('=');
          if (newScores.hasOwnProperty(key)) {
            newScores[key] += parseInt(value);
          }
        });
      }
    });

    setScores(newScores);

    // Determine primary profile
    const profile = Object.keys(newScores).reduce((a, b) => 
      newScores[a] > newScores[b] ? a : b
    );

    setUserProfile(profile);

    // Track completion
    trackEvent('quiz_complete', { profile, scores: newScores });

    // Show result after delay
    setTimeout(() => {
      setShowLoading(false);
      setShowResult(true);
    }, 3000);
  };

  // Enviar para WhatsApp (sem formulário)
  const sendToWhatsApp = async () => {
    // Salvar lead (dados básicos)
    try {
      await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: `quiz_${Date.now()}@portalmagra.com`,
          phoneNumber: 'direto_whatsapp',
          quizAnswers: answers,
          userProfile: userProfile
        })
      });
    } catch (error) {
      console.error('Error saving lead:', error);
    }

    // Preparar mensagem
    const profileNames = {
      recente: 'A BRASILEIRA ACELERADA',
      veterana: 'A BRASILEIRA RESISTENTE',
      ocupada: 'A BRASILEIRA ACELERADA',
      autoestima: 'A BRASILEIRA INVISÍVEL'
    };

    const message = `Olá! Acabei de fazer o quiz do Portal Magra.\n\n✨ Meu perfil: ${profileNames[userProfile]}\n\n💬 Quero agendar minha avaliação de $10!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Track WhatsApp click
    trackEvent('whatsapp_click', { profile: userProfile });

    window.open(whatsappUrl, '_blank');
  };

  // Obter dados do perfil
  const getProfileData = () => {
    const profiles = {
      recente: {
        emoji: '🌱',
        title: 'A Brasileira Acelerada',
        subtitle: 'Sempre correndo, mas o corpo está pedindo socorro',
        description: 'Você chegou nos EUA há pouco tempo e está passando por uma grande adaptação. A ansiedade da mudança, descoberta de novos alimentos e rotina diferente podem estar sabotando sua saúde.',
        needs: [
          'Estratégias para controlar ansiedade alimentar',
          'Guia de compras nos mercados americanos',
          'Rotina adaptada à nova realidade',
          'Suporte emocional especializado',
          'Receitas práticas com ingredientes locais'
        ]
      },
      veterana: {
        emoji: '💪',
        title: 'A Brasileira Resistente',
        subtitle: 'Já tentou de tudo, mas não consegue manter',
        description: 'Você mora há anos nos EUA e já tentou várias abordagens americanas sem sucesso duradouro. O problema não é você - são os métodos que ignoram sua cultura e necessidades únicas como brasileira.',
        needs: [
          'Método que respeite seus gostos brasileiros',
          'Estratégia de recomeço sem culpa',
          'Acompanhamento intensivo personalizado',
          'Quebra do ciclo de tentativas frustradas',
          'Suporte de quem entende sua jornada'
        ]
      },
      ocupada: {
        emoji: '🚀',
        title: 'A Brasileira Acelerada',
        subtitle: 'Sempre correndo, mas o corpo está pedindo socorro',
        description: 'Você vive uma rotina maluca entre trabalho, casa e mil responsabilidades. Quer cuidar da saúde mas precisa de estratégias que caibam na sua agenda apertada.',
        needs: [
          'Estratégias rápidas e super práticas',
          'Receitas de 15 minutos ou menos',
          'Exercícios que cabem na agenda',
          'Planejamento semanal simplificado',
          'Automação da alimentação saudável'
        ]
      },
      autoestima: {
        emoji: '🪞',
        title: 'A Brasileira Invisível',
        subtitle: 'Deixou a si mesma em segundo plano',
        description: 'Sua autoestima está abalada e isso afeta tudo: trabalho, relacionamentos e até as vídeo-chamadas com o Brasil. Você precisa resgatar a confiança e voltar a se priorizar.',
        needs: [
          'Suporte emocional especializado',
          'Foco na transformação da autoestima',
          'Estratégias para autoimagem positiva',
          'Acompanhamento empático e sem julgamento',
          'Celebração de pequenas vitórias diárias'
        ]
      }
    };

    return profiles[userProfile] || profiles.recente;
  };

  // Progress bar width
  const progressWidth = ((currentQuestion - 1) / totalQuestions * 100);

  // Loading Screen
  if (showLoading) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Analisando seu perfil...</h1>
          <p>Criando sua estratégia personalizada</p>
          <div className="social-proof">🇧🇷 Baseado em +1.000 brasileiras nos EUA</div>
        </div>
        <div className="loading active">
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <h3>🇧🇷 Processando suas respostas...</h3>
          <p>Identificando seu perfil único de brasileira nos EUA</p>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult) {
    const profile = getProfileData();

    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Seu Resultado Está Pronto!</h1>
          <p>Descobrimos seu perfil único</p>
          <div className="social-proof">✨ Mais de 1.000 brasileiras já fizeram essa avaliação</div>
        </div>

        <div className="result-container active">
          <div className="result-emoji">{profile.emoji}</div>
          <h2 className="result-title">{profile.title}</h2>
          <p className="result-subtitle">{profile.subtitle}</p>

          <div className="result-description">
            <h3>🎯 Seu perfil em detalhes:</h3>
            <p>{profile.description}</p>
            
            <h3>💡 O que você mais precisa:</h3>
            <ul>
              {profile.needs.map((need, idx) => (
                <li key={idx}>{need}</li>
              ))}
            </ul>
          </div>

          <div className="lead-capture">
            <h3>💬 Que tal entender EXATAMENTE o que está acontecendo com seu corpo?</h3>
            
            <div className="avaliacao-info">
              <p className="avaliacao-title">
                Avaliação Individual com Mentora Brasileira Especializada<br/>
                <strong>30 minutos focados em VOCÊ - Por apenas $10</strong>
              </p>
              
              <div className="avaliacao-list">
                <h4>O que faremos juntas:</h4>
                <ul>
                  <li>✅ Analisar sua rotina e identificar o que está te sabotando</li>
                  <li>✅ Entender seus desafios específicos morando nos EUA</li>
                  <li>✅ Descobrir porque métodos americanos não funcionam para você</li>
                  <li>✅ Traçar um caminho claro para seus objetivos</li>
                </ul>
              </div>

              <p className="avaliacao-note">
                🎯 Esta NÃO é uma consulta genérica:<br/>
                É uma conversa estratégica para brasileiras que querem resultados reais
              </p>
            </div>
          </div>

          <button className="result-cta" onClick={sendToWhatsApp}>
            💬 QUERO AGENDAR MINHA AVALIAÇÃO POR $10
          </button>

          <div className="privacy-notice">
            ✨ Mais de 1.000 brasileiras nos EUA já fizeram essa avaliação
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const currentQ = questions[currentQuestion - 1];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Qual tipo de brasileira nos EUA você é?</h1>
        <p>E como sua saúde pode dar uma virada completa</p>
        <div className="social-proof">+2.847 brasileiras já descobriram</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressWidth}%` }}></div>
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-container active">
          <div className="question-number">{currentQ.number}</div>
          <h2 className="question-title">{currentQ.title}</h2>
          <div className="options">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                className={`option ${answers[currentQ.id]?.value === option.value ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(currentQ.id, option)}
              >
                <span className="option-emoji">{option.emoji}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="navigation">
          {currentQuestion > 1 && (
            <button 
              className="btn btn-prev" 
              onClick={() => changeQuestion(-1)}
            >
              ⬅ Anterior
            </button>
          )}
          <button 
            className="btn btn-next" 
            onClick={() => changeQuestion(1)}
            disabled={!answers[currentQ?.id]}
          >
            {currentQuestion === totalQuestions ? 'Ver Meu Resultado 🎯' : 'Próxima ➡'}
          </button>
        </div>
      </div>
    </div>
  );
}