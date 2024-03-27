import { Simplify } from '@/prismicio-types'
import { Content, RichTextField } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import React from 'react'

interface IServiceCardItem {
  item: Simplify<Content.ServiceCardsSliceDefaultItem>
}
export default function ServiceCardItem({item}: IServiceCardItem) {
  return (
    <div className='p-4 h-full transform hover:scale-105 duration-300 ease-in'>
      <PrismicNextLink field={item.link} className=''>
        <div className='px-5 pt-5 pb-7 bg-white shadow-primary-double rounded-tl-3xl rounded-br-3xl h-full w-full'>
          <div className='w-12 h-auto mb-6'>
            <PrismicNextImage field={item.icon} />
          </div>
          <p className='mb-6 font-semibold text-xl text-black leading-5'>{item.title}</p>
          <p>{item.description}</p>
        </div>
      </PrismicNextLink>
    </div>
  )
}
