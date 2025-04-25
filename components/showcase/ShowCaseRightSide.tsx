import { cn } from '@/lib/utils'
import { ImageField, RichTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'
import RichText from '../0shared/RichText'
interface IShowCaseRightSide {
  className?: string
  image: ImageField<never>
  label: RichTextField
}
const ShowCaseRightSide = ({ className, image, label }: IShowCaseRightSide) => {
  return (
    <div className={cn(className)}>
      <div className='flex justify-center'>
        <div className='w-full lg:w-[360px] rounded-[30px] overflow-hidden relative'>
          <div className='absolute top-0 h-full w-full bg-gradient-card' />
          <RichText
            field={label}
            className='absolute right-1/2 translate-x-1/2 text-3xl lg:text-[44px] font-bold bottom-5 w-full text-center text-white mb-0'
          />
          <PrismicNextImage field={image} className='w-full aspect-auto' />
        </div>
      </div>
    </div>
  )
}

export default ShowCaseRightSide
