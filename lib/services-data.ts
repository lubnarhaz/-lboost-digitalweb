import {
  type LucideIcon,
  Palette,
  Globe,
  BrainCircuit,
  Bot,
  Users,
} from 'lucide-react'

// ── Interfaces ───────────────────────────────────────────────────────────────

export interface ServiceFAQ {
  question: string
  reponse: string
}

export interface ServiceEtape {
  titre: string
  description: string
}

export interface ServiceBeforeAfterItem {
  titre: string
  description: string
}

export interface ServiceBeforeAfterStat {
  valeur: string
  label: string
}

export interface Service {
  slug: string
  nom: string
  icon: LucideIcon
  image: string
  hero: {
    titre: string
    sousTitre: string
    description: string
    benefices: string[]
  }
  concretement: {
    titre: string
    texte: string
    photo: string
  }
  cible: {
    titre: string
    situations: string[]
  }
  citation: {
    photo: string
    texte: string
  }
  actions: {
    titre: string
    sousTitre: string
    etapes: ServiceEtape[]
    photo: string
  }
  exemplesGrid?: string[]
  beforeAfter: {
    photoAvant: string
    photoApres: string
    itemsAvant: ServiceBeforeAfterItem[]
    itemsApres: ServiceBeforeAfterItem[]
    stats: ServiceBeforeAfterStat[]
  }
  faq: ServiceFAQ[]
  fomo: {
    accroche: string
    titre: string
    sousTitre: string
    stat: string
    statLabel: string
    bouton: string
  }
}

// ── Données des 5 services ───────────────────────────────────────────────────

export const SERVICES: Service[] = [

  // ══════════════════════════════════════════════════════════════════════════════
  // SERVICE 1 — BRANDING
  // ══════════════════════════════════════════════════════════════════════════════
  {
    slug: 'branding',
    nom: 'Branding Complet',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=85',
    hero: {
      titre: "Votre image, c'est la première chose\nque vos clients jugent.\nEn moins de 3 secondes.",
      sousTitre: "Logo, couleurs, typographie — tout ce qui fait qu'on vous reconnaît et qu'on vous fait confiance.",
      description: "Une identité visuelle professionnelle qui inspire confiance dès le premier regard.",
      benefices: [
        'Une image qui inspire confiance dès le premier regard',
        'Une identité cohérente sur tous vos supports',
        'Vous vous démarquez clairement de vos concurrents',
      ],
    },
    concretement: {
      titre: "Ce qu'on appelle « branding »,\nc'est simplement votre identité visuelle.",
      texte: "Quand vous croisez une boutique dans la rue avec une belle vitrine, des couleurs harmonieuses et un nom clairement affiché, vous faites confiance avant même d'entrer. C'est le branding.\n\nC'est l'ensemble des éléments visuels qui font que vos clients vous reconnaissent instantanément — et se souviennent de vous. Logo, palette de couleurs, typographies, style de photos, mise en page de vos documents professionnels.\n\nSans identité visuelle cohérente, vous passez pour un amateur même si votre produit ou service est excellent. Avec une bonne identité, vous inspirez confiance avant même d'avoir dit un seul mot.",
      photo: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=85',
    },
    cible: {
      titre: 'Vous avez besoin d\'un branding si...',
      situations: [
        'Vous lancez votre activité et vous partez de zéro',
        'Votre logo a été fait à la va-vite et vous en avez honte',
        'Vos supports (cartes, site, réseaux) ne se ressemblent pas',
        'Vous hésitez à montrer vos visuels à vos clients',
        'Vous voulez monter en gamme et attirer une clientèle premium',
      ],
    },
    citation: {
      photo: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1400&q=85',
      texte: "Une identité visuelle professionnelle, c'est 30% de clients en plus qui vous font confiance sans que vous ayez dit un seul mot.",
    },
    actions: {
      titre: 'Voici ce que vous recevez',
      sousTitre: "Pas un simple logo. Une identité complète.",
      etapes: [
        { titre: 'Appel de découverte', description: "Pour comprendre votre activité, vos valeurs, et les clients que vous voulez attirer" },
        { titre: 'Moodboard', description: "Une planche de références visuelles que vous validez avant qu'on commence à dessiner" },
        { titre: 'Logo toutes versions', description: "Couleur, noir & blanc, horizontal, carré, favicon — votre logo dans tous ses formats" },
        { titre: 'Palette de couleurs', description: "Vos couleurs officielles avec les codes exacts pour ne jamais vous tromper" },
        { titre: 'Typographies', description: "Vos typographies et leur usage pour les titres, textes et communications" },
        { titre: "Guide d'utilisation", description: "Un guide simple pour que votre image reste cohérente partout, pour toujours" },
      ],
      photo: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=85',
    },
    beforeAfter: {
      photoAvant: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80',
      photoApres: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      itemsAvant: [
        { titre: 'Logo générique', description: 'Un logo téléchargé gratuitement que tout le monde reconnaît' },
        { titre: 'Couleurs incohérentes', description: 'Des couleurs différentes sur votre site, vos cartes, vos réseaux' },
        { titre: 'Impression amateur', description: 'Une impression amateur qui freine la confiance' },
        { titre: 'Visuels embarrassants', description: 'Vous évitez de partager vos visuels tellement ils vous font honte' },
      ],
      itemsApres: [
        { titre: 'Logo unique', description: 'Un logo créé pour vous et votre univers' },
        { titre: 'Cohérence parfaite', description: 'Une cohérence parfaite sur tous vos supports visuels' },
        { titre: 'Confiance immédiate', description: 'Une image qui inspire confiance dès le premier regard' },
        { titre: 'Fierté retrouvée', description: 'Vous partagez vos visuels avec fierté' },
      ],
      stats: [
        { valeur: '×2', label: 'Confiance client' },
        { valeur: '+30%', label: 'Taux de contact' },
        { valeur: '100%', label: 'Cohérence visuelle' },
      ],
    },
    faq: [
      { question: 'Combien de temps ça prend ?', reponse: "En général entre 1 et 3 semaines selon la complexité. On commence par valider la direction artistique avec vous, puis on développe les livrables finaux." },
      { question: 'Est-ce que je peux demander des modifications ?', reponse: "Oui, deux rounds de corrections sont inclus dans chaque projet. Notre objectif est que vous soyez fier de votre identité." },
      { question: 'Je reçois les fichiers dans quels formats ?', reponse: "Vous recevez tout en haute résolution : SVG pour le web, PNG avec fond transparent, PDF pour l'impression. Vous possédez tous vos fichiers, pour toujours." },
      { question: "J'ai déjà un logo — vous pouvez juste l'améliorer ?", reponse: "Oui, on peut moderniser ou faire évoluer votre logo existant pour l'améliorer sans tout changer. On en discute lors de l'appel de découverte." },
      { question: 'Pourquoi ne pas utiliser Canva ou un site automatique ?', reponse: "Ces outils créent des logos génériques utilisés par des milliers d'autres entreprises. Votre identité doit être unique et refléter exactement qui vous êtes. C'est ce qu'on construit." },
    ],
    fomo: {
      accroche: "CHAQUE JOUR SANS IDENTITÉ VISUELLE...",
      titre: "Vous perdez des clients qui ont choisi votre concurrent parce qu'il avait l'air plus professionnel que vous.",
      sousTitre: "Pas parce qu'il est meilleur. Parce que son image inspire confiance et que la vôtre sème le doute. Dans un monde où tout se juge en 3 secondes, votre image est votre premier argument de vente.",
      stat: '75%',
      statLabel: "des consommateurs jugent la crédibilité d'une entreprise sur ses visuels avant tout",
      bouton: "Je veux une image à la hauteur de mon expertise",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // SERVICE 2 — SITE WEB
  // ══════════════════════════════════════════════════════════════════════════════
  {
    slug: 'site-web',
    nom: 'Création & Refonte Site Web',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=85',
    hero: {
      titre: "Votre site web, c'est votre commercial\nqui travaille 24h/24 sans jamais se plaindre.",
      sousTitre: "Un site bien conçu attire, convainc et transforme vos visiteurs en clients — même pendant que vous dormez.",
      description: "Sites vitrines, e-commerce, landing pages — rapides, beaux et optimisés pour Google.",
      benefices: [
        'Visible sur Google quand vos clients vous cherchent',
        'Professionnel sur tous les écrans, surtout le téléphone',
        'Conçu pour convaincre, pas juste pour être beau',
      ],
    },
    concretement: {
      titre: "Un site web, c'est bien plus qu'une vitrine.",
      texte: "Beaucoup d'entreprises ont un site web. Peu d'entre elles ont un site qui leur rapporte vraiment des clients. La différence ? Un site qui travaille pour vous doit être rapide, clair, mobile, et conçu pour pousser le visiteur à agir — appeler, écrire, acheter.\n\nOn ne fait pas de sites template qu'on colle sur tous nos clients. Chaque site qu'on crée est pensé pour votre activité, vos clients, et vos objectifs.\n\nEt contrairement à ce qu'on entend souvent, ça ne prend pas 3 mois et ça ne coûte pas une fortune.",
      photo: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=85',
    },
    cible: {
      titre: "Vous avez besoin d'un site web si...",
      situations: [
        "Vous n'avez pas de site et vous perdez des clients qui cherchent en ligne",
        'Votre site existe mais personne ne vous trouve sur Google',
        "Votre site date d'il y a plus de 3 ans et il ne passe pas sur téléphone",
        'Des visiteurs arrivent sur votre site mais ne vous contactent pas',
        "Vous avez honte de donner l'URL de votre site à vos prospects",
      ],
    },
    citation: {
      photo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85',
      texte: "85% des clients recherchent une entreprise en ligne avant de la contacter. Votre site est votre première impression. Elle dure 3 secondes.",
    },
    actions: {
      titre: 'Ce qu\'on fait pour vous',
      sousTitre: "Un site conçu pour attirer et convertir.",
      etapes: [
        { titre: 'Compréhension', description: "On comprend votre activité, vos clients et vos objectifs avant d'écrire la moindre ligne de code" },
        { titre: 'Maquettes', description: "On vous présente la structure et les maquettes pour que vous validiez avant qu'on développe" },
        { titre: 'Développement responsive', description: "Un site rapide qui s'affiche parfaitement sur téléphone, tablette et ordinateur" },
        { titre: 'Optimisation Google', description: "On optimise chaque page pour que Google vous trouve et vous positionne dans les premiers résultats" },
        { titre: 'Rédaction des textes', description: "On rédige les textes si vous le souhaitez — des mots qui parlent à vos clients, pas du jargon" },
        { titre: 'Formation', description: "On vous forme en 30 minutes pour modifier vos textes et photos seul si besoin" },
        { titre: 'Suivi post-livraison', description: "On reste disponibles après la livraison — votre site n'est pas un projet fini, c'est un outil vivant" },
      ],
      photo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=85',
    },
    beforeAfter: {
      photoAvant: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=800&q=80',
      photoApres: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      itemsAvant: [
        { titre: 'Site obsolète', description: "Site créé par un ami il y a 5 ans, plus mis à jour" },
        { titre: 'Non mobile', description: "S'affiche mal sur les téléphones (85% de vos visiteurs)" },
        { titre: 'Invisible sur Google', description: "Introuvable sur Google pour vos recherches clés" },
        { titre: 'Zéro conversion', description: "Les visiteurs arrivent et repartent sans vous contacter" },
      ],
      itemsApres: [
        { titre: 'Site moderne', description: "Site rapide, beau sur tous les écrans" },
        { titre: 'Visible sur Google', description: "Visible sur Google pour les recherches de vos clients" },
        { titre: 'Conçu pour convertir', description: "Chaque page est pensée pour pousser à vous contacter" },
        { titre: 'Multi-canaux', description: "Formulaire, WhatsApp, téléphone — tout est accessible" },
      ],
      stats: [
        { valeur: '×3', label: 'Contacts entrants' },
        { valeur: 'Top 3', label: 'Google local' },
        { valeur: '98%', label: 'Mobile parfait' },
      ],
    },
    faq: [
      { question: 'Combien de temps pour avoir mon site ?', reponse: "Entre 2 et 4 semaines selon la complexité. Un site vitrine 5 pages est livré en 2 semaines. Un site e-commerce prend un peu plus." },
      { question: 'Est-ce que je pourrai modifier mon site moi-même ?', reponse: "Oui. On vous forme en 30 minutes pour modifier vos textes et photos. Pour les modifications plus complexes, on reste disponibles." },
      { question: 'Mon site sera visible sur Google dès le départ ?', reponse: "On optimise chaque page pour Google dès la création. Les résultats sur Google prennent quelques semaines à apparaître — c'est normal, c'est comme ça pour tout le monde." },
      { question: "J'ai déjà un site — vous pouvez juste le refaire ?", reponse: "Oui, c'est souvent ce qu'on fait. On repart de votre contenu existant, on garde ce qui fonctionne et on reconstruit le reste." },
      { question: 'Pourquoi ne pas faire mon site sur Wix ou Squarespace ?', reponse: "Ces outils sont pratiques pour démarrer mais limités pour grandir. Les sites qu'on crée sont plus rapides, mieux référencés sur Google, et entièrement personnalisés pour vous." },
    ],
    fomo: {
      accroche: "PENDANT QUE VOUS LISEZ CES LIGNES...",
      titre: "Un client potentiel vient de trouver votre concurrent sur Google.",
      sousTitre: "Parce que votre concurrent a un site qui apparaît quand on cherche votre métier dans votre ville. Pas parce qu'il est meilleur que vous. Juste parce qu'il est visible et que vous ne l'êtes pas encore.",
      stat: '75%',
      statLabel: "des clics Google vont aux 3 premiers résultats. Si vous n'y êtes pas, vous n'existez pas.",
      bouton: "Je veux un site qui attire des clients",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // SERVICE 3 — AUTOMATISATIONS IA
  // ══════════════════════════════════════════════════════════════════════════════
  {
    slug: 'automatisations-ia',
    nom: 'Automatisations IA',
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=85',
    hero: {
      titre: "Et si les tâches répétitives de votre entreprise\nse faisaient toutes seules pendant que vous dormez ?",
      sousTitre: "On automatise ce qui vous prend du temps pour que vous puissiez vous concentrer sur ce qui compte vraiment.",
      description: "Workflows intelligents, intégrations API, automatisations métier sur-mesure.",
      benefices: [
        'Plusieurs heures récupérées chaque semaine',
        'Zéro oubli, zéro erreur sur les tâches répétitives',
        'Votre entreprise travaille même quand vous ne travaillez pas',
      ],
    },
    concretement: {
      titre: "L'automatisation, c'est simple :\non programme une fois, ça tourne tout seul.",
      texte: "Imaginez que chaque fois qu'un client remplit votre formulaire, il reçoive automatiquement un email de bienvenue, une confirmation de rendez-vous, et que ses informations s'ajoutent toutes seules dans votre tableau de suivi. Sans que vous n'ayez rien fait.\n\nC'est ça, l'automatisation. On identifie les tâches que vous répétez chaque semaine, et on les fait faire par un système automatique à votre place.\n\nRelances clients, rappels de rendez-vous, envoi de factures, publication sur les réseaux, suivi des prospects, sauvegarde de données — tout ça peut tourner seul.",
      photo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=85',
    },
    cible: {
      titre: "Vous avez besoin d'automatisations si...",
      situations: [
        "Vous passez plus d'1 heure par jour sur des tâches répétitives",
        'Vous oubliez de relancer des clients et vous perdez des ventes',
        'Vos informations clients sont éparpillées dans plusieurs endroits',
        'Vous devez tout faire manuellement et ça vous épuise',
        'Vous voulez faire grandir votre activité sans embaucher',
      ],
    },
    citation: {
      photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=85',
      texte: "Un dirigeant qui automatise ses tâches répétitives récupère en moyenne 8 heures par semaine. C'est une journée entière de travail rendue.",
    },
    actions: {
      titre: 'Ce qu\'on fait pour vous',
      sousTitre: "Des systèmes automatiques qui travaillent à votre place.",
      etapes: [
        { titre: 'Cartographie', description: "On cartographie votre journée type pour identifier tout ce que vous faites de façon répétitive" },
        { titre: 'Priorisation', description: "On priorise les automatisations qui vous feront gagner le plus de temps le plus rapidement" },
        { titre: 'Construction', description: "On construit les systèmes automatiques sans que vous ayez besoin de comprendre la technique" },
        { titre: 'Tests', description: "On les teste soigneusement avant de les activer pour s'assurer qu'ils fonctionnent parfaitement" },
        { titre: 'Explication', description: "On vous explique simplement comment tout ça fonctionne pour que vous gardiez le contrôle" },
        { titre: 'Formation', description: "On vous forme à surveiller et ajuster si besoin" },
        { titre: 'Suivi continu', description: "On reste disponibles si quelque chose change dans votre activité" },
      ],
      photo: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=85',
    },
    exemplesGrid: [
      'Confirmation de RDV automatique par SMS',
      'Relance client après 7 jours sans réponse',
      'Publication réseaux sociaux programmée',
      'Factures envoyées automatiquement',
      'Rapport hebdomadaire dans votre boîte mail',
      'Alertes quand un client remplit un formulaire',
    ],
    beforeAfter: {
      photoAvant: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      photoApres: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      itemsAvant: [
        { titre: 'Relances manuelles', description: "Vous relancez chaque client manuellement (et vous oubliez)" },
        { titre: 'Saisie en double', description: "Chaque nouveau contact doit être saisi à la main partout" },
        { titre: 'Réseaux irréguliers', description: "Vous publiez sur les réseaux quand vous y pensez" },
        { titre: 'Travail en boucle', description: "Vous faites le même travail en boucle chaque semaine" },
      ],
      itemsApres: [
        { titre: 'Relances automatiques', description: "Chaque relance part automatiquement au bon moment" },
        { titre: 'Synchronisation totale', description: "Les infos se synchronisent partout toutes seules" },
        { titre: 'Publication automatique', description: "Vos réseaux publient même quand vous êtes en vacances" },
        { titre: '8h+ récupérées', description: "Vous récupérez 8h+ par semaine pour ce qui compte" },
      ],
      stats: [
        { valeur: '+8h', label: 'Récupérées/semaine' },
        { valeur: '0', label: 'Oubli de relance' },
        { valeur: '×3', label: 'Productivité' },
      ],
    },
    faq: [
      { question: 'Est-ce compliqué à mettre en place ?', reponse: "Pour vous, non. On gère toute la partie technique. Vous nous expliquez comment vous travaillez aujourd'hui, et on construit les automatisations. Vous validez le résultat." },
      { question: 'Et si je veux changer quelque chose après ?', reponse: "On adapte les automatisations à chaque changement dans votre activité. Rien n'est figé." },
      { question: 'Mes données sont-elles en sécurité ?', reponse: "Oui. On utilise uniquement des outils reconnus et sécurisés. Vos données restent les vôtres." },
      { question: "Je n'y connais rien en informatique — c'est pour moi ?", reponse: "C'est exactement pour vous. L'objectif est que vous n'ayez rien à comprendre à la technique. Vous utilisez le résultat, on gère le reste." },
      { question: 'Combien de temps avant de voir les résultats ?', reponse: "Dès la première semaine après la mise en place, vous gagnez du temps. C'est immédiat." },
    ],
    fomo: {
      accroche: "CHAQUE SEMAINE QUI PASSE...",
      titre: "Vous faites manuellement ce qu'un système pourrait faire à votre place.",
      sousTitre: "C'est une semaine où vous n'avez pas développé votre activité, prospecté de nouveaux clients, ou simplement eu du temps pour vous. L'automatisation n'est pas un luxe réservé aux grandes entreprises.",
      stat: '60%',
      statLabel: "des TPE pourraient automatiser au moins 3 tâches répétitives. La majorité ne le sait pas encore.",
      bouton: "Je veux récupérer mon temps",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // SERVICE 4 — AGENTS & CHATBOTS
  // ══════════════════════════════════════════════════════════════════════════════
  {
    slug: 'agents-chatbots',
    nom: 'Agents & Chatbots IA',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85',
    hero: {
      titre: "Et si votre entreprise répondait\nà vos clients à 2h du matin\nsans que vous n'ayez rien à faire ?",
      sousTitre: "Un assistant virtuel disponible 24h/24 qui répond, qualifie et prend en charge vos clients à votre place.",
      description: "Assistants conversationnels intelligents, FAQ automatisée, qualification de prospects.",
      benefices: [
        "Zéro appel ou message sans réponse — même la nuit",
        'Vos clients qualifiés arrivent prêts à acheter',
        'Vous ne perdez plus de temps avec les questions répétitives',
      ],
    },
    concretement: {
      titre: "Un chatbot, c'est un assistant\nqui ne dort jamais, ne prend pas de vacances,\net ne se plaint jamais.",
      texte: "Vous avez sûrement déjà parlé à un chatbot quelque part — sur le site d'une grande marque ou d'une banque. Aujourd'hui, ce même outil est accessible à toutes les entreprises, même les plus petites, et il est beaucoup plus intelligent qu'avant grâce à l'intelligence artificielle.\n\nConcrètement, c'est un assistant virtuel sur votre site qui répond aux questions de vos visiteurs, les guide vers ce qu'ils cherchent, prend leurs coordonnées et peut même fixer des rendez-vous. Tout ça sans vous déranger.\n\nVous recevez un résumé des conversations et les contacts qualifiés directement dans votre boîte mail ou WhatsApp.",
      photo: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=800&q=85',
    },
    cible: {
      titre: "Vous avez besoin d'un chatbot si...",
      situations: [
        'Vous recevez souvent les mêmes questions par message ou téléphone',
        "Des clients vous contactent le soir ou le weekend et n'ont pas de réponse",
        "Vous passez du temps à qualifier des prospects qui ne sont pas prêts à acheter",
        'Votre site a des visiteurs mais peu vous contactent',
        "Vous voulez être disponible pour vos clients sans l'être 24h/24",
      ],
    },
    citation: {
      photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85',
      texte: "Un visiteur qui n'obtient pas de réponse immédiate quitte votre site en moins de 2 minutes. Un chatbot les retient, les engage et les convertit.",
    },
    actions: {
      titre: 'Ce qu\'on fait pour vous',
      sousTitre: "Un assistant intelligent qui travaille pour vous.",
      etapes: [
        { titre: 'Inventaire des questions', description: "On liste toutes les questions que vos clients posent régulièrement — par téléphone, email, message" },
        { titre: 'Programmation', description: "On programme votre assistant pour qu'il y réponde exactement comme vous le feriez" },
        { titre: 'Qualification', description: "On lui apprend à reconnaître quand un prospect est prêt à acheter — et à vous alerter immédiatement" },
        { titre: 'Installation', description: "On l'installe sur votre site en quelques minutes" },
        { titre: 'Personnalité', description: "On lui donne votre ton, votre style, votre personnalité pour qu'il soit cohérent avec votre image" },
        { titre: 'Alertes temps réel', description: "On configure les alertes pour que vous receviez les contacts qualifiés en temps réel" },
        { titre: 'Amélioration continue', description: "On améliore ses réponses chaque mois en fonction des nouvelles questions de vos clients" },
      ],
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=85',
    },
    beforeAfter: {
      photoAvant: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&q=80',
      photoApres: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      itemsAvant: [
        { titre: 'Messages sans réponse', description: "Des messages sans réponse le soir et le weekend" },
        { titre: 'Temps perdu', description: "Du temps perdu à répondre aux mêmes questions" },
        { titre: 'Prospects perdus', description: "Des prospects qui s'en vont faute de réponse rapide" },
        { titre: 'Interruptions constantes', description: "Vous êtes interrompu toute la journée par des appels" },
      ],
      itemsApres: [
        { titre: 'Réponse instantanée', description: "Chaque visiteur obtient une réponse en quelques secondes" },
        { titre: 'Questions gérées', description: "Les questions répétitives sont gérées sans vous" },
        { titre: 'Leads qualifiés', description: "Vous ne recevez que les prospects qualifiés et motivés" },
        { titre: 'Journée fluide', description: "Votre journée n'est plus interrompue par des questions basiques" },
      ],
      stats: [
        { valeur: '24h/24', label: 'Disponibilité' },
        { valeur: '−70%', label: 'Questions répétitives' },
        { valeur: '+40%', label: 'Leads qualifiés' },
      ],
    },
    faq: [
      { question: "Est-ce que les clients savent qu'ils parlent à un robot ?", reponse: "On peut le configurer comme vous le souhaitez. Certains clients préfèrent la transparence, d'autres veulent que l'assistant soit présenté comme un membre de l'équipe. On s'adapte à votre choix." },
      { question: 'Que se passe-t-il si le chatbot ne sait pas répondre ?', reponse: "Il transfère automatiquement vers vous avec un résumé de la conversation. Aucun client ne reste sans réponse." },
      { question: 'Est-ce que je peux voir les conversations ?', reponse: "Oui, vous avez accès à toutes les conversations dans un tableau de bord simple, en temps réel." },
      { question: "Ça marche pour quel type d'entreprise ?", reponse: "Pour toutes. E-commerce, restaurant, salon, cabinet, agence, coach — dès que vous avez des clients qui posent des questions, un chatbot vous aide." },
      { question: 'Combien de temps pour le mettre en place ?', reponse: "En général 1 à 2 semaines selon la complexité de vos questions et de votre activité." },
    ],
    fomo: {
      accroche: "EN CE MOMENT MÊME...",
      titre: "Des visiteurs arrivent sur votre site, posent une question et repartent sans réponse.",
      sousTitre: "Certains vont chez un concurrent. D'autres attendront — et oublieront. Quelques-uns reviendront. Mais la majorité est perdue pour toujours. Un assistant virtuel les retient, leur répond, et vous les envoie qualifiés.",
      stat: '53%',
      statLabel: "des consommateurs abandonnent un achat si leurs questions restent sans réponse rapide",
      bouton: "Je veux ne plus perdre de clients la nuit",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // SERVICE 5 — COMMUNITY MANAGEMENT
  // ══════════════════════════════════════════════════════════════════════════════
  {
    slug: 'community-management',
    nom: 'Community Management',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=85',
    hero: {
      titre: "Vos réseaux sociaux devraient vous amener\ndes clients, pas vous prendre du temps.",
      sousTitre: "On s'occupe de tout — idées, création, publication, réponses — pour que vous existiez en ligne sans y passer vos soirées.",
      description: "Stratégie, création de contenu, publication et reporting sur tous vos réseaux.",
      benefices: [
        'Une présence en ligne régulière sans rien avoir à faire',
        'Du contenu qui ressemble à votre activité et attire vos clients',
        'Plus de visibilité, plus de crédibilité, plus de contacts',
      ],
    },
    concretement: {
      titre: "Publier sur Instagram ou Facebook, c'est bien.\nSavoir quoi publier, quand, et pour qui — c'est mieux.",
      texte: "La plupart des entrepreneurs publient quand ils y pensent, ce qui leur semble intéressant, sans stratégie. Résultat : peu de vues, peu d'engagement, et l'impression de parler dans le vide.\n\nLe community management, c'est gérer vos réseaux de façon professionnelle : bonne fréquence, bon contenu, bon message, au bon moment pour les bonnes personnes.\n\nOn crée pour vous un calendrier de publications, on produit les visuels et les textes, on publie, et on répond à vos commentaires et messages. Vous n'avez qu'à valider les contenus si vous le souhaitez.",
      photo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=85',
    },
    cible: {
      titre: "Vous avez besoin de community management si...",
      situations: [
        'Vous publiez de temps en temps mais sans vraiment y croire',
        "Vous n'avez pas le temps de créer du contenu régulièrement",
        'Vous ne savez pas quoi publier ni comment le présenter',
        "Vous avez des abonnés mais ils n'achètent pas",
        'Vos concurrents sont très actifs en ligne et ça vous agace',
      ],
    },
    citation: {
      photo: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1400&q=85',
      texte: "Une entreprise qui publie régulièrement sur les réseaux génère 3 fois plus de demandes entrantes qu'une entreprise qui ne publie pas.",
    },
    actions: {
      titre: 'Ce qu\'on fait pour vous',
      sousTitre: "Votre présence en ligne, gérée de A à Z.",
      etapes: [
        { titre: 'Compréhension', description: "On comprend votre activité, vos clients et ce que vous voulez leur dire" },
        { titre: 'Choix des réseaux', description: "On choisit les bons réseaux pour vous — Instagram, Facebook, LinkedIn ou TikTok selon votre cible" },
        { titre: 'Calendrier mensuel', description: "On crée un calendrier de publications pour le mois que vous pouvez valider ou modifier" },
        { titre: 'Création de contenu', description: "On produit tous les visuels et tous les textes dans votre ton et votre style" },
        { titre: 'Publication optimale', description: "On publie aux meilleures heures pour maximiser la visibilité auprès de vos clients" },
        { titre: 'Interaction', description: "On répond aux commentaires et messages de votre part" },
        { titre: 'Rapport mensuel', description: "On vous envoie un rapport mensuel simple : combien ont vu vos posts, combien ont agi" },
      ],
      photo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=85',
    },
    beforeAfter: {
      photoAvant: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&q=80',
      photoApres: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      itemsAvant: [
        { titre: 'Publication irrégulière', description: "Vous publiez une fois par mois quand vous y pensez" },
        { titre: 'Visuels incohérents', description: "Vos visuels ne sont pas cohérents entre eux" },
        { titre: 'Peu d\'engagement', description: "Peu de likes, peu de commentaires, peu de partages" },
        { titre: 'Temps perdu', description: "Vous perdez 2-3h à chaque publication" },
      ],
      itemsApres: [
        { titre: '3-5 posts/semaine', description: "3 à 5 publications par semaine sans rien faire" },
        { titre: 'Cohérence visuelle', description: "Une ligne visuelle cohérente qui inspire confiance" },
        { titre: 'Engagement régulier', description: "Un engagement régulier qui attire de nouveaux abonnés" },
        { titre: '+10h récupérées', description: "Vous récupérez 10h+ par mois pour autre chose" },
      ],
      stats: [
        { valeur: '+300%', label: 'Visibilité' },
        { valeur: '3-5', label: 'Posts/semaine' },
        { valeur: '+10h', label: 'Récupérées/mois' },
      ],
    },
    faq: [
      { question: 'Est-ce que je peux garder le contrôle sur ce qui est publié ?', reponse: "Oui, absolument. On vous envoie chaque contenu en avance pour validation. Rien ne se publie sans votre accord si vous souhaitez rester dans la boucle." },
      { question: 'Sur quels réseaux vous travaillez ?', reponse: "Instagram, Facebook, LinkedIn et TikTok. On vous conseille les 1 ou 2 réseaux les plus pertinents pour votre activité plutôt que d'être partout à moitié." },
      { question: 'Vous créez aussi les photos et vidéos ?', reponse: "On crée les visuels (graphismes, mise en page, textes) et on peut vous guider sur les photos à prendre. Pour les tournages vidéo, on peut vous accompagner selon votre budget." },
      { question: 'En combien de temps on voit des résultats ?', reponse: "Les premiers résultats en termes de visibilité apparaissent dès le premier mois. La croissance en abonnés qualifiés et en demandes clients se voit généralement après 2 à 3 mois." },
      { question: 'Je peux aussi publier de mon côté en parallèle ?', reponse: "Oui, et c'est même encouragé. Plus vous publiez, mieux c'est. On s'assure juste que tout reste cohérent." },
    ],
    fomo: {
      accroche: "VOS CLIENTS PASSENT 2H30 PAR JOUR SUR LES RÉSEAUX...",
      titre: "Pendant ce temps, où êtes-vous ?",
      sousTitre: "Si vous n'apparaissez pas dans leur fil, votre concurrent y est. Il attire leur attention, crée du lien, inspire confiance. Et quand ils ont besoin de votre type de service, c'est lui qu'ils appellent — pas vous.",
      stat: '×3',
      statLabel: "Les entreprises actives sur les réseaux génèrent 3 fois plus de contacts entrants",
      bouton: "Je veux exister là où sont mes clients",
    },
  },
]

// ── Helper ────────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
