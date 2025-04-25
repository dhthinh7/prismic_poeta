import React from 'react'
import { cn } from '@/lib/utils'

interface ICopyRight {
  className?: string
}
export default function CopyRight({ className }: ICopyRight) {
  const currentYear = new Date().getFullYear()
  return (
    <section className={cn(className, 'bg-black text-white flex-center py-4 relative')}>
      Copyright {currentYear} Poeta Digital.
    </section>
  )
}
