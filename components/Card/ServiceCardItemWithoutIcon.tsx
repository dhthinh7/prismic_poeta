import { Simplify } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import React from 'react'

interface IServiceCardItemWithoutIcon {
  index: number
  item: Simplify<Content.ServiceCardsSliceGridWithoutIconItem>
}

const colors = [
  'rgba(255, 75, 1, 1.0)',
  'rgba(250, 160, 0, 1.0)',
  'rgba(247, 139, 99, 1.0)',
  'rgba(176, 75, 52, 1.0)'
]

export default function ServiceCardItemWithoutIcon({ index, item }: IServiceCardItemWithoutIcon) {
  const style: React.CSSProperties = {
    borderStyle: 'solid',
    borderTopWidth: '2px',
    borderRightWidth: '2px',
    borderLeftWidth: '2px',
    borderBottomWidth: '6px',
    borderColor: colors[index]
  }

  return (
    <div className='p-4 h-full'>
      <div className='px-5 pt-5 pb-7 bg-white shadow-primary-double rounded-tl-3xl rounded-br-3xl h-full w-full' style={style}>
        <div className='w-12 h-12 mb-6 rounded-full flex items-center justify-center text-2xl font-bold text-white' style={{backgroundColor: colors[index]}}>
          {index}
        </div>
        <p className='mb-6 font-semibold text-xl text-black leading-5'>{item.title}</p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
