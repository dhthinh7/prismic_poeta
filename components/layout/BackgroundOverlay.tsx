import { cn } from '@/lib/utils'
import React from 'react'

interface IBackgroundOverlay {
  background?: string
  className?: string
}

export default function BackgroundOverlay({
  background = 'linear-gradient(to bottom, rgba(250, 250, 250, 0), rgba(34, 60, 77, 0.8))',
  className
}: IBackgroundOverlay) {
  return (
    <div className={cn('overlay absolute top-0 h-full w-full', className)} style={{ backgroundImage: background }} />
  )
}
