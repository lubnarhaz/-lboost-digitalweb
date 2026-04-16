'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

interface BeforeAfterProps {
  before: string[]
  after: string[]
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* BEFORE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl p-7 border-2 border-[#EF4444]/20"
        style={{ background: 'rgba(239,68,68,0.04)' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#EF4444]/15 flex items-center justify-center">
            <X size={16} className="text-[#EF4444]" strokeWidth={2.5} />
          </div>
          <h3 className="font-playfair font-bold text-lg text-[#0A0A0A]">Avant WalKin</h3>
        </div>
        <ul className="space-y-4">
          {before.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 text-sm font-inter text-[#6B6B6B]"
            >
              <div className="w-5 h-5 rounded-full bg-[#EF4444]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X size={11} className="text-[#EF4444]" strokeWidth={2.5} />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* AFTER */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="rounded-3xl p-7 border-2 border-[#10B981]/25"
        style={{ background: 'rgba(16,185,129,0.05)' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#10B981]/15 flex items-center justify-center">
            <Check size={16} className="text-[#10B981]" strokeWidth={2.5} />
          </div>
          <h3 className="font-playfair font-bold text-lg text-[#0A0A0A]">Avec WalKin</h3>
        </div>
        <ul className="space-y-4">
          {after.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 text-sm font-inter text-[#0A0A0A]"
            >
              <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={11} className="text-[#10B981]" strokeWidth={2.5} />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
