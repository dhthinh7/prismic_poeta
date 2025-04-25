import React from 'react'

import { Content } from '@prismicio/client'
import { cn } from '@/lib/utils'
import RichText from '../shared/RichText'
import ClientButtonWrapper from '../shared/button/ClientButtonWrapper'
import { PrismicNextImage } from '@prismicio/next'

interface ITextWithImageButtonSecondary {
  slice: {
    slice_type: 'text_with_image'
    slice_label: null
    id: string
  } & Content.TextWithImageSliceTextWithImageButtonSecondary
}

const TextWithImageButtonSecondary = ({ slice }: ITextWithImageButtonSecondary) => {
  const {
    full_content,
    image,
    image_position,
    button_label,
    button_link,
    button_type,
    form_selection,
    button_variant
  } = slice.primary

  return (
    <div className='grid grid-cols-12 gap-5 sm:gap-14 items-center'>
      <div
        className={cn(
          'col-span-full sm:col-span-6 text-center sm:text-left order-1',
          image_position === 'Left' ? 'sm:order-2' : ''
        )}
      >
        <RichText field={full_content} />
        <div className='flex justify-center sm:justify-start mt-5'>
          <ClientButtonWrapper
            className=''
            label={button_label}
            type={button_type}
            link={button_link}
            form={form_selection}
            variant={button_variant || 'solid'}
            color='orange'
          />
        </div>
      </div>
      <div className='col-span-full sm:col-span-6'>
        <PrismicNextImage field={image} className='w-full object-cover object-center' />
      </div>
    </div>
  )
}

export default TextWithImageButtonSecondary
