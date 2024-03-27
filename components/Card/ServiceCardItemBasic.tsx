import { Simplify } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import React from 'react'

interface IServiceCardItemBasic {
  item: Simplify<Content.ServiceCardsSliceGridCardBasicItem>
}

export default function ServiceCardItemBasic({item}: IServiceCardItemBasic) {
  return <div className='p-4 h-full'>
    <PrismicNextLink field={item.link}>
      <div className='px-5 pt-5 pb-7 bg-white shadow-primary-double rounded-tl-3xl rounded-br-3xl h-full w-full'>
        <p className='mb-6 font-semibold text-xl text-black leading-5'>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.description_secondary}</p>
      </div>
    </PrismicNextLink>
  </div>
}
