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
  let style: CSSProperties = {}
  if (paddingTop) {
    style = {
      ...style,
      paddingTop: paddingTop + 'px',
    }
  }

  if (paddingBottom) {
    style = {
      ...style,
      paddingBottom: paddingBottom + 'px'
    }
  }

  return (
    <div className={cn('section-wrapper', className)} style={style}>
      {children}
    </div>
  )
}
