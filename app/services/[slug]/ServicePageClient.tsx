'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Check } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import BeforeAfterVisual from '@/components/BeforeAfterVisual'
import SectionFOMO from '@/components/SectionFOMO'
import CTAContact from '@/components/CTAContact'
import FAQAccordion from '@/components/FAQAccordion'
import LenaInlineCTA from '@/components/LenaInlineCTA'
import { getServiceBySlug, SERVICES } from '@/lib/services-data'

export default function ServicePageClient() {
  const params = useParams()
  const slug = params?.slug as string
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="font-playfair text-3xl text-white mb-4">Service introuvable</h1>
          <Link href="/" className="text-[#C9A84C] hover:underline font-inter">
            Retour à l&apos;accueil
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const ServiceIcon = service.icon

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.nom}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/80 to-[#0A0A0A]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/40 font-inter text-sm mb-8">
              <Link href="/" className="hover:text-[#C9A84C] transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/60">Services</span>
              <ChevronRight size={14} />
              <span className="text-[#C9A84C]">{service.nom}</span>
            </div>

            <h1
              className="font-playfair font-bold text-white mb-6 leading-tight whitespace-pre-line"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
            >
              {service.hero.titre}
            </h1>

            <p className="text-lg md:text-xl font-inter mb-6 max-w-2xl mx-auto text-[#C9A84C]">
              {service.hero.sousTitre}
            </p>

            {/* 3 bénéfices */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8">
              {service.hero.benefices.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <Check size={16} className="text-[#C9A84C] flex-shrink-0" />
                  <span className="text-white/70 font-inter text-sm">{b}</span>
                </div>
              ))}
            </div>

            <LenaInlineCTA message="Une question ? Discutez avec Léna →" />
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — C'EST QUOI CONCRÈTEMENT ?
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="w-12 h-px bg-[#C9A84C] mb-6" />
              <h2
                className="font-playfair font-bold text-[#0A0A0A] mb-6 whitespace-pre-line"
                style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}
              >
                {service.concretement.titre}
              </h2>
              {service.concretement.texte.split('\n\n').map((p, i) => (
                <p key={i} className="text-[#4B5563] font-inter text-[17px] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.concretement.photo}
                  alt={`${service.nom} en détail`}
                  width={700}
                  height={470}
                  className="object-cover w-full h-auto"
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — À QUI ÇA S'ADRESSE ?
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              {service.cible.titre}
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.cible.situations.map((s, i) => (
              <AnimatedItem key={i}>
                <div
                  className="flex items-start gap-4 rounded-xl p-5 h-full transition-all duration-300 hover:border-[#C9A84C]/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span
                    className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center font-playfair font-bold text-xs bg-[#C9A84C] text-white"
                  >
                    {i + 1}
                  </span>
                  <p className="text-white/70 font-inter text-sm leading-relaxed">{s}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 — PHOTO + CITATION
      ════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(300px, 50vw, 500px)' }}>
        <Image
          src={service.citation.photo}
          alt="Citation"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <AnimatedSection>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p
                className="font-playfair italic text-white leading-relaxed"
                style={{ fontSize: 'clamp(18px, 3vw, 28px)' }}
              >
                &ldquo;{service.citation.texte}&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5 — CE QU'ON FAIT POUR VOUS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <AnimatedSection>
                <div className="w-12 h-px bg-[#C9A84C] mb-6" />
                <h2
                  className="font-playfair font-bold text-[#0A0A0A] mb-2"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
                >
                  {service.actions.titre}
                </h2>
                <p className="text-[#6B7280] font-inter mb-10">{service.actions.sousTitre}</p>
              </AnimatedSection>

              {/* Timeline */}
              <div className="relative pl-8">
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#C9A84C]/20" />
                {service.actions.etapes.map((etape, i) => (
                  <AnimatedSection key={i} delay={i * 0.06}>
                    <div className="relative mb-6 last:mb-0">
                      <div
                        className="absolute -left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center font-inter font-bold text-[10px] bg-[#C9A84C] text-white"
                      >
                        {i + 1}
                      </div>
                      <h3 className="font-inter font-semibold text-[#0A0A0A] text-[15px] mb-1">
                        {etape.titre}
                      </h3>
                      <p className="text-[#4B5563] font-inter text-sm leading-relaxed">
                        {etape.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="sticky top-32 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.actions.photo}
                  alt={`${service.nom} processus`}
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Exemples grid (automatisations-ia only) */}
          {service.exemplesGrid && (
            <AnimatedSection className="mt-16">
              <h3 className="font-playfair font-bold text-[#0A0A0A] text-xl mb-6 text-center">
                Exemples d&apos;automatisations courantes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.exemplesGrid.map((ex) => (
                  <div
                    key={ex}
                    className="rounded-xl px-5 py-4 font-inter text-sm text-[#0A0A0A] border transition-all hover:border-[#C9A84C]/40"
                    style={{
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.15)',
                    }}
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 6 — AVANT / APRÈS
      ════════════════════════════════════════════════ */}
      <BeforeAfterVisual {...service.beforeAfter} />

      {/* ════════════════════════════════════════════════
          SECTION 7 — FAQ
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <h2
              className="font-playfair font-bold text-[#0A0A0A] mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Questions fréquentes
            </h2>
          </AnimatedSection>
          <FAQAccordion items={service.faq} theme="light" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 8 — FOMO
      ════════════════════════════════════════════════ */}
      <SectionFOMO {...service.fomo} />

      {/* ════════════════════════════════════════════════
          SECTION 9 — CTA CONTACT
      ════════════════════════════════════════════════ */}
      <CTAContact
        titre={`Prêt à passer à l'action ?`}
        sousTitre="Audit gratuit de votre situation en 48h, sans engagement."
      />

      {/* ════════════════════════════════════════════════
          SECTION 10 — AUTRES SERVICES
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h3 className="font-playfair font-bold text-white text-xl md:text-2xl">
              Découvrez nos autres services
            </h3>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/60 hover:text-[#C9A84C] text-sm font-inter transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {s.nom}
              </Link>
            ))}
            <Link
              href="/walkin"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/60 hover:text-[#C9A84C] text-sm font-inter transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Carte Fidélité Digitale
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
