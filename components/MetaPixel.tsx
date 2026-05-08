'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

export default function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}
