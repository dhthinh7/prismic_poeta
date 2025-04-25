import { cn } from '@/lib/utils'
import { NumberField } from '@prismicio/client'
import React, { CSSProperties, ReactNode } from 'react'

interface ISectionWrapper {
  children: ReactNode
  className?: string
  paddingTop?: NumberField
  paddingBottom?: NumberField
}

export default function SectionWrapper({ children, className, paddingTop, paddingBottom }: ISectionWrapper) {
  const style: CSSProperties = {
    paddingTop: typeof paddingTop === 'number' ? paddingTop + 'px' : '30px',
    paddingBottom: typeof paddingBottom === 'number' ? paddingBottom + 'px' : '30px'
  }

  return (
    <div className={cn('section-wrapper px-5', className)} style={style}>
      {children}
    </div>
  )
}
