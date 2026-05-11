'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CarteFidelitePage() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/walkin')
  }, [router])
  return null
}
