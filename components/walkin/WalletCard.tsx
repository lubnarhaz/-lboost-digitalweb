'use client'

import { motion } from 'framer-motion'

interface WalletCardProps {
  shopName: string
  shopEmoji: string
  primaryColor: string
  stamps: number
  maxStamps: number
  reward: string
  animate?: boolean
  compact?: boolean
}

export default function WalletCard({
  shopName,
  shopEmoji,
  primaryColor,
  stamps,
  maxStamps,
  reward,
  animate = false,
  compact = false,
}: WalletCardProps) {
  const progress = (stamps / maxStamps) * 100
  const remaining = maxStamps - stamps

  return (
    <motion.div
      initial={animate ? { y: 60, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <motion.div
        animate={animate ? { scale: [1, 1.015, 1] } : {}}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}BB 50%, ${primaryColor}99 100%)`,
          boxShadow: `0 20px 60px ${primaryColor}50, 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)`,
        }}
      >
        {/* Header */}
        <div className={`${compact ? 'px-4 pt-4 pb-2' : 'px-5 pt-5 pb-3'}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-white/60 text-[9px] tracking-[0.2em] uppercase font-inter font-semibold mb-1">
                CARTE FIDÉLITÉ
              </p>
              <p className={`text-white font-playfair font-bold leading-tight ${compact ? 'text-base' : 'text-xl'}`}>
                {shopEmoji} {shopName}
              </p>
            </div>
            <div className={`bg-white/20 rounded-xl flex items-center justify-center ${compact ? 'w-8 h-8 text-base' : 'w-11 h-11 text-2xl'}`}>
              {shopEmoji}
            </div>
          </div>

          {/* Stamps row */}
          <div className="flex gap-1.5 flex-wrap mb-2.5">
            {Array.from({ length: maxStamps }).map((_, i) => (
              <motion.div
                key={i}
                initial={animate ? { scale: 0 } : false}
                animate={animate ? { scale: 1 } : false}
                transition={{ delay: 1 + i * 0.08, type: 'spring', stiffness: 400 }}
                className={`rounded-full border-2 flex items-center justify-center transition-all ${
                  compact ? 'w-5 h-5' : 'w-6 h-6'
                } ${
                  i < stamps
                    ? 'bg-[#C9A84C] border-[#E4C46E] shadow-sm'
                    : 'bg-white/10 border-white/30'
                }`}
              >
                {i < stamps && (
                  <div className={`rounded-full bg-white ${compact ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Status text */}
          <p className="text-white/70 text-[11px] font-inter mb-3">
            <span className="text-white font-bold">{stamps}/{maxStamps} tampons</span>
            {' · '}
            {remaining > 0
              ? `Encore ${remaining} visite${remaining > 1 ? 's' : ''} pour ${reward}`
              : `🎉 ${reward} offert !`}
          </p>

          {/* Progress bar */}
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #C9A84C, #F0D080)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.4, delay: animate ? 0.8 : 0, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 flex justify-between items-center" style={{ background: 'rgba(0,0,0,0.25)' }}>
          {/* QR code stylized */}
          <div className="flex items-center gap-2.5">
            <div className={`bg-white rounded-lg p-1 ${compact ? 'w-8 h-8' : 'w-10 h-10'}`}>
              <div className="w-full h-full grid grid-cols-5 gap-px">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      [0, 1, 2, 5, 6, 10, 12, 14, 18, 20, 21, 22, 24, 7, 16].includes(i)
                        ? 'bg-[#1c1c1e]'
                        : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-white/50 text-[9px] uppercase tracking-wider font-inter">Scan en caisse</p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-[9px] uppercase tracking-wider font-inter">Récompense</p>
            <p className="text-[#C9A84C] text-xs font-bold font-inter mt-0.5">{reward}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
