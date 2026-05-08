'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check, X, ChevronRight } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import SectionFOMO from '@/components/SectionFOMO'
import CTAContact from '@/components/CTAContact'
import { getSecteurBySlug, SECTEURS } from '@/lib/secteurs-data'
import type { WhatsAppContext } from '@/lib/whatsapp-messages'
import Link from 'next/link'

export default function SecteurPage() {
  const params = useParams()
  const slug = params?.slug as string
  const secteur = getSecteurBySlug(slug)

  if (!secteur) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="font-playfair text-3xl text-white mb-4">Secteur introuvable</h1>
          <Link href="/" className="text-[#C9A84C] hover:underline font-inter">
            Retour à l&apos;accueil
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ════════════════════════════════════════════════
          SECTION 1 — HERO (fond sombre + photo)
      ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={secteur.image}
            alt={secteur.nom}
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
              <span className="text-white/60">Secteurs</span>
              <ChevronRight size={14} />
              <span className="text-[#C9A84C]">{secteur.nom}</span>
            </div>

            <h1
              className="font-playfair font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              {secteur.hero.titre}
            </h1>

            {/* Note DNVB (e-commerce uniquement) */}
            {secteur.heroNote && (
              <p style={{
                fontSize: '13px',
                color: '#6B7280',
                fontStyle: 'italic',
                marginTop: '8px',
                marginBottom: '16px',
                fontFamily: 'Inter',
              }}
                className="max-w-2xl mx-auto"
              >
                {secteur.heroNote}
              </p>
            )}

            <p className="text-lg md:text-xl font-inter mb-6 max-w-2xl mx-auto text-[#C9A84C]">
              {secteur.hero.sousTitre}
            </p>
            <p className="text-[#9CA3AF] font-inter max-w-xl mx-auto leading-relaxed">
              {secteur.hero.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — DOULEURS (fond clair #F8F7F4)
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <h2
              className="font-playfair font-bold text-[#0A0A0A] mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Vous vous reconnaissez ?
            </h2>
            <p className="text-[#4B5563] font-inter max-w-lg mx-auto">
              Ces problèmes sont courants dans votre secteur. La bonne nouvelle : ils ont tous une solution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Photo réaction humaine */}
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={secteur.douleurImage}
                  alt={`Problèmes courants en ${secteur.nom.toLowerCase()}`}
                  width={700}
                  height={470}
                  className="object-cover w-full h-auto"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Douleurs list */}
            <AnimatedSection stagger className="space-y-4">
              {secteur.douleurs.map((douleur) => (
                <AnimatedItem key={douleur.titre}>
                  <div className="bg-white border border-[#E5E7EB] hover:border-[#C9A84C] rounded-xl p-5 transition-all duration-300 group hover:shadow-[0_4px_20px_-4px_rgba(201,168,76,0.15)]">
                    <h3 className="font-inter font-semibold text-[#0A0A0A] text-base mb-1">{douleur.titre}</h3>
                    <p className="text-[#4B5563] font-inter text-sm leading-relaxed">{douleur.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — AVANT / APRÈS (fond sombre)
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Avant / Après L-BOOST
            </h2>
            <p className="text-[#9CA3AF] font-inter max-w-lg mx-auto">
              La transformation concrète que nous apportons à votre activité.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {secteur.avantApres.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
                  {/* Avant */}
                  <div
                    className="flex items-center gap-3 rounded-xl p-4 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <X size={16} className="text-[#6B7280] flex-shrink-0" />
                    <span className="text-[#9CA3AF] font-inter text-sm line-through decoration-[#6B7280]/40">{item.avant}</span>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight size={18} className="text-[#C9A84C]" />
                  </div>
                  <div className="flex md:hidden items-center justify-center py-1">
                    <ArrowRight size={16} className="text-[#C9A84C] rotate-90" />
                  </div>

                  {/* Après */}
                  <div
                    className="flex items-center gap-3 rounded-xl p-4 transition-all duration-300"
                    style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.3)' }}
                  >
                    <Check size={16} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="text-white font-inter text-sm font-medium">{item.apres}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 — FOMO (fond sombre)
      ════════════════════════════════════════════════ */}
      <SectionFOMO
        {...secteur.fomo}
        context={secteur.slug as WhatsAppContext}
      />

      {/* ════════════════════════════════════════════════
          SECTION 5 — CE QUE NOUS FAISONS (fond sombre)
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Ce que nous mettons en place pour vous
            </h2>
            <p className="text-[#9CA3AF] font-inter max-w-lg mx-auto">
              7 actions concrètes pour transformer votre présence digitale.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {secteur.actions.map((action, i) => (
              <AnimatedSection key={action.numero} delay={i * 0.06}>
                <div className="flex items-start gap-5 rounded-xl p-5 md:p-6 transition-all duration-300 group hover:shadow-sm"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center font-playfair font-bold text-sm bg-[#C9A84C] text-white"
                  >
                    {action.numero}
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-white text-base mb-1 group-hover:text-[#C9A84C] transition-colors">
                      {action.titre}
                    </h3>
                    <p className="text-[#9CA3AF] font-inter text-sm leading-relaxed">{action.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 6 — BÉNÉFICES (fond clair #F8F7F4)
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <h2
              className="font-playfair font-bold text-[#0A0A0A] mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Les résultats que vous pouvez attendre
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {secteur.benefices.map((benefice) => {
              const BeneficeIcon = benefice.icon
              return (
                <AnimatedItem key={benefice.titre}>
                  <div className="bg-white border border-[#E5E7EB] hover:border-[#C9A84C] rounded-2xl p-6 text-center transition-all duration-300 group h-full hover:shadow-[0_4px_20px_-4px_rgba(201,168,76,0.15)]">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                      <BeneficeIcon size={22} className="text-[#C9A84C]" />
                    </div>
                    <h3 className="font-inter font-semibold text-[#0A0A0A] text-sm mb-2">{benefice.titre}</h3>
                    <p className="text-[#C9A84C] font-inter text-xs font-medium">{benefice.metrique}</p>
                  </div>
                </AnimatedItem>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 7 — AUTRES SECTEURS (fond sombre)
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h3 className="font-playfair font-bold text-white text-xl md:text-2xl">
              Nous accompagnons aussi
            </h3>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTEURS.filter((s) => s.slug !== secteur.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/secteurs/${s.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/60 hover:text-[#C9A84C] text-sm font-inter transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {s.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 8 — CTA CONTACT (fond sombre)
      ════════════════════════════════════════════════ */}
      <CTAContact
        context={secteur.slug as WhatsAppContext}
        titre={`Prêt à booster votre ${secteur.nom.toLowerCase()} ?`}
        sousTitre="Audit gratuit de votre présence digitale en 48h, sans engagement."
      />

      <Footer />
    </main>
  )
}
