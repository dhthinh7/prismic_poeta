import { cn } from '@/utils'
import { NumberField } from '@prismicio/client'
import React, { CSSProperties, ReactNode } from 'react'

interface ISectionWrapper {
  children: ReactNode
  className?: string
  paddingTop?: NumberField
  paddingBottom?: NumberField
}

export default function SectionWrapper({children, className, paddingTop, paddingBottom}: ISectionWrapper) {
  const style: CSSProperties = {
    paddingTop: paddingTop !==undefined ? paddingTop + 'px' : '30px',
    paddingBottom: paddingBottom !== undefined ? paddingBottom + 'px' : '30px'
  }

  return (
    <div className={cn('section-wrapper', className)} style={style}>
      {children}
    </div>
  )
}
