import React from 'react'
import { Content } from '@prismicio/client'
import RichText from '../shared/RichText'
import { cn } from '@/lib/utils'
import ClientButtonWrapper from '../shared/button/ClientButtonWrapper'
import { PrismicNextImage } from '@prismicio/next'

interface ITextWithImageButton {
  slice: {
    slice_type: 'text_with_image'
    slice_label: null
    id: string
  } & Content.TextWithImageSliceTextWithImageButton
}

const TextWithImageButton = ({ slice }: ITextWithImageButton) => {
  const {
    title,
    sub_title,
    full_content,
    image,
    image_position,
    button_label,
    button_link,
    button_type,
    form_selection
  } = slice.primary

  return (
    <div className='grid grid-cols-12 gap-0 sm:gap-14 items-center'>
      <div
        className={cn(
          'col-span-full sm:col-span-6 text-center sm:text-left',
          image_position === 'Left' ? 'order-2' : ''
        )}
      >
        <RichText field={title} className='text-[40px] sm:text-5xl font-semibold text-slice-title mb-4' />
        <RichText field={sub_title} className='text-2xl text-[32px] font-semibold text-blue-dianna mb-4' />
        <RichText field={full_content} className='hidden sm:block' />
        <div className='block sm:hidden'>
          <RichText field={full_content} />
        </div>
        <div className='flex justify-center sm:justify-start'>
          <ClientButtonWrapper
            className='px-6 py-[10px] mt-5 sm:mt-14'
            label={button_label}
            type={button_type}
            link={button_link}
            form={form_selection}
            variant='outline'
            color='orange'
          />
        </div>
      </div>
      <div className='hidden sm:block sm:col-span-6'>
        <div className='w-full mx-auto max-w-[463px] relative rounded-tl-[30px] rounded-br-[30px] overflow-hidden'>
          <div
            className='absolute top-0 left-0 right-0 bottom-0'
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(250, 160, 0, 0.50) 0%, rgba(74, 166, 157, 0.50) 100%)`
            }}
          />
          <PrismicNextImage field={image} />
        </div>
      </div>
    </div>
  )
}

export default TextWithImageButton
