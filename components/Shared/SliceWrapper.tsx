import { cn } from '@/utils'
import React, { ReactNode } from 'react'

interface ISliceWrapper {
  children: ReactNode
  className?: string
  background?: boolean
}
export default function SliceWrapper({className, background, children}: ISliceWrapper) {
  return (
    <div className={cn(background ? 'bg-primary' : '', className)} >
      {children}
    </div>
  )
}
