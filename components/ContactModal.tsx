'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle, AlertCircle, MessageCircle, FileText, Phone, Sparkles, ArrowLeft } from 'lucide-react'

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

const contactOptions = [
  {
    id: 'form',
    icon: FileText,
    title: 'Remplir le formulaire',
    desc: 'Réponse personnalisée sous 24h',
    color: '#C9A84C',
    bgFrom: 'from-[#C9A84C]/8',
    bgTo: 'to-[#C9A84C]/3',
    borderHover: 'hover:border-[#C9A84C]/50',
    glowColor: 'rgba(201,168,76,0.15)',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Réponse dans la journée',
    color: '#25D366',
    bgFrom: 'from-[#25D366]/8',
    bgTo: 'to-[#25D366]/3',
    borderHover: 'hover:border-[#25D366]/50',
    glowColor: 'rgba(37,211,102,0.15)',
    href: 'https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20digital.',
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Appeler',
    desc: '07 56 95 90 78 — lun-ven, 9h-18h',
    color: '#818CF8',
    bgFrom: 'from-[#818CF8]/8',
    bgTo: 'to-[#818CF8]/3',
    borderHover: 'hover:border-[#818CF8]/50',
    glowColor: 'rgba(129,140,248,0.15)',
    href: 'tel:+33756959078',
  },
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

  useEffect(() => {
    if (step === 'form' && open) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [step, open])

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
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm font-inter focus:outline-none transition-all duration-300 ${
      errors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/10 focus:border-[#C9A84C] focus:bg-white/[0.06]'
    }`

  const selectClass = (field: string) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm font-inter focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
      form[field as keyof typeof form] ? 'text-white' : 'text-white/25'
    } ${
      errors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/10 focus:border-[#C9A84C] focus:bg-white/[0.06]'
    }`

  // Stagger animation for choice cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  }

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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
          >
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(165deg, #111827 0%, #0A0F1A 50%, #0D1117 100%)',
                boxShadow: '0 0 0 1px rgba(201,168,76,0.15), 0 25px 80px -12px rgba(0,0,0,0.8), 0 0 60px -20px rgba(201,168,76,0.1)',
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Contact"
            >
              {/* Decorative top glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-24 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
              />

              {/* Header */}
              <div className="relative px-7 pt-7 pb-5">
                <div className="flex items-start justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    <h2 className="font-playfair font-bold text-white text-xl leading-snug">
                      {step === 'choice' ? (
                        <>
                          Comment souhaitez-vous
                          <br />
                          <span className="text-[#C9A84C]">nous contacter ?</span>
                        </>
                      ) : (
                        'Parlons de votre projet'
                      )}
                    </h2>
                    <p className="text-white/35 text-xs font-inter mt-2">
                      {step === 'choice' ? 'Choisissez le moyen qui vous convient le mieux' : 'Réponse garantie sous 24h'}
                    </p>
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    onClick={handleClose}
                    className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                    aria-label="Fermer la modale"
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Body */}
              <div className="px-7 pb-7 max-h-[75vh] overflow-y-auto">
                <AnimatePresence mode="wait">

                  {/* ── STEP 1: Choice ──────────────────────────── */}
                  {step === 'choice' && (
                    <motion.div
                      key="choice"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-3"
                    >
                      {contactOptions.map((opt) => {
                        const Icon = opt.icon
                        const Wrapper = opt.href ? 'a' : 'button'
                        const wrapperProps = opt.href
                          ? { href: opt.href, target: '_blank' as const, rel: 'noopener noreferrer' }
                          : { onClick: () => goToForm() }

                        return (
                          <motion.div key={opt.id} variants={cardVariants}>
                            <Wrapper
                              {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>)}
                              className={`w-full flex items-center gap-4 bg-gradient-to-r ${opt.bgFrom} ${opt.bgTo} border border-white/[0.06] ${opt.borderHover} rounded-2xl p-5 text-left transition-all duration-300 group relative overflow-hidden`}
                            >
                              {/* Hover glow effect */}
                              <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                  background: `radial-gradient(circle at 30% 50%, ${opt.glowColor} 0%, transparent 60%)`,
                                }}
                              />

                              {/* Icon */}
                              <div
                                className="relative w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{
                                  background: `linear-gradient(135deg, ${opt.color}15, ${opt.color}08)`,
                                  border: `1px solid ${opt.color}25`,
                                  boxShadow: `0 0 0 0 ${opt.color}00`,
                                }}
                              >
                                <Icon size={20} style={{ color: opt.color }} />
                              </div>

                              {/* Text */}
                              <div className="relative flex-1 min-w-0">
                                <h3 className="font-inter font-semibold text-white text-sm group-hover:text-white transition-colors">
                                  {opt.title}
                                </h3>
                                <p className="text-white/35 font-inter text-xs mt-0.5 group-hover:text-white/50 transition-colors">
                                  {opt.desc}
                                </p>
                              </div>

                              {/* Arrow indicator */}
                              <div className="relative flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/30 group-hover:text-white/60 transition-colors">
                                  <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </Wrapper>
                          </motion.div>
                        )
                      })}

                      {/* Separator */}
                      <motion.div variants={cardVariants} className="flex items-center gap-4 py-1">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                        <span className="text-white/20 text-[10px] font-inter uppercase tracking-widest">ou</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                      </motion.div>

                      {/* Audit gratuit — special card */}
                      <motion.div variants={cardVariants}>
                        <button
                          onClick={() => goToForm('Je ne sais pas quel service me correspond. Je souhaite bénéficier d\'un audit gratuit de ma présence digitale pour identifier mes besoins.')}
                          className="w-full relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 group"
                          style={{
                            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)',
                            border: '1px solid rgba(201,168,76,0.15)',
                          }}
                        >
                          {/* Animated shimmer effect */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                              background: 'linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.06) 50%, transparent 60%)',
                              backgroundSize: '200% 100%',
                              animation: 'shimmer 2s ease-in-out infinite',
                            }}
                          />

                          <div className="relative flex items-center gap-4">
                            <div
                              className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                              style={{
                                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))',
                                border: '1px solid rgba(201,168,76,0.3)',
                              }}
                            >
                              <Sparkles size={20} className="text-[#C9A84C]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-inter font-semibold text-[#C9A84C] text-sm">
                                Je ne sais pas ce qu&apos;il me faut
                              </h3>
                              <p className="text-white/35 font-inter text-xs mt-0.5 group-hover:text-white/50 transition-colors">
                                Audit gratuit — on analyse et on vous conseille
                              </p>
                            </div>
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#C9A84C]/[0.08] group-hover:bg-[#C9A84C]/[0.15] flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors">
                                <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Success ────────────────────────────── */}
                  {step === 'form' && status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="flex flex-col items-center justify-center py-14 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                        style={{
                          background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))',
                          border: '2px solid rgba(34,197,94,0.3)',
                        }}
                      >
                        <CheckCircle size={30} className="text-green-400" />
                      </motion.div>
                      <h3 className="font-playfair font-bold text-white text-xl mb-2">Demande envoyée !</h3>
                      <p className="text-white/50 font-inter text-sm">
                        On vous recontacte sous 24h.
                      </p>
                      <motion.button
                        onClick={() => { handleClose(); setStatus('idle'); setStep('choice') }}
                        className="mt-8 text-[#C9A84C] text-sm font-semibold font-inter hover:text-[#E4C46E] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Fermer
                      </motion.button>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Form ────────────────────────────── */}
                  {step === 'form' && status !== 'success' && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    >
                      {/* Back button */}
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => setStep('choice')}
                        className="flex items-center gap-1.5 text-white/30 hover:text-[#C9A84C] text-xs font-inter mb-5 transition-colors duration-200 group"
                      >
                        <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
                        Retour aux options
                      </motion.button>

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
                                <option key={o.value} value={o.value} disabled={!o.value} className="bg-[#111827] text-white">
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
                                <option key={o.value} value={o.value} disabled={!o.value} className="bg-[#111827] text-white">
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
                            style={{ caretColor: '#C9A84C' }}
                          />
                          {errors.message && <p className="text-red-400 text-[11px] mt-1 font-inter pl-1">{errors.message}</p>}
                        </div>

                        {/* Error state */}
                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                          >
                            <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                            <p className="text-red-300 text-xs font-inter leading-snug">
                              Une erreur est survenue, réessayez ou contactez-nous sur WhatsApp.
                            </p>
                          </motion.div>
                        )}

                        <p className="text-white/20 text-[11px] font-inter">
                          * Champs obligatoires — Vos données restent confidentielles.
                        </p>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm font-inter transition-all duration-300 relative overflow-hidden"
                          style={{
                            background: status === 'loading'
                              ? 'rgba(201,168,76,0.4)'
                              : 'linear-gradient(135deg, #C9A84C, #E4C46E)',
                            color: '#0A0A0A',
                            boxShadow: status === 'loading' ? 'none' : '0 8px 24px -4px rgba(201,168,76,0.3)',
                          }}
                          whileHover={status !== 'loading' ? { scale: 1.01, boxShadow: '0 12px 32px -4px rgba(201,168,76,0.4)' } : {}}
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

      {/* Shimmer keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  )
}
