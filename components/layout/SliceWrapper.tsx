import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TBackgroundColor } from '@/lib/model/index.type.'

interface ISliceWrapper {
  children: ReactNode
  className?: string
  bgColor?: TBackgroundColor
}

export default function SliceWrapper({ className, children, bgColor = '#FFFFFF' }: ISliceWrapper) {
  return (
    <div
      className={cn(className)}
      style={{
        backgroundColor: bgColor
      }}
    >
      {children}
    </div>
  )
}
