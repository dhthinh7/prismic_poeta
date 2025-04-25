import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../shared/RichText'
import { PrismicImage } from '@prismicio/react'
import ClientButtonWrapper from '../shared/button/ClientButtonWrapper'

interface IWeAreHereDefault {
  slice: Content.WeAreHereSlice
}
const WeAreHereDefault = ({ slice }: IWeAreHereDefault) => {
  return (
    <div className='flex flex-col md:flex-row-reverse sm:gap-10 xl:gap-[100px] md:items-center gap-5 '>
      <div className='flex flex-col gap-5 md:gap-10 md:items-start'>
        <RichText
          field={slice.primary.title}
          className='text-[40px] md:text-[48px] font-semibold mb-0 text-white text-center md:text-left'
        />
        <RichText
          field={slice.primary.description}
          className='text-lg md:text-2xl mb-0 text-white text-center md:text-left'
        />

        <div className='hidden md:flex justify-center'>
          <ClientButtonWrapper
            className='w-fit px-6 py-[10px]'
            label={slice.primary.button_label}
            type={slice.primary.button_type}
            link={slice.primary.button_link}
            form={slice.primary.form_selection}
            variant='solid'
            color='orange'
          />
        </div>
      </div>
      <div className='relative mt-4 md:w-1/2 flex-shrink-0 overflow-hidden'>
        <PrismicImage field={slice.primary.image} className='w-full aspect-auto object-contain object-center' />
      </div>

      <div className='flex justify-center md:hidden'>
        <ClientButtonWrapper
          className='w-fit px-6 py-[10px]'
          label={slice.primary.button_label}
          type={slice.primary.button_type}
          link={slice.primary.button_link}
          form={slice.primary.form_selection}
          variant='solid'
          color='orange'
        />
      </div>
    </div>
  )
}

export default WeAreHereDefault
