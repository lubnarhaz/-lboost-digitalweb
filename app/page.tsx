'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ContactModal from '@/components/ContactModal'
import ChatbotLena from '@/components/ChatbotLena'
import {
  Palette,
  Globe,
  Bot,
  BrainCircuit,
  CreditCard,
  Users,
  ChevronDown,
  MessageCircle,
  Bell,
  BarChart3,
  Wallet,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import ServiceCard from '@/components/ServiceCard'
import PackCard from '@/components/PackCard'
import CountUpNumber from '@/components/CountUpNumber'
import WalletMockup from '@/components/WalletMockup'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'

// ── Typewriter ────────────────────────────────────────────────────────────────
const TYPEWRITER_ITEMS = [
  'Site Web Premium',
  'Branding Haut de Gamme',
  'Automatisations IA',
  'Chatbots Intelligents',
  'Community Management',
  'Carte Fidélité Digitale',
]

function TypewriterText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = TYPEWRITER_ITEMS[index]
    let timer: ReturnType<typeof setTimeout>

    if (paused) {
      timer = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 1800)
      return () => clearTimeout(timer)
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % TYPEWRITER_ITEMS.length)
      }
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, paused, index])

  return (
    <span className="text-[#C9A84C] font-semibold">
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  )
}

// ── Particles ─────────────────────────────────────────────────────────────────
function HeroParticles() {
  const particles = [
    { left: '10%', top: '70%', delay: '0s', size: 6 },
    { left: '20%', top: '80%', delay: '1.2s', size: 4 },
    { left: '35%', top: '75%', delay: '0.5s', size: 5 },
    { left: '50%', top: '85%', delay: '2s', size: 3 },
    { left: '65%', top: '72%', delay: '0.8s', size: 6 },
    { left: '75%', top: '80%', delay: '1.5s', size: 4 },
    { left: '85%', top: '65%', delay: '0.3s', size: 5 },
    { left: '90%', top: '78%', delay: '2.5s', size: 3 },
    { left: '25%', top: '60%', delay: '3s', size: 4 },
    { left: '55%', top: '55%', delay: '1.8s', size: 5 },
    { left: '70%', top: '50%', delay: '0.6s', size: 3 },
    { left: '40%', top: '90%', delay: '2.2s', size: 6 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`particle particle-${(i % 3) + 1}`}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  )
}

// ── Metrics ───────────────────────────────────────────────────────────────────
const metrics = [
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
  { value: 320, prefix: '+', suffix: '%', label: 'Visibilité moyenne gagnée' },
  { value: 48, suffix: 'h', label: 'Délai livraison express' },
  { value: 100, suffix: '+', label: 'Projets réalisés' },
]

// ── Services ──────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Palette,
    title: 'Branding Complet',
    description: 'Logo, favicon, bannières, charte graphique complète — une identité visuelle qui vous démarque et inspire confiance.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    imageAlt: 'Design branding identité visuelle',
  },
  {
    icon: Globe,
    title: 'Création & Refonte Site Web',
    description: 'Sites vitrines, e-commerce, landing pages. Développement Next.js ultra-rapide, SEO-friendly et mobile-first.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
    imageAlt: 'Création site web développement',
  },
  {
    icon: BrainCircuit,
    title: 'Automatisations IA',
    description: 'n8n, intégrations API, workflows intelligents. Automatisez vos processus métier et gagnez un temps précieux.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    imageAlt: 'Intelligence artificielle automatisation',
  },
  {
    icon: Bot,
    title: 'Agents & Chatbots IA',
    description: 'Assistants conversationnels sur-mesure disponibles 24h/7j. FAQ, prise de RDV, qualification de leads automatique.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    imageAlt: 'Chatbot agent IA conversationnel',
  },
  {
    icon: CreditCard,
    title: 'Carte Fidélité Digitale',
    description: 'Compatible Apple & Google Wallet. Push notifications personnalisées via WalKin pour fidéliser vos clients.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    imageAlt: 'Carte fidélité digitale paiement NFC',
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Instagram, Facebook, LinkedIn, TikTok. Stratégie éditoriale, création de contenu, croissance organique.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
    imageAlt: 'Community management réseaux sociaux',
  },
]

// ── Packs ─────────────────────────────────────────────────────────────────────
const packs = [
  {
    title: 'Pack Starter',
    price: '990€',
    badge: 'Idéal pour démarrer',
    featured: false,
    features: [
      'Logo + Favicon + Bannière réseaux sociaux',
      'Site vitrine 5 pages (Next.js)',
      'Formulaire contact WhatsApp intégré',
      'SEO On-Page de base',
      'Livraison sous 7 jours',
      'Support 30 jours inclus',
    ],
  },
  {
    title: 'Pack Business',
    price: '1 990€',
    badge: 'Le plus populaire ★',
    featured: true,
    features: [
      'Tout le Pack Starter',
      'Charte graphique complète (PDF livrable)',
      'Site avec blog + animations premium',
      'Chatbot IA personnalisé (FAQ + prise de RDV)',
      '1 mois de community management (3 posts/semaine)',
      'Automatisation email/WhatsApp via Brevo',
      'Support prioritaire 60 jours',
    ],
  },
  {
    title: 'Pack Premium',
    price: 'Sur devis',
    badge: 'Solution complète',
    featured: false,
    features: [
      'Tout le Pack Business',
      'Carte fidélité digitale WalKin + push notifications',
      'Agents IA sur-mesure',
      'Tableau de bord analytics client',
      'Accompagnement 3 mois inclus',
      'SLA garanti & support dédié',
      'Tarif adapté à votre projet',
    ],
  },
]

// ── Process ───────────────────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title: 'Échange & Découverte',
    description: 'Analyse approfondie de vos besoins, de votre marché et de vos objectifs. On définit ensemble votre vision.',
  },
  {
    number: '02',
    title: 'Stratégie & Conception',
    description: 'Maquettes interactives, plan d\'action détaillé et choix technologiques validés avec vous.',
  },
  {
    number: '03',
    title: 'Développement & Tests',
    description: 'Livraison itérative, tests qualité rigoureux. Vous validez chaque étape avant le lancement.',
  },
  {
    number: '04',
    title: 'Lancement & Suivi',
    description: 'Déploiement soigné, formation et accompagnement post-livraison pour un démarrage réussi.',
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Sophie Marchand',
    role: 'Fondatrice — Atelier SM Déco',
    quote:
      'L-BOOST a complètement transformé notre image en ligne. En 3 mois, notre trafic a triplé et les demandes de devis explosent. Un travail remarquable, à la hauteur de leur réputation.',
    avatar: 'SM',
    stars: 5,
  },
  {
    name: 'Thomas Renaud',
    role: 'Gérant — Boulangerie Renaud',
    quote:
      'La carte fidélité digitale WalKin a révolutionné ma relation client. Mes clients reviennent plus souvent et les notifications push fonctionnent vraiment. ROI immédiat, je recommande à 200%.',
    avatar: 'TR',
    stars: 5,
  },
  {
    name: 'Inès Bouchard',
    role: 'Directrice — Cabinet IB Conseil',
    quote:
      'Le chatbot IA développé par L-BOOST qualifie nos leads automatiquement. On a réduit le temps de traitement des demandes de 70%. Une équipe sérieuse, réactive et vraiment experte.',
    avatar: 'IB',
    stars: 5,
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Selon le projet : site vitrine sous 7 jours (Pack Starter), site complet avec animations sous 14-21 jours (Pack Business). Pour les projets Premium sur-mesure, nous établissons un planning détaillé lors de notre premier échange.',
  },
  {
    question: 'Proposez-vous des facilités de paiement ?',
    answer: 'Oui. Nous proposons un paiement en 2 fois sans frais (50% à la commande, 50% à la livraison) sur tous nos packs. Des arrangements spécifiques peuvent être discutés pour les projets Premium.',
  },
  {
    question: 'Quelles technologies utilisez-vous pour les sites web ?',
    answer: 'Nous développons avec Next.js 14, React, TypeScript, Tailwind CSS et Framer Motion pour les animations. Cette stack garantit des performances maximales, un excellent SEO et une expérience utilisateur premium.',
  },
  {
    question: 'Combien de révisions sont incluses ?',
    answer: 'Tous nos packs incluent 3 cycles de révisions. Nous travaillons de manière itérative : vous validez chaque étape. L\'objectif est votre satisfaction totale.',
  },
  {
    question: 'Le chatbot IA peut-il parler de mes produits spécifiques ?',
    answer: 'Absolument. Chaque chatbot est entraîné sur votre catalogue, vos FAQ et votre univers de marque. Il peut qualifier des leads, répondre aux questions clients et prendre des rendez-vous automatiquement.',
  },
  {
    question: 'La carte fidélité fonctionne-t-elle sans application ?',
    answer: 'Oui. La carte WalKin est directement dans Apple Wallet et Google Wallet — aucune application à télécharger. Vos clients l\'ajoutent en 1 clic via un lien SMS ou QR code.',
  },
  {
    question: 'Assurez-vous la maintenance et le support après livraison ?',
    answer: 'Oui. Tous nos packs incluent du support (30 à 60 jours selon le pack). Le Pack Premium bénéficie d\'un accompagnement 3 mois complet. Des contrats de maintenance mensuels sont disponibles en option.',
  },
  {
    question: 'Travaillez-vous avec des entreprises de toute taille ?',
    answer: 'Nous accompagnons principalement les TPE/PME et indépendants qui veulent une présence digitale haut de gamme. Nos tarifs sont calibrés pour être accessibles tout en restant premium en qualité.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const carouselRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Autoplay carousel
  useEffect(() => {
    carouselRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current)
    }
  }, [])

  const prevTestimonial = () => {
    if (carouselRef.current) clearInterval(carouselRef.current)
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextTestimonial = () => {
    if (carouselRef.current) clearInterval(carouselRef.current)
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center hero-bg overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600"
            alt="L-BOOST DigitalWeb — Agence digitale premium"
            fill
            className="object-cover opacity-10"
            priority
            sizes="100vw"
          />
        </div>

        {/* Particles */}
        <HeroParticles />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Agence Digitale Premium · France
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-playfair font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
          >
            Votre présence digitale,{' '}
            <br className="hidden sm:block" />
            <span className="text-[#C9A84C]">réinventée.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl font-inter max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            L-BOOST DigitalWeb transforme votre image en ligne en véritable moteur de croissance.
          </motion.p>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg font-inter text-white/50 mb-10 h-7"
            aria-live="polite"
            aria-label="Services proposés"
          >
            <TypewriterText />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#packs"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#packs')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-gold px-8 py-4 rounded-2xl text-base font-bold tracking-wide shadow-xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Découvrir les packs L-BOOST"
            >
              Découvrir nos packs
            </motion.a>
            <motion.a
              href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[#C9A84C] font-semibold text-base transition-colors duration-200 border border-white/20 hover:border-[#C9A84C]/50 px-8 py-4 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              aria-label="Parler à un expert L-BOOST sur WhatsApp"
            >
              <MessageCircle size={18} />
              Parler à un expert sur WhatsApp →
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator text-[#C9A84C]/70">
          <ChevronDown size={28} strokeWidth={1.5} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — MÉTRIQUES
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#C9A84C] mb-2">
                  <CountUpNumber
                    end={metric.value}
                    prefix={metric.prefix ?? ''}
                    suffix={metric.suffix ?? ''}
                    duration={2200}
                  />
                </div>
                <p className="text-white/50 text-sm font-inter tracking-wide">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — SERVICES
      ════════════════════════════════════════════════ */}
      <section id="services" className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Tout ce dont votre entreprise a besoin
            </h2>
            <p className="text-[#6B6B6B] text-lg font-inter max-w-2xl mx-auto">
              De la stratégie à l&apos;exécution, nous gérons votre présence digitale de A à Z.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 — PACKS
      ════════════════════════════════════════════════ */}
      <section id="packs" className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Des offres pensées pour votre croissance
            </h2>
            <p className="text-white/50 text-lg font-inter max-w-xl mx-auto">
              À la carte ou en pack, nous nous adaptons à votre budget.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packs.map((pack, i) => (
              <PackCard key={pack.title} {...pack} index={i} />
            ))}
          </div>

          {/* À la carte CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-white/40 font-inter mb-4">
              Vous préférez à la carte ? Contactez-nous pour un devis personnalisé.
            </p>
            <motion.a
              href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20sur-mesure..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A84C] border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              aria-label="Demander un devis sur-mesure à L-BOOST"
            >
              <MessageCircle size={16} />
              Demander un devis sur-mesure
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5 — CARTE FIDÉLITÉ
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <AnimatedSection direction="right">
              <div className="section-divider mx-0" />
              <h2
                className="font-playfair font-bold text-[#0A0A0A] mb-6"
                style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
              >
                La carte de fidélité qui{' '}
                <span className="text-[#C9A84C]">parle à vos clients</span>
              </h2>
              <p className="text-[#6B6B6B] text-lg font-inter mb-10 leading-relaxed">
                Fini les cartes papier perdues. Offrez à vos clients une carte intelligente dans leur
                téléphone, avec des notifications personnalisées qui les font revenir.
              </p>

              <div className="space-y-5">
                {[
                  {
                    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=160&h=160&fit=crop',
                    alt: 'Smartphone avec notification push',
                    title: 'Push notifications instantanées',
                    desc: 'Envoyez des offres directement sur l\'écran de vos clients, sans application.',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=160&h=160&fit=crop',
                    alt: 'Paiement NFC Apple Google Wallet',
                    title: 'Compatible Apple & Google Wallet',
                    desc: 'Ajout en 1 clic via QR code ou SMS. Aucune friction, adoption maximale.',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=160&h=160&fit=crop',
                    alt: 'Dashboard analytics temps réel',
                    title: 'Dashboard temps réel',
                    desc: 'Suivez vos porteurs de carte, les visites et le ROI de vos campagnes.',
                  },
                ].map(({ img, alt, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="relative w-[80px] h-[80px] rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={img}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="80px"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                        style={{ background: 'linear-gradient(135deg, rgba(107,33,168,0.55) 0%, rgba(13,27,42,0.55) 100%)' }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A0A0A] mb-1 font-inter">{title}</h3>
                      <p className="text-[#6B6B6B] text-sm font-inter leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/walkin" passHref legacyBehavior>
                <motion.a
                  className="inline-flex items-center gap-2 btn-gold mt-10 px-7 py-3.5 rounded-xl font-bold text-sm"
                  whileHover={{ scale: 1.03 }}
                  aria-label="En savoir plus sur WalKin — carte fidélité digitale"
                >
                  <CreditCard size={16} />
                  En savoir plus sur WalKin
                </motion.a>
              </Link>
            </AnimatedSection>

            {/* Right — Mockup */}
            <WalletMockup />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 6 — PROCESSUS
      ════════════════════════════════════════════════ */}
      <section id="processus" className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Notre Processus
            </h2>
            <p className="text-white/50 font-inter max-w-xl mx-auto">
              Une méthode éprouvée, de la première idée au lancement réussi.
            </p>
          </AnimatedSection>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div className="relative mb-12">
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px timeline-line opacity-40" />
              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="text-center relative"
                  >
                    {/* Number circle */}
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-6 relative z-10">
                      <span className="font-playfair font-bold text-[#C9A84C] text-xl">{step.number}</span>
                    </div>
                    <h3 className="font-playfair font-semibold text-white text-lg mb-3">{step.title}</h3>
                    <p className="text-white/40 text-sm font-inter leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border-2 border-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair font-bold text-[#C9A84C] text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm font-inter leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 7 — TÉMOIGNAGES
      ════════════════════════════════════════════════ */}
      <section id="temoignages" className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-[#0A0A0A] mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Ils nous font confiance
            </h2>
            <p className="text-[#6B6B6B] font-inter">
              Des entrepreneurs qui ont transformé leur présence digitale.
            </p>
          </AnimatedSection>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-card"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-playfair text-xl md:text-2xl text-[#0A0A0A] leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0A0A0A] font-bold font-playfair text-sm">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A0A0A] font-inter">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-[#6B6B6B] text-sm font-inter">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#0A0A0A]/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 flex items-center justify-center text-[#0A0A0A] hover:text-[#C9A84C] transition-all"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeTestimonial ? 'bg-[#C9A84C] w-6' : 'bg-[#0A0A0A]/20'
                    }`}
                    aria-label={`Voir témoignage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#0A0A0A]/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 flex items-center justify-center text-[#0A0A0A] hover:text-[#C9A84C] transition-all"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 8 — FAQ
      ════════════════════════════════════════════════ */}
      <section id="faq" className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Questions fréquentes
            </h2>
            <p className="text-white/50 font-inter">Tout ce que vous voulez savoir avant de démarrer.</p>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? 'border-[#C9A84C]/40 bg-[#C9A84C]/5'
                    : 'border-white/10 bg-white/3 hover:border-white/20'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span
                    className={`font-inter font-medium text-base transition-colors ${
                      openFaq === i ? 'text-[#C9A84C]' : 'text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 transition-colors ${openFaq === i ? 'text-[#C9A84C]' : 'text-white/40'}`}>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-6 pb-5 text-white/60 font-inter text-sm leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 9 — CTA FINAL
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] py-24 md:py-36 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8"
            style={{
              background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-divider" />
              <h2
                className="font-playfair font-bold text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
              >
                Prêt à transformer votre{' '}
                <span className="text-[#C9A84C]">présence digitale</span>&nbsp;?
              </h2>
              <p className="text-white/50 text-lg font-inter mb-10 max-w-xl mx-auto">
                Échangeons sur votre projet. Réponse garantie sous 2h.
              </p>

              <motion.a
                href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-10 py-5 rounded-2xl text-lg font-bold tracking-wide hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Contacter L-BOOST sur WhatsApp pour un devis"
              >
                <MessageCircle size={22} />
                Nous contacter sur WhatsApp
              </motion.a>

              <p className="mt-6 text-white/30 font-inter text-sm tracking-widest">
                07 56 95 90 78
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ContactModal />
      <ChatbotLena />
    </main>
  )
}
