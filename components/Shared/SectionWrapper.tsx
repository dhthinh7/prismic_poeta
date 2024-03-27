import { cn } from '@/utils'
import React, { ReactNode } from 'react'

interface ISectionWrapper {
  children: ReactNode
  className?: string
}

export default function SectionWrapper({children, className}: ISectionWrapper) {
  return (
    <div className={cn('section-wrapper', className)}>
      {children}
    </div>
  )
}
