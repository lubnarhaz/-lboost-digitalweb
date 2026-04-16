'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Minimize2 } from 'lucide-react'

// ── Knowledge base ────────────────────────────────────────────────────────────
const KB: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ['walkin', "c'est quoi", "qu'est-ce", 'présentation', 'produit'],
    answer:
      "WalKin est une solution de carte de fidélité 100% digitale 🎯\nVos clients reçoivent leur carte directement dans Apple Wallet ou Google Wallet, sans application à télécharger ! Vous pouvez leur envoyer des push notifications et suivre vos résultats en temps réel.\nVous voulez en savoir plus ?",
  },
  {
    keywords: ['prix', 'tarif', 'coût', 'combien', 'abonnement', 'offre'],
    answer:
      "Nos tarifs sont personnalisés selon la taille de votre établissement et vos besoins 💼\nJe vous invite à remplir notre formulaire de contact ou à nous écrire sur WhatsApp pour recevoir une proposition adaptée sous 24h !",
  },
  {
    keywords: ['comment', 'fonctionne', 'marche', 'étapes', 'mise en place', 'installation'],
    answer:
      "C'est très simple en 3 étapes ✨\n\n1️⃣ On configure votre programme de fidélité\n2️⃣ Vos clients scannent un QR code ou reçoivent un SMS\n3️⃣ La carte s'ajoute en 1 clic dans leur Wallet !\n\nLa mise en place prend 48 à 72h après validation.",
  },
  {
    keywords: ['rendez-vous', 'rdv', 'démo', 'démonstration', 'rappel', 'callback', 'appel'],
    answer:
      "Avec plaisir ! 📅 Vous pouvez nous contacter via :\n• Le formulaire de contact sur cette page\n• WhatsApp au +33 7 56 95 90 78\n\nOn vous répond sous 24h pour fixer un créneau qui vous convient !",
  },
  {
    keywords: ['audit', 'diagnostic', 'analyse', 'gratuit', 'évaluation'],
    answer:
      "Excellente initiative ! 🔍 Nous proposons un audit GRATUIT de votre stratégie de fidélisation client.\n\nRemplissez le formulaire de contact en mentionnant 'Audit' dans votre message, ou contactez-nous directement sur WhatsApp. Notre équipe vous recontacte sous 24h !",
  },
  {
    keywords: ['lboost', 'agence', 'qui êtes', 'équipe', 'société', 'entreprise'],
    answer:
      "L-BOOST est une agence digitale spécialisée dans la croissance des commerces locaux 🚀\nNous développons des outils sur-mesure comme WalKin pour aider les commerçants à fidéliser leurs clients et augmenter leur chiffre d'affaires.\nDes questions sur nos autres services ?",
  },
  {
    keywords: ['contact', 'email', 'téléphone', 'joindre', 'écrire', 'adresse'],
    answer:
      "Vous pouvez nous joindre via :\n📧 Email : via le formulaire de contact\n💬 WhatsApp : +33 7 56 95 90 78\n\nOn répond généralement dans la journée ! 😊",
  },
  {
    keywords: ['site', 'web', 'vitrine', 'ecommerce', 'landing'],
    answer:
      "Nous créons des sites web premium en Next.js — sites vitrines, e-commerce, landing pages 🌐\nRapides, SEO-optimisés et au design sur-mesure. Un projet en tête ? Contactez-nous et on vous fait une proposition !",
  },
  {
    keywords: ['branding', 'logo', 'identité', 'charte', 'graphique'],
    answer:
      "Notre service Branding Complet comprend : logo, favicon, bannières réseaux sociaux et charte graphique complète livrée en PDF 🎨\nUne identité visuelle cohérente qui inspire confiance dès le premier regard !",
  },
]

const DEFAULT_ANSWER =
  "Je ne suis pas sûre de comprendre votre question 😊\nVous pouvez me demander des infos sur WalKin, nos tarifs, comment ça fonctionne, ou prendre rendez-vous.\n\nSinon, notre équipe est disponible directement sur WhatsApp ! 💬"

const WELCOME =
  "Bonjour ! 👋 Je suis Lena, votre conseillère L-BOOST.\nComment puis-je vous aider aujourd'hui ? 😊"

const SUGGESTIONS = [
  "💳 C'est quoi WalKin ?",
  "💰 Tarifs",
  "📅 Prendre RDV",
  "🔍 Audit gratuit",
]

const LENA_AVATAR = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'

// ── Types ─────────────────────────────────────────────────────────────────────
interface Msg {
  id: number
  role: 'bot' | 'user'
  text: string
  ts: string
}

function getTime() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

function getBotAnswer(input: string): string {
  const lower = input.toLowerCase()
  for (const entry of KB) {
    if (entry.keywords.some((kw) => lower.includes(kw))) return entry.answer
  }
  return DEFAULT_ANSWER
}

// ── Lena Avatar ───────────────────────────────────────────────────────────────
function LenaAvatar({ size = 36, online = true }: { size?: number; online?: boolean }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div className="rounded-full overflow-hidden border-2 border-white/50" style={{ width: size, height: size }}>
        <Image
          src={LENA_AVATAR}
          alt="Lena — Conseillère L-BOOST"
          width={size}
          height={size}
          className="object-cover w-full h-full"
        />
      </div>
      {online && (
        <span
          className="absolute bottom-0 right-0 rounded-full bg-green-400 border-2 border-white"
          style={{ width: size * 0.28, height: size * 0.28 }}
        />
      )}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ChatbotLena() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [welcomeShown, setWelcomeShown] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nextId = useRef(1)

  // Badge "1 message non lu" after 4s
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setShowBadge(true)
    }, 4000)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto-welcome + teaser bubble
  useEffect(() => {
    if (welcomeShown) return
    const t1 = setTimeout(() => {
      setWelcomeShown(true)
      pushBot(WELCOME)
    }, 3000)
    const t2 = setTimeout(() => {
      if (!open) setShowBubble(true)
    }, 4500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomeShown])

  useEffect(() => {
    if (open) setShowBubble(false)
  }, [open])

  useEffect(() => {
    if (!showBubble) return
    const t = setTimeout(() => setShowBubble(false), 6000)
    return () => clearTimeout(t)
  }, [showBubble])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  function pushBot(text: string) {
    setMsgs((prev) => [...prev, { id: nextId.current++, role: 'bot', text, ts: getTime() }])
  }

  function sendMessage(text: string) {
    if (!text.trim()) return
    const userText = text.trim()
    setInput('')
    setMsgs((prev) => [...prev, { id: nextId.current++, role: 'user', text: userText, ts: getTime() }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      pushBot(getBotAnswer(userText))
    }, 900 + Math.random() * 500)
  }

  const handleOpen = () => {
    setShowBadge(false)
    setOpen(true)
  }

  return (
    <>
      {/* Teaser bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[60] bg-white rounded-2xl rounded-br-none shadow-xl border border-gray-100 px-4 py-3 max-w-[210px]"
            style={{ bottom: 110, right: 20, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
          >
            <p className="text-[#0A0A0A] text-xs font-inter leading-relaxed">
              👋 Bonjour ! Besoin d&apos;aide ? Je suis là !
            </p>
            <div className="absolute -bottom-2 right-4 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger — bottom right ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: 'spring', stiffness: 240, damping: 16 }}
        className="fixed bottom-6 right-4 md:right-6 z-50"
      >
        {/* Badge notification */}
        {showBadge && !open && (
          <span
            style={{
              position: 'absolute',
              top: -4,
              right: -4,
              background: '#ef4444',
              color: 'white',
              borderRadius: '50%',
              width: 20,
              height: 20,
              fontSize: 11,
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #0D0D0D',
              animation: 'badgePop 0.3s ease',
              zIndex: 1,
            }}
          >
            1
          </span>
        )}

        {open ? (
          /* Close button — same on mobile & desktop */
          <motion.button
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => setOpen(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: '#0D1B2A', border: '1px solid rgba(201,168,76,0.4)' }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Fermer le chat"
          >
            <X size={20} className="text-white" />
          </motion.button>
        ) : (
          <>
            {/* ── Mobile trigger: round button with avatar ── */}
            <button
              onClick={handleOpen}
              className="mobile-only relative w-14 h-14 rounded-full border-2 border-[#C9A84C] flex items-center justify-center cursor-pointer"
              style={{
                background: '#0D1B2A',
                animation: 'lenaPulse 3s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(201,168,76,0.3), 0 4px 16px rgba(0,0,0,0.5)',
              }}
              aria-label="Parler à Lena, conseillère L-BOOST"
            >
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={LENA_AVATAR}
                  alt="Lena"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <span
                className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[#0D0D0D]"
                style={{ animation: 'lenaDotBlink 2s ease-in-out infinite' }}
              />
            </button>

            {/* ── Desktop trigger: horizontal card ── */}
            <button
              onClick={handleOpen}
              className="desktop-only lena-trigger"
              aria-label="Parler à Lena, conseillère L-BOOST"
            >
              <div className="lena-avatar-wrapper">
                <Image
                  src={LENA_AVATAR}
                  alt="Lena"
                  width={44}
                  height={44}
                  className="lena-avatar"
                />
                <span className="lena-online-dot" />
              </div>
              <div className="lena-trigger-text">
                <div className="lena-trigger-name">Lena <span>✨</span></div>
                <div className="lena-trigger-subtitle">Assistante WalKin • En ligne</div>
              </div>
              <div className="lena-bubble-icon">💬</div>
            </button>
          </>
        )}
      </motion.div>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className={[
              'lena-window fixed flex flex-col overflow-hidden',
              // Mobile: full-width bottom sheet
              'bottom-0 left-0 right-0 w-full h-[70vh] rounded-t-[20px] rounded-b-none',
              // Desktop: corner popup
              'md:bottom-[100px] md:left-auto md:right-6 md:w-[340px] md:h-[480px] md:rounded-[20px]',
            ].join(' ')}
            style={{
              background: 'linear-gradient(180deg, #0D1B2A 0%, #0a0a0a 100%)',
              zIndex: 9999,
            }}
            role="dialog"
            aria-label="Chat avec Lena, conseillère L-BOOST"
          >
            {/* Header — gold → violet gradient */}
            <div className="lena-header">
              <LenaAvatar size={40} online />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-white font-semibold text-sm font-inter">Lena</p>
                  <span className="text-white/80 text-[10px] font-inter">• L-BOOST</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <p className="text-white/80 text-[10px] font-inter">Conseillère digitale · En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/20"
                aria-label="Fermer le chat"
              >
                <Minimize2 size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ background: '#F5F5F7' }}>
              {msgs.length === 0 && (
                <div className="text-center text-[#9CA3AF] text-[11px] font-inter pt-8">
                  Lena arrive dans quelques secondes...
                </div>
              )}

              {msgs.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'bot' && <LenaAvatar size={28} online={false} />}

                  <div className="max-w-[76%]">
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-xs font-inter leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-[#6B21A8] text-white rounded-br-sm'
                          : 'bg-white text-[#0A0A0A] rounded-bl-sm shadow-sm border border-gray-100'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <p className={`text-[9px] font-inter mt-1 ${msg.role === 'user' ? 'text-right text-gray-400' : 'text-gray-400'}`}>
                      {msg.ts}
                    </p>

                    {/* Quick suggestions after welcome */}
                    {msg.role === 'bot' && msg.text === WELCOME && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {SUGGESTIONS.map((s) => (
                          <button
                            key={s}
                            onClick={() => sendMessage(s)}
                            className="text-[10px] font-semibold font-inter bg-white border border-[#6B21A8]/30 text-[#6B21A8] hover:bg-[#6B21A8] hover:text-white px-2.5 py-1.5 rounded-full transition-all duration-200"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2"
                  >
                    <LenaAvatar size={28} online={false} />
                    <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[#6B21A8]"
                          style={{ animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 border-t border-white/8 flex items-center gap-2"
              style={{ background: '#0D1B2A' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) }
                }}
                placeholder="Votre message..."
                className="flex-1 bg-white/8 border border-white/12 rounded-xl px-3.5 py-2.5 text-white text-xs font-inter placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                maxLength={300}
                aria-label="Message à Lena"
              />
              <motion.button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: '#6B21A8' }}
                whileHover={input.trim() ? { scale: 1.05 } : {}}
                whileTap={input.trim() ? { scale: 0.92 } : {}}
                aria-label="Envoyer"
              >
                <Send size={14} className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes dotBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>
    </>
  )
}
