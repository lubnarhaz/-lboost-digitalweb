'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle, AlertCircle, MessageCircle, FileText, Phone, Search } from 'lucide-react'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwkYtvO_-65toBky_2Kqoz3MQA2UKsAXoTZUKBJW6_FKLBDBk8Wpf8r6CVrVHFqDcge/exec'

type Status = 'idle' | 'loading' | 'success' | 'error'
type Step = 'choice' | 'form'

const TYPE_COMMERCE = [
  { value: '', label: '-- Sélectionnez votre activité --' },
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Boutique', label: 'Boutique' },
  { value: 'Café/Bar', label: 'Café / Bar' },
  { value: 'Hôtel', label: 'Hôtel' },
  { value: 'Beauty/Spa', label: 'Beauty / Spa' },
  { value: 'Salle de sport', label: 'Salle de sport' },
  { value: 'Pharmacie', label: 'Pharmacie' },
  { value: 'Immobilier', label: 'Immobilier' },
  { value: 'Coach/Consultant', label: 'Coach / Consultant' },
  { value: 'E-commerce', label: 'E-commerce' },
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
  isOpen?: boolean
  onClose?: () => void
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

  const [step, setStep] = useState<Step>('choice')
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

  // Reset to choice step when modal opens
  useEffect(() => {
    if (open) {
      setStep('choice')
      setStatus('idle')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Focus first input when entering form step
  useEffect(() => {
    if (step === 'form' && open) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [step, open])

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

  const goToForm = (prefill?: string) => {
    if (prefill) {
      setForm((prev) => ({ ...prev, message: prefill }))
    }
    setStep('form')
  }

  const labelClass = 'block text-white/70 text-xs font-semibold font-inter mb-1.5 tracking-wide'

  const inputClass = (field: string) =>
    `w-full bg-[#0D1B2A] border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm font-inter focus:outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-white/15 focus:border-[#C9A84C]'
    }`

  const selectClass = (field: string) =>
    `w-full bg-[#0D1B2A] border rounded-xl px-4 py-3 text-sm font-inter focus:outline-none transition-all duration-200 appearance-none cursor-pointer ${
      form[field as keyof typeof form] ? 'text-white' : 'text-white/30'
    } ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-white/15 focus:border-[#C9A84C]'
    }`

  return (
    <>
      {/* Trigger button — standalone mode only */}
      {!isControlled && (
        <motion.button
          onClick={() => { setInternalOpen(true); setStatus('idle'); setStep('choice') }}
          className={
            triggerClassName ??
            'inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E4C46E] text-[#0A0A0A] px-6 py-3.5 rounded-xl font-bold text-sm font-inter transition-all duration-300 shadow-lg'
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
              style={{ background: '#0D1B2A', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.2)' }}
              role="dialog"
              aria-modal="true"
              aria-label="Contact"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div>
                  <h2 className="font-playfair font-bold text-white text-xl">
                    {step === 'choice' ? 'Comment souhaitez-vous nous contacter ?' : 'Parlons de votre projet'}
                  </h2>
                  <p className="text-white/40 text-xs font-inter mt-0.5">
                    {step === 'choice' ? 'Choisissez le moyen qui vous convient' : 'Réponse garantie sous 24h'}
                  </p>
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
                <AnimatePresence mode="wait">

                  {/* ── STEP 1: Choice ──────────────────────────── */}
                  {step === 'choice' && (
                    <motion.div
                      key="choice"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {/* Formulaire */}
                      <button
                        onClick={() => goToForm()}
                        className="w-full flex items-center gap-4 bg-white/[0.04] border border-white/10 hover:border-[#C9A84C]/40 rounded-xl p-5 text-left transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                          <FileText size={20} className="text-[#C9A84C]" />
                        </div>
                        <div>
                          <h3 className="font-inter font-semibold text-white text-sm">Remplir le formulaire</h3>
                          <p className="text-white/40 font-inter text-xs mt-0.5">Recevez une réponse personnalisée sous 24h</p>
                        </div>
                      </button>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20digital."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-4 bg-white/[0.04] border border-white/10 hover:border-[#25D366]/40 rounded-xl p-5 text-left transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                          <MessageCircle size={20} className="text-[#25D366]" />
                        </div>
                        <div>
                          <h3 className="font-inter font-semibold text-white text-sm">WhatsApp</h3>
                          <p className="text-white/40 font-inter text-xs mt-0.5">Contactez Loubna directement, réponse dans la journée</p>
                        </div>
                      </a>

                      {/* Téléphone */}
                      <a
                        href="tel:+33756959078"
                        className="w-full flex items-center gap-4 bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-xl p-5 text-left transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                          <Phone size={20} className="text-white/60" />
                        </div>
                        <div>
                          <h3 className="font-inter font-semibold text-white text-sm">Appeler</h3>
                          <p className="text-white/40 font-inter text-xs mt-0.5">07 56 95 90 78 — du lundi au vendredi, 9h-18h</p>
                        </div>
                      </a>

                      {/* Separator */}
                      <div className="flex items-center gap-3 py-2">
                        <div className="flex-1 h-px bg-white/8" />
                        <span className="text-white/30 text-xs font-inter">ou</span>
                        <div className="flex-1 h-px bg-white/8" />
                      </div>

                      {/* Audit gratuit */}
                      <button
                        onClick={() => goToForm('Je ne sais pas quel service me correspond. Je souhaite bénéficier d\'un audit gratuit de ma présence digitale pour identifier mes besoins.')}
                        className="w-full flex items-center gap-4 bg-[#C9A84C]/5 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 rounded-xl p-5 text-left transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/25 transition-colors">
                          <Search size={20} className="text-[#C9A84C]" />
                        </div>
                        <div>
                          <h3 className="font-inter font-semibold text-[#C9A84C] text-sm">Je ne sais pas ce qu&apos;il me faut</h3>
                          <p className="text-white/40 font-inter text-xs mt-0.5">Demandez un audit gratuit — on analyse votre situation et on vous conseille</p>
                        </div>
                      </button>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Form ────────────────────────────── */}
                  {step === 'form' && status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500/40 flex items-center justify-center mb-5">
                        <CheckCircle size={32} className="text-green-400" />
                      </div>
                      <h3 className="font-playfair font-bold text-white text-xl mb-2">Demande envoyée !</h3>
                      <p className="text-white/60 font-inter text-sm">
                        On vous recontacte sous 24h.
                      </p>
                      <button
                        onClick={() => { handleClose(); setStatus('idle'); setStep('choice') }}
                        className="mt-7 text-[#C9A84C] text-sm font-semibold font-inter hover:text-[#E4C46E] transition-colors"
                      >
                        Fermer
                      </button>
                    </motion.div>
                  )}

                  {step === 'form' && status !== 'success' && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Back button */}
                      <button
                        onClick={() => setStep('choice')}
                        className="flex items-center gap-1.5 text-white/40 hover:text-[#C9A84C] text-xs font-inter mb-5 transition-colors"
                      >
                        ← Retour aux options
                      </button>

                      <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Nom + Entreprise */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          <div>
                            <label className={labelClass}>
                              Entreprise <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="entreprise"
                              placeholder="Ex : Café de la Place..."
                              value={form.entreprise}
                              onChange={handleChange}
                              className={inputClass('entreprise')}
                              autoComplete="organization"
                            />
                            {errors.entreprise && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.entreprise}</p>}
                          </div>
                        </div>

                        {/* Email + Téléphone */}
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

                        {/* Type commerce + Nb clients */}
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
                              Volume clients / mois <span className="text-red-400">*</span>
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

                        {/* Message */}
                        <div>
                          <label className={labelClass}>
                            Décrivez votre besoin <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            name="message"
                            placeholder="Ex : Je souhaite fidéliser mes clients avec une carte digitale..."
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className={`${inputClass('message')} resize-none`}
                            style={{ color: '#ffffff', backgroundColor: '#0D1B2A', caretColor: '#C9A84C' }}
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
                              Une erreur est survenue, réessayez ou contactez-nous sur WhatsApp.
                            </p>
                          </motion.div>
                        )}

                        <p className="text-gray-400 text-xs font-inter">
                          * Champs obligatoires — Vos données sont confidentielles et ne seront jamais partagées.
                        </p>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E4C46E] disabled:opacity-60 disabled:cursor-not-allowed text-[#0A0A0A] py-4 rounded-xl font-bold text-sm font-inter transition-all duration-300 shadow-lg"
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
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
