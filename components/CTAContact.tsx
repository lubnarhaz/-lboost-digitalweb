'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, FileText } from 'lucide-react'
import { getWhatsAppURL, type WhatsAppContext } from '@/lib/whatsapp-messages'
import { useContactModal } from '@/context/ContactModalContext'
import AnimatedSection from '@/components/AnimatedSection'
import LenaInlineCTA from '@/components/LenaInlineCTA'

interface CTAContactProps {
  context?: WhatsAppContext
  titre?: string
  sousTitre?: string
}

export default function CTAContact({
  context = 'general',
  titre = 'Prêt à transformer votre présence digitale ?',
  sousTitre = 'Choisissez le moyen qui vous convient le mieux pour nous contacter.',
}: CTAContactProps) {
  const { openModal } = useContactModal()

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 relative overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Gold gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="section-divider" />
          <h2
            className="font-playfair font-bold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {titre}
          </h2>
          <p className="text-white/50 text-lg font-inter max-w-xl mx-auto">
            {sousTitre}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Formulaire */}
          <motion.button
            onClick={openModal}
            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#C9A84C]/40 rounded-2xl p-8 text-center transition-all duration-300"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
              <FileText size={24} className="text-[#C9A84C]" />
            </div>
            <h3 className="font-playfair font-bold text-white text-lg mb-2">Formulaire</h3>
            <p className="text-white/40 font-inter text-sm leading-relaxed">
              Remplissez notre formulaire en 2 minutes et recevez un audit gratuit sous 48h.
            </p>
            <span className="inline-block mt-4 text-[#C9A84C] text-sm font-semibold font-inter group-hover:underline">
              Remplir le formulaire
            </span>
          </motion.button>

          {/* WhatsApp */}
          <motion.a
            href={getWhatsAppURL(context)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#25D366]/40 rounded-2xl p-8 text-center transition-all duration-300"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle size={24} className="text-[#25D366]" />
            </div>
            <h3 className="font-playfair font-bold text-white text-lg mb-2">WhatsApp</h3>
            <p className="text-white/40 font-inter text-sm leading-relaxed">
              Contactez Loubna directement sur WhatsApp. Réponse personnelle dans la journée.
            </p>
            <span className="inline-block mt-4 text-[#25D366] text-sm font-semibold font-inter group-hover:underline">
              Ouvrir WhatsApp
            </span>
          </motion.a>

          {/* Téléphone */}
          <motion.a
            href="tel:+33756959078"
            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#C9A84C]/40 rounded-2xl p-8 text-center transition-all duration-300"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Phone size={24} className="text-white/60" />
            </div>
            <h3 className="font-playfair font-bold text-white text-lg mb-2">Téléphone</h3>
            <p className="text-white/40 font-inter text-sm leading-relaxed">
              Appelez-nous directement pour discuter de votre projet. Du lundi au vendredi, 9h-18h.
            </p>
            <span className="inline-block mt-4 text-white/60 text-sm font-semibold font-inter group-hover:text-[#C9A84C] transition-colors">
              07 56 95 90 78
            </span>
          </motion.a>
        </div>

        <div className="text-center mt-8">
          <LenaInlineCTA message="Ou posez directement vos questions à Léna →" />
        </div>
      </div>
    </section>
  )
}
