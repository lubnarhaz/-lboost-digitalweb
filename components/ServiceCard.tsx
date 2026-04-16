'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        boxShadow: '0 0 0 1px #C9A84C, 0 20px 60px rgba(201,168,76,0.15)',
        transition: { duration: 0.3 },
      }}
      className="bg-white rounded-2xl p-7 cursor-default group"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
        <Icon
          size={24}
          className="text-[#C9A84C] group-hover:scale-110 transition-transform duration-300"
          strokeWidth={1.8}
        />
      </div>

      {/* Content */}
      <h3 className="font-playfair font-semibold text-lg text-[#0A0A0A] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#6B6B6B] text-sm leading-relaxed font-inter">
        {description}
      </p>

      {/* Bottom accent */}
      <div className="mt-5 w-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E4C46E] rounded-full group-hover:w-12 transition-all duration-500" />
    </motion.div>
  )
}
