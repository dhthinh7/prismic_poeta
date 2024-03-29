import { cn } from '@/utils'
import React, { ReactNode } from 'react'

interface IGridFlatten {
  length?: number
  children: ReactNode
  className?: string
}

const classItems = [
  'w-full',
  'w-1/2',
  'w-full lg:w-1/3',
  'w-full md:w-1/2 lg:w-1/4',
]

export default function GridFlatten({children, length = 4, className}: IGridFlatten) {
  const classIndex = length > 4 ? classItems.length - 1 : length - 1
  return (
    <div className={cn(classItems[classIndex], className)}>
      {children}
    </div>
  )
}
