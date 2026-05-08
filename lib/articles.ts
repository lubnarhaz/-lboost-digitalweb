export interface Article {
  slug: string
  title: string
  metaDescription: string
  categorie: string
  date: string
  readTime: string
  image: string
  excerpt: string
}

export const articles: Article[] = [
  {
    slug: 'agence-web-troyes',
    title: 'Pourquoi choisir une agence web locale à Troyes ?',
    metaDescription:
      'Découvrez les avantages de travailler avec une agence web basée à Troyes pour votre projet digital. L-BOOST vous accompagne de A à Z.',
    categorie: 'Création Web',
    date: '15 janvier 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop',
    excerpt:
      'Proximité, réactivité et connaissance du marché local : les vrais avantages de travailler avec une agence troyenne.',
  },
  {
    slug: 'seo-local-troyes',
    title: 'SEO local à Troyes : comment apparaître en tête de Google ?',
    metaDescription:
      'Guide complet pour optimiser votre référencement local à Troyes. Google Business Profile, mots-clés locaux, avis clients. Par L-BOOST Digitalweb.',
    categorie: 'SEO',
    date: '22 janvier 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=630&fit=crop',
    excerpt:
      '78% des recherches locales sur mobile aboutissent à une visite. Découvrez comment dominer Google à Troyes.',
  },
  {
    slug: 'carte-fidelite-digitale-commercants-troyes',
    title: 'Carte de fidélité digitale : la révolution pour les commerçants de Troyes',
    metaDescription:
      'Découvrez WalKin, la solution de fidélisation digitale pour commerces à Troyes. Apple Wallet, push notifications, zéro application. Essai gratuit.',
    categorie: 'Fidélisation',
    date: '29 janvier 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop',
    excerpt:
      '67% des clients perdent leur carte papier avant de la remplir. WalKin change la donne pour les commerçants troyens.',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
