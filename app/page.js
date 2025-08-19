'use client';

import React from 'react';

export default function PortalMagraLanding() {
  const WHATSAPP_NUMBER = '17862535032';
  
  const openWhatsApp = () => {
    const message = encodeURIComponent("Estava no site, quero tirar dúvidas");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#333',
    },
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '25px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    logoSvg: {
      width: '45px',
      height: '45px',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: '800',
      color: 'white',
      letterSpacing: '-0.5px',
    },
    headerActions: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    instagramLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '25px',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    whatsappHeaderBtn: {
      background: 'linear-gradient(135deg, #25D366, #128C7E)',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '25px',
      fontWeight: '700',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
    },
    heroSection: {
      padding: '140px 40px 80px',
      textAlign: 'center',
      position: 'relative',
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#764ba2',
      padding: '12px 28px',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '40px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 6vw, 5rem)',
      fontWeight: '900',
      color: 'white',
      marginBottom: '30px',
      lineHeight: '1.1',
      letterSpacing: '-2px',
    },
    heroSubtitle: {
      fontSize: '22px',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '50px',
      maxWidth: '800px',
      margin: '0 auto 50px',
      lineHeight: '1.6',
      fontWeight: '400',
    },
    videoContainer: {
      maxWidth: '700px',
      margin: '0 auto 50px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
      position: 'relative',
      background: '#000',
    },
    videoFallback: {
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, #2c3e50, #34495e)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      borderRadius: '20px',
    },
    playButton: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '24px',
      color: '#764ba2',
      marginBottom: '20px',
      transition: 'all 0.3s ease',
    },
    socialProof: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      marginBottom: '50px',
      flexWrap: 'wrap',
    },
    avatarsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    avatars: {
      display: 'flex',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea, #f093fb)',
      border: '3px solid white',
      marginLeft: '-12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
    ratingContainer: {
      textAlign: 'center',
    },
    stars: {
      display: 'flex',
      gap: '3px',
      color: '#FFD700',
      fontSize: '24px',
      marginBottom: '8px',
      justifyContent: 'center',
    },
    ratingText: {
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
      color: 'white',
      padding: '20px 50px',
      fontSize: '20px',
      fontWeight: '800',
      border: 'none',
      borderRadius: '60px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 15px 40px rgba(255, 107, 107, 0.4)',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    disclaimer: {
      color: 'rgba(255,255,255,0.8)',
      marginTop: '25px',
      fontSize: '15px',
      fontWeight: '500',
    },
    section: {
      padding: '100px 40px',
    },
    sectionWhite: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    },
    sectionGray: {
      background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)',
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      fontWeight: '800',
      color: '#1a202c',
      textAlign: 'center',
      marginBottom: '70px',
      lineHeight: '1.2',
      letterSpacing: '-1px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: 'white',
      padding: '50px 35px',
      borderRadius: '25px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
      textAlign: 'center',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(118, 75, 162, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    cardIcon: {
      fontSize: '60px',
      marginBottom: '30px',
      display: 'block',
    },
    cardTitle: {
      fontSize: '26px',
      fontWeight: '700',
      color: '#764ba2',
      marginBottom: '20px',
      lineHeight: '1.3',
    },
    cardText: {
      color: '#64748b',
      lineHeight: '1.7',
      fontSize: '16px',
      fontWeight: '500',
    },
    testimonialCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
      border: '1px solid rgba(118, 75, 162, 0.1)',
      position: 'relative',
    },
    testimonialStars: {
      display: 'flex',
      gap: '3px',
      color: '#FFD700',
      fontSize: '20px',
      marginBottom: '20px',
    },
    testimonialText: {
      fontStyle: 'italic',
      color: '#4a5568',
      marginBottom: '25px',
      lineHeight: '1.7',
      fontSize: '17px',
    },
    testimonialAuthor: {
      fontWeight: '700',
      color: '#764ba2',
      marginBottom: '5px',
      fontSize: '18px',
    },
    testimonialInfo: {
      color: '#94a3b8',
      fontSize: '14px',
      fontWeight: '500',
    },
    stepsContainer: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    step: {
      display: 'flex',
      gap: '30px',
      marginBottom: '50px',
      alignItems: 'flex-start',
    },
    stepNumber: {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '800',
      fontSize: '28px',
      flexShrink: 0,
      boxShadow: '0 10px 30px rgba(118, 75, 162, 0.3)',
    },
    stepContent: {
      flex: 1,
      paddingTop: '10px',
    },
    stepTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#764ba2',
      marginBottom: '15px',
      lineHeight: '1.3',
    },
    stepText: {
      color: '#64748b',
      lineHeight: '1.7',
      fontSize: '17px',
      fontWeight: '500',
    },
    pricingCard: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '60px 40px',
      borderRadius: '30px',
      textAlign: 'center',
      marginTop: '60px',
      color: 'white',
      boxShadow: '0 25px 60px rgba(118, 75, 162, 0.3)',
      position: 'relative',
      overflow: 'hidden',
    },
    pricingTitle: {
      fontSize: '22px',
      marginBottom: '20px',
      opacity: 0.95,
      fontWeight: '600',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    price: {
      fontSize: '72px',
      fontWeight: '900',
      lineHeight: '1',
    },
    priceText: {
      fontSize: '18px',
      opacity: 0.9,
      fontWeight: '600',
    },
    pricingDescription: {
      marginBottom: '40px',
      opacity: 0.95,
      fontSize: '18px',
      lineHeight: '1.6',
    },
    whatsappButton: {
      background: 'white',
      color: '#764ba2',
      padding: '18px 40px',
      fontSize: '18px',
      fontWeight: '800',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
    },
    faqContainer: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    faqItem: {
      background: 'white',
      padding: '35px',
      borderRadius: '20px',
      marginBottom: '25px',
      border: '1px solid rgba(118, 75, 162, 0.1)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
    },
    faqQuestion: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#764ba2',
      marginBottom: '15px',
      lineHeight: '1.4',
    },
    faqAnswer: {
      color: '#64748b',
      lineHeight: '1.7',
      fontSize: '16px',
      fontWeight: '500',
    },
    finalSection: {
      padding: '120px 40px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textAlign: 'center',
      position: 'relative',
    },
    finalTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '900',
      color: 'white',
      marginBottom: '30px',
      lineHeight: '1.2',
      letterSpacing: '-1px',
    },
    finalText: {
      fontSize: '24px',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '50px',
      maxWidth: '700px',
      margin: '0 auto 50px',
      lineHeight: '1.5',
    },
    finalCTA: {
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
      color: 'white',
      padding: '25px 60px',
      fontSize: '24px',
      fontWeight: '800',
      border: 'none',
      borderRadius: '60px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '15px',
      boxShadow: '0 20px 50px rgba(255, 107, 107, 0.4)',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    badges: {
      marginTop: '40px',
      color: 'rgba(255,255,255,0.9)',
      display: 'flex',
      gap: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    badge: {
      fontSize: '16px',
      fontWeight: '600',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          {/* Portal Magra Logo SVG */}
          <svg style={styles.logoSvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d084" />
                <stop offset="100%" stopColor="#667eea" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="25" height="80" rx="5" fill="url(#logoGradient)" />
            <rect x="50" y="30" width="40" height="60" rx="5" fill="#4a5568" />
            <circle cx="70" cy="45" r="4" fill="#00d084" />
          </svg>
          <span style={styles.logoText}>PORTAL MAGRA</span>
        </div>
        
        <div style={styles.headerActions}>
          <a 
            href="https://instagram.com/portalmagra" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.instagramLink}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
          >
            @portalmagra
          </a>
          <button 
            onClick={openWhatsApp}
            style={styles.whatsappHeaderBtn}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            💬 Fale Conosco no WhatsApp
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.maxWidth}>
          <div style={styles.badge}>
            ✨ EXCLUSIVO PARA BRASILEIRAS NOS EUA
          </div>
          
          <h1 style={styles.heroTitle}>
            Transforme Sua Vida nos EUA em{' '}
            <span style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>90 Dias</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Descubra como centenas de brasileiras estão conquistando bem-estar, 
            equilíbrio e qualidade de vida com mentoria personalizada
          </p>

          {/* Vídeo do YouTube - Múltiplas tentativas */}
          <div style={styles.videoContainer}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/IV85zdagya8?autoplay=0&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1"
              title="Portal Magra - Transformação de Vida"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ 
                borderRadius: '20px',
                background: '#000',
                display: 'block'
              }}
              onError={() => {
                // Fallback se iframe falhar
                console.log('Iframe failed to load');
              }}
            />
            
            {/* Fallback caso o vídeo não carregue */}
            <div style={{...styles.videoFallback, display: 'none'}} id="videoFallback">
              <button 
                style={styles.playButton}
                onClick={() => window.open('https://youtu.be/IV85zdagya8', '_blank')}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                ▶️
              </button>
              <h3 style={{ margin: 0, fontSize: '18px' }}>Portal Magra - Transformação de Vida</h3>
              <p style={{ margin: '10px 0 0', opacity: 0.8 }}>Clique para assistir no YouTube</p>
            </div>
          </div>

          <div style={styles.socialProof}>
            <div style={styles.avatarsContainer}>
              <div style={styles.avatars}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} style={{...styles.avatar, zIndex: 5-i}} />
                ))}
              </div>
            </div>
            <div style={styles.ratingContainer}>
              <div style={styles.stars}>
                {'★★★★★'}
              </div>
              <p style={styles.ratingText}>+1.200 brasileiras transformadas</p>
            </div>
          </div>

          <a href="/quiz" style={{ textDecoration: 'none' }}>
            <button 
              style={styles.ctaButton}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 107, 107, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.4)';
              }}
            >
              Fazer Quiz Gratuito (2 min) →
            </button>
          </a>
          
          <p style={styles.disclaimer}>
            Sem compromisso • Resultado imediato • 100% personalizado
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.maxWidth}>
          <h2 style={styles.sectionTitle}>O Que o MPM Vai Fazer Por Você</h2>
          
          <div style={styles.grid}>
            <div 
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.cardIcon}>❤️</span>
              <h3 style={styles.cardTitle}>Bem-Estar Total</h3>
              <p style={styles.cardText}>
                Corpo, mente e emoções em equilíbrio para viver plenamente nos EUA
              </p>
            </div>
            
            <div 
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.cardIcon}>👥</span>
              <h3 style={styles.cardTitle}>Mentoria Personalizada</h3>
              <p style={styles.cardText}>
                Apoio individual focado nos seus desafios e objetivos específicos
              </p>
            </div>
            
            <div 
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.cardIcon}>🏆</span>
              <h3 style={styles.cardTitle}>Resultados Garantidos</h3>
              <p style={styles.cardText}>
                Métodos comprovados com mais de 1.200 brasileiras transformadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.maxWidth}>
          <h2 style={styles.sectionTitle}>Histórias Reais de Transformação</h2>
          
          <div style={styles.grid}>
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>
                {'★★★★★'}
              </div>
              <p style={styles.testimonialText}>
                "O MPM mudou minha vida! Perdi 12kg e encontrei equilíbrio emocional que nunca tive."
              </p>
              <p style={styles.testimonialAuthor}>Juliana Silva</p>
              <p style={styles.testimonialInfo}>Miami, FL • Cliente há 14 meses</p>
            </div>
            
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>
                {'★★★★★'}
              </div>
              <p style={styles.testimonialText}>
                "Finalmente me sinto em casa nos EUA. A mentoria foi essencial para minha adaptação."
              </p>
              <p style={styles.testimonialAuthor}>Mariana Costa</p>
              <p style={styles.testimonialInfo}>New York, NY • Cliente há 8 meses</p>
            </div>
            
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>
                {'★★★★★'}
              </div>
              <p style={styles.testimonialText}>
                "Renovei pela 4ª vez! Os resultados são consistentes e o apoio é incomparável."
              </p>
              <p style={styles.testimonialAuthor}>Patricia Oliveira</p>
              <p style={styles.testimonialInfo}>Los Angeles, CA • Cliente há 1 ano</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.maxWidth}>
          <h2 style={styles.sectionTitle}>Como Funciona o MPM</h2>
          
          <div style={styles.stepsContainer}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Avaliação Personalizada</h3>
                <p style={styles.stepText}>
                  30 minutos com sua mentora para entender seus desafios únicos
                </p>
              </div>
            </div>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Plano Sob Medida</h3>
                <p style={styles.stepText}>
                  Estratégias específicas para sua realidade e objetivos
                </p>
              </div>
            </div>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Acompanhamento Semanal</h3>
                <p style={styles.stepText}>
                  Suporte contínuo via WhatsApp + sessões individuais
                </p>
              </div>
            </div>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>4</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Resultados em 90 Dias</h3>
                <p style={styles.stepText}>
                  Transformação completa com apoio especializado
                </p>
              </div>
            </div>
            
            <div style={styles.pricingCard}>
              <p style={styles.pricingTitle}>Comece sua transformação:</p>
              <div style={styles.priceContainer}>
                <span style={styles.price}>$10</span>
                <span style={styles.priceText}>avaliação personalizada</span>
              </div>
              <p style={styles.pricingDescription}>
                30 minutos com sua mentora para descobrir seu potencial
              </p>
              
              <button 
                onClick={openWhatsApp}
                style={styles.whatsappButton}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,255,255,0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.2)';
                }}
              >
                💬 Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.maxWidth}>
          <h2 style={styles.sectionTitle}>Perguntas Frequentes</h2>
          
          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Quanto tempo preciso dedicar por semana?</h3>
              <p style={styles.faqAnswer}>
                Apenas 1 hora por semana para as sessões + 15 minutos diários para as práticas.
              </p>
            </div>
            
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>E se eu não gostar do programa?</h3>
              <p style={styles.faqAnswer}>
                Oferecemos garantia de 30 dias. Se não ver resultados, devolvemos seu investimento.
              </p>
            </div>
            
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Preciso falar inglês fluente?</h3>
              <p style={styles.faqAnswer}>
                Não! Todo o programa é em português, feito por e para brasileiras.
              </p>
            </div>
            
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Funciona para qualquer idade?</h3>
              <p style={styles.faqAnswer}>
                Sim! Temos clientes de 18 a 65 anos, cada uma com seu plano personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={styles.finalSection}>
        <div style={styles.maxWidth}>
          <h2 style={styles.finalTitle}>
            Sua Nova Vida Começa com Uma Decisão
          </h2>
          <p style={styles.finalText}>
            Descubra em 2 minutos se você tem o perfil para resultados extraordinários
          </p>
          
          <a href="/quiz" style={{ textDecoration: 'none' }}>
            <button 
              style={styles.finalCTA}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(255, 107, 107, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 107, 107, 0.4)';
              }}
            >
              💬 Fazer Quiz Gratuito Agora
            </button>
          </a>
          
          <div style={styles.badges}>
            <span style={styles.badgeItem}>✓ Sem cartão de crédito</span>
            <span style={styles.badgeItem}>✓ 100% Seguro</span>
            <span style={styles.badgeItem}>✓ Resultado imediato</span>
          </div>
        </div>
      </section>
    </div>
  );
}