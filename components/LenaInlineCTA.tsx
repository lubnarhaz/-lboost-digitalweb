'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const LENA_AVATAR = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'

interface LenaInlineCTAProps {
  message?: string
  light?: boolean
}

export default function LenaInlineCTA({
  message = 'Ou posez vos questions à Léna, notre conseillère →',
  light = false,
}: LenaInlineCTAProps) {
  const handleClick = () => {
    const trigger = document.querySelector<HTMLButtonElement>('[data-lena-trigger]')
    if (trigger) trigger.click()
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      whileHover={{ y: -2 }}
      className="group mx-auto mt-5 flex items-center gap-3 cursor-pointer"
      aria-label="Parler à Léna"
    >
      {/* Avatar with pulse ring */}
      <div className="relative flex-shrink-0">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute rounded-full"
          style={{ inset: '-4px', border: '1.5px solid #C9A84C' }}
        />
        <div
          className="w-8 h-8 rounded-full overflow-hidden relative"
          style={{ border: '1.5px solid #C9A84C' }}
        >
          <Image src={LENA_AVATAR} alt="Léna" fill className="object-cover" sizes="32px" />
        </div>
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
          style={{ background: '#10B981', border: '2px solid ' + (light ? '#F8F7F4' : '#0A0A0A') }}
        />
      </div>

      {/* Text */}
      <span
        className={`text-sm font-inter font-medium transition-colors duration-200 ${
          light
            ? 'text-[#4B5563] group-hover:text-[#C9A84C]'
            : 'text-white/50 group-hover:text-[#C9A84C]'
        }`}
      >
        {message}
      </span>
    </motion.button>
  )
}
