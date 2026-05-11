import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Blog — Conseils Digitaux pour Entreprises à Troyes | L-BOOST',
  description:
    'Conseils en création de sites web, SEO local à Troyes, branding et fidélisation client. L\'expertise digitale par L-BOOST Digitalweb.',
  keywords: [
    'blog agence web Troyes',
    'conseils SEO Troyes',
    'création site web Aube',
    'fidélisation client Troyes',
    'blog digital Troyes',
  ],
  alternates: {
    canonical: 'https://lboost-digitalweb.fr/blog',
  },
  openGraph: {
    title: 'Blog — Conseils Digitaux pour Entreprises à Troyes | L-BOOST',
    description: 'Conseils en création de sites web, SEO local à Troyes, branding et fidélisation client.',
    url: 'https://lboost-digitalweb.fr/blog',
  },
}

const CATEGORIES = ['Tout', 'SEO', 'Création Web', 'Fidélisation', 'Réseaux Sociaux', 'IA', 'Branding']

const CAT_COLORS: Record<string, string> = {
  SEO: 'bg-blue-100 text-blue-700',
  'Création Web': 'bg-purple-100 text-purple-700',
  Fidélisation: 'bg-amber-100 text-amber-700',
  'Réseaux Sociaux': 'bg-pink-100 text-pink-700',
  IA: 'bg-emerald-100 text-emerald-700',
  Branding: 'bg-orange-100 text-orange-700',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <section className="bg-[#0A0A0A] py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block" />
            Blog & Ressources
          </div>
          <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
            Conseils Digitaux<br />
            <span className="text-[#C9A84C]">pour Entreprises à Troyes</span>
          </h1>
          <p className="text-white/50 font-inter text-lg">
            Nos articles pour booster votre présence digitale dans l&apos;Aube.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${CAT_COLORS[article.categorie] ?? 'bg-gray-100 text-gray-700'}`}>
                  {article.categorie}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[#6B6B6B] text-xs font-inter mb-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h2 className="font-playfair font-bold text-[#0A0A0A] text-lg leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-[#6B6B6B] text-sm font-inter leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold group-hover:gap-2 transition-all">
                  Lire l&apos;article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-playfair font-bold text-white text-3xl mb-4">
            Prêt à transformer votre présence digitale à Troyes ?
          </h2>
          <p className="text-white/50 font-inter mb-8">
            Audit gratuit · Devis sous 2h · Livraison en 7 jours
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-8 py-4 rounded-2xl font-bold font-inter hover:bg-[#E4C46E] transition-colors"
          >
            Découvrir nos services
          </Link>
        </div>
      </section>
    </main>
  )
}
