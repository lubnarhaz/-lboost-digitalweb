'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { MessageCircle, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Branding Complet', href: '#services' },
    { label: 'Création Site Web', href: '#services' },
    { label: 'Automatisations IA', href: '#services' },
    { label: 'Chatbots IA', href: '#services' },
    { label: 'Carte Fidélité Digitale', href: '#services' },
    { label: 'Community Management', href: '#services' },
  ],
  company: [
    { label: 'Nos Packs', href: '#packs' },
    { label: 'Notre Processus', href: '#processus' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'FAQ', href: '#faq' },
    { label: '★ Carte Fidélité WalKin', href: '/walkin', isPage: true },
    { label: 'Mentions légales', href: '#' },
  ],
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram L-BOOST' },
  { icon: Facebook, href: '#', label: 'Facebook L-BOOST' },
  { icon: Linkedin, href: '#', label: 'LinkedIn L-BOOST' },
]

export default function Footer() {
  const router = useRouter()

  const handleScroll = (href: string, isPage?: boolean) => {
    if (href === '#') return
    if (isPage) { router.push(href); return }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-playfair font-bold text-2xl text-[#C9A84C]">L-BOOST</span>
              <br />
              <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-inter">DigitalWeb</span>
            </div>
            <p className="text-white/50 text-sm font-inter leading-relaxed mb-6 max-w-xs">
              Votre partenaire digital haut de gamme pour transformer votre présence en ligne en véritable moteur de croissance.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-[#C9A84C]/40 rounded-lg flex items-center justify-center text-white/50 hover:text-[#C9A84C] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  aria-label={label}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 font-inter">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-white/40 hover:text-[#C9A84C] text-sm font-inter transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 font-inter">
              Agence
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href, (link as { isPage?: boolean }).isPage)}
                    className={`text-sm font-inter transition-colors duration-200 text-left ${
                      (link as { isPage?: boolean }).isPage
                        ? 'text-[#C9A84C]/70 hover:text-[#C9A84C] font-medium'
                        : 'text-white/40 hover:text-[#C9A84C]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 font-inter">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-[#25D366] transition-colors duration-200 group"
                aria-label="WhatsApp L-BOOST"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span className="text-sm font-inter">07 56 95 90 78</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="text-white/25 text-sm font-inter">
                lboost-digitalweb.fr
              </div>
              <motion.a
                href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C]/10 hover:bg-[#C9A84C] text-[#C9A84C] hover:text-[#0A0A0A] border border-[#C9A84C]/30 hover:border-[#C9A84C] px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 mt-2"
                whileHover={{ scale: 1.02 }}
                aria-label="Démarrer un projet avec L-BOOST"
              >
                <MessageCircle size={14} />
                Démarrer un projet
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs font-inter text-center sm:text-left">
            © 2025 L-BOOST DigitalWeb — Tous droits réservés
          </p>
          <p className="text-white/20 text-xs font-inter">
            Fait avec ❤ en France
          </p>
        </div>
      </div>
    </footer>
  )
}
