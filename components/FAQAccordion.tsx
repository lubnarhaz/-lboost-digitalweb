'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQAccordionProps {
  items: { question: string; reponse: string }[]
  theme?: 'dark' | 'light'
}

export default function FAQAccordion({ items, theme = 'dark' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const isDark = theme === 'dark'

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: isDark
                ? isOpen ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.03)'
                : isOpen ? 'rgba(201,168,76,0.04)' : '#FFFFFF',
              border: `1px solid ${
                isDark
                  ? isOpen ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.08)'
                  : isOpen ? 'rgba(201,168,76,0.3)' : '#E5E7EB'
              }`,
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={`font-inter font-semibold text-[15px] ${
                  isDark
                    ? isOpen ? 'text-[#C9A84C]' : 'text-white'
                    : isOpen ? 'text-[#C9A84C]' : 'text-[#0A0A0A]'
                } transition-colors`}
              >
                {item.question}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: isOpen ? 'rgba(201,168,76,0.15)' : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                  border: `1px solid ${isOpen ? 'rgba(201,168,76,0.3)' : isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB'}`,
                }}
              >
                {isOpen
                  ? <Minus size={14} className="text-[#C9A84C]" />
                  : <Plus size={14} className={isDark ? 'text-white/50' : 'text-[#6B7280]'} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p
                      className={`font-inter text-sm leading-relaxed ${
                        isDark ? 'text-white/50' : 'text-[#4B5563]'
                      }`}
                    >
                      {item.reponse}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
