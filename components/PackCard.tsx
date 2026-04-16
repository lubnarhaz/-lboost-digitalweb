'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { useRef } from 'react'

interface PackCardProps {
  title: string
  price: string
  features: string[]
  badge?: string
  featured?: boolean
  index?: number
}

export default function PackCard({
  title,
  price,
  features,
  badge,
  featured = false,
  index = 0,
}: PackCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-150, 150], [8, -8])
  const rotateY = useTransform(x, [-150, 150], [-8, 8])

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-3xl p-8 h-full flex flex-col transition-shadow duration-300 cursor-default ${
          featured
            ? 'bg-[#0A0A0A] border-2 border-[#C9A84C] featured-pack'
            : 'bg-[#111111] border border-white/10 hover:border-[#C9A84C]/30'
        }`}
      >
        {/* Badge */}
        {badge && (
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap ${
              featured
                ? 'bg-[#C9A84C] text-[#0A0A0A]'
                : 'bg-white/10 text-white/80 border border-white/20'
            }`}
          >
            {badge}
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h3
            className={`font-playfair font-bold text-2xl mb-2 ${
              featured ? 'text-[#C9A84C]' : 'text-white'
            }`}
          >
            {title}
          </h3>
          <div className="flex items-end gap-2">
            <span
              className={`font-playfair font-bold text-4xl ${
                featured ? 'text-white' : 'text-white/90'
              }`}
            >
              {price}
            </span>
            {price !== 'Sur devis' && (
              <span className="text-white/40 text-sm mb-1 font-inter">HT</span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`w-full h-px mb-6 ${
            featured ? 'bg-[#C9A84C]/40' : 'bg-white/10'
          }`}
        />

        {/* Features */}
        <ul className="flex-1 space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-inter">
              <Check
                size={16}
                className={`mt-0.5 flex-shrink-0 ${
                  featured ? 'text-[#C9A84C]' : 'text-[#C9A84C]/70'
                }`}
                strokeWidth={2.5}
              />
              <span className={featured ? 'text-white/90' : 'text-white/60'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
            featured
              ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E4C46E] btn-gold'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Choisir le pack ${title}`}
        >
          <MessageCircle size={16} />
          {price === 'Sur devis' ? 'Demander un devis' : 'Choisir ce pack'}
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
