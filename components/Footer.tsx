'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { SECTEURS } from '@/lib/secteurs-data'

const footerLinks = {
  services: [
    { label: 'Branding Complet', href: '/services/branding', isPage: true },
    { label: 'Création Site Web', href: '/services/site-web', isPage: true },
    { label: 'Automatisations IA', href: '/services/automatisations-ia', isPage: true },
    { label: 'Agents & Chatbots IA', href: '/services/agents-chatbots', isPage: true },
    { label: 'Carte Fidélité Digitale', href: '/walkin', isPage: true },
    { label: 'Community Management', href: '/services/community-management', isPage: true },
  ],
  company: [
    { label: 'Nos Packs', href: '#packs' },
    { label: 'Nos tarifs', href: '/tarifs', isPage: true },
    { label: 'Notre Processus', href: '#processus' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'FAQ', href: '#faq' },
    { label: '★ Carte Fidélité WalKin', href: '/walkin', isPage: true },
    { label: 'Mentions légales', href: '/mentions-legales', isPage: true },
    { label: 'Confidentialité', href: '/politique-de-confidentialite', isPage: true },
    { label: 'CGV', href: '/cgv', isPage: true },
  ],
}

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
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
            <div className="flex items-center gap-3 mb-6">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/lboostdigitalweb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="L-BOOST DigitalWeb sur Instagram"
                whileHover={{ scale: 1.1, opacity: 0.85 }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/profile.php?id=61589342972841"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="L-BOOST DigitalWeb sur Facebook"
                whileHover={{ scale: 1.1, opacity: 0.85 }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#1877F2' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </motion.a>

              {/* LinkedIn (provisoire — grisé) */}
              {/* TODO: ajouter lien LinkedIn quand créé */}
              <div
                className="opacity-40 cursor-not-allowed"
                aria-label="LinkedIn — bientôt disponible"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#0A66C2' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* QR Linktree */}
            <a
              href="https://linktr.ee/LBOOSTDigitalweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
              aria-label="Linktree L-BOOST"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10 group-hover:border-[#C9A84C]/40 transition-all duration-300">
                <Image
                  src="/qr-linktree.jpg"
                  alt="QR Code Linktree L-BOOST"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/30 text-[10px] font-inter mt-1.5 text-center group-hover:text-[#C9A84C]/60 transition-colors">Tous nos liens</p>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 font-inter">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#C9A84C] text-sm font-inter transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 font-inter">
              Secteurs
            </h4>
            <ul className="space-y-3">
              {SECTEURS.map((secteur) => (
                <li key={secteur.slug}>
                  <Link
                    href={`/secteurs/${secteur.slug}`}
                    className="text-white/40 hover:text-[#C9A84C] text-sm font-inter transition-colors duration-200"
                  >
                    {secteur.nom}
                  </Link>
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
            © {new Date().getFullYear()} L-BOOST DigitalWeb — Tous droits réservés
          </p>
          <p className="text-white/20 text-xs font-inter">
            Fait avec ❤ en France
          </p>
        </div>
      </div>
    </footer>
  )
}
