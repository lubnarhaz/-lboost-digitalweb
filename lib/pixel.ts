export const FB_PIXEL_ID = '1492001085953322'

export const pageview = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}

export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', name, options)
  }
}

// Exemples d'events à utiliser plus tard :
// event('Contact') → quand le formulaire est soumis
// event('Lead') → quand Léna capture un prospect chaud
// event('ViewContent') → sur la page WalKin
