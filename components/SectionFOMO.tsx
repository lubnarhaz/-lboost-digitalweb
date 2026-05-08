'use client'

import { motion } from 'framer-motion'
import { getWhatsAppURL, type WhatsAppContext } from '@/lib/whatsapp-messages'
import AnimatedSection from '@/components/AnimatedSection'

interface SectionFOMOProps {
  accroche: string
  titre: string
  sousTitre: string
  stat: string
  statLabel: string
  bouton: string
  context?: WhatsAppContext
}

export default function SectionFOMO({
  accroche,
  titre,
  sousTitre,
  stat,
  statLabel,
  bouton,
  context = 'audit',
}: SectionFOMOProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#0F0F1A] to-[#0A0A0A]" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Accroche */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C9A84C] font-inter font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {accroche}
          </motion.p>

          {/* Titre */}
          <h2
            className="font-playfair font-bold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {titre}
          </h2>

          {/* Sous-titre */}
          <p className="text-white/50 text-lg font-inter max-w-2xl mx-auto mb-10">
            {sousTitre}
          </p>

          {/* Stat */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex flex-col items-center bg-white/[0.03] backdrop-blur-sm border border-[#C9A84C]/20 rounded-2xl px-10 py-8 mb-10"
          >
            <span className="font-playfair font-bold text-[#C9A84C] leading-none" style={{ fontSize: 'clamp(48px, 8vw, 80px)' }}>
              {stat}
            </span>
            <span className="text-white/50 font-inter text-sm mt-2 max-w-xs">
              {statLabel}
            </span>
          </motion.div>

          {/* CTA Button */}
          <div>
            <motion.a
              href={getWhatsAppURL(context)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] px-8 py-4 rounded-xl font-bold text-base font-inter hover:bg-[#E4C46E] transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {bouton}
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
