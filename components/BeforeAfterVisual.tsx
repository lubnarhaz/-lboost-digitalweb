'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface BeforeAfterItem {
  titre: string
  description: string
}

interface BeforeAfterStat {
  valeur: string
  label: string
}

interface BeforeAfterVisualProps {
  photoAvant: string
  photoApres: string
  itemsAvant: BeforeAfterItem[]
  itemsApres: BeforeAfterItem[]
  stats: BeforeAfterStat[]
}

function CountUp({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(target)

  useEffect(() => {
    if (!inView) return
    const numMatch = target.match(/^[+×−]?(\d+)/)
    if (!numMatch) { setDisplay(target); return }

    const prefix = target.slice(0, target.indexOf(numMatch[1]))
    const end = parseInt(numMatch[1], 10)
    const rest = target.slice(target.indexOf(numMatch[1]) + numMatch[1].length)
    const duration = 1200
    const steps = 30
    const stepTime = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(end * eased)
      setDisplay(`${prefix}${current}${rest}${suffix}`)
      if (step >= steps) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, target, suffix])

  return <span ref={ref}>{display}</span>
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function BeforeAfterVisual({
  photoAvant,
  photoApres,
  itemsAvant,
  itemsApres,
  stats,
}: BeforeAfterVisualProps) {
  return (
    <section className="w-full relative bg-[#0A0A0A]">

      {/* ── Titre ── */}
      <div className="text-center pt-20 pb-12 md:pt-28 md:pb-14 px-6">
        <div className="w-10 h-px bg-[#C9A84C] mx-auto mb-6" />
        <h2
          className="font-playfair font-bold text-white mb-4"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          Avant / Après L-BOOST
        </h2>
        <p className="text-[#9CA3AF] font-inter text-base md:text-lg max-w-lg mx-auto">
          La transformation concrète que nous apportons à votre activité.
        </p>
      </div>

      {/* ── Split Screen ── */}
      <div className="relative flex flex-col md:flex-row w-full" style={{ minHeight: '600px' }}>

        {/* ── PANEL AVANT ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative overflow-hidden min-h-[420px] md:min-h-0"
        >
          <Image
            src={photoAvant}
            alt="Avant L-BOOST"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(40%) brightness(0.4)' }}
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.75) 100%)' }}
          />

          <div className="relative z-[2] flex flex-col justify-center h-full p-8 md:p-12 lg:p-14">
            <span
              className="inline-block w-fit mb-8 px-4 py-1.5 rounded-full text-[11px] font-inter font-semibold uppercase tracking-[0.2em]"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#9CA3AF',
              }}
            >
              Avant L-BOOST
            </span>

            {itemsAvant.map((item, i) => (
              <motion.div
                key={item.titre}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-4 last:mb-0 p-4 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-[#6B7280] text-lg font-light flex-shrink-0 mt-0.5">✕</span>
                <div>
                  <p className="text-[#D1D5DB] text-[15px] font-medium font-inter mb-0.5">{item.titre}</p>
                  <p className="text-[#6B7280] text-[13px] font-inter leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── SÉPARATEUR VS ── */}
        {/* Desktop: vertical au centre */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center gap-2">
          <div className="w-px h-20" style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C)' }} />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 }}
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: '#0A0A0A',
              border: '2px solid #C9A84C',
              boxShadow: '0 0 30px rgba(201,168,76,0.4)',
            }}
          >
            <span className="text-[#C9A84C] text-sm font-extrabold font-inter">VS</span>
          </motion.div>
          <div className="w-px h-20" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </div>

        {/* Mobile: horizontal */}
        <div className="flex md:hidden items-center justify-center gap-3 py-4 relative z-10">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }} />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: '#0A0A0A',
              border: '2px solid #C9A84C',
              boxShadow: '0 0 24px rgba(201,168,76,0.35)',
            }}
          >
            <span className="text-[#C9A84C] text-xs font-extrabold font-inter">VS</span>
          </motion.div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #C9A84C, transparent)' }} />
        </div>

        {/* ── PANEL APRÈS ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative overflow-hidden min-h-[420px] md:min-h-0"
        >
          <Image
            src={photoApres}
            alt="Après L-BOOST"
            fill
            className="object-cover"
            style={{ filter: 'brightness(0.5)' }}
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.7) 100%)' }}
          />
          {/* Gold glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)' }}
          />

          <div className="relative z-[2] flex flex-col justify-center h-full p-8 md:p-12 lg:p-14">
            <span
              className="inline-block w-fit mb-8 px-4 py-1.5 rounded-full text-[11px] font-inter font-semibold uppercase tracking-[0.2em]"
              style={{
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#C9A84C',
              }}
            >
              Avec L-BOOST
            </span>

            {itemsApres.map((item, i) => (
              <motion.div
                key={item.titre}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-4 last:mb-0 p-4 rounded-xl"
                style={{
                  background: 'rgba(201,168,76,0.06)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <span className="text-[#C9A84C] text-lg flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="text-white text-[15px] font-semibold font-inter mb-0.5">{item.titre}</p>
                  <p className="text-[#9CA3AF] text-[13px] font-inter leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Barre de stats dorée ── */}
      <div className="bg-[#C9A84C] px-6 py-6 md:py-7">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair font-bold text-[#0A0A0A] text-xl md:text-[28px] leading-tight">
                <CountUp target={stat.valeur} />
              </p>
              <p className="font-inter text-[11px] md:text-[13px] text-[#3D2E0A] font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
