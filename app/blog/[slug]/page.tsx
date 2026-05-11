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
    alternates: { canonical: `https://www.lboost-digitalweb.fr/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.lboost-digitalweb.fr/blog/${article.slug}`,
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
  'cout-site-internet-troyes-2026': (
    <>
      <p className="lead">
        &quot;Combien coûte un site internet ?&quot; — c&apos;est LA question que nous entendons le plus souvent chez L-BOOST Digitalweb.
        Et la réponse honnête, c&apos;est : ça dépend. De 0&nbsp;€ avec un outil gratuit à plus de 10&nbsp;000&nbsp;€ avec une agence premium,
        les écarts de prix sont énormes. Ce guide vous explique <strong>pourquoi les prix varient autant</strong> et surtout
        <strong>combien prévoir selon votre situation</strong> en tant qu&apos;entreprise à Troyes en 2026.
      </p>

      <h2>Les 3 grandes options pour créer un site web à Troyes</h2>
      <p>
        Avant de parler de prix, il faut comprendre les trois approches qui existent pour créer un site internet.
        Chacune a ses avantages, ses limites et son budget.
      </p>

      <h3>Option 1 : Le faire soi-même (DIY)</h3>
      <p>
        Des plateformes comme Wix, Squarespace ou WordPress.com permettent de créer un site sans compétences techniques.
        Le coût est faible — entre <strong>0 et 300&nbsp;€ par an</strong> — mais le résultat est souvent générique.
        Votre site ressemblera à des milliers d&apos;autres, le SEO sera limité et vous passerez des dizaines d&apos;heures
        à vous battre avec l&apos;outil au lieu de vous occuper de vos clients.
      </p>
      <p>
        Pour un artisan qui démarre ou un projet test, c&apos;est une option valable. Pour une entreprise qui veut
        <strong>convertir des visiteurs en clients</strong>, c&apos;est rarement suffisant.
      </p>

      <h3>Option 2 : Un freelance</h3>
      <p>
        Un développeur ou designer freelance facture généralement entre <strong>800 et 3&nbsp;000&nbsp;€</strong> pour un
        site vitrine. Les avantages : un résultat plus personnalisé qu&apos;un template, et un interlocuteur unique.
        Les risques : disponibilité limitée, pas de suivi long terme, et si le freelance arrête son activité,
        vous vous retrouvez seul avec un site que personne ne sait maintenir.
      </p>

      <h3>Option 3 : Une agence web locale</h3>
      <p>
        Une agence comme <a href="/">L-BOOST Digitalweb à Troyes</a> propose des sites sur-mesure avec un accompagnement
        complet : design, développement, SEO, maintenance et support. Les prix vont de <strong>1&nbsp;490 à 5&nbsp;000&nbsp;€+</strong>
        selon la complexité. L&apos;avantage décisif : vous avez une équipe qui reste, qui fait évoluer votre site et
        qui répond au téléphone quand vous avez un problème.
      </p>

      <h2>Comparatif des prix en 2026 à Troyes</h2>
      <p>
        Voici un tableau réaliste des fourchettes de prix que vous rencontrerez si vous cherchez à créer un site internet
        à Troyes et dans l&apos;Aube :
      </p>
      <ul>
        <li><strong>Site vitrine 5 pages (DIY) :</strong> 0 à 300&nbsp;€/an — templates, design limité, SEO basique</li>
        <li><strong>Site vitrine 5 pages (freelance) :</strong> 800 à 2&nbsp;500&nbsp;€ — design personnalisé, pas de suivi</li>
        <li><strong>Site vitrine 5 pages (agence) :</strong> 1&nbsp;490 à 3&nbsp;000&nbsp;€ — sur-mesure, SEO, support inclus</li>
        <li><strong>Site avec blog + chatbot IA :</strong> 2&nbsp;490 à 5&nbsp;000&nbsp;€ — fonctionnalités avancées, automatisations</li>
        <li><strong>E-commerce (Shopify / WooCommerce) :</strong> 3&nbsp;000 à 10&nbsp;000&nbsp;€+ — catalogue produits, paiement en ligne, logistique</li>
        <li><strong>Application web sur-mesure :</strong> 5&nbsp;000 à 20&nbsp;000&nbsp;€+ — développement custom, API, tableau de bord</li>
      </ul>

      <h2>Pourquoi les prix varient autant ?</h2>
      <p>
        Six facteurs expliquent les écarts de prix entre deux devis pour un &quot;même&quot; site web :
      </p>
      <ol>
        <li><strong>Le nombre de pages :</strong> un site 5 pages et un site 20 pages, ce n&apos;est pas le même travail</li>
        <li><strong>Le design :</strong> un template retouché vs un design 100% sur-mesure</li>
        <li><strong>Les fonctionnalités :</strong> formulaire simple vs chatbot IA, réservation en ligne, espace client</li>
        <li><strong>Le SEO :</strong> aucune optimisation vs stratégie SEO locale complète avec Schema.org</li>
        <li><strong>La technologie :</strong> WordPress vs Next.js — les performances et le SEO ne sont pas les mêmes</li>
        <li><strong>Le suivi :</strong> livraison sèche vs accompagnement mensuel avec reporting</li>
      </ol>
      <p>
        Chez L-BOOST Digitalweb, nous développons en <strong>Next.js 14</strong>, le framework utilisé par Netflix, TikTok
        et Notion. Vos pages se chargent en moins d&apos;une seconde, votre SEO est natif et votre site évolue avec vous.
        C&apos;est un investissement, pas une dépense.
      </p>

      <h2>Abonnement ou paiement unique : que choisir ?</h2>
      <p>
        Chez L-BOOST, nous proposons les deux modèles pour s&apos;adapter à chaque situation :
      </p>
      <ul>
        <li><strong>Abonnement (dès 79&nbsp;€/mois) :</strong> idéal pour lisser le coût. Hébergement, maintenance, support et
        mises à jour inclus. Vous n&apos;avez rien à gérer techniquement.</li>
        <li><strong>Paiement unique (dès 1&nbsp;490&nbsp;€) :</strong> vous êtes propriétaire de tout. Payable en 3 fois sans frais.
        Parfait si vous préférez un investissement one-shot.</li>
      </ul>
      <p>
        Les deux formules incluent le SEO local, le design sur-mesure et la livraison en 7 jours.
        <a href="/tarifs"> Découvrez nos tarifs détaillés →</a>
      </p>

      <h2>Les coûts cachés à anticiper</h2>
      <p>
        Un site internet, ce n&apos;est pas juste le prix de création. Voici les coûts récurrents à prévoir :
      </p>
      <ul>
        <li><strong>Nom de domaine :</strong> 10 à 15&nbsp;€/an (inclus dans nos formules)</li>
        <li><strong>Hébergement :</strong> 5 à 50&nbsp;€/mois selon le trafic (inclus dans nos abonnements)</li>
        <li><strong>Maintenance et mises à jour :</strong> 50 à 200&nbsp;€/mois si vous le faites faire (inclus chez nous)</li>
        <li><strong>Contenu :</strong> photos professionnelles, textes, articles de blog — à budgéter</li>
        <li><strong>Publicité :</strong> Google Ads, Meta Ads — budget séparé selon vos objectifs</li>
      </ul>
      <blockquote>
        <p>Un site web sans budget marketing, c&apos;est comme un magasin sans enseigne dans une ruelle. Il faut
        prévoir le trafic, pas juste le site.</p>
      </blockquote>

      <h2>Notre recommandation pour une entreprise à Troyes</h2>
      <p>
        Si vous êtes une <strong>TPE/PME à Troyes</strong> qui veut être visible sur Google, convertir des visiteurs en
        clients et avoir un site qui vous représente vraiment, voici notre recommandation :
      </p>
      <ul>
        <li>Budget minimum recommandé : <strong>1&nbsp;490&nbsp;€</strong> (ou 79&nbsp;€/mois en abonnement)</li>
        <li>Budget optimal pour un impact réel : <strong>2&nbsp;490&nbsp;€</strong> (site + chatbot IA + community management)</li>
        <li>Meilleur ROI à long terme : <strong>formule abonnement</strong> car elle inclut le suivi et l&apos;évolution du site</li>
      </ul>
      <p>
        Le site internet est l&apos;investissement le plus rentable pour une entreprise locale. Un site bien fait vous rapporte
        des clients pendant des années. Un site mal fait vous en fait perdre chaque jour.
      </p>

      <h2>Conclusion : investir au bon niveau</h2>
      <p>
        Ne choisissez pas le moins cher. Ne choisissez pas le plus cher non plus. Choisissez le prestataire qui comprend
        votre activité, qui est disponible quand vous avez besoin de lui, et qui a un processus clair.
        Chez <a href="/">L-BOOST Digitalweb</a>, nous sommes à Troyes, nous répondons en moins de 2 heures et nous livrons
        en 7 jours. <strong>Demandez votre devis gratuit</strong> — il est sans engagement et vous aurez une réponse avant la fin de la journée.
      </p>
    </>
  ),

  'refonte-site-web-signes-changer': (
    <>
      <p className="lead">
        Votre site a été créé il y a 3, 5, peut-être 8 ans. À l&apos;époque, il était moderne. Aujourd&apos;hui, il vous
        coûte des clients sans que vous le sachiez. <strong>57% des internautes</strong> ne recommanderont pas une entreprise
        dont le site mobile est mal conçu. Voici les 7 signes qui prouvent qu&apos;il est temps de refondre votre site web.
      </p>

      <h2>Signe n°1 : Votre site n&apos;est pas responsive (adapté mobile)</h2>
      <p>
        En 2026, <strong>68% du trafic web en France vient du mobile</strong>. Si votre site ne s&apos;affiche pas correctement
        sur smartphone — texte trop petit, boutons impossibles à cliquer, menu qui déborde — vous perdez deux tiers de vos
        visiteurs potentiels avant même qu&apos;ils lisent votre première ligne.
      </p>
      <p>
        Google pénalise aussi les sites non responsive dans ses résultats de recherche. Un site non adapté mobile
        en 2026, c&apos;est comme avoir un magasin avec la porte fermée à clé la moitié du temps.
      </p>
      <p>
        <strong>Le test :</strong> ouvrez votre site sur votre téléphone. Si vous devez zoomer, scroller horizontalement
        ou plisser les yeux, la refonte est urgente.
      </p>

      <h2>Signe n°2 : Il met plus de 3 secondes à charger</h2>
      <p>
        Chaque seconde de chargement supplémentaire fait perdre <strong>7% de conversions</strong>. Un site lent, c&apos;est
        un site que personne n&apos;attend. Les visiteurs cliquent sur &quot;retour&quot; et vont chez votre concurrent.
      </p>
      <p>
        Les causes les plus fréquentes : images non compressées, hébergement bas de gamme, code WordPress surchargé de
        plugins, thème lourd jamais optimisé. Un site développé en <strong>Next.js</strong> avec des images optimisées
        se charge en moins d&apos;une seconde — c&apos;est ce que nous livrons chez <a href="/services/site-web">L-BOOST Digitalweb</a>.
      </p>

      <h2>Signe n°3 : Le design date de plus de 3 ans</h2>
      <p>
        Les tendances web évoluent vite. Un site créé en 2022 a un look 2022 — et vos visiteurs le voient. Les clients
        jugent la crédibilité d&apos;une entreprise en <strong>moins de 50 millisecondes</strong> en regardant son site web.
        Un design daté = une entreprise perçue comme datée.
      </p>
      <p>
        Les signaux d&apos;un design obsolète : carrousels d&apos;images automatiques, couleurs criardes, polices système
        (Arial, Times New Roman), photos stock évidentes, footer surchargé, animations Flash (oui, ça existe encore).
      </p>
      <blockquote>
        <p>Votre site web est souvent le premier contact entre votre entreprise et un client potentiel.
        Vous n&apos;aurez pas de deuxième chance de faire une bonne première impression.</p>
      </blockquote>

      <h2>Signe n°4 : Vous n&apos;apparaissez pas sur Google</h2>
      <p>
        Tapez le nom de votre entreprise sur Google. Si votre site n&apos;apparaît pas en premier résultat, il y a un
        problème. Tapez ensuite votre activité + votre ville (&quot;coiffeur Troyes&quot;, &quot;restaurant japonais Troyes&quot;).
        Si vous n&apos;êtes pas dans les 10 premiers résultats, votre site n&apos;est pas optimisé pour le
        <a href="/blog/seo-local-troyes"> SEO local</a>.
      </p>
      <p>
        Les causes : pas de balises title optimisées, pas de Schema.org, contenu trop maigre, pas de blog, site en
        JavaScript pur que Google ne peut pas lire. Une refonte avec un <strong>SEO local intégré dès la conception</strong>
        change radicalement la donne.
      </p>

      <h2>Signe n°5 : Votre site ne génère aucun contact</h2>
      <p>
        Un site web n&apos;est pas une brochure en ligne — c&apos;est un commercial qui travaille 24h/24. Si votre site ne
        génère pas de demandes de devis, d&apos;appels ou de réservations, il ne remplit pas sa mission.
      </p>
      <p>
        Les raisons les plus courantes d&apos;un site qui ne convertit pas :
      </p>
      <ul>
        <li>Pas de <strong>call-to-action</strong> visible (bouton WhatsApp, formulaire, téléphone)</li>
        <li>Le visiteur ne comprend pas ce que vous faites en 5 secondes</li>
        <li>Pas de <strong>preuve sociale</strong> (avis clients, logos partenaires, chiffres clés)</li>
        <li>Le parcours utilisateur est confus — trop de pages, trop de clics</li>
        <li>Pas de version mobile correcte (retour au signe n°1)</li>
      </ul>

      <h2>Signe n°6 : Vous ne pouvez pas le modifier vous-même</h2>
      <p>
        Si chaque petite modification (changer un tarif, ajouter une photo, corriger une faute) nécessite de contacter
        votre prestataire et d&apos;attendre 2 semaines, votre site est un frein, pas un outil. Un site moderne doit vous
        donner l&apos;autonomie sur les modifications courantes.
      </p>
      <p>
        Chez L-BOOST, nous formons nos clients à la gestion de leur contenu. Et pour les modifications techniques,
        notre support répond en moins de 2 heures.
      </p>

      <h2>Signe n°7 : Votre site ne vous ressemble plus</h2>
      <p>
        Votre entreprise a évolué depuis la création de votre site. Vous avez peut-être changé de positionnement, ajouté
        des services, ciblé une nouvelle clientèle. Si votre site web ne reflète plus qui vous êtes aujourd&apos;hui,
        il envoie un message contradictoire à vos prospects.
      </p>
      <p>
        C&apos;est le signe le plus subtil mais le plus important. Un site doit être le <strong>reflet fidèle de votre
        entreprise</strong> telle qu&apos;elle est maintenant, pas telle qu&apos;elle était il y a 5 ans.
      </p>

      <h2>Combien coûte une refonte de site web ?</h2>
      <p>
        Une refonte de site web à Troyes coûte entre <strong>1&nbsp;490 et 5&nbsp;000&nbsp;€</strong> selon la complexité.
        Chez L-BOOST Digitalweb, nous proposons aussi des formules en abonnement dès 79&nbsp;€/mois pour lisser l&apos;investissement.
        La refonte inclut : nouveau design, migration du contenu, optimisation SEO locale, formation et support.
      </p>
      <p>
        <a href="/tarifs">Consultez nos tarifs détaillés →</a>
      </p>

      <h2>Conclusion : ne laissez pas votre site vous freiner</h2>
      <p>
        Si vous avez reconnu <strong>3 signes ou plus</strong> dans cette liste, la refonte n&apos;est plus optionnelle —
        c&apos;est une nécessité business. Chaque mois qui passe avec un site obsolète, c&apos;est des clients qui partent
        chez vos concurrents. La bonne nouvelle : une refonte bien menée se rentabilise en quelques mois grâce aux
        nouveaux clients qu&apos;elle génère.
      </p>
    </>
  ),

  'community-management-troyes-deleguer': (
    <>
      <p className="lead">
        <strong>73% des TPE/PME françaises</strong> publient moins d&apos;une fois par semaine sur les réseaux sociaux.
        La raison n°1 ? Le manque de temps. Pourtant, les réseaux sociaux sont devenus le premier réflexe des consommateurs
        pour découvrir une entreprise locale. Si vous êtes invisible sur Instagram ou Facebook à Troyes, vous laissez
        le terrain à vos concurrents.
      </p>

      <h2>Pourquoi les réseaux sociaux sont indispensables en 2026</h2>
      <p>
        Les chiffres parlent d&apos;eux-mêmes :
      </p>
      <ul>
        <li><strong>4,9 milliards</strong> d&apos;utilisateurs actifs sur les réseaux sociaux dans le monde</li>
        <li><strong>1h53</strong> par jour passées en moyenne sur les réseaux en France</li>
        <li><strong>81%</strong> des consommateurs consultent Instagram ou Facebook avant d&apos;acheter localement</li>
        <li><strong>90%</strong> des utilisateurs suivent au moins une entreprise sur Instagram</li>
      </ul>
      <p>
        Pour une entreprise à Troyes, les réseaux sociaux ne sont plus un &quot;plus&quot; — c&apos;est un canal d&apos;acquisition
        client à part entière. Un compte Instagram actif et bien tenu génère de la confiance, de la visibilité et des ventes.
      </p>

      <h2>Le vrai coût de &quot;le faire soi-même&quot;</h2>
      <p>
        Beaucoup de dirigeants tentent de gérer eux-mêmes leurs réseaux. Voici ce que ça implique réellement chaque semaine :
      </p>
      <ul>
        <li><strong>Création de contenu :</strong> 3 à 5 heures (photos, vidéos, textes, graphismes)</li>
        <li><strong>Planification :</strong> 1 heure (calendrier éditorial, horaires optimaux)</li>
        <li><strong>Publication :</strong> 30 minutes (mise en forme, hashtags, stories)</li>
        <li><strong>Interaction :</strong> 1 à 2 heures (réponses aux commentaires, DM, engagement)</li>
        <li><strong>Veille :</strong> 1 heure (tendances, concurrence, inspiration)</li>
      </ul>
      <p>
        Total : <strong>7 à 10 heures par semaine</strong>. Pour un dirigeant de TPE, c&apos;est l&apos;équivalent d&apos;une
        journée entière de travail. Du temps que vous ne passez pas à servir vos clients, développer votre activité
        ou simplement vivre.
      </p>
      <blockquote>
        <p>Votre métier, c&apos;est de gérer votre entreprise. Le nôtre, c&apos;est de la rendre visible. Chacun son expertise.</p>
      </blockquote>

      <h2>Ce qu&apos;un community manager professionnel fait pour vous</h2>
      <p>
        Déléguer votre community management à une agence comme <a href="/services/community-management">L-BOOST Digitalweb</a>,
        c&apos;est confier vos réseaux à quelqu&apos;un qui fait ça toute la journée. Concrètement, voici ce que nous prenons en charge :
      </p>
      <ol>
        <li><strong>Stratégie éditoriale :</strong> on définit ensemble vos piliers de contenu (éducatif, inspirant, promotionnel, coulisses)</li>
        <li><strong>Création visuelle :</strong> visuels professionnels aux couleurs de votre marque, reels, carrousels</li>
        <li><strong>Rédaction des textes :</strong> captions engageantes avec des accroches qui stoppent le scroll</li>
        <li><strong>Planification et publication :</strong> 3 à 5 posts par semaine + stories quotidiennes</li>
        <li><strong>Gestion de communauté :</strong> réponses aux commentaires et DM en votre nom</li>
        <li><strong>Reporting mensuel :</strong> chiffres clés, ce qui a marché, ajustements pour le mois suivant</li>
      </ol>

      <h2>Les erreurs à éviter sur les réseaux à Troyes</h2>
      <p>
        Après avoir accompagné des dizaines d&apos;entreprises troyennes, voici les erreurs que nous voyons le plus souvent :
      </p>
      <ul>
        <li><strong>Publier sans régularité :</strong> 3 posts en une semaine puis plus rien pendant un mois. L&apos;algorithme vous pénalise.</li>
        <li><strong>Vendre tout le temps :</strong> si chaque post est une promo, vos abonnés décrochent. La règle : 80% de valeur, 20% de vente.</li>
        <li><strong>Ignorer les commentaires et DM :</strong> un message non répondu, c&apos;est un client perdu. Les gens veulent de l&apos;interaction.</li>
        <li><strong>Pas de visuels de qualité :</strong> des photos floues prises à l&apos;arrache font plus de mal que de bien.</li>
        <li><strong>Copier la concurrence :</strong> ce qui marche pour un restaurant ne marche pas pour un cabinet d&apos;avocats. Chaque secteur a ses codes.</li>
        <li><strong>Ne pas utiliser les stories et reels :</strong> en 2026, le format vidéo court est roi. Un post statique touche 5x moins de monde.</li>
      </ul>

      <h2>Combien coûte un community manager à Troyes ?</h2>
      <p>
        Les tarifs varient selon le volume et les plateformes gérées :
      </p>
      <ul>
        <li><strong>Freelance débutant :</strong> 200 à 500&nbsp;€/mois — souvent des étudiants, résultats variables</li>
        <li><strong>Freelance expérimenté :</strong> 500 à 1&nbsp;000&nbsp;€/mois — plus fiable mais moins de ressources</li>
        <li><strong>Agence spécialisée :</strong> 349 à 800&nbsp;€/mois — équipe complète, stratégie, visuels pro, reporting</li>
      </ul>
      <p>
        Chez L-BOOST, notre formule community management démarre à <strong>349&nbsp;€/mois HT</strong> sans engagement minimum.
        Elle inclut la création de contenu, la publication et le reporting. Et si vous prenez un de nos packs site web,
        le premier mois est offert.
      </p>

      <h2>Instagram, TikTok ou Facebook : lequel choisir à Troyes ?</h2>
      <p>
        La réponse dépend de votre cible :
      </p>
      <ul>
        <li><strong>Instagram :</strong> incontournable pour la beauté, la restauration, le lifestyle. Audience 25-45 ans.</li>
        <li><strong>Facebook :</strong> encore très utilisé à Troyes, surtout par les 35-65 ans. Groupes locaux très actifs.</li>
        <li><strong>TikTok :</strong> explosif pour toucher les 18-35 ans. Les commerces locaux qui s&apos;y mettent ont un avantage énorme.</li>
        <li><strong>LinkedIn :</strong> pour les consultants, coachs et B2B. Moins de volume mais des leads plus qualifiés.</li>
      </ul>
      <p>
        Notre recommandation pour la plupart des commerces troyens : <strong>Instagram + Facebook</strong> pour commencer,
        puis TikTok quand la machine est lancée.
      </p>

      <h2>Conclusion : vos réseaux méritent mieux que des posts improvisés</h2>
      <p>
        Les réseaux sociaux ne sont pas un hobby — c&apos;est un levier business. Chaque post bien pensé, chaque story
        bien ciblée, chaque interaction rapide vous rapproche d&apos;un nouveau client. Si vous n&apos;avez pas le temps
        de le faire correctement, <strong>déléguez-le à quelqu&apos;un qui le fera bien</strong>. C&apos;est
        l&apos;investissement le plus rentable que vous puissiez faire pour votre visibilité à Troyes.
      </p>
    </>
  ),

  'chatbot-ia-entreprise-automatiser': (
    <>
      <p className="lead">
        Un <strong>chatbot IA bien configuré</strong> traite 80% des questions récurrentes de vos clients, prend des
        rendez-vous automatiquement et qualifie vos prospects — le tout 24h/24, 7j/7, sans pause café. Pour les
        entreprises à Troyes, c&apos;est l&apos;outil qui transforme votre site web en véritable machine à convertir.
      </p>

      <h2>Un chatbot IA, c&apos;est quoi exactement ?</h2>
      <p>
        Un chatbot IA est un assistant virtuel intégré à votre site web (ou WhatsApp, Instagram, Facebook) qui
        <strong>comprend les questions de vos clients en langage naturel</strong> et y répond instantanément.
        Contrairement aux chatbots des années 2010 qui suivaient des scripts rigides, les chatbots IA modernes
        s&apos;appuient sur des modèles de langage avancés (comme Claude, GPT-4) pour avoir de vraies conversations.
      </p>
      <p>
        Le chatbot connaît votre entreprise, vos services, vos tarifs, vos horaires. Il répond avec votre ton, vos mots,
        votre personnalité. Pour le visiteur, c&apos;est comme discuter avec un membre de votre équipe — sauf que
        ce membre ne dort jamais et ne fait jamais attendre.
      </p>

      <h2>Ce qu&apos;un chatbot IA peut faire pour votre entreprise</h2>
      <p>
        Voici les cas d&apos;utilisation les plus courants que nous déployons chez
        <a href="/services/agents-chatbots"> L-BOOST Digitalweb</a> pour les entreprises troyennes :
      </p>

      <h3>Répondre aux questions fréquentes</h3>
      <p>
        &quot;Vous êtes ouvert le dimanche ?&quot;, &quot;C&apos;est combien pour une coupe homme ?&quot;,
        &quot;Vous livrez à domicile ?&quot; — ces questions représentent souvent 80% des messages que vous recevez.
        Le chatbot y répond instantanément, 24h/24. Vous ne perdez plus de temps à répondre aux mêmes questions
        par téléphone ou par email.
      </p>

      <h3>Prendre des rendez-vous automatiquement</h3>
      <p>
        Le chatbot accède à votre planning et propose les créneaux disponibles au visiteur. Le client réserve en
        30 secondes, reçoit une confirmation automatique et vous un rappel. Fini les allers-retours par téléphone,
        les no-shows et les créneaux vides.
      </p>

      <h3>Qualifier vos prospects</h3>
      <p>
        Avant de vous déranger, le chatbot pose les bonnes questions : quel service cherchez-vous ? Quel est votre
        budget ? Quand souhaitez-vous commencer ? Il vous transmet ensuite un résumé complet du prospect avec toutes
        les informations. Vous ne rappelez que les leads qualifiés.
      </p>

      <h3>Recommander des services</h3>
      <p>
        En fonction des réponses du visiteur, le chatbot suggère le service ou le produit le plus adapté.
        C&apos;est du conseil personnalisé à l&apos;échelle — quelque chose qu&apos;aucun humain ne peut faire seul
        pour chaque visiteur de votre site.
      </p>

      <h2>3 exemples concrets par secteur à Troyes</h2>

      <h3>Salon de beauté / institut</h3>
      <p>
        Le chatbot Léna accueille les visiteuses, présente les prestations (soins visage, manucure, épilation),
        propose les créneaux disponibles et confirme le rendez-vous. Il rappelle aussi les promotions en cours
        et le programme de fidélité WalKin. Résultat : <strong>+35% de réservations en ligne</strong> et
        des créneaux vides le mardi qui se remplissent grâce aux suggestions proactives.
      </p>

      <h3>Restaurant</h3>
      <p>
        Le chatbot affiche le menu du jour, prend les réservations de table, renseigne sur les allergènes et
        propose la privatisation pour les événements. Il peut aussi envoyer un lien direct vers la commande
        à emporter. Pour un restaurant à Troyes, c&apos;est la fin des appels en plein service.
      </p>

      <h3>Cabinet de conseil / coaching</h3>
      <p>
        Le chatbot qualifie le prospect (taille d&apos;entreprise, problématique, budget), lui explique les différentes
        formules d&apos;accompagnement et lui propose un appel découverte avec un lien Calendly. Le consultant
        ne passe du temps qu&apos;avec des prospects déjà informés et motivés.
      </p>

      <h2>Chatbot IA vs humain : ce n&apos;est pas l&apos;un ou l&apos;autre</h2>
      <p>
        La peur la plus courante : &quot;Un robot va remplacer le contact humain&quot;. La réalité est tout l&apos;inverse.
        Un chatbot IA <strong>libère votre temps humain</strong> pour les interactions à forte valeur ajoutée.
      </p>
      <ul>
        <li><strong>Le chatbot gère :</strong> les questions répétitives, les horaires, les prises de RDV, la qualification initiale</li>
        <li><strong>Vous gérez :</strong> les demandes complexes, la négociation, le conseil personnalisé, la relation client premium</li>
      </ul>
      <p>
        Notre chatbot <strong>Léna</strong>, développé par L-BOOST, est conçu avec un ton chaleureux et professionnel.
        Les visiteurs apprécient l&apos;échange — certains ne réalisent même pas qu&apos;ils parlent à une IA.
        Et quand la question dépasse ses compétences, Léna transfère automatiquement vers WhatsApp ou un formulaire
        pour qu&apos;un humain prenne le relai.
      </p>

      <h2>Combien coûte un chatbot IA ?</h2>
      <p>
        Les prix varient selon la complexité :
      </p>
      <ul>
        <li><strong>Chatbot simple (FAQ + horaires) :</strong> inclus dans nos packs Boost et Premium</li>
        <li><strong>Chatbot avec prise de RDV :</strong> à partir de 490&nbsp;€ de setup</li>
        <li><strong>Agent IA sur-mesure (qualification + CRM + multi-canal) :</strong> sur devis</li>
      </ul>
      <p>
        Le <strong>ROI est immédiat</strong> : si le chatbot vous fait gagner ne serait-ce que 2 heures par semaine
        (ce qui est conservateur), il se rentabilise en moins d&apos;un mois.
      </p>

      <h2>Comment mettre en place un chatbot IA sur votre site</h2>
      <p>
        Chez L-BOOST Digitalweb, le processus est simple :
      </p>
      <ol>
        <li><strong>Brief :</strong> on identifie ensemble vos cas d&apos;utilisation prioritaires et votre ton de communication</li>
        <li><strong>Configuration :</strong> on entraîne le chatbot avec vos données (FAQ, services, tarifs, horaires)</li>
        <li><strong>Tests :</strong> vous testez le chatbot et on ajuste les réponses jusqu&apos;à ce que ce soit parfait</li>
        <li><strong>Lancement :</strong> le chatbot est intégré à votre site et opérationnel en 48 à 72 heures</li>
        <li><strong>Optimisation :</strong> on analyse les conversations chaque mois et on améliore en continu</li>
      </ol>

      <h2>Conclusion : l&apos;IA au service de votre entreprise, pas à sa place</h2>
      <p>
        Un chatbot IA n&apos;est pas là pour remplacer l&apos;humain — il est là pour <strong>amplifier votre capacité
        à servir vos clients</strong>. Moins de temps perdu sur les questions basiques, plus de temps pour ce qui compte
        vraiment : votre métier, vos clients et votre croissance. Les entreprises qui adoptent l&apos;IA aujourd&apos;hui
        prennent une avance que leurs concurrents mettront des années à rattraper.
      </p>
    </>
  ),

  'identite-visuelle-branding-entreprise': (
    <>
      <p className="lead">
        Vous avez un logo. Il est joli. Mais votre carte de visite a des couleurs différentes de votre site web, votre
        Instagram utilise une police que personne ne retrouve ailleurs, et votre devis est tapé en Times New Roman sur
        Word. Résultat : vos clients ne vous <strong>reconnaissent</strong> pas. Et ce qu&apos;on ne reconnaît pas,
        on ne lui fait pas confiance.
      </p>

      <h2>Logo ≠ identité visuelle : quelle différence ?</h2>
      <p>
        Un logo, c&apos;est un symbole. Un point de départ. <strong>L&apos;identité visuelle</strong>, c&apos;est
        l&apos;ensemble cohérent qui fait que votre marque est reconnaissable partout, sur tous les supports,
        en toutes circonstances.
      </p>
      <p>
        Pensez à Apple, Nike ou même votre boulangerie préférée. Vous les reconnaissez avant de lire leur nom — grâce
        aux couleurs, aux formes, à l&apos;atmosphère visuelle. C&apos;est ça, une identité visuelle forte.
      </p>
      <p>
        Une identité visuelle complète comprend :
      </p>
      <ul>
        <li><strong>Le logo</strong> dans toutes ses déclinaisons (couleur, noir et blanc, horizontal, carré, favicon)</li>
        <li><strong>La palette de couleurs</strong> avec les codes exacts (HEX, RGB, CMJN)</li>
        <li><strong>Les typographies</strong> : une pour les titres, une pour les textes, et les règles d&apos;usage</li>
        <li><strong>Le style photographique</strong> : quel type de photos utiliser, quels filtres, quel cadrage</li>
        <li><strong>Les éléments graphiques</strong> : motifs, icônes, formes récurrentes</li>
        <li><strong>Les règles d&apos;utilisation</strong> : ce qu&apos;on peut faire et ne pas faire avec la marque</li>
      </ul>
      <p>
        Le tout est livré dans un document appelé <strong>charte graphique</strong> — votre bible visuelle.
      </p>

      <h2>Pourquoi c&apos;est crucial pour une entreprise à Troyes</h2>
      <p>
        Dans une ville comme Troyes, le bouche-à-oreille et la proximité jouent énormément. Mais le premier contact
        avec un prospect se fait de plus en plus en ligne : Google, Instagram, Facebook. Si votre présence digitale
        est visuellement incohérente, vous perdez en crédibilité avant même qu&apos;on vous contacte.
      </p>
      <p>
        Voici ce qu&apos;une identité visuelle cohérente apporte concrètement :
      </p>
      <ul>
        <li><strong>Reconnaissance immédiate :</strong> vos posts Instagram, votre site web, votre vitrine et vos devis parlent le même langage visuel</li>
        <li><strong>Crédibilité professionnelle :</strong> une marque soignée inspire confiance. Les clients assimilent la qualité visuelle à la qualité du service.</li>
        <li><strong>Différenciation :</strong> dans un marché local concurrentiel, votre identité vous distingue de ceux qui utilisent des templates Canva génériques</li>
        <li><strong>Cohérence multi-canal :</strong> qu&apos;on vous découvre sur Google, Instagram ou un flyer, l&apos;expérience est la même</li>
        <li><strong>Mémorabilité :</strong> une identité forte reste en mémoire. Les gens reviennent vers ce qu&apos;ils reconnaissent.</li>
      </ul>
      <blockquote>
        <p>Une identité visuelle, ce n&apos;est pas un luxe. C&apos;est un investissement qui fait gagner chaque euro
        dépensé en communication — parce que tout ce que vous publiez travaille pour la même marque.</p>
      </blockquote>

      <h2>Les 5 erreurs de branding les plus courantes</h2>
      <p>
        Après avoir accompagné des dizaines d&apos;entreprises dans l&apos;Aube, voici les erreurs que nous corrigeons
        le plus souvent :
      </p>
      <ol>
        <li><strong>Trop de couleurs :</strong> 2 à 3 couleurs maximum dans votre palette. Au-delà, c&apos;est le chaos visuel. Choisissez une couleur principale, une secondaire et une neutre.</li>
        <li><strong>Des polices différentes partout :</strong> votre site utilise une police, vos stories Instagram une autre, vos devis une troisième. Fixez 2 typographies maximum et tenez-vous-y partout.</li>
        <li><strong>Un logo trop complexe :</strong> si votre logo ne fonctionne pas en 32x32 pixels (favicon), il est trop compliqué. Les meilleurs logos sont simples et mémorisables.</li>
        <li><strong>Pas de charte graphique écrite :</strong> sans document de référence, chaque nouveau support (flyer, post, vidéo) repart de zéro et s&apos;éloigne un peu plus de votre identité.</li>
        <li><strong>Copier les tendances :</strong> ce qui est tendance aujourd&apos;hui sera daté dans 18 mois. Une identité visuelle doit être <strong>intemporelle</strong> et fidèle à vos valeurs, pas à la mode du moment.</li>
      </ol>

      <h2>Le processus de création chez L-BOOST Digitalweb</h2>
      <p>
        Chez <a href="/services/branding">L-BOOST Digitalweb à Troyes</a>, notre processus de branding suit 5 étapes :
      </p>
      <ol>
        <li><strong>Appel de découverte (30 min) :</strong> on parle de votre activité, de vos valeurs, de vos clients et de vos concurrents. C&apos;est la base de tout.</li>
        <li><strong>Moodboard :</strong> on crée un univers visuel avec des références de couleurs, typographies, ambiances. Vous validez la direction avant qu&apos;on dessine quoi que ce soit.</li>
        <li><strong>Création du logo :</strong> 2 à 3 propositions, avec des itérations jusqu&apos;à ce que ce soit parfait. Toutes les déclinaisons sont livrées.</li>
        <li><strong>Charte graphique complète :</strong> un PDF livrable avec tous les éléments, les codes couleurs, les typographies, les règles d&apos;usage et les templates de base.</li>
        <li><strong>Déclinaison sur vos supports :</strong> carte de visite, signature email, bannières réseaux sociaux, en-tête de document — tout est livré prêt à l&apos;emploi.</li>
      </ol>
      <p>
        Durée : 2 semaines. Prix : à partir de <strong>490&nbsp;€ HT</strong>.
      </p>

      <h2>Branding et site web : le combo gagnant</h2>
      <p>
        L&apos;identité visuelle prend tout son sens quand elle est appliquée à votre site web. Chez L-BOOST,
        nous créons le branding ET le site en même temps, ce qui garantit une cohérence parfaite dès le départ.
        Pas de &quot;le logo ne va pas avec le site&quot; — tout est pensé comme un ensemble.
      </p>
      <p>
        Nos packs <a href="/tarifs">Boost et Premium</a> incluent le branding complet + le site web. C&apos;est
        l&apos;option la plus rentable pour démarrer avec une image professionnelle de A à Z.
      </p>

      <h2>Conclusion : investissez dans ce qui reste</h2>
      <p>
        Les publicités passent. Les promotions s&apos;oublient. Mais votre identité visuelle <strong>reste</strong>.
        C&apos;est le socle sur lequel tout le reste s&apos;appuie : votre site, vos réseaux, vos supports commerciaux,
        votre réputation. Faites-le une fois, faites-le bien, et chaque euro que vous investirez ensuite en communication
        travaillera pour une marque que vos clients reconnaissent et en laquelle ils ont confiance.
      </p>
    </>
  ),
}

const CAT_COLORS: Record<string, string> = {
  SEO: 'bg-blue-100 text-blue-700',
  'Création Web': 'bg-purple-100 text-purple-700',
  Fidélisation: 'bg-amber-100 text-amber-700',
  'Réseaux Sociaux': 'bg-pink-100 text-pink-700',
  IA: 'bg-emerald-100 text-emerald-700',
  Branding: 'bg-orange-100 text-orange-700',
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const others = articles.filter((a) => a.slug !== article.slug)

  const baseUrl = 'https://www.lboost-digitalweb.fr'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'datePublished': article.date,
    'dateModified': article.date,
    'author': { '@type': 'Organization', 'name': 'L-BOOST Digitalweb', 'url': baseUrl },
    'publisher': {
      '@type': 'Organization',
      'name': 'L-BOOST Digitalweb',
      'logo': { '@type': 'ImageObject', 'url': `${baseUrl}/og-image.jpg` },
    },
    'image': article.image,
    'url': `${baseUrl}/blog/${article.slug}`,
    'description': article.metaDescription,
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `${baseUrl}/blog/${article.slug}` },
    'inLanguage': 'fr-FR',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': baseUrl },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${baseUrl}/blog` },
      { '@type': 'ListItem', 'position': 3, 'name': article.title, 'item': `${baseUrl}/blog/${article.slug}` },
    ],
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
