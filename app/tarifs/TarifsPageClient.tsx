'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ShieldCheck,
  Clock,
  MessageCircle,
  Palette,
  Globe,
  Users,
  CreditCard,
  Zap,
  Search,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import CTAContact from '@/components/CTAContact'
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection'
import LenaInlineCTA from '@/components/LenaInlineCTA'

// ── Plans data ───────────────────────────────────────────────────────────────
const plans = [
  {
    nom: 'Essentiel',
    description: 'Pour démarrer proprement en ligne',
    amorce12: 490,
    mensuel12: 79,
    amorce24: 0,
    mensuel24: 109,
    featured: false,
    features: [
      'Site vitrine 5 pages sur-mesure',
      'Visible sur Google dès le lancement',
      'Formulaire de contact WhatsApp intégré',
      'Adapté téléphone, tablette, ordinateur',
      'Hébergement et nom de domaine inclus',
      'Mises à jour de sécurité incluses',
      'Support par email sous 48h',
    ],
    cta: 'Démarrer avec Essentiel',
    whatsapp: 'Bonjour, je suis intéressé par la formule Essentiel. Pouvez-vous me contacter ?',
  },
  {
    nom: 'Boost',
    description: 'Pour attirer plus de clients et les fidéliser',
    amorce12: 890,
    mensuel12: 149,
    amorce24: 0,
    mensuel24: 199,
    featured: true,
    badge: 'Le plus choisi',
    features: [
      'Tout le plan Essentiel',
      'Site avec blog et animations premium',
      'Chatbot IA personnalisé (FAQ + RDV)',
      '1 mois de community management offert',
      'Référencement local optimisé',
      'Rapport mensuel de performance',
      'Support prioritaire WhatsApp sous 2h',
    ],
    cta: 'Démarrer avec Boost',
    whatsapp: 'Bonjour, je suis intéressé par la formule Boost. Pouvez-vous me contacter ?',
  },
  {
    nom: 'Premium IA',
    description: 'Pour automatiser et scaler votre activité',
    amorce12: 1490,
    mensuel12: 249,
    amorce24: 0,
    mensuel24: 329,
    featured: false,
    features: [
      'Tout le plan Boost',
      'Carte fidélité digitale WalKin incluse',
      'Agents IA sur-mesure pour votre métier',
      'Automatisations complètes (emails, relances)',
      'Tableau de bord analytics client',
      'Community management 3 mois inclus',
      'Accompagnement stratégique mensuel',
    ],
    cta: 'Démarrer avec Premium IA',
    whatsapp: 'Bonjour, je suis intéressé par la formule Premium IA. Pouvez-vous me contacter ?',
  },
]

// ── Plans One Shot ───────────────────────────────────────────────────────────
const plansOneShot = [
  {
    nom: 'Pack Starter',
    description: 'Idéal pour démarrer',
    prix: 1490,
    paiement3x: true,
    paiement3xMontant: 497,
    delai: 'Livraison sous 7 jours',
    featured: false,
    features: [
      'Logo + Favicon + Bannière réseaux sociaux',
      'Site vitrine 5 pages (Next.js)',
      'Formulaire contact WhatsApp intégré',
      'SEO On-Page de base',
      'Vous recevez tous les fichiers sources',
      'Support 30 jours inclus',
    ],
    cta: 'Choisir le Pack Starter',
    whatsapp: 'Bonjour, je suis intéressé par le Pack Starter en paiement unique (1 490€ HT).',
  },
  {
    nom: 'Pack Business',
    description: 'Le plus populaire',
    prix: 2490,
    paiement3x: true,
    paiement3xMontant: 830,
    delai: 'Livraison sous 14-21 jours',
    badge: 'Le plus choisi',
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
    cta: 'Choisir le Pack Business',
    whatsapp: 'Bonjour, je suis intéressé par le Pack Business en paiement unique (2 490€ HT).',
  },
  {
    nom: 'Pack Premium',
    description: 'Solution complète',
    prix: null,
    paiement3x: true,
    paiement3xMontant: 0,
    delai: 'Délai selon le projet',
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
    cta: 'Demander un devis',
    whatsapp: 'Bonjour, je souhaite un devis pour le Pack Premium en paiement unique.',
  },
]

// ── À la carte ───────────────────────────────────────────────────────────────
const alaCarte = [
  {
    icon: Palette,
    titre: 'Branding complet',
    description: 'Logo, charte graphique, favicon, bannières',
    prix: 'À partir de 490€ HT',
    note: 'Livraison en 2 semaines',
    href: '/services/branding',
  },
  {
    icon: Globe,
    titre: 'Site vitrine one-shot',
    description: 'Votre site en une seule fois, sans abonnement',
    prix: 'À partir de 890€ HT',
    note: 'Hébergement non inclus',
    href: '/services/site-web',
  },
  {
    icon: Users,
    titre: 'Community Management',
    description: 'Gestion de vos réseaux sociaux',
    prix: 'À partir de 349€/mois HT',
    note: 'Sans engagement minimum',
    href: '/services/community-management',
  },
  {
    icon: CreditCard,
    titre: 'WalKin carte fidélité',
    description: 'Carte fidélité digitale + push notifications',
    prix: '490€ setup + 49€/mois HT',
    note: 'Voir la page dédiée →',
    href: '/walkin',
  },
  {
    icon: Zap,
    titre: 'Automatisations',
    description: 'Workflows sur-mesure selon vos besoins',
    prix: 'Sur devis',
    note: 'Appel de découverte gratuit',
    href: '/services/automatisations-ia',
  },
  {
    icon: Search,
    titre: 'Audit visibilité',
    description: 'Analyse complète de votre présence en ligne',
    prix: 'Gratuit',
    note: null,
    badge: 'Offert',
  },
]

// ── FAQ ──────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'Les prix sont TTC ou HT ?',
    reponse:
      'Tous nos prix sont affichés HT (hors taxes). Si vous êtes particulier ou non assujetti à la TVA, contactez-nous pour un devis TTC adapté.',
  },
  {
    question: 'Que se passe-t-il si je veux résilier ?',
    reponse:
      "Pour le 12 mois : résiliation possible à l'échéance, sans frais si vous nous prévenez 30 jours avant. Pour le 24 mois : résiliation anticipée = 3 dernières mensualités dues. Tout est précisé dans votre contrat.",
  },
  {
    question: "L'hébergement et le nom de domaine sont inclus ?",
    reponse:
      "Oui, dans toutes nos formules d'abonnement. Vous n'avez rien à payer en plus pour que votre site soit en ligne. Nom de domaine + hébergement premium inclus.",
  },
  {
    question: 'Je peux changer de formule en cours de route ?',
    reponse:
      "Oui, vous pouvez monter en formule à tout moment. La différence est calculée au prorata. Vous ne pouvez pas descendre en cours d'engagement — c'est prévu dans le contrat.",
  },
  {
    question: 'Y a-t-il des frais cachés ?',
    reponse:
      "Non. Ce que vous voyez est ce que vous payez. Certains services optionnels (campagnes publicitaires, shooting photo, formations) sont facturés en plus si vous les demandez — mais jamais sans votre accord préalable.",
  },
  {
    question: 'Comment se passe le premier mois ?',
    reponse:
      "Vous signez, on démarre. Votre site est en ligne dans les 10 jours. Le premier prélèvement part à J+30. Si pour n'importe quelle raison vous n'êtes pas satisfait du résultat à J+30, on vous rembourse intégralement.",
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TarifsPageClient() {
  const [mode, setMode] = useState<'abonnement' | 'oneshot'>('abonnement')
  const [isLeasing, setIsLeasing] = useState(false)

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A]">
        {/* ═══════════════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════════════ */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] px-5 py-2 rounded-full text-sm font-inter font-semibold tracking-wide mb-8"
              >
                <ShieldCheck size={16} />
                Transparent sur nos prix
              </motion.div>

              {/* H1 */}
              <h1
                className="font-playfair font-bold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
              >
                Des formules claires,
                <br />
                sans mauvaise surprise.
              </h1>

              {/* Sous-titre doré */}
              <p className="text-[#C9A84C] font-inter text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
                Pas de devis qui traîne 3 semaines.
                <br className="hidden md:block" />
                Un prix lisible, un engagement clair, des résultats mesurables.
              </p>

              {/* Sous-titre gris */}
              <p className="text-[#9CA3AF] font-inter text-base max-w-xl mx-auto mb-2 leading-relaxed">
                Vous choisissez votre formule, on démarre sous 10 jours.
                <br className="hidden md:block" />
                Garantie J+30 : si le site livré ne correspond pas à ce qui a été validé ensemble,
                on rembourse votre première mensualité — sans discussion.
              </p>
              <p className="text-[#6B7280] font-inter text-xs max-w-md mx-auto mb-10 leading-relaxed">
                L&apos;amorce de création reste due — elle couvre le travail de conception et développement déjà réalisé.
              </p>

              {/* 3 garanties */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {[
                  { icon: ShieldCheck, text: 'Sans engagement au-delà de votre formule' },
                  { icon: Clock, text: 'Tarifs HT — devis personnalisé sur demande' },
                  { icon: MessageCircle, text: 'Réponse sous 2h sur WhatsApp' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={16} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="text-white/60 text-sm font-inter">{text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTION 2 — TOGGLES + PRICING CARDS
        ═══════════════════════════════════════════════════ */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Toggle Abonnement / One Shot */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div
                className="inline-flex rounded-full p-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <button
                  onClick={() => { setMode('abonnement'); setIsLeasing(false) }}
                  className="px-6 md:px-8 py-3 rounded-full font-inter font-semibold text-[15px] transition-all duration-300"
                  style={{
                    background: mode === 'abonnement' ? '#C9A84C' : 'transparent',
                    color: mode === 'abonnement' ? '#0A0A0A' : '#9CA3AF',
                  }}
                >
                  Abonnement mensuel
                </button>
                <button
                  onClick={() => setMode('oneshot')}
                  className="px-6 md:px-8 py-3 rounded-full font-inter font-semibold text-[15px] transition-all duration-300"
                  style={{
                    background: mode === 'oneshot' ? '#C9A84C' : 'transparent',
                    color: mode === 'oneshot' ? '#0A0A0A' : '#9CA3AF',
                  }}
                >
                  Paiement unique
                </button>
              </div>

              {/* Sous-texte contextuel */}
              <p className="text-[#6B7280] text-sm font-inter text-center">
                {mode === 'abonnement'
                  ? "Hébergement, maintenance et support inclus · Résiliable à l'échéance"
                  : 'Paiement en une fois · Hébergement non inclus · Vous êtes propriétaire du site'}
              </p>
            </div>

            {/* Content by mode */}
            <AnimatePresence mode="wait">
              {mode === 'abonnement' ? (
                <motion.div
                  key="abonnement"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {/* Toggle 12/24 mois */}
                  <div className="flex items-center justify-center gap-4 mb-14">
                    <span className={`font-inter font-semibold text-sm transition-colors ${!isLeasing ? 'text-white' : 'text-white/40'}`}>
                      12 mois
                    </span>
                    <button
                      onClick={() => setIsLeasing(!isLeasing)}
                      className="relative w-16 h-8 rounded-full transition-colors duration-300"
                      style={{
                        background: isLeasing ? 'linear-gradient(135deg, #C9A84C, #E4C46E)' : 'rgba(255,255,255,0.1)',
                        border: `1px solid ${isLeasing ? '#C9A84C' : 'rgba(255,255,255,0.2)'}`,
                      }}
                      aria-label="Basculer entre 12 et 24 mois"
                    >
                      <motion.div
                        className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
                        animate={{ left: isLeasing ? '34px' : '4px' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                    </button>
                    <span className={`font-inter font-semibold text-sm transition-colors ${isLeasing ? 'text-white' : 'text-white/40'}`}>
                      24 mois
                    </span>
                    {isLeasing && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[#C9A84C] text-xs font-inter font-semibold bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-3 py-1 rounded-full"
                      >
                        0€ de départ
                      </motion.span>
                    )}
                  </div>

                  {/* Abonnement Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
                    {plans.map((plan, i) => {
                      const amorce = isLeasing ? plan.amorce24 : plan.amorce12
                      const mensuel = isLeasing ? plan.mensuel24 : plan.mensuel12
                      const total = isLeasing ? mensuel * 24 : amorce + mensuel * 12
                      const duree = isLeasing ? 24 : 12

                      return (
                        <motion.div
                          key={plan.nom}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                          style={{ perspective: 800 }}
                        >
                          <motion.div
                            whileHover={{ y: -6, rotateX: 2, rotateY: plan.featured ? 0 : (i === 0 ? 2 : -2) }}
                            transition={{ duration: 0.3 }}
                            className={`relative rounded-[20px] p-8 md:p-10 h-full flex flex-col transition-shadow duration-300 ${
                              plan.featured
                                ? 'border-2 border-[#C9A84C] lg:scale-[1.03]'
                                : 'border border-white/10 hover:border-[#C9A84C]/30'
                            }`}
                            style={{
                              background: plan.featured ? 'linear-gradient(145deg, #1A1A1A, #111)' : 'rgba(255,255,255,0.03)',
                              boxShadow: plan.featured ? '0 0 60px rgba(201,168,76,0.15)' : 'none',
                            }}
                          >
                            {plan.badge && (
                              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] text-xs font-bold px-5 py-1.5 rounded-full tracking-widest uppercase whitespace-nowrap">
                                {plan.badge}
                              </div>
                            )}

                            <div className="mb-6">
                              <h3 className={`font-playfair font-bold text-2xl mb-1 ${plan.featured ? 'text-[#C9A84C]' : 'text-white'}`}>
                                {plan.nom}
                              </h3>
                              <p className="text-white/40 text-sm font-inter">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                              {isLeasing ? (
                                <span className="inline-flex items-center gap-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-[11px] font-inter font-semibold px-3 py-1 rounded-full mb-3">
                                  0€ à la signature
                                </span>
                              ) : (
                                <p className="text-[#6B7280] text-sm font-inter mb-2">
                                  {amorce}€ HT à la signature
                                </p>
                              )}

                              {!isLeasing && plan.nom === 'Premium IA' && (
                                <div className="flex items-center gap-1.5 mb-3">
                                  <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                                  <span className="text-[#9CA3AF] text-xs font-inter">ou 3 × 497€ HT sans frais</span>
                                </div>
                              )}

                              <div className="flex items-end gap-1">
                                <motion.span
                                  key={`${plan.nom}-${isLeasing}`}
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="font-inter font-extrabold text-white leading-none"
                                  style={{ fontSize: '52px' }}
                                >
                                  {mensuel}€
                                </motion.span>
                                <span className="text-[#9CA3AF] text-base font-inter mb-2">/mois HT</span>
                              </div>

                              <p className="text-[#6B7280] text-[13px] font-inter mt-1">
                                Engagement {duree} mois · Total {total.toLocaleString('fr-FR')}€ HT
                              </p>
                            </div>

                            <div className={`w-full h-px mb-6 ${plan.featured ? 'bg-[#C9A84C]/30' : 'bg-white/10'}`} />

                            <ul className="flex-1 space-y-3 mb-8">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                  <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-[#C9A84C]' : 'text-[#C9A84C]/70'}`} strokeWidth={2.5} />
                                  <span className="text-[#D1D5DB] text-sm font-inter leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            <motion.a
                              href={`https://wa.me/33756959078?text=${encodeURIComponent(plan.whatsapp)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[15px] font-inter tracking-wide transition-all duration-300 ${
                                plan.featured
                                  ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E4C46E]'
                                  : 'bg-transparent border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <MessageCircle size={16} />
                              {plan.cta}
                            </motion.a>

                            <a
                              href={`https://wa.me/33756959078?text=${encodeURIComponent(plan.whatsapp)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-center text-[#6B7280] hover:text-[#C9A84C] text-xs font-inter mt-3 transition-colors"
                            >
                              Des questions sur cette formule ? →
                            </a>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Note 3x payment */}
                  <p className="text-center text-[#6B7280] text-[13px] font-inter mt-8">
                    Paiement en 3 fois sans frais disponible pour les amorces supérieures à 1 200€ HT ·{' '}
                    <a
                      href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20payer%20en%203%20fois."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9A84C] hover:underline"
                    >
                      En savoir plus →
                    </a>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="oneshot"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {/* One Shot Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch mt-8">
                    {plansOneShot.map((plan, i) => (
                      <motion.div
                        key={plan.nom}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        style={{ perspective: 800 }}
                      >
                        <motion.div
                          whileHover={{ y: -6, rotateX: 2, rotateY: plan.featured ? 0 : (i === 0 ? 2 : -2) }}
                          transition={{ duration: 0.3 }}
                          className={`relative rounded-[20px] p-8 md:p-10 h-full flex flex-col transition-shadow duration-300 ${
                            plan.featured
                              ? 'border-2 border-[#C9A84C] lg:scale-[1.03]'
                              : 'border border-white/10 hover:border-[#C9A84C]/30'
                          }`}
                          style={{
                            background: plan.featured ? 'linear-gradient(145deg, #1A1A1A, #111)' : 'rgba(255,255,255,0.03)',
                            boxShadow: plan.featured ? '0 0 60px rgba(201,168,76,0.15)' : 'none',
                          }}
                        >
                          {plan.badge && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] text-xs font-bold px-5 py-1.5 rounded-full tracking-widest uppercase whitespace-nowrap">
                              {plan.badge}
                            </div>
                          )}

                          {/* Header */}
                          <div className="mb-6">
                            <h3 className={`font-playfair font-bold text-2xl mb-1 ${plan.featured ? 'text-[#C9A84C]' : 'text-white'}`}>
                              {plan.nom}
                            </h3>
                            <p className="text-white/40 text-sm font-inter">{plan.description}</p>
                          </div>

                          {/* Prix */}
                          <div className="mb-6">
                            {plan.prix ? (
                              <>
                                <div className="flex items-end gap-1">
                                  <span className="font-playfair font-extrabold text-white leading-none" style={{ fontSize: '52px' }}>
                                    {plan.prix.toLocaleString('fr-FR')}€
                                  </span>
                                  <span className="text-[#9CA3AF] text-base font-inter mb-2"> HT</span>
                                </div>
                                <p className="text-[#6B7280] text-[13px] font-inter mt-1">
                                  Paiement unique · Pas d&apos;abonnement
                                </p>
                              </>
                            ) : (
                              <>
                                <span className="font-playfair font-extrabold text-white leading-none" style={{ fontSize: '36px' }}>
                                  Sur devis
                                </span>
                                <p className="text-[#6B7280] text-[13px] font-inter mt-2">
                                  Selon votre projet · Réponse sous 48h
                                </p>
                              </>
                            )}

                            {/* Badge 3x */}
                            {plan.paiement3x && plan.paiement3xMontant > 0 && (
                              <div className="inline-flex items-center gap-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-3 py-1 mt-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                  <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                <span className="text-[#C9A84C] text-xs font-inter font-medium">
                                  ou 3 × {plan.paiement3xMontant}€ HT sans frais
                                </span>
                              </div>
                            )}
                            {plan.paiement3x && plan.paiement3xMontant === 0 && (
                              <div className="inline-flex items-center gap-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-3 py-1 mt-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                  <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                <span className="text-[#C9A84C] text-xs font-inter font-medium">
                                  Paiement en 3 fois disponible
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Délai */}
                          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg mb-5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                            <Clock size={14} className="text-[#C9A84C]" />
                            <span className="text-[#9CA3AF] text-[13px] font-inter">{plan.delai}</span>
                          </div>

                          {/* Divider */}
                          <div className={`w-full h-px mb-6 ${plan.featured ? 'bg-[#C9A84C]/30' : 'bg-white/10'}`} />

                          {/* Features */}
                          <ul className="flex-1 space-y-3 mb-8">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-[#C9A84C]' : 'text-[#C9A84C]/70'}`} strokeWidth={2.5} />
                                <span className="text-[#D1D5DB] text-sm font-inter leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA */}
                          <motion.a
                            href={`https://wa.me/33756959078?text=${encodeURIComponent(plan.whatsapp)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[15px] font-inter tracking-wide transition-all duration-300 ${
                              plan.featured
                                ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E4C46E]'
                                : 'bg-transparent border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <MessageCircle size={16} />
                            {plan.cta}
                          </motion.a>

                          <a
                            href={`https://wa.me/33756959078?text=${encodeURIComponent(plan.whatsapp)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center text-[#6B7280] hover:text-[#C9A84C] text-xs font-inter mt-3 transition-colors"
                          >
                            Des questions sur cette formule ? →
                          </a>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Note One Shot + option maintenance */}
                  <div
                    className="max-w-2xl mx-auto mt-8 rounded-xl p-6 text-center"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <p className="text-[#9CA3AF] text-sm font-inter leading-relaxed">
                      En paiement unique, vous êtes propriétaire de votre site et de tous les fichiers sources.
                    </p>

                    {/* Option maintenance — présentée comme un bonus, pas une obligation */}
                    <div
                      className="inline-flex items-center gap-3 mt-4 px-5 py-3 rounded-lg"
                      style={{
                        background: 'rgba(201,168,76,0.06)',
                        border: '1px solid rgba(201,168,76,0.15)',
                      }}
                    >
                      <ShieldCheck size={16} className="text-[#C9A84C] flex-shrink-0" />
                      <p className="text-white/60 text-[13px] font-inter text-left">
                        <span className="text-[#C9A84C] font-semibold">Option tranquillité</span> — Maintenance, mises à jour et support continu disponibles à partir de 49€/mois si vous le souhaitez.
                      </p>
                    </div>

                    <p className="text-[#6B7280] text-[13px] font-inter mt-4 italic">
                      Vous préférez tout inclus sans vous soucier de rien ?{' '}
                      <button
                        onClick={() => setMode('abonnement')}
                        className="text-[#C9A84C] bg-transparent border-none cursor-pointer text-[13px] font-inter"
                        style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}
                      >
                        Voir les formules avec maintenance →
                      </button>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTION 3 — LEASING EXPLANATION (24 mois only)
        ═══════════════════════════════════════════════════ */}
        <AnimatePresence>
          {mode === 'abonnement' && isLeasing && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h3
                    className="font-playfair font-bold text-[#0A0A0A] mb-6"
                    style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
                  >
                    L&apos;option sans apport — comment ça fonctionne
                  </h3>

                  <p className="text-[#4B5563] font-inter text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                    C&apos;est le même principe qu&apos;un leasing voiture. Vous ne payez rien à la signature.
                    Votre site est en ligne dans 10 jours. Et vous ne payez que votre mensualité à partir
                    du 30ème jour — le temps de voir les premiers résultats.
                  </p>

                  {/* Comparatif */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                    {/* 12 mois */}
                    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-left">
                      <p className="text-[#6B7280] text-[11px] font-inter font-semibold tracking-widest uppercase mb-5">
                        Formule standard 12 mois
                      </p>
                      {[
                        { label: 'À la signature', value: '490€' },
                        { label: 'Par mois', value: '79€' },
                        { label: 'Total', value: '1 438€ HT' },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between items-center py-2 border-b border-[#F3F4F6] last:border-0">
                          <span className="text-[#6B7280] text-sm font-inter">{row.label}</span>
                          <span className="text-[#0A0A0A] text-sm font-inter font-semibold">{row.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* 24 mois */}
                    <div className="bg-[#0A0A0A] border-2 border-[#C9A84C] rounded-2xl p-8 text-left">
                      <p className="text-[#C9A84C] text-[11px] font-inter font-semibold tracking-widest uppercase mb-5">
                        Option leasing 24 mois
                      </p>
                      {[
                        { label: 'À la signature', value: '0€', gold: true },
                        { label: 'Par mois', value: '109€' },
                        { label: 'Total', value: '2 616€ HT' },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                          <span className="text-white/50 text-sm font-inter">{row.label}</span>
                          <span className={`text-sm font-inter font-semibold ${(row as { gold?: boolean }).gold ? 'text-[#C9A84C]' : 'text-white'}`}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                      <p className="text-white/30 text-xs font-inter italic mt-4 leading-relaxed">
                        Vous payez un peu plus sur 2 ans. Mais vous démarrez sans sortir un euro.
                      </p>
                    </div>
                  </div>

                  {/* Legal note */}
                  <p className="text-[#9CA3AF] text-xs font-inter">
                    Engagement ferme 24 mois. Prélèvement automatique SEPA.
                    Clause de résiliation anticipée : 3 derniers mois dus.
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════════════
            SECTION 4 — PAS SÛR DE QUELLE FORMULE ?
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div
                className="rounded-2xl p-8 md:p-12 text-center"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <h3 className="font-playfair font-bold text-white text-2xl md:text-3xl mb-4">
                  Pas sûr de quelle formule choisir ?
                </h3>
                <p className="text-white/50 font-inter text-base mb-8 max-w-lg mx-auto leading-relaxed">
                  Pas de panique. On vous offre un audit gratuit de votre présence en ligne et on vous recommande la formule la plus adaptée à votre activité et votre budget.
                </p>
                <motion.a
                  href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20audit%20gratuit%20pour%20choisir%20la%20formule%20adapt%C3%A9e%20%C3%A0%20mon%20activit%C3%A9."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] px-8 py-4 rounded-xl font-bold text-base font-inter hover:bg-[#E4C46E] transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={18} />
                  Demander mon audit gratuit
                </motion.a>
                <LenaInlineCTA message="Ou demandez conseil à Léna →" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTION 5 — SERVICES À LA CARTE
        ═══════════════════════════════════════════════════ */}
        <section className="bg-[#F8F7F4] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2
                className="font-playfair font-bold text-[#0A0A0A] mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                Vous préférez à la carte ?
              </h2>
              <p className="text-[#6B6B6B] text-lg font-inter max-w-xl mx-auto">
                Certains services sont disponibles séparément, sans abonnement, selon vos besoins.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alaCarte.map((item, i) => {
                const Icon = item.icon
                const inner = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-[#E5E7EB] hover:border-[#C9A84C] rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/5 group"
                  >
                    {/* Icon + badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                        <Icon size={22} className="text-[#C9A84C]" />
                      </div>
                      {item.badge && (
                        <span className="bg-[#22C55E] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-playfair font-bold text-[#0A0A0A] text-lg mb-2 group-hover:text-[#C9A84C] transition-colors">
                      {item.titre}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm font-inter mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Prix */}
                    <p className="text-[#C9A84C] font-inter font-bold text-base mb-1">
                      {item.prix}
                    </p>
                    {item.note && (
                      <p className="text-[#9CA3AF] text-xs font-inter">
                        {item.note}
                      </p>
                    )}
                  </motion.div>
                )

                if (item.href) {
                  return (
                    <Link key={item.titre} href={item.href} className="block">
                      {inner}
                    </Link>
                  )
                }
                return <div key={item.titre}>{inner}</div>
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTION 6 — FAQ PRICING
        ═══════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2
                className="font-playfair font-bold text-white mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                Questions fréquentes
              </h2>
              <p className="text-white/50 text-lg font-inter max-w-xl mx-auto">
                Tout ce que vous devez savoir sur nos tarifs et engagements.
              </p>
            </AnimatedSection>

            <FAQAccordion items={faqItems} theme="dark" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTION 7 — FOMO
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#0F0F1A] to-[#0A0A0A]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              {/* Badge */}
              <p className="text-[#C9A84C] font-inter font-semibold text-sm tracking-widest uppercase mb-6">
                CHAQUE MOIS QUI PASSE...
              </p>

              {/* Titre */}
              <h2
                className="font-playfair font-bold text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                Vos concurrents qui ont un site
                <br className="hidden md:block" />
                attirent vos clients pendant que
                <br className="hidden md:block" />
                vous hésitez encore.
              </h2>

              {/* Sous-titre */}
              <p className="text-[#9CA3AF] text-lg font-inter max-w-2xl mx-auto mb-10 leading-relaxed">
                À 79€/mois, c&apos;est 2,60€ par jour. Un café. Une viennoiserie.
                <br className="hidden md:block" />
                Sauf que ça, ça vous rapporte des clients pendant que vous dormez.
              </p>

              {/* Encadré stat */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="inline-block bg-white/[0.03] backdrop-blur-sm border border-[#C9A84C]/20 rounded-2xl px-8 md:px-12 py-8 mb-10 max-w-xl"
              >
                <p className="text-white/80 font-inter text-base md:text-lg leading-relaxed">
                  Si votre site vous amène{' '}
                  <span className="text-[#C9A84C] font-bold">un seul nouveau client par mois</span>,
                  il est rentable. Un artisan à Troyes, c&apos;est{' '}
                  <span className="text-[#C9A84C] font-bold">400€ minimum</span>.
                  Pour 79€/mois, le calcul est vite fait.
                </p>
              </motion.div>

              {/* CTA */}
              <div>
                <motion.a
                  href="https://wa.me/33756959078?text=Bonjour%2C%20je%20veux%20d%C3%A9marrer%20avec%20L-BOOST%20ce%20mois-ci."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-10 py-5 rounded-xl font-bold text-lg font-inter hover:bg-white/90 transition-all duration-300 shadow-xl shadow-white/10"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Je veux démarrer ce mois →
                </motion.a>
              </div>

              {/* Note */}
              <p className="text-white/30 text-sm font-inter mt-5">
                Réponse sous 2h · Démarrage sous 10 jours · Satisfait ou remboursé J+30
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTION 8 — CTA CONTACT
        ═══════════════════════════════════════════════════ */}
        <CTAContact
          context="general"
          titre="Besoin d'un devis personnalisé ?"
          sousTitre="Choisissez le moyen qui vous convient le mieux pour nous contacter."
        />
      </main>
      <Footer />
    </>
  )
}
