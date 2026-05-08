const PHONE = '33756959078'

export type WhatsAppContext =
  | 'general'
  | 'beaute-bien-etre'
  | 'restauration'
  | 'immobilier'
  | 'professionnels-locaux'
  | 'coaching-consulting'
  | 'ecommerce'
  | 'walkin'
  | 'audit'

const messages: Record<WhatsAppContext, string> = {
  general: 'Bonjour, je souhaite un devis pour mon projet digital.',
  'beaute-bien-etre': 'Bonjour, j\'ai un salon de beauté et je souhaite développer ma présence en ligne. Pouvez-vous m\'aider ?',
  restauration: 'Bonjour, j\'ai un restaurant et je cherche une alternative aux plateformes de livraison. Pouvez-vous m\'en dire plus ?',
  immobilier: 'Bonjour, je suis dans l\'immobilier et je souhaite générer plus de leads qualifiés en ligne. Pouvez-vous m\'aider ?',
  'professionnels-locaux': 'Bonjour, je suis artisan/commerçant et je souhaite être plus visible sur Google dans ma ville. Pouvez-vous m\'aider ?',
  'coaching-consulting': 'Bonjour, je suis coach/consultant et je cherche à attirer plus de clients premium en ligne. Pouvez-vous m\'aider ?',
  ecommerce: 'Bonjour, j\'ai une boutique en ligne et je souhaite augmenter mes ventes et fidéliser mes clients. Pouvez-vous m\'aider ?',
  walkin: 'Bonjour, je suis intéressé(e) par la carte de fidélité digitale WalKin. Pouvez-vous m\'en dire plus ?',
  audit: 'Bonjour, je souhaite bénéficier de l\'audit gratuit de ma présence digitale. Pouvez-vous m\'aider ?',
}

export function getWhatsAppURL(context: WhatsAppContext = 'general'): string {
  const text = encodeURIComponent(messages[context] || messages.general)
  return `https://wa.me/${PHONE}?text=${text}`
}

export function getWhatsAppMessage(context: WhatsAppContext = 'general'): string {
  return messages[context] || messages.general
}
