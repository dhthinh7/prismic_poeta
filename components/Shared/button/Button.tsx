'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import FadeLoader from 'react-spinners/FadeLoader'
import ConditionRender from '../ConditionRender'
import { ChevronDown } from 'lucide-react'

type Variant = 'solid' | 'outline'
type Color = 'slate' | 'white' | 'orange'

export interface IButton {
  variant?: Variant
  color?: Color
  className?: string
  href?: string
  children: React.ReactNode
  isLoading?: boolean
  isShowIndicator?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const baseStyles = {
  solid: 'px-[15px] py-[10px] rounded-lg text-[18px] font-semibold border-2 border-transparent',
  outline: 'px-[15px] py-[10px] rounded-lg text-[18px] font-semibold border-2 border-white'
}

const variantStyles = {
  solid: {
    orange:
      'bg-[#ff4b01] text-white hover:bg-orange-700 active:bg-orange-700 active:text-white focus-visible:outline-white',
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white'
  },
  outline: {
    orange:
      'text-orange-500 hover:text-orange-600 active:text-orange-600 focus-visible:outline-white border-orange-600 hover:border-orange-600',
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white'
  }
}

export default function Button({
  variant = 'solid',
  color = 'orange',
  className,
  children,
  isLoading,
  isShowIndicator,
  type = 'button',
  ...props
}: IButton) {
  // const classNames = `${baseStyles[variant] + variantStyles[variant][color]} ${className}`
  const classNames = cn(baseStyles[variant], variantStyles[variant][color], 'leading-[1.2]', className)
  return (
    <button type={type} className={cn('flex items-center justify-center', classNames)} {...props}>
      {children}{' '}
      {isLoading ? (
        <FadeLoader
          speedMultiplier={1}
          color='white'
          height={10}
          width={4}
          className='!w-10 !h-6 !top-[55%] -translate-y-1/2 scale-50'
        />
      ) : (
        <ConditionRender condition={isShowIndicator}>
          <ChevronDown />
        </ConditionRender>
      )}
    </button>
  )
}
