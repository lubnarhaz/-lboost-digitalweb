'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, AlertTriangle, Send, Users, TrendingUp, Gift, BarChart2, X } from 'lucide-react'
import CountUpNumber from '@/components/CountUpNumber'

const VISIT_DATA = [14, 9, 17, 22, 18, 26, 19, 23, 15, 18, 25, 29, 17, 20, 24, 27, 19, 22, 16, 25, 28, 20, 24, 19, 26, 21, 18, 27, 30, 23]
const MAX_VAL = 32

const CLIENTS = [
  { initials: 'MD', name: 'Marie D.', stamps: 7, max: 10, status: 'Fidèle', color: '#10B981' },
  { initials: 'KB', name: 'Karim B.', stamps: 5, max: 10, status: 'Actif', color: '#C9A84C' },
  { initials: 'SL', name: 'Sophie L.', stamps: 2, max: 10, status: 'À risque', color: '#EF4444' },
  { initials: 'TM', name: 'Thomas M.', stamps: 9, max: 10, status: 'Fidèle', color: '#10B981' },
  { initials: 'LB', name: 'Léa B.', stamps: 1, max: 10, status: 'À risque', color: '#EF4444' },
]

const NOTIF_TYPES = ['Promo', 'Info', 'Fidélité', 'Urgence']
const TYPE_COLORS: Record<string, string> = {
  Promo: '#C9A84C',
  Info: '#3B82F6',
  Fidélité: '#10B981',
  Urgence: '#EF4444',
}

export default function DashboardMockup() {
  const [notifTitle, setNotifTitle] = useState('☕ Offre du jour')
  const [notifMessage, setNotifMessage] = useState("Croissants frais jusqu\u2019\u00e0 10h \u2014 venez vite !")
  const [notifType, setNotifType] = useState('Promo')
  const [composerOpen, setComposerOpen] = useState(false)

  return (
    <div className="bg-[#F8F8F8] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl max-w-3xl mx-auto">
      {/* Dashboard header */}
      <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0A0A0A] rounded-xl flex items-center justify-center">
            <span className="text-[#C9A84C] font-bold text-xs">LB</span>
          </div>
          <div>
            <p className="font-semibold text-[#0A0A0A] text-sm font-inter">Coffee Corner ☕</p>
            <p className="text-[#6B6B6B] text-[10px] font-inter">Dashboard WalKin</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C9A84C]/30 font-inter">
            Plan Pro
          </span>
          <div className="w-7 h-7 bg-[#C9A84C] rounded-full flex items-center justify-center text-xs text-[#0A0A0A] font-bold font-inter">
            CC
          </div>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Users, value: 312, label: 'Abonnés actifs', color: '#3B82F6' },
            { icon: TrendingUp, value: 847, label: 'Visites ce mois', color: '#10B981' },
            { icon: Gift, value: 43, label: 'Récompenses', color: '#C9A84C' },
            { icon: BarChart2, value: 89, label: '% Taux ouverture', color: '#8B5CF6' },
          ].map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-3.5 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={15} style={{ color }} strokeWidth={2} />
                <span className="text-[9px] text-[#6B6B6B] font-inter uppercase tracking-wide">+12%</span>
              </div>
              <p className="font-bold text-[#0A0A0A] font-inter text-xl leading-none">
                <CountUpNumber end={value} duration={1800} />
                {label.includes('%') ? '' : ''}
              </p>
              <p className="text-[#6B6B6B] text-[10px] font-inter mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Alert banner */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-3 bg-[#EF4444]/8 border border-[#EF4444]/25 rounded-xl p-3.5"
        >
          <div className="flex items-center gap-2.5">
            <AlertTriangle size={16} className="text-[#EF4444] flex-shrink-0" />
            <p className="text-[#0A0A0A] text-xs font-inter">
              <span className="font-bold">4 clients</span> absents depuis 3 semaines — risquent de vous quitter
            </p>
          </div>
          <button
            onClick={() => setComposerOpen(true)}
            className="flex-shrink-0 bg-[#EF4444] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg font-inter hover:bg-[#DC2626] transition-colors whitespace-nowrap"
          >
            Relancer →
          </button>
        </motion.div>

        {/* Bar chart */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-[#0A0A0A] font-inter">Visites — 30 derniers jours</p>
            <span className="text-[10px] text-[#10B981] font-semibold font-inter">↑ +18% vs mois dernier</span>
          </div>
          <div className="flex items-end gap-1 h-20">
            {VISIT_DATA.map((val, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm cursor-pointer group relative"
                style={{ background: '#E5E7EB' }}
                initial={{ height: 0 }}
                whileInView={{ height: `${(val / MAX_VAL) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.02, ease: 'easeOut' }}
                whileHover={{ background: '#C9A84C' }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[8px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 font-inter">
                  {val}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[9px] text-[#6B6B6B] font-inter">1 avr</span>
            <span className="text-[9px] text-[#6B6B6B] font-inter">15 avr</span>
            <span className="text-[9px] text-[#6B6B6B] font-inter">30 avr</span>
          </div>
        </div>

        {/* Top clients */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-xs font-semibold text-[#0A0A0A] font-inter mb-3">Top clients</p>
          <div className="space-y-3">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0 font-inter"
                  style={{ background: client.color }}
                >
                  {client.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-semibold text-[#0A0A0A] font-inter">{client.name}</span>
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full font-inter"
                      style={{ color: client.color, background: `${client.color}15` }}
                    >
                      {client.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: client.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(client.stamps / client.max) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>
                    <span className="text-[9px] text-[#6B6B6B] font-inter flex-shrink-0">
                      {client.stamps}/{client.max}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Send notification button */}
        <motion.button
          onClick={() => setComposerOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0A0A] py-3.5 rounded-xl font-bold text-sm font-inter btn-gold"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Bell size={16} />
          Envoyer une notification à 312 abonnés
        </motion.button>
      </div>

      {/* Composer modal */}
      <AnimatePresence>
        {composerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 flex items-end md:items-center justify-center p-4 z-20"
            onClick={(e) => e.target === e.currentTarget && setComposerOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-playfair font-bold text-lg text-[#0A0A0A]">Nouvelle notification</h3>
                <button onClick={() => setComposerOpen(false)} className="text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Type selector */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {NOTIF_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setNotifType(type)}
                    className="text-xs px-3 py-1.5 rounded-full font-semibold font-inter border transition-all"
                    style={{
                      background: notifType === type ? TYPE_COLORS[type] : 'transparent',
                      borderColor: TYPE_COLORS[type],
                      color: notifType === type ? (type === 'Promo' ? '#0A0A0A' : 'white') : TYPE_COLORS[type],
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  value={notifTitle}
                  onChange={(e) => setNotifTitle(e.target.value)}
                  placeholder="Titre de la notification"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter text-[#0A0A0A] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
                <textarea
                  value={notifMessage}
                  onChange={(e) => setNotifMessage(e.target.value)}
                  placeholder="Votre message..."
                  rows={2}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter text-[#0A0A0A] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                />
              </div>

              {/* Live preview */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
                <p className="text-[10px] text-[#6B6B6B] uppercase tracking-wider font-inter mb-2">Prévisualisation</p>
                <div className="bg-[#1c2340] rounded-xl p-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 bg-[#C9A84C] rounded-xl flex items-center justify-center text-sm flex-shrink-0">
                      ☕
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold font-inter">{notifTitle || 'Titre...'}</p>
                      <p className="text-white/70 text-[10px] font-inter leading-snug mt-0.5">{notifMessage || 'Message...'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0A0A] py-3.5 rounded-xl font-bold text-sm font-inter btn-gold"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setComposerOpen(false)}
              >
                <Send size={15} />
                Envoyer à 312 abonnés
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
