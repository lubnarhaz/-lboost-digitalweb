'use client'

// ── Data ──────────────────────────────────────────────────────────────────────
const ROW1 = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    nom: 'Le Jardin d\'Auguste',
    secteur: 'Restaurant Gastronomique',
  },
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop',
    nom: 'Lumière Spa',
    secteur: 'Spa & Bien-être',
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    nom: 'Maison Élara',
    secteur: 'Boutique Mode',
  },
  {
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    nom: 'Hôtel Riviera 1920',
    secteur: 'Hôtellerie Premium',
  },
  {
    image: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=600&h=400&fit=crop',
    nom: 'Dr. Claire Médina',
    secteur: 'Cabinet Médical',
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    nom: 'Atlas Performance',
    secteur: 'Fitness & Sport',
  },
  {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
    nom: 'Studio Forma',
    secteur: 'Architecture & Design',
  },
]

const ROW2 = [
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    nom: 'Maison Leblond',
    secteur: 'Boulangerie Artisanale',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    nom: 'Côté Prestige Immo',
    secteur: 'Immobilier Premium',
  },
  {
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop',
    nom: 'Antoine Rivière Photo',
    secteur: 'Photographie',
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    nom: 'Café Brûlerie du Nord',
    secteur: 'Café & Torréfaction',
  },
  {
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    nom: 'Cabinet Moreau & Associés',
    secteur: 'Cabinet Juridique',
  },
  {
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop',
    nom: 'Atelier Botanic',
    secteur: 'Fleuriste & Art Floral',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    nom: 'Élite Business Academy',
    secteur: 'Coaching & Formation',
  },
]

// ── Card ──────────────────────────────────────────────────────────────────────
interface CardItem {
  image: string
  nom: string
  secteur: string
}

function PortfolioCard({ item }: { item: CardItem }) {
  return (
    <div className="portfolio-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt={item.nom} className="portfolio-img" />
      <div className="portfolio-overlay" />
      <div className="portfolio-badge">L-BOOST</div>
      <div className="portfolio-info">
        <div className="portfolio-secteur">{item.secteur}</div>
        <div className="portfolio-nom">{item.nom}</div>
      </div>
      <div className="portfolio-hover-overlay">
        <span>Voir le projet</span>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function PortfolioStrip() {
  const row1 = [...ROW1, ...ROW1]
  const row2 = [...ROW2, ...ROW2]

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <div className="section-divider" />
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
        >
          Ils nous ont fait{' '}
          <span className="text-gradient-gold">confiance</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Découvrez quelques-unes de nos réalisations
        </p>
      </div>

      {/* Strip wrapper — fade edges */}
      <div className="strip-container">
        {/* Rangée 1 — défile gauche */}
        <div className="strip-row">
          <div className="strip-track-left">
            {row1.map((item, i) => (
              <PortfolioCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Rangée 2 — défile droite (masquée sur mobile) */}
        <div className="strip-row strip-row-2">
          <div className="strip-track-right">
            {row2.map((item, i) => (
              <PortfolioCard key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
