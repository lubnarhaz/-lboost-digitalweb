'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Minimize2 } from 'lucide-react'

const WELCOME =
  "Bonjour, je suis Léna, conseillère chez L-BOOST DigitalWeb. Vous avez un projet en tête, ou vous cherchez encore à définir ce dont vous avez besoin ?"

const SUGGESTIONS = [
  "J'ai un commerce",
  "Je veux un site web",
  "C'est quoi WalKin ?",
  "Vos tarifs",
]

const LENA_AVATAR = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'

const STORAGE_KEY = 'lena-chat-history'
const STORAGE_EXPIRY = 30 * 60 * 1000

const POPUP_MESSAGES: Record<string, string> = {
  '/': "Bonjour, je suis Léna. Vous cherchez à développer votre présence en ligne ? Je peux vous guider en quelques minutes.",
  '/walkin': "Vous êtes commerçant ? Je peux vous montrer comment WalKin fonctionne concrètement pour votre activité.",
  '/secteurs/beaute-bien-etre': "Salon, institut ou spa — je connais bien vos enjeux. On en parle ?",
  '/secteurs/restauration': "Vous utilisez UberEats ? Calculons ensemble ce que vous pourriez récupérer.",
  '/secteurs/immobilier': "Comment se porte votre visibilité en ligne actuellement ? Je peux l'analyser pour vous.",
  '/secteurs/coaching-consulting': "Vous cherchez à attirer plus de clients qualifiés ? On regarde ça ensemble.",
  '/secteurs/ecommerce': "Des visiteurs mais peu de ventes ? Je peux identifier le problème gratuitement.",
  '/secteurs/professionnels-locaux': "Êtes-vous facilement trouvable sur Google dans votre ville ? Vérification gratuite.",
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface Msg {
  id: number
  role: 'bot' | 'user'
  text: string
  ts: string
}

interface StoredChat {
  msgs: Msg[]
  nextId: number
  savedAt: number
}

function getTime() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

// ── Notification sound via Web Audio API ──────────────────────────────────────
function playNotifSound() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.15)
  } catch {
    // Web Audio not available
  }
}

// ── Save/Load localStorage ────────────────────────────────────────────────────
function saveChat(msgs: Msg[], nextId: number) {
  try {
    const data: StoredChat = { msgs, nextId, savedAt: Date.now() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage full or unavailable
  }
}

function loadChat(): StoredChat | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data: StoredChat = JSON.parse(raw)
    if (Date.now() - data.savedAt > STORAGE_EXPIRY) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return data
  } catch {
    return null
  }
}

// ── Social proof counter ──────────────────────────────────────────────────────
function useRealisticCounter() {
  const [count, setCount] = useState(23)
  useEffect(() => {
    const hour = new Date().getHours()
    const dayOfWeek = new Date().getDay()
    const bonus = (hour >= 9 && hour <= 18) ? 3 : 0
    const weekBonus = (dayOfWeek >= 1 && dayOfWeek <= 5) ? 2 : 0
    setCount(23 + bonus + weekBonus)
  }, [])
  return count
}

// ── Lena Avatar ───────────────────────────────────────────────────────────────
function LenaAvatar({ size = 36, online = true }: { size?: number; online?: boolean }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div className="rounded-full overflow-hidden border-2 border-white/50" style={{ width: size, height: size }}>
        <Image
          src={LENA_AVATAR}
          alt="Léna — Conseillère L-BOOST"
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
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const [welcomeShown, setWelcomeShown] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupDismissed, setPopupDismissed] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nextId = useRef(1)
  const abortRef = useRef<AbortController | null>(null)
  const auditCount = useRealisticCounter()

  // ── Load persisted conversation on mount ──
  useEffect(() => {
    const saved = loadChat()
    if (saved && saved.msgs.length > 0) {
      setMsgs(saved.msgs)
      nextId.current = saved.nextId
      setWelcomeShown(true)
    }
  }, [])

  // ── Persist conversation on change ──
  useEffect(() => {
    if (msgs.length > 0) {
      saveChat(msgs, nextId.current)
    }
  }, [msgs])

  // Badge "1 message non lu" after 4s
  useEffect(() => {
    const saved = loadChat()
    if (saved && saved.msgs.length > 0) return
    const t = setTimeout(() => {
      if (!open) setShowBadge(true)
    }, 4000)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto-welcome
  useEffect(() => {
    if (welcomeShown) return
    const t1 = setTimeout(() => {
      setWelcomeShown(true)
      pushBot(WELCOME)
    }, 3000)
    return () => clearTimeout(t1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomeShown])

  // Auto-popup: 8 seconds OR 40% scroll
  useEffect(() => {
    if (popupDismissed || open) return

    const timer = setTimeout(() => {
      if (!open && !popupDismissed) setShowPopup(true)
    }, 8000)

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent > 0.4 && !open && !popupDismissed) {
        setShowPopup(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [open, popupDismissed])

  useEffect(() => {
    if (open) { setShowPopup(false) }
  }, [open])

  // Auto-dismiss popup after 12 seconds
  useEffect(() => {
    if (!showPopup) return
    const t = setTimeout(() => setShowPopup(false), 12000)
    return () => clearTimeout(t)
  }, [showPopup])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing, streamingText])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  const pushBot = useCallback((text: string) => {
    setMsgs((prev) => [...prev, { id: nextId.current++, role: 'bot', text, ts: getTime() }])
  }, [])

  async function sendMessage(text: string) {
    if (!text.trim() || typing) return
    const userText = text.trim()
    setInput('')
    const newMsgs: Msg[] = [...msgs, { id: nextId.current++, role: 'user', text: userText, ts: getTime() }]
    setMsgs(newMsgs)
    setTyping(true)
    setStreamingText('')

    const apiMessages = newMsgs
      .filter((m) => m.role === 'user' || m.role === 'bot')
      .map((m) => ({ role: m.role === 'user' ? 'user' as const : 'assistant' as const, content: m.text }))

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, stream: true }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) throw new Error('Stream failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') continue

          try {
            const parsed = JSON.parse(data)
            if (parsed.text) {
              fullText += parsed.text
              setStreamingText(fullText)
            }
          } catch {
            // skip
          }
        }
      }

      setTyping(false)
      setStreamingText('')

      if (fullText) {
        pushBot(fullText)
        if (!open || document.hidden) playNotifSound()
      } else {
        pushBot("Excusez-moi, je n'ai pas pu traiter votre demande. Contactez-nous directement sur WhatsApp au 07 56 95 90 78.")
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      setTyping(false)
      setStreamingText('')
      pushBot("Un souci technique de mon côté. N'hésitez pas à nous contacter directement sur WhatsApp au 07 56 95 90 78.")
    }
  }

  const handleOpen = () => {
    setShowBadge(false)
    setShowPopup(false)
    setPopupDismissed(true)
    setOpen(true)
  }

  const popupMessage = POPUP_MESSAGES[pathname] || POPUP_MESSAGES['/']
  const isFirstWelcome = msgs.length === 1 && msgs[0]?.text === WELCOME

  return (
    <>
      {/* ── Contextual popup bubble ── */}
      <AnimatePresence>
        {showPopup && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed z-[60] cursor-pointer"
            style={{ bottom: 120, right: 24 }}
            onClick={handleOpen}
          >
            <div
              className="relative rounded-2xl rounded-br-sm px-5 py-4 max-w-[260px]"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 10px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)',
              }}
            >
              <p className="text-[#0A0A0A] text-[13px] font-inter leading-relaxed mb-3">
                {popupMessage}
              </p>
              <div className="flex items-center gap-1.5 pt-2" style={{ borderTop: '1px solid #F3F4F6' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <p className="text-[#6B7280] text-[10px] font-inter">
                  {auditCount} audits demandés cette semaine
                </p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setShowPopup(false); setPopupDismissed(true) }}
                className="absolute top-2 right-2.5 text-[#9CA3AF] hover:text-[#6B7280] text-sm leading-none transition-colors"
                aria-label="Fermer"
              >
                ×
              </button>
              {/* Triangle pointing down to bubble */}
              <div
                className="absolute -bottom-2 right-10 w-3 h-3 bg-white rotate-45"
                style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.05)' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger — bottom right ── */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-6 right-4 md:right-6 z-50"
      >
        {/* Badge notification */}
        {showBadge && !open && (
          <span
            className="absolute -top-1 -right-1 z-10"
            style={{
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
              border: '2px solid #0A0A0A',
            }}
          >
            1
          </span>
        )}

        {open ? (
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
          <motion.button
            data-lena-trigger
            onClick={handleOpen}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex items-center gap-3 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #1A1A2E 0%, #0A0A0A 100%)',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '20px',
              padding: '12px 16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.1), 0 0 40px rgba(201,168,76,0.08)',
              maxWidth: '280px',
            }}
            aria-label="Parler à Léna, conseillère L-BOOST"
          >
            {/* Avatar with pulse rings */}
            <div className="relative flex-shrink-0">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute rounded-full"
                style={{ inset: '-6px', border: '2px solid #C9A84C' }}
              />
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute rounded-full"
                style={{ inset: '-10px', border: '1px solid #C9A84C' }}
              />
              <div
                className="w-11 h-11 rounded-full overflow-hidden relative"
                style={{ border: '2px solid #C9A84C' }}
              >
                <Image src={LENA_AVATAR} alt="Léna" fill className="object-cover" sizes="44px" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full"
                style={{ background: '#10B981', border: '2px solid #0A0A0A' }}
              />
            </div>

            {/* Text — hidden on very small screens */}
            <div className="hidden sm:block flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <p className="text-white text-[13px] font-bold font-inter">Léna</p>
                <span
                  className="text-[9px] font-semibold font-inter px-1.5 py-px rounded-full"
                  style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10B981',
                    letterSpacing: '0.05em',
                  }}
                >
                  EN LIGNE
                </span>
              </div>
              <p className="text-[#9CA3AF] text-[11px] font-inter truncate">
                Conseillère · Répond en quelques secondes
              </p>
            </div>

            {/* Message icon */}
            <div
              className="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
          </motion.button>
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
              'bottom-0 left-0 right-0 w-full h-[70vh] rounded-t-[20px] rounded-b-none',
              'md:bottom-[100px] md:left-auto md:right-6 md:w-[340px] md:h-[480px] md:rounded-[20px]',
            ].join(' ')}
            style={{
              background: 'linear-gradient(180deg, #0D1B2A 0%, #0a0a0a 100%)',
              zIndex: 9999,
            }}
            role="dialog"
            aria-label="Chat avec Léna, conseillère L-BOOST"
          >
            {/* Header */}
            <div className="lena-header">
              <LenaAvatar size={40} online />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-white font-semibold text-sm font-inter">Léna</p>
                  <span className="text-white/80 text-[10px] font-inter">· L-BOOST</span>
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
              {msgs.length === 0 && !welcomeShown && (
                <div className="text-center text-[#9CA3AF] text-[11px] font-inter pt-8">
                  Léna arrive dans quelques secondes...
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

                    {msg.role === 'bot' && msg.text === WELCOME && isFirstWelcome && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {SUGGESTIONS.map((s) => (
                          <button
                            key={s}
                            onClick={() => sendMessage(s)}
                            disabled={typing}
                            className="text-[10px] font-semibold font-inter bg-white border border-[#6B21A8]/30 text-[#6B21A8] hover:bg-[#6B21A8] hover:text-white px-2.5 py-1.5 rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && streamingText && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-end gap-2"
                >
                  <LenaAvatar size={28} online={false} />
                  <div className="max-w-[76%]">
                    <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-xs font-inter leading-relaxed whitespace-pre-line bg-white text-[#0A0A0A] shadow-sm border border-gray-100">
                      {streamingText}
                      <span className="inline-block w-0.5 h-3 bg-[#6B21A8] ml-0.5 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              )}

              <AnimatePresence>
                {typing && !streamingText && (
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
              className="px-3 py-3 flex items-center gap-2"
              style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) }
                }}
                placeholder={typing ? 'Léna écrit...' : 'Votre message...'}
                disabled={typing}
                className="flex-1 rounded-xl px-3.5 py-2.5 text-white text-xs font-inter focus:outline-none transition-colors disabled:opacity-50"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                maxLength={300}
                aria-label="Message à Léna"
              />
              <motion.button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: '#6B21A8' }}
                whileHover={input.trim() && !typing ? { scale: 1.05 } : {}}
                whileTap={input.trim() && !typing ? { scale: 0.92 } : {}}
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
