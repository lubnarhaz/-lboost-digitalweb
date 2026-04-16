'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzg5kLK04NeTW6DmxrdLpmF_ZgpTzOAMmOvxXtImRJ0l_4_5ymKkdawLcyKY0EvkZTJ/exec'

type Status = 'idle' | 'loading' | 'success' | 'error'

const TYPE_COMMERCE = [
  { value: '', label: '-- Sélectionnez votre activité --' },
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Boutique', label: 'Boutique' },
  { value: 'Café/Bar', label: 'Café / Bar' },
  { value: 'Hôtel', label: 'Hôtel' },
  { value: 'Beauty/Spa', label: 'Beauty / Spa' },
  { value: 'Salle de sport', label: 'Salle de sport' },
  { value: 'Pharmacie', label: 'Pharmacie' },
  { value: 'Autre', label: 'Autre' },
]

const NB_CLIENTS = [
  { value: '', label: '-- Sélectionnez une tranche --' },
  { value: 'Moins de 500', label: 'Moins de 500' },
  { value: '500-2000', label: '500 – 2 000' },
  { value: '2000-5000', label: '2 000 – 5 000' },
  { value: 'Plus de 5000', label: 'Plus de 5 000' },
]

interface ContactModalProps {
  /** Controlled mode — open state managed externally (e.g. from Context) */
  isOpen?: boolean
  onClose?: () => void
  /** Standalone trigger mode — renders a button that opens the modal */
  triggerLabel?: string
  triggerClassName?: string
}

export default function ContactModal({
  isOpen,
  onClose,
  triggerLabel = 'Nous contacter',
  triggerClassName,
}: ContactModalProps) {
  const isControlled = isOpen !== undefined

  const [internalOpen, setInternalOpen] = useState(false)
  const open = isControlled ? (isOpen as boolean) : internalOpen
  const handleClose = isControlled ? (onClose ?? (() => {})) : () => setInternalOpen(false)

  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const firstInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    typeCommerce: '',
    nbClients: '',
    message: '',
  })

  // Focus first input + lock scroll when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.nom.trim()) errs.nom = 'Requis'
    if (!form.entreprise.trim()) errs.entreprise = 'Requis'
    if (!form.email.trim()) errs.email = 'Requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email invalide'
    if (!form.telephone.trim()) errs.telephone = 'Requis'
    if (!form.typeCommerce) errs.typeCommerce = 'Requis'
    if (!form.nbClients) errs.nbClients = 'Requis'
    if (!form.message.trim()) errs.message = 'Requis'
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm({ nom: '', entreprise: '', email: '', telephone: '', typeCommerce: '', nbClients: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const labelClass = 'block text-white/70 text-xs font-semibold font-inter mb-1.5 tracking-wide'

  const inputClass = (field: string) =>
    `w-full bg-white/8 border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm font-inter focus:outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-white/15 focus:border-[#7C3AED]'
    }`

  const selectClass = (field: string) =>
    `w-full bg-[#0D1B2A] border rounded-xl px-4 py-3 text-sm font-inter focus:outline-none transition-all duration-200 appearance-none cursor-pointer ${
      form[field as keyof typeof form] ? 'text-white' : 'text-white/30'
    } ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-white/15 focus:border-[#7C3AED]'
    }`

  return (
    <>
      {/* Trigger button — only in standalone mode */}
      {!isControlled && (
        <motion.button
          onClick={() => { setInternalOpen(true); setStatus('idle') }}
          className={
            triggerClassName ??
            'inline-flex items-center gap-2 bg-[#6B21A8] hover:bg-[#7C3AED] text-white px-6 py-3.5 rounded-xl font-bold text-sm font-inter transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(107,33,168,0.4)]'
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Ouvrir le formulaire de contact"
        >
          <MessageCircle size={16} />
          {triggerLabel}
        </motion.button>
      )}

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="w-full max-w-lg rounded-3xl overflow-hidden"
              style={{ background: '#0D1B2A', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(107,33,168,0.3)' }}
              role="dialog"
              aria-modal="true"
              aria-label="Formulaire de contact"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div>
                  <h2 className="font-playfair font-bold text-white text-xl">Parlons de votre projet</h2>
                  <p className="text-white/40 text-xs font-inter mt-0.5">Réponse garantie sous 24h</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all"
                  aria-label="Fermer la modale"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5 max-h-[80vh] overflow-y-auto">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500/40 flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="font-playfair font-bold text-white text-xl mb-2">Demande envoyée !</h3>
                    <p className="text-white/60 font-inter text-sm">
                      ✅ On vous recontacte sous 24h.
                    </p>
                    <button
                      onClick={() => { handleClose(); setStatus('idle') }}
                      className="mt-7 text-[#7C3AED] text-sm font-semibold font-inter hover:text-[#9F67FF] transition-colors"
                    >
                      Fermer →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">

                    {/* Champ 1 — Prénom et Nom */}
                    <div>
                      <label className={labelClass}>
                        Prénom et Nom <span className="text-red-400">*</span>
                      </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="nom"
                        placeholder="Ex : Marie Dupont"
                        value={form.nom}
                        onChange={handleChange}
                        className={inputClass('nom')}
                        autoComplete="name"
                      />
                      {errors.nom && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.nom}</p>}
                    </div>

                    {/* Champ 2 — Entreprise */}
                    <div>
                      <label className={labelClass}>
                        Nom de l&apos;entreprise ou du commerce <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        placeholder="Ex : Café de la Place, Boutique Élégance..."
                        value={form.entreprise}
                        onChange={handleChange}
                        className={inputClass('entreprise')}
                        autoComplete="organization"
                      />
                      {errors.entreprise && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.entreprise}</p>}
                    </div>

                    {/* Champ 3 & 4 — Email + Téléphone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="exemple@moncommerce.fr"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>
                          Téléphone <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          placeholder="06 XX XX XX XX"
                          value={form.telephone}
                          onChange={handleChange}
                          className={inputClass('telephone')}
                          autoComplete="tel"
                        />
                        {errors.telephone && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.telephone}</p>}
                      </div>
                    </div>

                    {/* Champ 5 & 6 — Type commerce + Nb clients */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>
                          Type de commerce <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="typeCommerce"
                          value={form.typeCommerce}
                          onChange={handleChange}
                          className={selectClass('typeCommerce')}
                        >
                          {TYPE_COMMERCE.map((o) => (
                            <option key={o.value} value={o.value} disabled={!o.value} className="bg-[#0D1B2A] text-white">
                              {o.label}
                            </option>
                          ))}
                        </select>
                        {errors.typeCommerce && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.typeCommerce}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>
                          Volume de clients / mois <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="nbClients"
                          value={form.nbClients}
                          onChange={handleChange}
                          className={selectClass('nbClients')}
                        >
                          {NB_CLIENTS.map((o) => (
                            <option key={o.value} value={o.value} disabled={!o.value} className="bg-[#0D1B2A] text-white">
                              {o.label}
                            </option>
                          ))}
                        </select>
                        {errors.nbClients && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.nbClients}</p>}
                      </div>
                    </div>

                    {/* Champ 7 — Message */}
                    <div>
                      <label className={labelClass}>
                        Décrivez votre besoin <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Ex : Je souhaite fidéliser mes clients avec une carte digitale, j'aimerais savoir comment WalKin peut m'aider..."
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.message}</p>}
                    </div>

                    {/* Error state */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
                      >
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-300 text-xs font-inter leading-snug">
                          ❌ Une erreur est survenue, réessayez ou contactez-nous sur WhatsApp.
                        </p>
                      </motion.div>
                    )}

                    {/* Note confidentialité */}
                    <p className="text-gray-400 text-xs font-inter">
                      * Champs obligatoires — Vos données sont confidentielles et ne seront jamais partagées.
                    </p>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 bg-[#6B21A8] hover:bg-[#7C3AED] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-sm font-inter transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(107,33,168,0.4)]"
                      whileHover={status !== 'loading' ? { scale: 1.01 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Envoyer ma demande
                        </>
                      )}
                    </motion.button>

                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
