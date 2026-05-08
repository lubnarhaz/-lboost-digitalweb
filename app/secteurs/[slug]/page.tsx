'use client'

import { useParams } from 'next/navigation'
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

  const SecteurIcon = secteur.icon

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${secteur.couleurAccent}15 0%, transparent 70%)` }}
        />

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

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{ background: `${secteur.couleurAccent}15`, border: `1px solid ${secteur.couleurAccent}30` }}
            >
              <SecteurIcon size={28} style={{ color: secteur.couleurAccent }} />
            </motion.div>

            <h1
              className="font-playfair font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              {secteur.hero.titre}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-inter mb-6 max-w-2xl mx-auto" style={{ color: secteur.couleurAccent }}>
              {secteur.hero.sousTitre}
            </p>
            <p className="text-white/50 font-inter max-w-xl mx-auto leading-relaxed">
              {secteur.hero.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DOULEURS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Vous vous reconnaissez ?
            </h2>
            <p className="text-white/50 font-inter max-w-lg mx-auto">
              Ces problèmes sont courants dans votre secteur. La bonne nouvelle : ils ont tous une solution.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secteur.douleurs.map((douleur) => {
              const DouleurIcon = douleur.icon
              return (
                <AnimatedItem key={douleur.titre}>
                  <div className="bg-white/[0.02] border border-white/5 hover:border-red-500/20 rounded-2xl p-6 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                        <DouleurIcon size={20} className="text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-white text-base mb-1">{douleur.titre}</h3>
                        <p className="text-white/40 font-inter text-sm leading-relaxed">{douleur.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          AVANT / APRÈS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Avant / Après L-BOOST
            </h2>
            <p className="text-white/50 font-inter max-w-lg mx-auto">
              La transformation concrète que nous apportons à votre activité.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {secteur.avantApres.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-center bg-white/[0.02] border border-white/5 rounded-xl p-4 md:p-5 hover:border-[#C9A84C]/20 transition-all duration-300">
                  {/* Avant */}
                  <div className="flex items-center gap-3">
                    <X size={16} className="text-red-400 flex-shrink-0" />
                    <span className="text-white/50 font-inter text-sm line-through decoration-red-400/40">{item.avant}</span>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight size={18} className="text-[#C9A84C]" />
                  </div>
                  <div className="flex md:hidden items-center justify-center py-1">
                    <ArrowRight size={16} className="text-[#C9A84C] rotate-90" />
                  </div>

                  {/* Après */}
                  <div className="flex items-center gap-3">
                    <Check size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-white font-inter text-sm font-medium">{item.apres}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOMO
      ════════════════════════════════════════════════ */}
      <SectionFOMO
        {...secteur.fomo}
        context={secteur.slug as WhatsAppContext}
      />

      {/* ════════════════════════════════════════════════
          CE QUE NOUS FAISONS POUR VOUS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Ce que nous mettons en place pour vous
            </h2>
            <p className="text-white/50 font-inter max-w-lg mx-auto">
              7 actions concrètes pour transformer votre présence digitale.
            </p>
          </AnimatedSection>

          <div className="space-y-5">
            {secteur.actions.map((action, i) => (
              <AnimatedSection key={action.numero} delay={i * 0.06}>
                <div className="flex items-start gap-5 bg-white/[0.02] border border-white/5 hover:border-[#C9A84C]/20 rounded-xl p-5 md:p-6 transition-all duration-300 group">
                  <div
                    className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center font-playfair font-bold text-sm"
                    style={{
                      background: `${secteur.couleurAccent}15`,
                      color: secteur.couleurAccent,
                      border: `1px solid ${secteur.couleurAccent}25`,
                    }}
                  >
                    {action.numero}
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-white text-base mb-1 group-hover:text-[#C9A84C] transition-colors">
                      {action.titre}
                    </h3>
                    <p className="text-white/40 font-inter text-sm leading-relaxed">{action.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BÉNÉFICES
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
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
                  <div className="bg-white/[0.02] border border-white/5 hover:border-[#C9A84C]/20 rounded-2xl p-6 text-center transition-all duration-300 group h-full">
                    <div
                      className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors"
                      style={{
                        background: `${secteur.couleurAccent}10`,
                        border: `1px solid ${secteur.couleurAccent}20`,
                      }}
                    >
                      <BeneficeIcon size={22} style={{ color: secteur.couleurAccent }} />
                    </div>
                    <h3 className="font-inter font-semibold text-white text-sm mb-2">{benefice.titre}</h3>
                    <p className="text-[#C9A84C] font-inter text-xs font-medium">{benefice.metrique}</p>
                  </div>
                </AnimatedItem>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          AUTRES SECTEURS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h3 className="font-playfair font-bold text-white text-xl md:text-2xl">
              Nous accompagnons aussi
            </h3>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTEURS.filter((s) => s.slug !== secteur.slug).map((s) => {
              const OtherIcon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/secteurs/${s.slug}`}
                  className="flex items-center gap-2 bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/30 px-4 py-2.5 rounded-xl text-white/50 hover:text-[#C9A84C] text-sm font-inter transition-all duration-200"
                >
                  <OtherIcon size={16} />
                  {s.nom}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA CONTACT
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
