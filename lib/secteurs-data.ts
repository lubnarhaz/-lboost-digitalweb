import {
  Scissors,
  Sparkles,
  Heart,
  Utensils,
  Pizza,
  Coffee,
  Building2,
  Home,
  Key,
  Store,
  Wrench,
  Stethoscope,
  GraduationCap,
  Target,
  Users,
  ShoppingCart,
  Package,
  TrendingUp,
  Star,
  Clock,
  BarChart3,
  Smartphone,
  Globe,
  CreditCard,
  MessageCircle,
  Bell,
  Zap,
  Shield,
  Eye,
  Search,
  type LucideIcon,
} from 'lucide-react'

export interface SecteurDouleur {
  icon: LucideIcon
  titre: string
  description: string
}

export interface SecteurAvantApres {
  avant: string
  apres: string
}

export interface SecteurAction {
  numero: number
  titre: string
  description: string
}

export interface SecteurBenefice {
  icon: LucideIcon
  titre: string
  metrique: string
}

export interface SecteurFOMO {
  accroche: string
  titre: string
  sousTitre: string
  stat: string
  statLabel: string
  bouton: string
}

export interface Secteur {
  slug: string
  nom: string
  icon: LucideIcon
  emoji: string
  couleurAccent: string
  image: string
  douleurImage: string
  hero: {
    titre: string
    sousTitre: string
    description: string
  }
  douleurs: SecteurDouleur[]
  avantApres: SecteurAvantApres[]
  actions: SecteurAction[]
  benefices: SecteurBenefice[]
  fomo: SecteurFOMO
  metaTitle: string
  metaDescription: string
}

export const SECTEURS: Secteur[] = [
  {
    slug: 'beaute-bien-etre',
    nom: 'Beauté & Bien-être',
    icon: Scissors,
    emoji: '💇',
    couleurAccent: '#E8A0BF',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop',
    douleurImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&h=470&fit=crop',
    hero: {
      titre: 'Salon de beauté, spa, institut',
      sousTitre: 'Attirez plus de clientes et fidélisez-les avec une présence digitale premium',
      description: 'Vous êtes experte en beauté, pas en marketing digital. Nous créons votre vitrine en ligne, automatisons vos prises de rendez-vous et transformons vos clientes occasionnelles en ambassadrices fidèles.',
    },
    douleurs: [
      { icon: Clock, titre: 'Des créneaux vides en semaine', description: 'Votre planning a des trous que vous ne savez pas combler, surtout en début de semaine.' },
      { icon: Users, titre: 'Des clientes qui ne reviennent pas', description: 'Elles viennent une fois puis disparaissent chez la concurrence.' },
      { icon: Globe, titre: 'Aucune visibilité en ligne', description: 'Pas de site web, un Instagram peu actif, introuvable sur Google.' },
      { icon: MessageCircle, titre: 'Des RDV par téléphone uniquement', description: 'Vous perdez du temps à répondre au téléphone pendant les soins.' },
    ],
    avantApres: [
      { avant: 'Planning géré sur papier', apres: 'Réservation en ligne 24h/24' },
      { avant: 'Clientes qui oublient leur RDV', apres: 'Rappels automatiques par SMS' },
      { avant: 'Pas de programme fidélité', apres: 'Carte fidélité digitale WalKin' },
      { avant: 'Bouche-à-oreille uniquement', apres: 'Visible sur Google Maps + Instagram' },
      { avant: 'Pas de site professionnel', apres: 'Site vitrine premium avec galerie' },
    ],
    actions: [
      { numero: 1, titre: 'Site vitrine premium', description: 'Un site élégant qui reflète votre expertise avec galerie photo, tarifs et réservation en ligne.' },
      { numero: 2, titre: 'Google Business Profile optimisé', description: 'Apparaissez en premier quand quelqu\'un cherche un salon de beauté près de chez vous.' },
      { numero: 3, titre: 'Carte fidélité digitale WalKin', description: 'Récompensez vos clientes fidèles avec une carte Apple/Google Wallet et des push notifications.' },
      { numero: 4, titre: 'Réservation en ligne automatisée', description: 'Vos clientes réservent 24h/24 sans vous déranger pendant un soin.' },
      { numero: 5, titre: 'Stratégie Instagram', description: 'Calendrier de contenu, stories avant/après, reels tendance pour attirer de nouvelles clientes.' },
      { numero: 6, titre: 'Automatisations rappels', description: 'SMS et emails automatiques pour rappels RDV, anniversaires et offres spéciales.' },
      { numero: 7, titre: 'Gestion des avis Google', description: 'Collecte automatique d\'avis 5 étoiles après chaque prestation.' },
    ],
    benefices: [
      { icon: TrendingUp, titre: 'Plus de clientes', metrique: '+40% de nouvelles clientes en 3 mois' },
      { icon: Star, titre: 'Meilleure fidélisation', metrique: '3x plus de visites récurrentes' },
      { icon: Clock, titre: 'Gain de temps', metrique: '5h/semaine économisées sur la gestion' },
      { icon: BarChart3, titre: 'Revenus en hausse', metrique: '+25% de chiffre d\'affaires' },
      { icon: Smartphone, titre: 'Présence digitale complète', metrique: 'Visible sur Google, Instagram, et Wallet' },
    ],
    fomo: {
      accroche: 'Pendant que vous hésitez...',
      titre: 'Vos concurrentes remplissent leur planning',
      sousTitre: 'Les salons qui investissent dans le digital captent les clientes qui vous cherchent en ligne.',
      stat: '78%',
      statLabel: 'des clientes cherchent un salon sur Google avant de réserver',
      bouton: 'Je veux mon audit gratuit',
    },
    metaTitle: 'Agence Digitale pour Salon de Beauté & Bien-être | L-BOOST',
    metaDescription: 'Site web premium, carte fidélité digitale, réservation en ligne et stratégie Instagram pour salons de beauté, spas et instituts. Audit gratuit.',
  },
  {
    slug: 'restauration',
    nom: 'Restauration',
    icon: Utensils,
    emoji: '🍽️',
    couleurAccent: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    douleurImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&h=470&fit=crop',
    hero: {
      titre: 'Restaurant, brasserie, fast-food',
      sousTitre: 'Remplissez vos tables et fidélisez vos clients sans dépendre des plateformes',
      description: 'UberEats prend 30% de vos marges. Vos clients viennent une fois puis commandent ailleurs. Nous vous donnons les outils pour reprendre le contrôle de votre clientèle.',
    },
    douleurs: [
      { icon: CreditCard, titre: 'Commissions UberEats à 30%', description: 'Les plateformes mangent vos marges et possèdent la relation client.' },
      { icon: Users, titre: 'Des clients qui ne reviennent pas', description: 'Ils vous découvrent sur une plateforme mais n\'ont aucune raison de revenir en direct.' },
      { icon: Globe, titre: 'Pas de site de commande propre', description: 'Vous dépendez entièrement des plateformes pour la commande en ligne.' },
      { icon: Bell, titre: 'Impossible de contacter vos clients', description: 'Vous n\'avez aucune base de données clients pour envoyer des promos.' },
    ],
    avantApres: [
      { avant: 'Commissions 30% sur UberEats', apres: 'Commandes directes à 1,5% avec WalKin' },
      { avant: 'Aucune base de données clients', apres: 'Fichier client enrichi automatiquement' },
      { avant: 'Pas de programme fidélité', apres: 'Carte fidélité digitale avec push notifs' },
      { avant: 'Menu en PDF illisible', apres: 'Menu en ligne responsive et moderne' },
      { avant: 'Avis Google non gérés', apres: 'Avis 5 étoiles collectés automatiquement' },
    ],
    actions: [
      { numero: 1, titre: 'Site vitrine avec menu digital', description: 'Un site appétissant avec menu interactif, photos de plats et réservation de table.' },
      { numero: 2, titre: 'Système de commande en ligne', description: 'Vos clients commandent directement chez vous. Fini les 30% de commission.' },
      { numero: 3, titre: 'Carte fidélité WalKin', description: 'Programme de fidélité digital : 10e repas offert, offres flash, push notifications.' },
      { numero: 4, titre: 'Google Business Profile + SEO local', description: 'Apparaissez en premier quand quelqu\'un cherche "restaurant italien à Troyes".' },
      { numero: 5, titre: 'Stratégie réseaux sociaux', description: 'Photos de plats, stories coulisses, reels recettes pour créer une communauté.' },
      { numero: 6, titre: 'Push notifications ciblées', description: 'Envoyez des promos directement sur l\'écran de vos clients : "Menu du jour à -20%".' },
      { numero: 7, titre: 'Automatisation des avis', description: 'Après chaque visite, un SMS invite le client à laisser un avis Google.' },
    ],
    benefices: [
      { icon: TrendingUp, titre: 'Marges préservées', metrique: 'De 30% à 1,5% de commission' },
      { icon: Star, titre: 'Clients fidélisés', metrique: '+60% de taux de retour' },
      { icon: CreditCard, titre: 'Commandes directes', metrique: '+35% de commandes sans plateforme' },
      { icon: BarChart3, titre: 'CA en hausse', metrique: '+20% de chiffre d\'affaires en 6 mois' },
      { icon: Bell, titre: 'Communication directe', metrique: 'Push notifs avec 90% de taux d\'ouverture' },
    ],
    fomo: {
      accroche: 'Chaque jour sans action...',
      titre: 'UberEats prend 30% de vos marges',
      sousTitre: 'Vos concurrents passent déjà en commande directe et gardent leurs bénéfices.',
      stat: '30%',
      statLabel: 'de commission que vous économisez avec la commande directe',
      bouton: 'Je veux arrêter de perdre 30%',
    },
    metaTitle: 'Agence Digitale pour Restaurants | L-BOOST',
    metaDescription: 'Site web avec commande en ligne, carte fidélité WalKin, alternative à UberEats et stratégie réseaux sociaux pour restaurants. Audit gratuit.',
  },
  {
    slug: 'immobilier',
    nom: 'Immobilier',
    icon: Building2,
    emoji: '🏠',
    couleurAccent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    douleurImage: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=700&h=470&fit=crop',
    hero: {
      titre: 'Agence immobilière, promoteur, mandataire',
      sousTitre: 'Générez des leads qualifiés et démarquez-vous dans un marché ultra-concurrentiel',
      description: 'Le marché immobilier se digitalise. Vos concurrents investissent dans le digital pendant que vous comptez encore sur le réseau et les panneaux. Il est temps de prendre l\'avantage.',
    },
    douleurs: [
      { icon: Search, titre: 'Invisible sur Google', description: 'Vos annonces sont noyées sur les portails et votre site n\'apparaît pas dans les recherches locales.' },
      { icon: Users, titre: 'Des leads non qualifiés', description: 'Vous perdez du temps avec des prospects qui n\'ont ni budget ni projet concret.' },
      { icon: Globe, titre: 'Un site web dépassé', description: 'Votre site ne reflète pas votre expertise et ne génère aucun lead.' },
      { icon: Eye, titre: 'Pas de différenciation', description: 'Difficile de vous démarquer face aux grandes agences et aux réseaux nationaux.' },
    ],
    avantApres: [
      { avant: 'Site web années 2010', apres: 'Site premium avec estimation en ligne' },
      { avant: 'Leads via portails uniquement', apres: 'Leads directs via Google et réseaux' },
      { avant: 'Pas de stratégie de contenu', apres: 'Blog immobilier SEO + vidéos de biens' },
      { avant: 'Communication générique', apres: 'Personal branding différenciant' },
      { avant: 'Pas de suivi prospects', apres: 'CRM et relances automatisées' },
    ],
    actions: [
      { numero: 1, titre: 'Site vitrine premium immobilier', description: 'Un site qui inspire confiance avec catalogue de biens, estimateur en ligne et prise de RDV.' },
      { numero: 2, titre: 'SEO local immobilier', description: 'Positionnez-vous sur "agence immobilière + ville" et générez des leads organiques.' },
      { numero: 3, titre: 'Stratégie réseaux sociaux', description: 'Visites virtuelles, témoignages clients, conseils achat/vente pour créer une audience.' },
      { numero: 4, titre: 'Landing pages par programme', description: 'Pages dédiées pour chaque programme neuf avec formulaire de contact intégré.' },
      { numero: 5, titre: 'Chatbot qualification de leads', description: 'Un assistant IA qui qualifie les prospects 24h/24 : budget, zone, type de bien.' },
      { numero: 6, titre: 'Automatisations email', description: 'Séquences d\'emails automatiques pour nourrir vos leads jusqu\'à la signature.' },
      { numero: 7, titre: 'Personal branding', description: 'Positionnez-vous comme l\'expert immobilier de votre zone avec du contenu à forte valeur.' },
    ],
    benefices: [
      { icon: TrendingUp, titre: 'Plus de leads qualifiés', metrique: '+50% de demandes de visite' },
      { icon: Target, titre: 'Meilleure conversion', metrique: '2x plus de mandats signés' },
      { icon: Globe, titre: 'Visibilité locale', metrique: 'Top 3 Google sur vos mots-clés' },
      { icon: Clock, titre: 'Gain de temps', metrique: '10h/semaine en moins sur la prospection' },
      { icon: Shield, titre: 'Image premium', metrique: 'Un positionnement haut de gamme' },
    ],
    fomo: {
      accroche: 'Le marché n\'attend pas...',
      titre: 'Vos concurrents captent vos leads en ligne',
      sousTitre: 'Les agences qui investissent dans le digital signent les mandats que vous perdez.',
      stat: '92%',
      statLabel: 'des recherches immobilières commencent sur internet',
      bouton: 'Je veux capter plus de leads',
    },
    metaTitle: 'Agence Digitale pour Immobilier | L-BOOST',
    metaDescription: 'Site web premium, SEO local, chatbot qualification et stratégie digitale pour agences immobilières et promoteurs. Audit gratuit.',
  },
  {
    slug: 'professionnels-locaux',
    nom: 'Professionnels Locaux',
    icon: Store,
    emoji: '🏪',
    couleurAccent: '#10B981',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    douleurImage: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=700&h=470&fit=crop',
    hero: {
      titre: 'Artisan, commerçant, profession libérale',
      sousTitre: 'Devenez visible dans votre ville et attirez des clients qui vous cherchent déjà',
      description: 'Plombier, fleuriste, avocat, boulanger, garagiste... Vos clients vous cherchent sur Google. Si vous n\'y êtes pas, ils vont chez le concurrent d\'à côté.',
    },
    douleurs: [
      { icon: Search, titre: 'Introuvable sur Google', description: 'Quand quelqu\'un tape votre métier + ville, ce sont vos concurrents qui apparaissent.' },
      { icon: Globe, titre: 'Pas de site web ou site obsolète', description: 'Votre vitrine en ligne n\'existe pas ou fait fuir les clients potentiels.' },
      { icon: Users, titre: 'Dépendance au bouche-à-oreille', description: 'Votre seule source de nouveaux clients est la recommandation, impossible à contrôler.' },
      { icon: Smartphone, titre: 'Pas de présence sur les réseaux', description: 'Instagram, Facebook, Google Maps... vous n\'existez pas en ligne.' },
    ],
    avantApres: [
      { avant: 'Introuvable sur Google', apres: 'N°1 sur "métier + ville"' },
      { avant: 'Pas de site ou site dépassé', apres: 'Site vitrine professionnel et moderne' },
      { avant: 'Bouche-à-oreille uniquement', apres: 'Flux régulier de nouveaux clients' },
      { avant: 'Pas de fiche Google', apres: 'Google Business optimisé avec 50+ avis' },
      { avant: 'Zéro présence réseaux sociaux', apres: 'Instagram et Facebook actifs' },
    ],
    actions: [
      { numero: 1, titre: 'Site vitrine professionnel', description: 'Un site qui vous représente avec vos services, réalisations, témoignages et formulaire.' },
      { numero: 2, titre: 'Google Business Profile', description: 'Création et optimisation complète pour apparaître sur Google Maps et la recherche locale.' },
      { numero: 3, titre: 'SEO local ciblé', description: 'Positionnez-vous sur "votre métier + votre ville" pour capter les recherches locales.' },
      { numero: 4, titre: 'Gestion des réseaux sociaux', description: 'Contenu régulier sur Instagram et Facebook pour montrer votre savoir-faire.' },
      { numero: 5, titre: 'Carte fidélité digitale WalKin', description: 'Pour les commerces de proximité : fidélisez vos clients avec une carte Apple/Google Wallet.' },
      { numero: 6, titre: 'Collecte d\'avis automatisée', description: 'Après chaque prestation, un SMS invite le client à vous noter sur Google.' },
      { numero: 7, titre: 'Branding professionnel', description: 'Logo, carte de visite, signalétique : une identité cohérente et mémorable.' },
    ],
    benefices: [
      { icon: Search, titre: 'Visibilité locale', metrique: 'Top 3 Google Maps en 3 mois' },
      { icon: TrendingUp, titre: 'Plus de clients', metrique: '+30% de nouveaux clients' },
      { icon: Star, titre: 'Réputation en ligne', metrique: '50+ avis Google 5 étoiles' },
      { icon: Clock, titre: 'Automatisation', metrique: 'RDV et relances en pilote automatique' },
      { icon: Shield, titre: 'Image professionnelle', metrique: 'Un branding qui inspire confiance' },
    ],
    fomo: {
      accroche: 'Vos clients vous cherchent...',
      titre: 'Mais ils trouvent vos concurrents',
      sousTitre: 'Chaque recherche Google sans votre nom est un client perdu pour toujours.',
      stat: '46%',
      statLabel: 'des recherches Google ont une intention locale',
      bouton: 'Je veux être trouvé sur Google',
    },
    metaTitle: 'Agence Digitale pour Commerçants et Artisans | L-BOOST',
    metaDescription: 'Site web, SEO local, Google Business et carte fidélité digitale pour artisans, commerçants et professions libérales. Audit gratuit.',
  },
  {
    slug: 'coaching-consulting',
    nom: 'Coaching & Consulting',
    icon: GraduationCap,
    emoji: '🎯',
    couleurAccent: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    douleurImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=470&fit=crop',
    hero: {
      titre: 'Coach, consultant, formateur',
      sousTitre: 'Positionnez-vous comme l\'expert de votre domaine et attirez des clients premium',
      description: 'Votre expertise est votre produit. Mais sans visibilité en ligne, vous restez un secret bien gardé. Nous construisons votre autorité digitale pour attirer des clients qui paient le juste prix.',
    },
    douleurs: [
      { icon: Eye, titre: 'Expertise invisible en ligne', description: 'Vous êtes excellent dans votre domaine mais personne ne le sait sur internet.' },
      { icon: Users, titre: 'Prospection chronophage', description: 'Vous passez plus de temps à chercher des clients qu\'à les accompagner.' },
      { icon: CreditCard, titre: 'Tarifs tirés vers le bas', description: 'Sans positionnement premium, vous vous battez sur les prix au lieu de la valeur.' },
      { icon: Globe, titre: 'Pas de tunnel de conversion', description: 'Votre site (si vous en avez un) ne convertit pas les visiteurs en clients.' },
    ],
    avantApres: [
      { avant: 'Invisible en ligne', apres: 'Autorité reconnue dans votre niche' },
      { avant: 'Prospection manuelle épuisante', apres: 'Les clients viennent à vous' },
      { avant: 'Tarifs négociés à la baisse', apres: 'Positionnement premium justifié' },
      { avant: 'Pas de contenu structuré', apres: 'Blog, vidéos, lead magnets qui convertissent' },
      { avant: 'Pas de récurrence', apres: 'Programmes et abonnements automatisés' },
    ],
    actions: [
      { numero: 1, titre: 'Site vitrine expert', description: 'Un site qui positionne votre expertise : témoignages, cas clients, méthode, prise de RDV.' },
      { numero: 2, titre: 'Personal branding', description: 'Logo, charte graphique, positionnement : devenez LA référence de votre domaine.' },
      { numero: 3, titre: 'Stratégie de contenu', description: 'Articles, vidéos, posts LinkedIn pour démontrer votre expertise et attirer des leads.' },
      { numero: 4, titre: 'Tunnel de conversion', description: 'Lead magnet, séquence email, page de vente : un système qui convertit en autopilote.' },
      { numero: 5, titre: 'Chatbot qualification', description: 'Un assistant IA sur votre site qui qualifie les prospects et prend les RDV.' },
      { numero: 6, titre: 'Automatisations business', description: 'Onboarding client, facturation, relances, emails de suivi : tout automatisé.' },
      { numero: 7, titre: 'Stratégie LinkedIn', description: 'Positionnez-vous comme thought leader avec du contenu stratégique et du networking ciblé.' },
    ],
    benefices: [
      { icon: TrendingUp, titre: 'Clients entrants', metrique: '+40% de leads qualifiés en 3 mois' },
      { icon: CreditCard, titre: 'Tarifs premium', metrique: 'Panier moyen doublé' },
      { icon: Clock, titre: 'Temps libéré', metrique: '15h/semaine de prospection en moins' },
      { icon: Star, titre: 'Autorité digitale', metrique: 'Top of mind dans votre niche' },
      { icon: Zap, titre: 'Automatisation', metrique: 'Tunnel de vente qui convertit 24h/24' },
    ],
    fomo: {
      accroche: 'Votre expertise mérite mieux...',
      titre: 'Que de rester invisible en ligne',
      sousTitre: 'Les consultants qui investissent dans le digital attirent les clients premium que vous voulez.',
      stat: '67%',
      statLabel: 'des décideurs B2B recherchent un expert en ligne avant de le contacter',
      bouton: 'Je veux attirer des clients premium',
    },
    metaTitle: 'Agence Digitale pour Coachs et Consultants | L-BOOST',
    metaDescription: 'Site expert, personal branding, tunnel de conversion et stratégie LinkedIn pour coachs, consultants et formateurs. Audit gratuit.',
  },
  {
    slug: 'ecommerce',
    nom: 'E-commerce',
    icon: ShoppingCart,
    emoji: '🛒',
    couleurAccent: '#EF4444',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    douleurImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&h=470&fit=crop',
    hero: {
      titre: 'Boutique en ligne, marketplace, DNVB',
      sousTitre: 'Augmentez vos ventes et fidélisez vos acheteurs avec une stratégie digitale complète',
      description: 'Avoir une boutique en ligne ne suffit plus. Sans stratégie d\'acquisition, de conversion et de fidélisation, vous laissez de l\'argent sur la table chaque jour.',
    },
    douleurs: [
      { icon: TrendingUp, titre: 'Trafic mais pas de ventes', description: 'Vous avez des visiteurs mais votre taux de conversion reste désespérément bas.' },
      { icon: CreditCard, titre: 'Coût d\'acquisition trop élevé', description: 'Vos pubs Facebook et Google coûtent cher et le retour sur investissement n\'est pas là.' },
      { icon: Package, titre: 'Paniers abandonnés', description: 'Plus de 70% de vos clients partent avant de finaliser leur commande.' },
      { icon: Users, titre: 'Pas de récurrence', description: 'Vos clients achètent une fois et ne reviennent jamais.' },
    ],
    avantApres: [
      { avant: 'Site lent et mal conçu', apres: 'Boutique rapide et optimisée conversion' },
      { avant: '70% de paniers abandonnés', apres: 'Séquences de relance automatiques' },
      { avant: 'Pas de stratégie email', apres: 'Emails automatisés qui génèrent 30% du CA' },
      { avant: 'Pubs sans retour sur investissement', apres: 'Campagnes optimisées et rentables' },
      { avant: 'Pas de fidélisation', apres: 'Programme de fidélité et offres VIP' },
    ],
    actions: [
      { numero: 1, titre: 'Refonte ou création boutique', description: 'Un e-commerce rapide, mobile-first, optimisé pour la conversion avec un tunnel d\'achat fluide.' },
      { numero: 2, titre: 'Optimisation du taux de conversion', description: 'Analyse UX, A/B testing, optimisation des fiches produits et du checkout.' },
      { numero: 3, titre: 'Stratégie email marketing', description: 'Welcome series, abandon de panier, post-achat, réactivation : des emails qui vendent.' },
      { numero: 4, titre: 'SEO e-commerce', description: 'Optimisez vos pages catégories et fiches produits pour le trafic organique gratuit.' },
      { numero: 5, titre: 'Publicité Meta & Google', description: 'Campagnes d\'acquisition ciblées avec retargeting pour maximiser votre ROAS.' },
      { numero: 6, titre: 'Programme de fidélité', description: 'Points, niveaux VIP, offres exclusives pour transformer vos acheteurs en clients récurrents.' },
      { numero: 7, titre: 'Automatisations e-commerce', description: 'Gestion de stock, notifications, relances, avis produits : tout en pilote automatique.' },
    ],
    benefices: [
      { icon: TrendingUp, titre: 'Plus de ventes', metrique: '+35% de taux de conversion' },
      { icon: CreditCard, titre: 'Panier moyen en hausse', metrique: '+20% de valeur par commande' },
      { icon: Star, titre: 'Clients fidèles', metrique: '3x plus de commandes récurrentes' },
      { icon: BarChart3, titre: 'ROI publicitaire', metrique: 'ROAS x3 sur vos campagnes' },
      { icon: Zap, titre: 'Automatisation totale', metrique: '30% du CA via emails automatiques' },
    ],
    fomo: {
      accroche: 'Chaque jour qui passe...',
      titre: 'Vous perdez des ventes que vous pourriez récupérer',
      sousTitre: 'Les boutiques qui optimisent leur conversion génèrent 2x plus de revenus avec le même trafic.',
      stat: '70%',
      statLabel: 'des paniers sont abandonnés sans séquence de relance',
      bouton: 'Je veux booster mes ventes',
    },
    metaTitle: 'Agence Digitale pour E-commerce | L-BOOST',
    metaDescription: 'Création boutique en ligne, optimisation conversion, email marketing et stratégie publicitaire pour e-commerce. Audit gratuit.',
  },
]

export function getSecteurBySlug(slug: string): Secteur | undefined {
  return SECTEURS.find((s) => s.slug === slug)
}
