'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface ScenarioStep {
  number: string
  emoji: string
  title: string
  description: string
  visual: ReactNode
}

interface StepScenarioProps {
  steps: ScenarioStep[]
}

export default function StepScenario({ steps }: StepScenarioProps) {
  return (
    <div className="space-y-12 md:space-y-16">
      {steps.map((step, i) => {
        const isEven = i % 2 === 0
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
          >
            {/* Text side */}
            <div className="flex-1 flex items-start gap-5">
              {/* Step number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#C9A84C]/10 border-2 border-[#C9A84C] flex flex-col items-center justify-center">
                <span className="text-[#C9A84C] text-lg leading-none">{step.emoji}</span>
                <span className="text-[#C9A84C] font-playfair font-bold text-xs">{step.number}</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-[#0A0A0A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B6B6B] font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Visual side */}
            <div className="flex-1 flex justify-center">
              {step.visual}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
