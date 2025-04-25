'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import RichText from '../shared/RichText'
import { ImageField, RichTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { utils } from '@/lib/utils/utils'

interface IGridCardItem {
  color: string
  iconValue: string | number
  title: RichTextField
  description: RichTextField
  icon?: ImageField<never>
  onChangeHoverColor: (color: string) => void
}

const GridCardItem = ({ color, iconValue, title, description, icon, onChangeHoverColor }: IGridCardItem) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  useEffect(() => {
    onChangeHoverColor(isHovered ? utils.hexToRgba(color, 0.7) : 'transparent')
  }, [color, isHovered, onChangeHoverColor])

  return (
    <div className='sm:w-1/2 lg:w-1/4 sm:p-4'>
      <div
        className={cn(
          'h-full w-[270px] sm:w-full p-5 flex flex-col gap-4 bg-white rounded-tl-[30px] overflow-hidden border border-b-8 border-transparent transition-all duration-300'
        )}
        style={{
          borderColor: isHovered ? color : 'transparent'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HeaderICon color={color} value={iconValue} icon={icon} />
        <RichText field={title} className='text-blue-dianna text-[22px] font-bold mb-0' />
        <RichText field={description} className='text-blue-dianna text-lg' />
      </div>
    </div>
  )
}

export default GridCardItem

interface IHeaderICon {
  color: string
  value: string | number
  icon?: ImageField<never>
}
const HeaderICon = ({ color, value, icon }: IHeaderICon) => {
  return (
    <div
      className={cn('w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white')}
      style={{
        background: color
      }}
    >
      {icon?.url ? (
        <PrismicNextImage field={icon} className='w-full h-full object-cover object-center rounded-full' />
      ) : (
        value
      )}
    </div>
  )
}
