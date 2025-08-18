// Funções de rastreamento para medir conversões

export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }

  // Console para debug
  console.log('📊 Evento:', eventName, parameters);
};

export const trackWhatsAppClick = (source) => {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: source,
    value: 1
  });
};

export const trackQuizStart = () => {
  trackEvent('quiz_start', {
    event_category: 'engagement',
    event_label: 'portal_magra'
  });
};

export const trackQuizComplete = (profile) => {
  trackEvent('quiz_complete', {
    event_category: 'engagement',
    event_label: profile,
    value: profile === 'URGENTE' ? 10 : 5
  });
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};