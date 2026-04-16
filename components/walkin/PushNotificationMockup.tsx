'use client'

import { motion } from 'framer-motion'

interface PushNotificationMockupProps {
  shopName: string
  message: string
  time?: string
  emoji?: string
  animate?: boolean
  compact?: boolean
}

export default function PushNotificationMockup({
  shopName,
  message,
  time = '17:04',
  emoji = '☕',
  animate = true,
  compact = false,
}: PushNotificationMockupProps) {
  const width = compact ? 220 : 280
  const height = compact ? 380 : 480

  return (
    <div
      className="relative mx-auto overflow-hidden flex-shrink-0"
      style={{
        width,
        height,
        borderRadius: 36,
        background: 'linear-gradient(160deg, #1a2340 0%, #080c18 60%, #0a0a1a 100%)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-black z-10"
        style={{ width: compact ? 80 : 100, height: compact ? 16 : 20, borderRadius: '0 0 14px 14px' }}
      />

      {/* Screen */}
      <div className={`${compact ? 'pt-8 px-3' : 'pt-10 px-4'}`}>
        {/* Date + time */}
        <div className="text-center mb-4">
          <p className="text-white/40 font-inter uppercase tracking-widest mb-1" style={{ fontSize: compact ? 9 : 10 }}>
            MARDI 16 AVRIL
          </p>
          <p
            className="text-white font-inter font-semibold"
            style={{ fontSize: compact ? 38 : 50, letterSpacing: '-1px' }}
          >
            {time}
          </p>
        </div>

        {/* Notification pill */}
        <motion.div
          initial={animate ? { y: -40, opacity: 0, scale: 0.9 } : false}
          animate={animate ? { y: 0, opacity: 1, scale: 1 } : false}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="rounded-2xl p-3 border border-white/10"
          style={{
            background: 'rgba(255,255,255,0.13)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-start gap-2.5">
            <div
              className="bg-[#C9A84C] rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ width: compact ? 32 : 38, height: compact ? 32 : 38, fontSize: compact ? 14 : 18 }}
            >
              {emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <span
                  className="text-white font-semibold font-inter truncate"
                  style={{ fontSize: compact ? 10 : 12 }}
                >
                  {shopName}
                </span>
                <span
                  className="text-white/40 font-inter ml-1.5 flex-shrink-0"
                  style={{ fontSize: compact ? 9 : 10 }}
                >
                  maintenant
                </span>
              </div>
              <p
                className="text-white/75 font-inter leading-snug"
                style={{ fontSize: compact ? 10 : 11 }}
              >
                {message}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stars blur decoration */}
      <div className="absolute top-20 left-4 w-1 h-1 rounded-full bg-white/20" />
      <div className="absolute top-32 right-8 w-0.5 h-0.5 rounded-full bg-white/15" />
      <div className="absolute top-24 left-16 w-0.5 h-0.5 rounded-full bg-white/20" />

      {/* Home bar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-white/30 rounded-full"
        style={{ bottom: 10, width: compact ? 70 : 90, height: 4 }}
      />
    </div>
  )
}
