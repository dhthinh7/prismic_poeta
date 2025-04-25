'use client'

import React, { ReactNode, useEffect, useMemo, useRef } from 'react'
import { cn } from '@/lib/utils'
import ChevronDown from '../../icons/ChevronDown'
import CloseIcon from '../../icons/CloseIcon'

interface IDrawerProps {
  isOpen: boolean
  position?: 'left' | 'right'
  className?: string
  title?: string
  children: ReactNode
  top?: ReactNode
  bottom?: ReactNode
  controlOverflow?: boolean
  onTopControl?: () => void
  onBottomControl?: (value: boolean) => void
}
const Drawer = ({
  isOpen,
  position = 'right',
  title,
  children,
  className,
  top,
  bottom,
  controlOverflow,
  onTopControl,
  onBottomControl
}: IDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  const positionClassName = useMemo(() => {
    switch (position) {
      case 'left':
        return '-left-full'

      default:
        return '-right-full'
    }
  }, [position])

  const openClassName = useMemo(() => {
    if (!isOpen) return ''

    switch (position) {
      case 'left':
        return 'left-0'

      default:
        return 'right-0'
    }
  }, [isOpen, position])

  useEffect(() => {
    if (!controlOverflow) return

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    if (drawerRef.current) {
      drawerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    // Cleanup: reset body scroll when the component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = ''
    }
  }, [controlOverflow, isOpen])

  return (
    <nav
      className={cn(
        'fixed top-0 w-full h-full transition-all duration-300 ease-in-out overflow-hidden bg-white z-[999] overflow-y-auto',
        className,
        positionClassName,
        openClassName
      )}
    >
      <div className='relative h-full'>
        {top ? top : <DrawerTop title={title} onTopControl={onTopControl} />}
        <div className='mb-[15vh]'>{children}</div>
        {bottom ? bottom : onBottomControl && <DrawerBottom onBottomControl={onBottomControl} />}
      </div>
    </nav>
  )
}

export default Drawer

interface IDrawerBottomProps {
  onBottomControl: (value: boolean) => void
}
const DrawerBottom = ({ onBottomControl }: IDrawerBottomProps) => {
  return (
    <button
      onClick={() => onBottomControl(false)}
      className='absolute bottom-[4%] left-1/2 -translate-x-1/2 h-[30px] w-[30px]'
    >
      <CloseIcon />
    </button>
  )
}

interface IDrawerTop {
  title?: string
  onTopControl?: () => void
}

const DrawerTop = ({ title = '', onTopControl }: IDrawerTop) => {
  return (
    <button
      onClick={onTopControl}
      className='flex items-center gap-2 p-4 border-b-2 border-black/10 w-full hover:text-secondary'
    >
      <ChevronDown className='w-5 h-5 rotate-90 font-helvetica' />
      <span>{title}</span>
    </button>
  )
}
