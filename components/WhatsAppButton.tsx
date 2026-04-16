'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white rounded-2xl shadow-2xl p-4 max-w-[220px] border border-gray-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer le message WhatsApp"
            >
              <X size={14} />
            </button>
            <p className="text-xs font-semibold text-[#0A0A0A] mb-1 font-inter">
              Besoin d&apos;un devis ?
            </p>
            <p className="text-xs text-[#6B6B6B] font-inter leading-relaxed">
              On répond sous 2h. Envoyez-nous votre projet sur WhatsApp !
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href="https://wa.me/33756959078?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour..."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:bg-[#22bf5b] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
        aria-label="Contacter L-BOOST sur WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" strokeWidth={1.5} />
      </motion.a>
    </div>
  )
}
