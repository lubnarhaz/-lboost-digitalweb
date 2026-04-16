'use client'

import { motion } from 'framer-motion'
import WalletCard from './WalletCard'
import PushNotificationMockup from './PushNotificationMockup'

export default function DualPhoneMockup() {
  return (
    <div className="flex items-end justify-center gap-6 md:gap-8">
      {/* Left phone — Wallet card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
        style={{ marginBottom: 24 }}
      >
        {/* Phone frame */}
        <div
          className="relative overflow-hidden"
          style={{
            width: 200,
            borderRadius: 32,
            background: '#1c1c1e',
            padding: '12px 8px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black z-10 w-20 h-4 rounded-b-2xl" />
          <div className="pt-4 pb-2">
            {/* Phone screen content */}
            <div className="bg-[#f2f2f7] rounded-[22px] overflow-hidden pt-4 pb-3 px-2">
              <p className="text-[8px] font-semibold text-[#1c1c1e] text-center mb-2 font-inter tracking-wide uppercase">
                Portefeuille
              </p>
              <WalletCard
                shopName="Grain de Sel"
                shopEmoji="☕"
                primaryColor="#2D6A4F"
                stamps={7}
                maxStamps={10}
                reward="café offert"
                compact
              />
              <div className="mt-2 text-center">
                <p className="text-[8px] text-[#6b6b6b] font-inter">Appuyez pour afficher</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Label */}
        <div className="text-center mt-3">
          <span className="text-xs font-semibold font-inter text-[#0A0A0A] bg-[#C9A84C]/15 border border-[#C9A84C]/30 px-3 py-1 rounded-full">
            🍎 Apple Wallet
          </span>
        </div>
      </motion.div>

      {/* Right phone — Push notification */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <PushNotificationMockup
          shopName="Le Grain de Sel"
          message="Aujourd'hui -20% sur tous les cafés de 14h à 16h ! ☕"
          time="14:02"
          emoji="☕"
          compact
          animate
        />

        {/* Label */}
        <div className="text-center mt-3">
          <span className="text-xs font-semibold font-inter text-[#0A0A0A] bg-[#10B981]/10 border border-[#10B981]/30 px-3 py-1 rounded-full">
            🔔 Push notification
          </span>
        </div>
      </motion.div>
    </div>
  )
}
