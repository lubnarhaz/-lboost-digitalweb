'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Packs', href: '#packs' },
  { label: 'Processus', href: '#processus' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C9A84C]/20 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              aria-label="L-BOOST DigitalWeb — retour accueil"
            >
              <div className="flex flex-col leading-none">
                <span className="font-playfair font-bold text-xl md:text-2xl text-[#C9A84C] tracking-tight">
                  L-BOOST
                </span>
                <span className="text-[10px] md:text-xs text-white/60 tracking-[0.25em] uppercase font-inter">
                  DigitalWeb
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/70 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide btn-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Contacter L-BOOST sur WhatsApp"
              >
                <MessageCircle size={16} />
                WhatsApp
              </motion.a>
            </div>

            {/* Burger Mobile */}
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col pt-24 pb-8 px-6"
          >
            <nav className="flex flex-col gap-6" aria-label="Navigation mobile">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/80 hover:text-[#C9A84C] text-2xl font-playfair font-medium border-b border-white/10 pb-5 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0A0A0A] px-6 py-4 rounded-2xl text-lg font-bold btn-gold"
              aria-label="Contacter L-BOOST sur WhatsApp"
            >
              <MessageCircle size={22} />
              Nous contacter sur WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
