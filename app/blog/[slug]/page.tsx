import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/lib/articles'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `https://lboost-digitalweb.fr/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://lboost-digitalweb.fr/blog/${article.slug}`,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
      type: 'article',
    },
  }
}

// ── Article content ───────────────────────────────────────────────────────────
const CONTENT: Record<string, React.ReactNode> = {
  'agence-web-troyes': (
    <>
      <p className="lead">
        Travailler avec une agence web locale à Troyes, c&apos;est choisir la proximité, la réactivité et une vraie
        connaissance du marché local. Voici pourquoi cette décision peut changer la trajectoire de votre business.
      </p>

      <h2>La proximité, un avantage concurrentiel</h2>
      <p>
        Contrairement aux grandes agences parisiennes, une agence basée à Troyes connaît parfaitement le tissu
        économique local. Nous savons qui sont vos concurrents, quelles sont les habitudes des consommateurs troyens
        et comment positionner votre marque dans l&apos;Aube. Les réunions en présentiel sont possibles, les échanges
        sont directs et la réactivité est incomparable.
      </p>
      <p>
        Notre réseau local nous permet aussi de vous mettre en relation avec d&apos;autres professionnels de la région :
        photographes, rédacteurs, graphistes. Un écosystème entier au service de votre croissance.
      </p>

      <h2>Notre processus de création en 7 jours</h2>
      <p>
        Chez L-BOOST Digitalweb, nous avons développé un processus de création de site web qui garantit la livraison
        en 7 jours ouvrés pour un site vitrine standard :
      </p>
      <ul>
        <li><strong>Jour 1-2 :</strong> Audit de votre situation actuelle, brief créatif, choix de la direction artistique</li>
        <li><strong>Jour 3-4 :</strong> Maquette validée avec vous, développement Next.js, React, Tailwind CSS</li>
        <li><strong>Jour 5-6 :</strong> Intégration du contenu, optimisation SEO locale, tests multi-devices</li>
        <li><strong>Jour 7 :</strong> Mise en ligne sur votre domaine, formation, passation des accès</li>
      </ul>
      <p>
        Nos sites sont développés avec <strong>Next.js 14</strong>, le framework React de référence, pour des
        performances maximales, un SEO natif et une expérience utilisateur premium. Chaque ligne de code est pensée
        pour votre croissance.
      </p>

      <h2>Des sites optimisés pour le SEO local à Troyes</h2>
      <p>
        Créer un beau site ne suffit pas — encore faut-il que vos clients potentiels le trouvent sur Google. Chaque
        site que nous livrons intègre :
      </p>
      <ul>
        <li>Un référencement local ciblé sur Troyes et l&apos;Aube</li>
        <li>Un Google Business Profile optimisé</li>
        <li>Le balisage <strong>Schema.org LocalBusiness</strong> pour les rich snippets</li>
        <li>Des balises title et meta description optimisées</li>
        <li>Un sitemap XML et un fichier robots.txt</li>
      </ul>
      <p>
        Résultat : nos clients apparaissent dans les premières positions Google pour leurs requêtes locales en moins
        de 3 mois.
      </p>

      <h2>Conclusion</h2>
      <p>
        Choisir L-BOOST Digitalweb, c&apos;est choisir une équipe qui connaît Troyes, qui parle le même langage que vous
        et qui est là si vous avez besoin de nous. Pas un ticket de support, une vraie relation humaine.
      </p>
    </>
  ),

  'seo-local-troyes': (
    <>
      <p className="lead">
        78% des recherches locales sur mobile aboutissent à une visite dans un commerce dans les 24 heures. Si votre
        entreprise n&apos;apparaît pas dans les résultats Google de Troyes, vous perdez des clients chaque jour.
      </p>

      <h2>Qu&apos;est-ce que le SEO local ?</h2>
      <p>
        Le SEO local (Search Engine Optimization local) est l&apos;ensemble des techniques qui permettent à votre
        entreprise d&apos;apparaître dans les résultats de recherche géolocalisés. Quand quelqu&apos;un cherche
        &quot;boulangerie Troyes&quot; ou &quot;avocat Troyes&quot; sur Google, le SEO local détermine si votre
        établissement apparaît ou non.
      </p>
      <p>
        Il se décompose en trois piliers : votre Google Business Profile, l&apos;optimisation on-page de votre site,
        et les avis clients.
      </p>

      <h2>Google Business Profile : votre vitrine gratuite</h2>
      <p>
        GBP (anciennement Google My Business) est l&apos;outil gratuit de Google qui permet à votre établissement
        d&apos;apparaître dans Google Maps et le &quot;pack local&quot; (les 3 résultats en encart). Pour l&apos;optimiser :
      </p>
      <ul>
        <li>Remplissez <strong>toutes</strong> les informations : horaires, catégories, services, photos</li>
        <li>Publiez régulièrement des posts (promotions, actualités, événements)</li>
        <li>Répondez à tous les avis, positifs comme négatifs</li>
        <li>Ajoutez des photos de qualité de votre établissement et de votre équipe</li>
      </ul>

      <h2>Les mots-clés locaux à cibler à Troyes</h2>
      <p>
        Identifiez les requêtes que tapent vos clients potentiels. Quelques exemples par secteur à Troyes :
      </p>
      <ul>
        <li>Restauration : &quot;restaurant Troyes centre&quot;, &quot;meilleur burger Troyes&quot;</li>
        <li>Services : &quot;plombier Troyes urgence&quot;, &quot;avocat Troyes droit du travail&quot;</li>
        <li>Commerce : &quot;boutique vêtements femme Troyes&quot;, &quot;coiffeur Troyes ouvert samedi&quot;</li>
        <li>Santé : &quot;médecin généraliste Troyes&quot;, &quot;ostéopathe Troyes&quot;</li>
      </ul>

      <h2>L&apos;importance des avis Google</h2>
      <p>
        Google utilise la quantité et la qualité de vos avis comme signal de confiance. Une entreprise avec 50 avis
        à 4,8 étoiles surclassera presque toujours une concurrente avec 10 avis à 5 étoiles. Mettez en place un
        système de collecte d&apos;avis automatisé : SMS, email, QR code à la caisse.
      </p>

      <h2>Schema.org LocalBusiness : le code qui parle à Google</h2>
      <p>
        Le balisage Schema.org est un code JSON-LD intégré dans votre site qui permet à Google de comprendre
        précisément qui vous êtes, où vous êtes et ce que vous faites. C&apos;est obligatoire pour les rich snippets
        et les résultats enrichis. C-BOOST Digitalweb intègre ce balisage sur tous les sites livrés.
      </p>

      <h2>Conclusion</h2>
      <p>
        Le SEO local est un investissement à long terme. Les premiers résultats se voient en 2-3 mois, et les
        bénéfices s&apos;accumulent avec le temps. Commencez dès aujourd&apos;hui en optimisant votre GBP —
        c&apos;est gratuit et peut générer des clients dans la semaine.
      </p>
    </>
  ),

  'carte-fidelite-digitale-commercants-troyes': (
    <>
      <p className="lead">
        67% des clients perdent leur carte de fidélité papier avant de la remplir. Dans un monde où tout est
        sur smartphone, continuer à distribuer des cartons tamponnés, c&apos;est laisser de l&apos;argent sur la table.
      </p>

      <h2>WalKin : c&apos;est quoi exactement ?</h2>
      <p>
        WalKin est une solution de carte de fidélité 100% digitale développée par L-BOOST Digitalweb pour les
        commerçants de Troyes et de l&apos;Aube. Vos clients reçoivent leur carte directement dans Apple Wallet ou
        Google Wallet, sans télécharger la moindre application.
      </p>
      <p>
        Depuis votre tableau de bord en ligne, vous gérez tout : les points, les récompenses, les push notifications
        et les statistiques de fidélisation.
      </p>

      <h2>Comment ça marche pour un commerçant troyen ?</h2>
      <ul>
        <li><strong>Étape 1 :</strong> Nous configurons votre programme de fidélité (points, paliers, récompenses)</li>
        <li><strong>Étape 2 :</strong> Vos clients scannent un QR code à la caisse ou reçoivent un SMS</li>
        <li><strong>Étape 3 :</strong> La carte s&apos;ajoute en 1 clic dans leur Wallet</li>
        <li><strong>Étape 4 :</strong> Vous envoyez des push notifications directement sur leur écran de verrouillage</li>
      </ul>
      <p>
        La mise en place prend 48 à 72h maximum après validation de votre programme.
      </p>

      <h2>Apple Wallet & Google Wallet : pourquoi c&apos;est révolutionnaire</h2>
      <p>
        Apple Wallet et Google Wallet sont les portefeuilles numériques natifs des iPhones et smartphones Android.
        99% de vos clients les ont déjà installés sans le savoir. Intégrer WalKin dans ces applications, c&apos;est
        être présent sur le téléphone de vos clients sans qu&apos;ils aient fait le moindre effort.
      </p>
      <p>
        Contrairement à une application dédiée qui se fait désinstaller dès que la mémoire est pleine, une carte
        Wallet reste. Les clients la retrouvent naturellement quand ils paient.
      </p>

      <h2>Les push notifications : votre ligne directe avec vos clients</h2>
      <p>
        Depuis votre dashboard WalKin, vous envoyez des messages directement sur l&apos;écran de verrouillage de vos
        clients : promotions flash, rappel d&apos;un point de fidélité proche, événement spécial. Le taux d&apos;ouverture
        des push notifications atteint 70% — contre 20% pour les emails.
      </p>

      <h2>Témoignages de commerçants de Troyes</h2>
      <blockquote>
        <p>&quot;En 3 mois, mes clients reviennent 40% plus souvent. Le mardi j&apos;envoie une notif &quot;café offert jusqu&apos;à midi&quot;
        et mon mercredi est toujours plein.&quot;</p>
        <cite>— Romain G., Café Le Comptoir, Troyes</cite>
      </blockquote>
      <blockquote>
        <p>&quot;J&apos;avais peur que ce soit compliqué à mettre en place. En 2 jours c&apos;était opérationnel. Mes clients adorent
        avoir leur carte dans leur téléphone.&quot;</p>
        <cite>— Nadia L., Institut de beauté, Troyes</cite>
      </blockquote>

      <h2>Conclusion</h2>
      <p>
        WalKin transforme la fidélisation client d&apos;une contrainte papier en avantage concurrentiel digital. Pour les
        commerçants de Troyes, c&apos;est l&apos;outil le plus direct pour garder le contact avec vos clients et les faire
        revenir régulièrement.
      </p>
    </>
  ),
}

const CAT_COLORS: Record<string, string> = {
  SEO: 'bg-blue-100 text-blue-700',
  'Création Web': 'bg-purple-100 text-purple-700',
  Fidélisation: 'bg-amber-100 text-amber-700',
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const others = articles.filter((a) => a.slug !== article.slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'datePublished': article.date,
    'author': { '@type': 'Organization', 'name': 'L-BOOST Digitalweb' },
    'publisher': {
      '@type': 'Organization',
      'name': 'L-BOOST Digitalweb',
      'logo': { '@type': 'ImageObject', 'url': 'https://lboost-digitalweb.fr/logo.png' },
    },
    'image': article.image,
    'url': `https://lboost-digitalweb.fr/blog/${article.slug}`,
    'description': article.metaDescription,
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-24 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center pb-12">
          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 ${CAT_COLORS[article.categorie] ?? 'bg-gray-100 text-gray-700'}`}>
            {article.categorie}
          </span>
          <h1 className="font-playfair font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/40 text-sm font-inter">
            <span>L-BOOST Digitalweb</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} de lecture</span>
          </div>
        </div>
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <Image src={article.image} alt={article.title} fill className="object-cover" unoptimized priority />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <article className="prose-article">
          {CONTENT[article.slug]}
        </article>

        {/* CTA inline */}
        <div className="bg-[#0A0A0A] rounded-2xl p-8 text-center mt-12">
          <h3 className="font-playfair font-bold text-white text-2xl mb-3">
            Prêt à booster votre présence digitale à Troyes ?
          </h3>
          <p className="text-white/50 font-inter mb-6 text-sm">Audit gratuit · Devis sous 2h · Livraison en 7 jours</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-7 py-3.5 rounded-xl font-bold font-inter hover:bg-[#E4C46E] transition-colors">
            Demander un devis gratuit
          </Link>
        </div>

        {/* Lire aussi */}
        <div className="mt-14">
          <h3 className="font-playfair font-bold text-[#0A0A0A] text-xl mb-6">Lire aussi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {others.slice(0, 2).map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-gold transition-all hover:-translate-y-0.5">
                <div className="relative h-36 overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                </div>
                <div className="p-4">
                  <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-1">{a.categorie}</p>
                  <h4 className="font-playfair font-bold text-[#0A0A0A] text-sm leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2">{a.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-[#C9A84C] font-inter font-medium hover:underline text-sm">
            ← Retour au blog
          </Link>
        </div>
      </section>
    </main>
  )
}
