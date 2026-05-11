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
  {
    slug: 'cout-site-internet-troyes-2026',
    title: 'Combien coûte un site internet à Troyes en 2026 ?',
    metaDescription:
      'Guide complet des prix de création de site internet à Troyes en 2026. Freelance, agence, DIY : comparatif transparent. Devis gratuit L-BOOST Digitalweb.',
    categorie: 'Création Web',
    date: '3 mars 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop',
    excerpt:
      'De 0€ à 10 000€+ : les prix d\'un site web varient énormément. On vous explique pourquoi, et combien prévoir selon votre projet à Troyes.',
  },
  {
    slug: 'refonte-site-web-signes-changer',
    title: 'Refonte de site web : 7 signes qu\'il est temps de changer',
    metaDescription:
      'Votre site a plus de 3 ans ? Pas responsive ? Trop lent ? Découvrez les 7 signaux qui montrent qu\'une refonte s\'impose. Agence web Troyes.',
    categorie: 'Création Web',
    date: '17 mars 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    excerpt:
      'Un site daté vous coûte des clients chaque jour. Voici les 7 signaux d\'alerte qui prouvent qu\'il est temps de refondre votre site web.',
  },
  {
    slug: 'community-management-troyes-deleguer',
    title: 'Community management à Troyes : pourquoi et comment déléguer',
    metaDescription:
      'Vous n\'avez pas le temps de gérer vos réseaux sociaux ? Découvrez pourquoi déléguer votre community management à Troyes est un investissement rentable.',
    categorie: 'Réseaux Sociaux',
    date: '28 mars 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop',
    excerpt:
      '73% des TPE/PME publient moins d\'une fois par semaine sur les réseaux. Résultat : elles sont invisibles. Voici comment y remédier à Troyes.',
  },
  {
    slug: 'chatbot-ia-entreprise-automatiser',
    title: 'Chatbot IA pour entreprise : automatiser sans perdre l\'humain',
    metaDescription:
      'Un chatbot IA peut répondre à vos clients 24h/24, prendre des RDV et qualifier vos prospects. Guide complet pour entreprises. L-BOOST Digitalweb Troyes.',
    categorie: 'IA',
    date: '8 avril 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
    excerpt:
      'Un chatbot IA bien configuré traite 80% des questions récurrentes. Moins de temps perdu, plus de clients servis. Voici comment ça fonctionne.',
  },
  {
    slug: 'identite-visuelle-branding-entreprise',
    title: 'Identité visuelle : pourquoi votre logo ne suffit pas',
    metaDescription:
      'Logo, charte graphique, typographies, couleurs : une identité visuelle complète est indispensable pour crédibiliser votre entreprise. Guide branding Troyes.',
    categorie: 'Branding',
    date: '22 avril 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=630&fit=crop',
    excerpt:
      'Votre logo est joli mais votre Instagram ne lui ressemble pas ? C\'est le signe qu\'il vous manque une vraie identité visuelle.',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
