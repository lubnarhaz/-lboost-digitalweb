'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, Minimize2 } from 'lucide-react'

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
      "LBoost est une agence digitale spécialisée dans la croissance des commerces locaux 🚀\nNous développons des outils sur-mesure comme WalKin pour aider les commerçants à fidéliser leurs clients et augmenter leur chiffre d'affaires.\nDes questions sur nos autres services ?",
  },
  {
    keywords: ['contact', 'email', 'téléphone', 'joindre', 'écrire', 'adresse'],
    answer:
      "Vous pouvez nous joindre via :\n📧 Email : via le formulaire de contact\n💬 WhatsApp : +33 7 56 95 90 78\n\nOn répond généralement dans la journée ! 😊",
  },
]

const DEFAULT_ANSWER =
  "Je ne suis pas sûre de comprendre votre question 😊\nVous pouvez me demander des infos sur WalKin, nos tarifs, comment ça fonctionne, ou prendre rendez-vous.\n\nSinon, notre équipe est disponible directement sur WhatsApp ! 💬"

const WELCOME =
  "👋 Bonjour ! Je suis Lena, votre assistante WalKin.\nComment puis-je vous aider aujourd'hui ? 😊"

const SUGGESTIONS = [
  "💳 C'est quoi WalKin ?",
  "💰 Tarifs",
  "📅 Prendre RDV",
  "🔍 Audit gratuit",
]

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

// ── Component ─────────────────────────────────────────────────────────────────
export default function ChatbotLena() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [welcomeShown, setWelcomeShown] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  let nextId = useRef(1)

  // Auto-welcome after 3s
  useEffect(() => {
    if (welcomeShown) return
    const t = setTimeout(() => {
      setWelcomeShown(true)
      pushBot(WELCOME)
    }, 3000)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomeShown])

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  // Focus input when opening
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  function pushBot(text: string) {
    setMsgs((prev) => [
      ...prev,
      { id: nextId.current++, role: 'bot', text, ts: getTime() },
    ])
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
    }, 900 + Math.random() * 400)
  }

  const handleSend = () => sendMessage(input)
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 240, damping: 16 }}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{ background: 'linear-gradient(135deg, #6B21A8, #0D1B2A)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? 'Fermer le chat Lena' : 'Ouvrir le chat Lena'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="bot"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Bot size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dot indicator */}
        {!open && (
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
        )}
      </motion.button>

      {/* Chat bubble */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="fixed bottom-24 left-6 z-50 flex flex-col overflow-hidden rounded-3xl border border-white/10"
            style={{
              width: 320,
              height: 460,
              background: '#0D1B2A',
              boxShadow: '0 25px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(107,33,168,0.3)',
            }}
            role="dialog"
            aria-label="Chat avec Lena, assistante WalKin"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/8"
              style={{ background: '#0D1B2A' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] flex items-center justify-center flex-shrink-0">
                  <Bot size={18} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#0D1B2A]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm font-inter">Lena 🤖</p>
                  <p className="text-white/40 text-[10px] font-inter">Assistante WalKin · En ligne 24h/24</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Réduire le chat"
              >
                <Minimize2 size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ background: '#F8F8F8' }}>
              {msgs.length === 0 && (
                <div className="text-center text-[#6B6B6B] text-xs font-inter pt-6 opacity-60">
                  Lena arrive dans un instant...
                </div>
              )}

              {msgs.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] flex items-center justify-center flex-shrink-0 mt-auto">
                      <Bot size={13} className="text-white" />
                    </div>
                  )}
                  <div className="max-w-[78%]">
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-xs font-inter leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-[#6B21A8] text-white rounded-tr-sm'
                          : 'bg-white text-[#0A0A0A] rounded-tl-sm shadow-sm border border-gray-100'
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
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] flex items-center justify-center flex-shrink-0">
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1">
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
            <div className="px-3 py-3 border-t border-white/8 flex items-center gap-2" style={{ background: '#0D1B2A' }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Votre message..."
                className="flex-1 bg-white/8 border border-white/12 rounded-xl px-3.5 py-2.5 text-white text-xs font-inter placeholder-white/30 focus:outline-none focus:border-[#7C3AED] transition-colors"
                maxLength={300}
                aria-label="Message à Lena"
              />
              <motion.button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: '#6B21A8' }}
                whileHover={input.trim() ? { scale: 1.05, background: '#7C3AED' } : {}}
                whileTap={input.trim() ? { scale: 0.92 } : {}}
                aria-label="Envoyer le message"
              >
                <Send size={14} className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyframes */}
      <style>{`
        @keyframes dotBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>
    </>
  )
}
