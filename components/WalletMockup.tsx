'use client'

import { motion } from 'framer-motion'
import { Wifi, Star } from 'lucide-react'

export default function WalletMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, rotateY: 5 }}
      className="relative mx-auto"
      style={{ perspective: 1000, maxWidth: 360 }}
    >
      {/* Phone frame */}
      <div className="relative bg-[#1c1c1e] rounded-[40px] p-4 shadow-2xl border border-white/10"
        style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1c1c1e] rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-[#f2f2f7] rounded-[28px] overflow-hidden pt-6">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-2 text-[11px] font-semibold text-[#1c1c1e]">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-1 rounded-sm bg-[#1c1c1e] ${i === 1 ? 'h-2' : i === 2 ? 'h-3' : i === 3 ? 'h-4' : 'h-4'}`} />
                ))}
              </div>
              <Wifi size={11} className="text-[#1c1c1e]" strokeWidth={2.5} />
              <div className="w-6 h-3 border border-[#1c1c1e] rounded-sm flex items-center px-0.5">
                <div className="w-full h-1.5 bg-[#34c759] rounded-sm" />
                <div className="w-1 h-1.5 bg-[#1c1c1e]/40 rounded-sm ml-0.5 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Wallet header */}
          <div className="px-4 py-3 bg-[#f2f2f7]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                  <span className="text-[#C9A84C] font-bold text-xs">LB</span>
                </div>
                <span className="text-xs font-semibold text-[#1c1c1e]">Cartes</span>
              </div>
              <button className="text-[#007aff] text-xs font-medium">Ajouter</button>
            </div>

            {/* THE CARD */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 60%, #0A0A0A 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Card top */}
              <div className="px-5 pt-5 pb-3">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[#C9A84C] text-[10px] tracking-widest uppercase font-semibold mb-1">
                      Programme Fidélité
                    </p>
                    <p className="text-white font-playfair font-bold text-lg leading-tight">
                      L-BOOST<br />
                      <span className="text-[#C9A84C]">VIP Club</span>
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center">
                    <Star size={18} className="text-[#C9A84C] fill-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Points bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-[10px] mb-1.5">
                    <span className="text-white/50 font-inter">Points accumulés</span>
                    <span className="text-[#C9A84C] font-bold">840 / 1000</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #C9A84C, #E4C46E)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '84%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Card bottom */}
              <div
                className="px-5 py-3 flex justify-between items-center border-t border-white/10"
                style={{ background: 'rgba(0,0,0,0.3)' }}
              >
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-wider font-inter">Membre</p>
                  <p className="text-white text-sm font-semibold font-inter">Sophie M.</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-[9px] uppercase tracking-wider font-inter">Réduction dispo</p>
                  <p className="text-[#C9A84C] text-sm font-bold font-inter">-15%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notification preview */}
          <div className="mx-4 mb-4 bg-white rounded-2xl p-3 shadow-sm">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 bg-[#0A0A0A] rounded-xl flex-shrink-0 flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-[10px]">LB</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-[10px] font-semibold text-[#1c1c1e]">L-BOOST VIP</span>
                  <span className="text-[9px] text-[#6B6B6B]">maintenant</span>
                </div>
                <p className="text-[10px] text-[#6B6B6B] leading-snug">
                  🎉 Sophie, votre réduction -15% expire dans 2 jours !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-6 bg-[#C9A84C]/10 rounded-[60px] blur-3xl -z-10" />
    </motion.div>
  )
}
