'use client';

import React from 'react';
import Link from 'next/link';

export default function PortalMagraLanding() {
  const WHATSAPP_NUMBER = '17862535032';

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 75%, #ffd700 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heroSection: {
      padding: '80px 20px',
      textAlign: 'center',
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#764ba2',
      padding: '8px 20px',
      borderRadius: '25px',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '30px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '40px',
      maxWidth: '800px',
      margin: '0 auto 40px',
    },
    socialProof: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    avatars: {
      display: 'flex',
      marginLeft: '10px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea, #f093fb)',
      border: '2px solid white',
      marginLeft: '-10px',
    },
    stars: {
      display: 'flex',
      gap: '2px',
      color: '#ffd700',
      fontSize: '20px',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #00d084, #00a86b)',
      color: 'white',
      padding: '18px 40px',
      fontSize: '18px',
      fontWeight: '700',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
    },
    benefitsSection: {
      padding: '60px 20px',
      background: 'white',
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#333',
      textAlign: 'center',
      marginBottom: '50px',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    benefitCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    benefitIcon: {
      fontSize: '40px',
      marginBottom: '20px',
    },
    benefitTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '15px',
    },
    benefitText: {
      color: '#666',
      lineHeight: '1.6',
    },
    testimonialsSection: {
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    },
    testimonialCard: {
      background: 'white',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
    testimonialText: {
      fontStyle: 'italic',
      color: '#555',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    testimonialAuthor: {
      fontWeight: '600',
      color: '#333',
      marginBottom: '5px',
    },
    testimonialInfo: {
      color: '#888',
      fontSize: '14px',
    },
    howItWorksSection: {
      padding: '60px 20px',
      background: 'white',
    },
    stepsContainer: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    step: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      alignItems: 'flex-start',
    },
    stepNumber: {
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '20px',
      flexShrink: 0,
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px',
    },
    stepText: {
      color: '#666',
      lineHeight: '1.6',
    },
    pricingBox: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px',
      borderRadius: '20px',
      textAlign: 'center',
      marginTop: '40px',
      color: 'white',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '20px',
    },
    oldPrice: {
      fontSize: '24px',
      textDecoration: 'line-through',
      opacity: 0.7,
    },
    newPrice: {
      fontSize: '48px',
      fontWeight: '800',
    },
    faqSection: {
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    },
    faqContainer: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    faqItem: {
      background: 'white',
      padding: '25px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px',
    },
    faqAnswer: {
      color: '#666',
      lineHeight: '1.6',
    },
    finalCTA: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textAlign: 'center',
    },
    finalTitle: {
      fontSize: '42px',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
    },
    finalText: {
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '40px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.maxWidth}>
          <div style={styles.badge}>
            ✨ EXCLUSIVO PARA BRASILEIRAS NOS EUA
          </div>
          
          <h1 style={styles.title}>
            Transforme Sua Vida nos EUA em{' '}
            <span style={{ color: '#ffd700' }}>90 Dias</span>
          </h1>
          
          <p style={styles.subtitle}>
            Descubra como centenas de brasileiras estão conquistando bem-estar, 
            equilíbrio e qualidade de vida com mentoria personalizada
          </p>

          <div style={styles.socialProof}>
            <div style={styles.avatars}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{...styles.avatar, zIndex: 5-i}} />
              ))}
            </div>
            <div>
              <div style={styles.stars}>
                {'★★★★★'}
              </div>
              <p style={{ color: 'white', fontSize: '14px' }}>+247 brasileiras transformadas</p>
            </div>
          </div>

          <Link href="/quiz" style={{ textDecoration: 'none' }}>
            <button 
              style={styles.ctaButton}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            >
              Fazer Quiz Gratuito (2 min) →
            </button>
          </Link>
          
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '20px', fontSize: '14px' }}>
            Sem compromisso • Resultado imediato • 100% personalizado
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <h2 style={styles.sectionTitle}>O Que o MPM Vai Fazer Por Você</h2>
        
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>❤️</div>
            <h3 style={styles.benefitTitle}>Bem-Estar Total</h3>
            <p style={styles.benefitText}>
              Corpo, mente e emoções em equilíbrio para viver plenamente nos EUA
            </p>
          </div>
          
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>👥</div>
            <h3 style={styles.benefitTitle}>Mentoria Personalizada</h3>
            <p style={styles.benefitText}>
              Apoio individual focado nos seus desafios e objetivos específicos
            </p>
          </div>
          
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>🏆</div>
            <h3 style={styles.benefitTitle}>Resultados Garantidos</h3>
            <p style={styles.benefitText}>
              Métodos comprovados com mais de 247 brasileiras transformadas
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>Histórias Reais de Transformação</h2>
        
        <div style={styles.benefitsGrid}>
          <div style={styles.testimonialCard}>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.testimonialText}>
              "O MPM mudou minha vida! Perdi 12kg e encontrei equilíbrio emocional que nunca tive."
            </p>
            <p style={styles.testimonialAuthor}>Juliana Silva</p>
            <p style={styles.testimonialInfo}>Miami, FL • Cliente há 14 meses</p>
          </div>
          
          <div style={styles.testimonialCard}>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.testimonialText}>
              "Finalmente me sinto em casa nos EUA. A mentoria foi essencial para minha adaptação."
            </p>
            <p style={styles.testimonialAuthor}>Mariana Costa</p>
            <p style={styles.testimonialInfo}>New York, NY • Cliente há 8 meses</p>
          </div>
          
          <div style={styles.testimonialCard}>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.testimonialText}>
              "Renovei pela 4ª vez! Os resultados são consistentes e o apoio é incomparável."
            </p>
            <p style={styles.testimonialAuthor}>Patricia Oliveira</p>
            <p style={styles.testimonialInfo}>Los Angeles, CA • Cliente há 1 ano</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
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
          
          <div style={styles.pricingBox}>
            <p style={{ marginBottom: '10px', opacity: 0.9 }}>Investimento no seu bem-estar:</p>
            <div style={styles.priceContainer}>
              <span style={styles.oldPrice}>$297</span>
              <span style={styles.newPrice}>$167</span>
              <span style={{ fontSize: '16px' }}>por 3 meses</span>
            </div>
            <p style={{ marginBottom: '30px', opacity: 0.9 }}>
              Menos de $2 por dia para transformar sua vida
            </p>
            
            <Link href="/quiz" style={{ textDecoration: 'none' }}>
              <button 
                style={{...styles.ctaButton, background: 'white', color: '#764ba2'}}
              >
                Fazer Quiz e Descobrir Meu Perfil
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
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
      </section>

      {/* Final CTA */}
      <section style={styles.finalCTA}>
        <h2 style={styles.finalTitle}>
          Sua Nova Vida Começa com Uma Decisão
        </h2>
        <p style={styles.finalText}>
          Descubra em 2 minutos se você tem o perfil para resultados extraordinários
        </p>
        
        <Link href="/quiz" style={{ textDecoration: 'none' }}>
          <button 
            style={{...styles.ctaButton, fontSize: '22px', padding: '20px 50px'}}
          >
            💬 Fazer Quiz Gratuito Agora
          </button>
        </Link>
        
        <div style={{ marginTop: '30px', color: 'rgba(255,255,255,0.8)' }}>
          <span style={{ margin: '0 15px' }}>✓ Sem cartão de crédito</span>
          <span style={{ margin: '0 15px' }}>✓ 100% Seguro</span>
          <span style={{ margin: '0 15px' }}>✓ Resultado imediato</span>
        </div>
      </section>
    </div>
  );
}