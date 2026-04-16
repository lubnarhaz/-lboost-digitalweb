'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: string
  imageAlt: string
  index?: number
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
      className="bg-white rounded-2xl overflow-hidden cursor-default group"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
    >
      {/* Image banner */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/0 to-[#0A0A0A]/0 group-hover:from-[#C9A84C]/15 group-hover:to-[#1A1A2E]/30 transition-all duration-500" />

        {/* Icon chip — bottom left */}
        <div className="absolute bottom-3 left-4 w-10 h-10 bg-[#C9A84C] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon size={20} className="text-[#0A0A0A]" strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair font-semibold text-[17px] text-[#0A0A0A] mb-2.5 group-hover:text-[#C9A84C] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#6B6B6B] text-sm leading-relaxed font-inter">
          {description}
        </p>

        {/* Bottom accent */}
        <div className="mt-5 w-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E4C46E] rounded-full group-hover:w-14 transition-all duration-500" />
      </div>
    </motion.div>
  )
}
