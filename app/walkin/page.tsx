'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  Check, Bell, Star, BarChart3, Smartphone, MessageCircle,
  ChevronDown, Plus, Minus, Coffee, Utensils, Scissors,
  Heart, Dumbbell, ShoppingBag, Leaf, PawPrint, Pizza,
  Zap, Shield, TrendingUp, Wallet,
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import CountUpNumber from '@/components/CountUpNumber'
import AnimatedSection from '@/components/AnimatedSection'
import WalletCard from '@/components/walkin/WalletCard'
import PushNotificationMockup from '@/components/walkin/PushNotificationMockup'
import DualPhoneMockup from '@/components/walkin/DualPhoneMockup'
import StepScenario from '@/components/walkin/StepScenario'
import BeforeAfter from '@/components/walkin/BeforeAfter'
import DashboardMockup from '@/components/walkin/DashboardMockup'

// ── Hero phone frame ──────────────────────────────────────────────────────────
function HeroPhoneFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative mx-auto"
      style={{ maxWidth: 300 }}
    >
      {/* Glow */}
      <div className="absolute -inset-8 bg-[#C9A84C]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Phone frame */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 42,
          background: '#141414',
          padding: '14px 10px',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black z-10 w-24 h-6 rounded-b-2xl" />

        {/* Screen */}
        <div className="bg-[#f2f2f7] rounded-[30px] overflow-hidden pt-6 pb-4 px-3">
          {/* Wallet header */}
          <div className="flex items-center justify-between px-2 mb-3">
            <span className="text-xs font-semibold text-[#1c1c1e] font-inter">Portefeuille</span>
            <span className="text-[#007aff] text-xs font-medium font-inter">Modifier</span>
          </div>

          {/* Wallet card */}
          <WalletCard
            shopName="Grain de Sel"
            shopEmoji="☕"
            primaryColor="#2D6A4F"
            stamps={7}
            maxStamps={10}
            reward="café offert"
            animate
          />

          {/* Recent transactions */}
          <div className="mt-3 px-1">
            <p className="text-[9px] text-[#6b6b6b] uppercase tracking-wider font-inter mb-2">Récent</p>
            {[
              { emoji: '☕', label: 'Tampon validé', sub: 'Il y a 2h', val: '+1' },
              { emoji: '🎁', label: 'Récompense proche', sub: 'Plus que 3', val: '7/10' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#e5e5ea] rounded-lg flex items-center justify-center text-xs">{item.emoji}</div>
                  <div>
                    <p className="text-[9px] font-semibold text-[#1c1c1e] font-inter">{item.label}</p>
                    <p className="text-[8px] text-[#6b6b6b] font-inter">{item.sub}</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-[#10B981] font-inter">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Home bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
    </motion.div>
  )
}

// ── Particles ─────────────────────────────────────────────────────────────────
function Particles() {
  const pts = [
    { left: '8%', top: '70%', d: '0s', s: 5 }, { left: '18%', top: '80%', d: '1s', s: 4 },
    { left: '32%', top: '75%', d: '0.5s', s: 6 }, { left: '48%', top: '85%', d: '2s', s: 3 },
    { left: '63%', top: '72%', d: '0.8s', s: 5 }, { left: '74%', top: '78%', d: '1.5s', s: 4 },
    { left: '85%', top: '65%', d: '0.3s', s: 6 }, { left: '92%', top: '80%', d: '2.5s', s: 3 },
    { left: '22%', top: '60%', d: '3s', s: 4 }, { left: '55%', top: '55%', d: '1.8s', s: 5 },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pts.map((p, i) => (
        <div key={i} className={`particle particle-${(i % 3) + 1}`}
          style={{ left: p.left, top: p.top, animationDelay: p.d, width: p.s, height: p.s, opacity: 0.7 }} />
      ))}
    </div>
  )
}

// ── Pricing card (tilt 3D) ────────────────────────────────────────────────────
function PricingCard({ title, setup, monthly, badge, featured, features, index }: {
  title: string; setup: string; monthly: string; badge?: string; featured?: boolean; features: string[]; index?: number
}) {
  const x = useMotionValue(0); const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-120, 120], [7, -7]), { stiffness: 150, damping: 20 })
  const ry = useSpring(useTransform(x, [-120, 120], [-7, 7]), { stiffness: 150, damping: 20 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - r.left - r.width / 2)
    y.set(e.clientY - r.top - r.height / 2)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index ?? 0) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMove} onMouseLeave={handleLeave}
        className={`relative rounded-3xl p-7 h-full flex flex-col cursor-default ${
          featured
            ? 'bg-[#0A0A0A] border-2 border-[#C9A84C] featured-pack'
            : 'bg-[#111111] border border-white/10 hover:border-[#C9A84C]/30'
        }`}
      >
        {badge && (
          <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap ${
            featured ? 'bg-[#C9A84C] text-[#0A0A0A]' : 'bg-white/10 text-white/70 border border-white/20'
          }`}>{badge}</div>
        )}

        <div className="mb-5">
          <h3 className={`font-playfair font-bold text-xl mb-1 ${featured ? 'text-[#C9A84C]' : 'text-white'}`}>{title}</h3>
          <div className="flex items-end gap-2 flex-wrap">
            <span className="font-playfair font-bold text-3xl text-white">{setup}</span>
            <span className="text-white/40 text-sm mb-0.5 font-inter">setup</span>
            <span className="text-white/40 text-sm mb-0.5 font-inter">+</span>
            <span className={`font-bold text-lg ${featured ? 'text-[#C9A84C]' : 'text-white/80'} font-inter`}>{monthly}</span>
            <span className="text-white/40 text-xs mb-0.5 font-inter">/mois</span>
          </div>
        </div>

        <div className={`w-full h-px mb-5 ${featured ? 'bg-[#C9A84C]/30' : 'bg-white/10'}`} />

        <ul className="flex-1 space-y-2.5 mb-7">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm font-inter">
              <Check size={14} className={`mt-0.5 flex-shrink-0 ${featured ? 'text-[#C9A84C]' : 'text-[#C9A84C]/60'}`} strokeWidth={2.5} />
              <span className={featured ? 'text-white/85' : 'text-white/55'}>{f}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href="https://wa.me/33756959078?text=Bonjour%2C%20je%20veux%20une%20d%C3%A9mo%20WalKin"
          target="_blank" rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm ${
            featured ? 'bg-[#C9A84C] text-[#0A0A0A] btn-gold' : 'bg-white/8 text-white hover:bg-white/15 border border-white/20'
          } transition-all`}
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        >
          <MessageCircle size={15} />
          Choisir {title}
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

// ── FAQ item ──────────────────────────────────────────────────────────────────
const walkinFaqs = [
  {
    q: 'Mes clients doivent-ils télécharger une application ?',
    a: 'Non, jamais. La carte s\'ajoute directement dans l\'application Portefeuille native de leur téléphone (Apple Wallet ou Google Wallet) via un simple scan QR code. Aucun compte à créer, aucune démarche. Ça prend 10 secondes.',
  },
  {
    q: 'Comment le tampon est-il validé en caisse ?',
    a: 'Vous appuyez sur "Valider achat" dans votre interface admin. Un QR code s\'affiche sur votre écran pendant 60 secondes. Votre client scanne avec son téléphone. Le tampon s\'ajoute automatiquement. Le QR code expire immédiatement après le scan — impossible de tricher.',
  },
  {
    q: 'En combien de temps est-on opérationnel ?',
    a: 'J0 : signature. J1 : formulaire de personnalisation (couleurs, logo, offre). J2 : votre carte est configurée. J3 : formation 45 minutes (en visio ou présentiel). J4 : vos premiers abonnés. Délai moyen entre signature et 1er tampon en caisse : 4 jours.',
  },
  {
    q: 'Puis-je changer mon offre de fidélité en cours de route ?',
    a: 'Oui, à tout moment depuis votre dashboard. Vous modifiez le nombre de tampons, la récompense, les couleurs de la carte. Les abonnés existants voient la mise à jour immédiatement. Aucune réinstallation de leur côté.',
  },
  {
    q: 'Les push notifications sont-elles illimitées ?',
    a: 'Oui, dès le Plan Starter. Vous pouvez envoyer autant de notifications que vous souhaitez, sans coût supplémentaire. Chaque envoi depuis votre dashboard prend moins de 30 secondes.',
  },
  {
    q: 'Est-ce que le système marche sans connexion internet en caisse ?',
    a: 'La génération du QR code nécessite une connexion internet (3G minimum). En cas de coupure, vous pouvez valider manuellement depuis votre interface admin et entrer le tampon en différé.',
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: 'Non. Tous nos plans sont sans engagement. Vous pouvez résilier à tout moment depuis votre dashboard ou en nous contactant. Le setup est facturé en une fois et non remboursable.',
  },
  {
    q: 'Puis-je avoir WalKin pour plusieurs établissements ?',
    a: 'Oui — c\'est le Plan Business. Vous gérez tous vos points de vente depuis un seul dashboard. Chaque établissement a sa propre carte fidélité, ses propres abonnés, et ses propres statistiques.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function WalkinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Boulangerie steps
  const boulangerieSteps = [
    {
      number: '01', emoji: '🚶',
      title: 'Le client entre, se souvient de la carte',
      description: 'Marie entre dans votre boulangerie pour sa baguette quotidienne. Elle aperçoit le QR code affiché au comptoir. En 5 secondes, elle sort son téléphone.',
      visual: (
        <div className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-xl">
          <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80" alt="Boulangerie" width={400} height={280} className="object-cover w-full" />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-xl px-3 py-1.5">
            <p className="text-white text-xs font-inter font-semibold">🥐 Boulangerie du Centre</p>
          </div>
        </div>
      ),
    },
    {
      number: '02', emoji: '📱',
      title: 'Elle scanne le QR code en 5 secondes',
      description: 'Votre gérant appuie sur "Valider achat" → un QR code s\'affiche 60 secondes → Marie scanne → tampon ajouté automatiquement. QR code détruit = impossible de tricher.',
      visual: (
        <div className="relative w-full max-w-xs">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
            <p className="text-xs text-[#6B6B6B] font-inter uppercase tracking-wider mb-3">QR Code dynamique</p>
            {/* Animated QR */}
            <div className="relative w-28 h-28 mx-auto mb-3">
              <div className="w-full h-full grid grid-cols-7 gap-0.5">
                {Array.from({ length: 49 }).map((_, i) => (
                  <div key={i} className={`rounded-sm ${
                    [0,1,2,3,4,5,6,7,13,14,20,21,27,28,34,35,41,42,48,8,15,22,29,36,43,
                     9,10,11,12,16,23,30,37,44,17,18,19,25,26,31,38,45,32,33,39,40,46,47
                    ].slice(0, 28).includes(i) ? 'bg-[#0A0A0A]' : 'bg-gray-100'
                  }`} />
                ))}
              </div>
              {/* Scan ray animation */}
              <motion.div
                className="absolute inset-x-0 h-0.5 bg-[#C9A84C] opacity-80"
                animate={{ top: ['10%', '90%', '10%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <p className="text-xs font-semibold text-[#10B981] font-inter">Expire dans 58s</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '03', emoji: '📲',
      title: 'La carte s\'ajoute à son Apple Wallet',
      description: 'Aucun compte à créer, aucune appli à télécharger. La carte est là, pour toujours, avec ses tampons mis à jour en temps réel.',
      visual: (
        <div className="relative w-full max-w-xs">
          {/* iOS notification banner */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 mb-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#1c1c1e] rounded-xl flex items-center justify-center flex-shrink-0">
                <Wallet size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1c1c1e] font-inter">Portefeuille</p>
                <p className="text-[10px] text-[#6B6B6B] font-inter">Carte ajoutée — Grain de Sel ☕</p>
              </div>
              <Check size={16} className="text-[#10B981] ml-auto" strokeWidth={2.5} />
            </div>
          </motion.div>
          <WalletCard shopName="Grain de Sel" shopEmoji="☕" primaryColor="#2D6A4F" stamps={1} maxStamps={10} reward="café offert" compact />
        </div>
      ),
    },
    {
      number: '04', emoji: '🔔',
      title: 'À sa 5ème visite, push automatique',
      description: 'Envoyé automatiquement. Zéro action de votre part. Le système détecte le seuil et envoie la notification au bon moment.',
      visual: (
        <PushNotificationMockup
          shopName="Boulangerie du Centre"
          message="Vous êtes à mi-chemin ! Plus que 5 visites pour votre viennoiserie offerte. On vous attend ! 🥐"
          time="08:45"
          emoji="🥐"
          animate
          compact
        />
      ),
    },
    {
      number: '05', emoji: '🎉',
      title: '10ème visite : récompense débloquée !',
      description: 'Marie repart ravie. Elle en parle à ses collègues. Elle revient. C\'est ça, la fidélisation qui fonctionne vraiment.',
      visual: (
        <div className="w-full max-w-xs space-y-3">
          <WalletCard shopName="Grain de Sel" shopEmoji="☕" primaryColor="#10B981" stamps={10} maxStamps={10} reward="🎉 Offert !" compact />
          <PushNotificationMockup
            shopName="Grain de Sel"
            message="🎉 Votre croissant est offert aujourd'hui ! Montrez cette carte en caisse."
            time="09:12"
            emoji="☕"
            animate
            compact
          />
        </div>
      ),
    },
  ]

  // Restaurant timeline
  const restaurantSteps = [
    { time: '11h45', emoji: '📲', title: 'Push automatique envoyé', content: '🍽️ Chez Karim — Menu du jour : Tajine d\'agneau + dessert maison → 13,50€. Commandez avant 12h → livré 12h30', isNotif: true },
    { time: '11h50', emoji: '📱', title: 'Yasmine commande en 2 clics', content: 'Elle ouvre WalKin, choisit son menu, paie via Apple Pay. Aucune inscription, aucune friction.', isNotif: false },
    { time: '11h51', emoji: '🔔', title: 'Karim reçoit la commande', content: '🔔 Commande #047 — Yasmine M. — 16 Rue Victor Hugo — Tajine + Coca + Tarte — 16,80€ ✓ Payé', isNotif: true },
    { time: '11h52', emoji: '✅', title: 'Confirmation envoyée', content: 'Votre commande est en préparation ✓ Livraison estimée 12h28', isNotif: true },
    { time: '12h32', emoji: '🚴', title: '"En route !" → "À votre porte !"', content: 'Deux push automatiques géolocalisés. Yasmine sait exactement où en est sa commande.', isNotif: false },
    { time: 'J+1', emoji: '⭐', title: 'Push avis Google automatique', content: 'Yasmine, vous avez aimé le tajine ? Laissez un avis Google 🌟 → [lien direct]', isNotif: true },
    { time: 'J+1', emoji: '🎯', title: '+1 tampon carte fidélité', content: '8/10 — Plus que 2 commandes pour votre dessert offert', isNotif: true },
  ]

  const commerces = [
    { icon: Coffee, label: 'Cafés & Boulangeries' },
    { icon: Utensils, label: 'Restaurants' },
    { icon: Scissors, label: 'Salons de coiffure' },
    { icon: Heart, label: 'Instituts de beauté' },
    { icon: Dumbbell, label: 'Salles de sport' },
    { icon: ShoppingBag, label: 'Boutiques mode' },
    { icon: Leaf, label: 'Épiceries & Bio' },
    { icon: PawPrint, label: 'Animaleries' },
    { icon: Pizza, label: 'Pizzerias & Snacks' },
  ]

  const pricingPlans = [
    {
      title: 'Starter', setup: '490€', monthly: '49€', badge: 'Idéal pour démarrer', featured: false,
      features: ['Carte fidélité personnalisée', 'Jusqu\'à 200 abonnés', 'Push notifications illimitées', 'Interface admin web', 'QR tampons dynamiques anti-fraude', 'Support email'],
    },
    {
      title: 'Pro', setup: '790€', monthly: '99€', badge: 'Le plus populaire ★', featured: true,
      features: ['Abonnés illimités', 'Analytics temps réel', 'Push automatiques (anniversaire, relance, rappel)', 'Offres privées abonnés', 'Beacon Bluetooth inclus', 'Support prioritaire WhatsApp'],
    },
    {
      title: 'Business', setup: '1 490€', monthly: '199€', badge: 'Restaurants & franchises', featured: false,
      features: ['Multi-sites dans un dashboard', 'Commandes directes (1,5% vs 30% UberEats)', 'Connexion caisse SumUp', 'Click & collect avec créneaux', 'Branding 100% personnalisé', 'Intégration livreur Stuart/Lalamove'],
    },
  ]

  const superPowers = [
    {
      icon: Bell,
      title: 'Push Notifications Intelligentes',
      text: 'Envoyez une notification directement sur l\'écran de verrouillage. Promo flash, fermeture, nouveau produit — zéro frais SMS, taux d\'ouverture 89%.',
      extra: (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-4 bg-[#1c2340] rounded-xl p-3 text-xs text-white/80 font-inter"
        >
          ☕ Coffee Corner — Croissants chauds dans 30 min !
        </motion.div>
      ),
    },
    {
      icon: Shield,
      title: 'Tampons Digitaux Anti-Fraude',
      text: 'QR code dynamique à usage unique généré pour chaque achat. Expire en 60 secondes. Impossible de scanner deux fois.',
      extra: (
        <div className="mt-4">
          <div className="flex justify-between text-xs font-inter mb-1.5">
            <span className="text-[#6B6B6B]">Marie D.</span>
            <span className="text-[#C9A84C] font-bold">7/10</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-[#C9A84C]" initial={{ width: 0 }}
              whileInView={{ width: '70%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} />
          </div>
        </div>
      ),
    },
    {
      icon: BarChart3,
      title: 'Dashboard Analytics',
      text: 'Sachez quels clients risquent de partir AVANT qu\'ils partent. Fréquence de visite, panier moyen, réponse aux notifications.',
      extra: (
        <div className="mt-4 flex gap-3 text-xs font-inter flex-wrap">
          {['247 abonnés', '89% ouverture', '4 à relancer'].map((s) => (
            <span key={s} className="bg-[#0A0A0A]/5 px-2.5 py-1 rounded-lg font-semibold text-[#0A0A0A]">{s}</span>
          ))}
        </div>
      ),
    },
    {
      icon: Smartphone,
      title: 'Zéro App, Zéro Friction',
      text: 'Apple Wallet (iOS 6+) et Google Wallet (Android 5+). La carte s\'ajoute en 10 secondes via QR code. Aucune démarche. Jamais.',
      extra: (
        <div className="mt-4 flex gap-2 flex-wrap text-xs font-inter">
          {['iOS 6+', 'Android 5+', 'PWA installable'].map((s) => (
            <span key={s} className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] px-2.5 py-1 rounded-full font-semibold">{s}</span>
          ))}
        </div>
      ),
    },
  ]

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ── SECTION 1 : HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #0D1117 50%, #1A1A2E 100%)' }}
      >
        <Particles />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-7"
              >
                <Star size={12} className="fill-current" /> Produit phare L-BOOST
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-playfair font-bold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
              >
                La carte de fidélité qui{' '}
                <span className="text-[#C9A84C]">parle à vos clients.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
                className="text-[#9CA3AF] text-lg font-inter leading-relaxed mb-8 max-w-lg"
              >
                Finis les tampons papier perdus. Envoyez le bon message, au bon moment, directement sur leur écran de verrouillage.
              </motion.p>

              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}
                className="space-y-3 mb-10"
              >
                {[
                  'Aucune application à télécharger pour vos clients',
                  'Push notifications illimitées vers tous vos abonnés',
                  'Dashboard temps réel depuis votre téléphone ou PC',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-inter text-sm">
                    <Check size={16} className="text-[#C9A84C] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="https://wa.me/33756959078?text=Bonjour%2C%20je%20veux%20une%20d%C3%A9mo%20WalKin"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-gold px-7 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  aria-label="Demander une démo WalKin gratuite"
                >
                  <MessageCircle size={18} />
                  Demander une démo gratuite
                </motion.a>
                <button
                  onClick={() => document.querySelector('#comment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-[#C9A84C] font-semibold text-base flex items-center gap-2 transition-colors"
                  aria-label="Voir comment WalKin fonctionne"
                >
                  Voir comment ça marche <ChevronDown size={18} />
                </button>
              </motion.div>
            </div>

            {/* Right — phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <HeroPhoneFrame />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : MÉTRIQUES ─────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 94, suffix: '%', label: 'de marge nette', sub: 'après frais WalKin' },
              { value: 3, suffix: ' min', label: 'de setup', sub: 'opérationnel en 4 jours' },
              { value: 23, suffix: '', label: 'visites/mois/client', sub: 'vs 0,9 sans fidélité', pre: '+' },
              { value: 0, suffix: '€', label: 'de commission', sub: 'sur vos ventes directes' },
            ].map(({ value, suffix, label, sub, pre }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div className="font-playfair font-bold text-[#C9A84C] mb-1" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                  {value === 0 ? '0€' : value === 23 ? '+2,3' : (
                    <CountUpNumber end={value} suffix={suffix} prefix={pre ?? ''} duration={2000} />
                  )}
                </div>
                <p className="text-white font-semibold text-sm font-inter">{label}</p>
                <p className="text-white/35 text-xs font-inter mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : NO APP ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <AnimatedSection direction="right">
              <div className="section-divider mx-0" />
              <h2 className="font-playfair font-bold text-[#0A0A0A] mb-6" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
                Pas d&apos;app à télécharger. <span className="text-[#C9A84C]">Jamais.</span>
              </h2>
              <p className="text-[#6B6B6B] text-lg font-inter leading-relaxed mb-8">
                Votre carte de fidélité vit directement dans l&apos;application Portefeuille native de votre client — celle qu&apos;il utilise déjà pour sa carte bancaire et ses billets d&apos;avion. Un simple scan QR code en caisse, et c&apos;est dans son téléphone pour toujours.
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: '🍎 Apple Wallet', bg: '#000', color: '#fff' },
                  { label: '🤖 Google Wallet', bg: '#4285F4', color: '#fff' },
                  { label: '⚡ En 10 secondes', bg: '#C9A84C', color: '#0A0A0A' },
                ].map(({ label, bg, color }) => (
                  <span key={label} className="px-4 py-2 rounded-full text-xs font-bold font-inter"
                    style={{ background: bg, color }}>{label}</span>
                ))}
              </div>
            </AnimatedSection>

            {/* Right */}
            <DualPhoneMockup />
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : BOULANGERIE ───────────────────────────────────────── */}
      <section id="comment" className="py-20 md:py-28" style={{ background: '#F5F5EC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Mettez-vous à la place de votre client
            </h2>
            <p className="text-[#6B6B6B] font-inter text-lg max-w-2xl mx-auto">
              Un scénario réel, dans une vraie boulangerie.
            </p>
          </AnimatedSection>
          <StepScenario steps={boulangerieSteps} />
        </div>
      </section>

      {/* ── SECTION 5 : SUPER-POUVOIRS ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Ce que WalKin fait pour vous, <span className="text-[#C9A84C]">24h/24</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {superPowers.map(({ icon: Icon, title, text, extra }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 0 0 1px #C9A84C, 0 20px 50px rgba(201,168,76,0.12)' }}
                className="bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="w-11 h-11 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#C9A84C]" strokeWidth={1.8} />
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#0A0A0A] mb-3">{title}</h3>
                <p className="text-[#6B6B6B] text-sm font-inter leading-relaxed">{text}</p>
                {extra}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : RESTAURANT TIMELINE ──────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
              Arrêtez de donner <span className="text-[#EF4444]">30%</span> à UberEats
            </h2>
            <p className="text-white/50 font-inter text-lg">Karim récupère 3 000€/mois avec WalKin.</p>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-6">
              {restaurantSteps.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex gap-5 items-start"
                >
                  {/* Time badge */}
                  <div className="flex-shrink-0 w-[88px] text-right hidden md:block">
                    <span className="text-[#C9A84C] text-xs font-bold font-inter bg-[#C9A84C]/10 px-2.5 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C] flex items-center justify-center flex-shrink-0 hidden md:flex mt-1">
                    <span className="text-[10px]">{step.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-2xl p-4 border ${step.isNotif ? 'border-[#C9A84C]/20 bg-[#C9A84C]/5' : 'border-white/8 bg-white/3'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="md:hidden text-[10px] text-[#C9A84C] font-bold font-inter">{step.time}</span>
                      <span className="text-white text-xs font-bold font-inter">{step.title}</span>
                    </div>
                    <p className={`text-xs font-inter leading-relaxed ${step.isNotif ? 'text-white/70 italic' : 'text-white/50'}`}>
                      {step.isNotif ? `"${step.content}"` : step.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparatif */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 rounded-3xl p-8 border-2 border-[#C9A84C]/40"
            style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)' }}
          >
            <h3 className="font-playfair font-bold text-[#C9A84C] text-xl mb-6 text-center">Le calcul qui parle</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-inter uppercase tracking-wider">UberEats</p>
                <p className="text-[#EF4444] font-bold text-2xl font-inter">−3 000€</p>
                <p className="text-white/40 text-xs font-inter">de commission / mois</p>
              </div>
              <div className="flex items-center justify-center text-[#C9A84C] text-3xl font-bold font-playfair">vs</div>
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-inter uppercase tracking-wider">WalKin + Stripe</p>
                <p className="text-[#10B981] font-bold text-2xl font-inter">−175€</p>
                <p className="text-white/40 text-xs font-inter">de frais / mois (1,5%)</p>
              </div>
            </div>
            <div className="border-t border-[#C9A84C]/20 mt-6 pt-6 text-center">
              <p className="text-[#C9A84C] font-bold text-3xl font-playfair mb-1">+2 825€/mois NET</p>
              <p className="text-white/50 text-sm font-inter">WalKin Business = 199€/mois · ROI en 3 jours ✓</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7 : SALON COIFFURE ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Samira ne perd plus ses clientes <span className="text-[#C9A84C]">entre deux coupes</span>
            </h2>
          </AnimatedSection>

          <BeforeAfter
            before={[
              'Cartes papier froissées ou oubliées à la maison',
              'Aucun moyen de recontacter les clientes',
              'Créneaux vides = 35€ perdus à chaque fois',
              'Promos que personne ne voit',
              'Aucune donnée sur les habitudes de sa clientèle',
            ]}
            after={[
              'Carte toujours dans le téléphone, impossible à perdre',
              'Push ciblé : "Votre coloration a 3 mois — offre rafraîchissement"',
              'Push créneaux libres : "Disponibilité demain 14h — 1ère réponse = réservé"',
              'Promo flash à toutes ses abonnées en 1 clic',
              'Dashboard : top clientes, fréquence de visite, clientes à relancer',
            ]}
          />

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 rounded-3xl p-8 border border-[#C9A84C]/20 max-w-3xl mx-auto"
            style={{ background: 'rgba(201,168,76,0.05)' }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#C9A84C]">★</span>)}
            </div>
            <blockquote className="font-playfair italic text-xl text-[#0A0A0A] leading-relaxed mb-5">
              &ldquo;En 2 mois avec WalKin, j&apos;ai vu revenir des clientes que je n&apos;avais pas vues depuis 6 mois. Le push &lsquo;votre couleur a besoin d&apos;un rafraîchissement&rsquo; a tout changé pour moi. J&apos;ai récupéré 4 créneaux perdus la première semaine.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0A0A0A] font-bold font-playfair text-sm">AS</div>
              <div>
                <p className="font-semibold text-[#0A0A0A] text-sm font-inter">Amina S.</p>
                <p className="text-[#6B6B6B] text-xs font-inter">Gérante · Salon Lumière, Troyes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 8 : COMMERCES ────────────────────────────────────────── */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Fait pour tous les <span className="text-[#C9A84C]">commerces de proximité</span>
            </h2>
            <p className="text-[#6B6B6B] font-inter max-w-xl mx-auto">
              Si vous avez des clients qui reviennent, vous avez besoin de WalKin.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4">
            {commerces.map(({ icon: Icon, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05, color: '#C9A84C' }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#C9A84C]/40 cursor-default transition-all duration-300 group"
              >
                <Icon size={24} className="text-[#6B6B6B] group-hover:text-[#C9A84C] transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] text-center text-[#6B6B6B] group-hover:text-[#0A0A0A] font-inter transition-colors leading-tight">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 : DASHBOARD ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Tout dans votre poche, <span className="text-[#C9A84C]">simple comme bonjour</span>
            </h2>
            <p className="text-[#6B6B6B] font-inter max-w-xl mx-auto">
              Votre tableau de bord WalKin — depuis votre téléphone ou votre ordinateur.
            </p>
          </AnimatedSection>
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── SECTION 10 : TARIFS ──────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Un investissement qui se rembourse{' '}
              <span className="text-[#C9A84C]">dès le premier client fidélisé</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.title} {...plan} index={i} />
            ))}
          </div>

          {/* Addons */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-10"
          >
            <p className="text-white/30 text-xs font-inter uppercase tracking-wider mb-3">Options & Addons</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/25 font-inter">
              <span>Beacon Bluetooth : 29€ + 9€/mois</span>
              <span>·</span>
              <span>Push géoschédulés : 19€/mois</span>
              <span>·</span>
              <span>Analytics PDF : 19€/mois</span>
              <span>·</span>
              <span>API access : 49€/mois</span>
            </div>
          </motion.div>

          <div className="text-center">
            <p className="text-white/40 font-inter mb-4">Pas sûr(e) de quelle formule choisir ? On vous conseille gratuitement.</p>
            <motion.a
              href="https://wa.me/33756959078?text=Bonjour%2C%20je%20veux%20une%20d%C3%A9mo%20WalKin"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-xl font-bold text-sm"
              whileHover={{ scale: 1.03 }}
              aria-label="Parler à un expert WalKin sur WhatsApp"
            >
              <MessageCircle size={16} />
              En parler sur WhatsApp →
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── SECTION 11 : FAQ ─────────────────────────────────────────────── */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-[#0A0A0A] mb-4" style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}>
              Questions fréquentes
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {walkinFaqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openFaq === i ? 'border-[#C9A84C]/40 bg-[#C9A84C]/5' : 'border-[#0A0A0A]/8 bg-white hover:border-[#0A0A0A]/15'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className={`font-inter font-medium text-base transition-colors ${openFaq === i ? 'text-[#C9A84C]' : 'text-[#0A0A0A]'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 transition-colors ${openFaq === i ? 'text-[#C9A84C]' : 'text-[#0A0A0A]/40'}`}>
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
                      <div className="px-6 pb-5 text-[#6B6B6B] font-inter text-sm leading-relaxed border-t border-[#0A0A0A]/8 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12 : CTA FINAL ───────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-24 md:py-36 relative overflow-hidden">
        <Particles />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="section-divider" />
            <h2 className="font-playfair font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(30px, 5vw, 56px)' }}>
              Prêt à transformer vos clients en <span className="text-[#C9A84C]">ambassadeurs</span> ?
            </h2>
            <p className="text-white/50 text-lg font-inter mb-4 max-w-xl mx-auto">
              Demandez une démo gratuite de 30 minutes. On configure votre carte fidélité en direct. Aucun engagement.
            </p>
            <motion.a
              href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20une%20d%C3%A9mo%20WalKin%20pour%20mon%20commerce"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-10 py-5 rounded-2xl text-lg font-bold tracking-wide hover:bg-[#C9A84C] transition-all duration-300 shadow-2xl mt-4"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Demander une démo WalKin gratuite"
            >
              <MessageCircle size={22} />
              Demander ma démo gratuite →
            </motion.a>
            <p className="mt-5 text-white/30 font-inter text-sm tracking-widest">07 56 95 90 78</p>
            <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
              {['Réponse sous 2h', 'Démo personnalisée', 'Zéro engagement'].map((g) => (
                <span key={g} className="flex items-center gap-1.5 text-white/40 text-xs font-inter">
                  <Check size={12} className="text-[#10B981]" strokeWidth={2.5} /> {g}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}
