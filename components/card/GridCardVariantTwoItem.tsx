import React from 'react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '../shared/RichText'
import { ImageField, RichTextField } from '@prismicio/client'

interface IGridCardVariantTwoItem {
  icon: ImageField<never>
  title: RichTextField
  description: RichTextField
}
const GridCardVariantTwoItem = ({ icon, title, description }: IGridCardVariantTwoItem) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 sm:p-5'>
      <div className='h-full flex flex-col items-center justify-center gap-[10px] shadow-ds bg-card-bg px-4 py-8 rounded-[10px]'>
        <div className='w-[75px] overflow-hidden'>
          <PrismicNextImage
            field={icon}
            width={75}
            height={75}
            className='rounded-full w-full aspect-square object-cover object-center'
          />
        </div>
        <RichText field={title} className='text-center text-xl font-bold text-slate-gray mb-4' />
        <RichText field={description} className='text-center text-slate-gray' />
      </div>
    </div>
  )
}

export default GridCardVariantTwoItem
