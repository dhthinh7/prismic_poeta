import React from 'react'
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../Shared/RichText'

interface IPageOverviewDefault {
  slice: Content.PageOverviewSlice
}

export default function PageOverviewDefault({slice}: IPageOverviewDefault) {
  return (
    <div className='flex items-center'>
      <div className='w-3/12'>
        <div className='flex items-center justify-center'>
          <div className='w-20 h-80'>
            <PrismicNextImage field={slice.primary.icon} className='w-full h-full'/>
          </div>
        </div>
      </div>
      <div className='w-9/12'>
        <p>{slice.primary.category}</p>
        <RichText field={slice.primary.title} h1Class='my-10'/>
        <RichText field={slice.primary.description}/>
      </div>
    </div>
  )
}
