import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../shared/RichText'

interface IOurVisionDefault {
  slice: Content.OurVisionSlice
}
const OurVisionDefault = ({ slice }: IOurVisionDefault) => {
  return (
    <div className='text-center w-full max-w-[800px] mx-auto px-10'>
      <RichText
        field={slice.primary.title}
        className='mb-3 md:mb-[20px] text-[40px] sm:text-[44px] font-semibold text-blue-dianna'
      />
      <RichText
        field={slice.primary.description}
        className='mb-0 text-lg sm:text-[32px] sm:leading-[40px] text-slate-gray italic'
      />
    </div>
  )
}

export default OurVisionDefault
