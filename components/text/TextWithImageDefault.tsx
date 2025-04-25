'use client'

import React, { useState } from 'react'
import { Content } from '@prismicio/client'
import RichText from '../0shared/RichText'
import { PrismicImage } from '@prismicio/react'
import { cn } from '@/lib/utils'
import Button from '../0shared/button/Button'

interface ITextWithImageDefault {
  slice: {
    slice_type: 'text_with_image'
    slice_label: null
    id: string
  } & Content.TextWithImageSliceDefault
}

const TextWithImageDefault = ({ slice }: ITextWithImageDefault) => {
  const { title, sub_title, short_content, full_content, image, image_position } = slice.primary

  const [isFullContent, setIsFullContent] = useState<boolean>(false)

  return (
    <div className='grid grid-cols-12 gap-0 sm:gap-14 items-center'>
      <div
        className={cn(
          'col-span-full md:col-span-6 text-center md:text-left',
          image_position === 'Left' ? 'order-2' : ''
        )}
      >
        <RichText field={title} className='text-[40px] md:text-5xl font-semibold text-slice-title mb-4' />
        <RichText field={sub_title} className='text-2xl text-[32px] font-semibold text-blue-dianna mb-4' />
        <RichText field={full_content} className='hidden md:block' />
        <div className='block md:hidden'>
          {isFullContent ? <RichText field={full_content} /> : <RichText field={short_content} />}
        </div>
        <div className='flex justify-center items-center mt-5 md:hidden'>
          <Button variant='outline' color='orange' onClick={() => setIsFullContent((prev) => !prev)}>
            {isFullContent ? 'Hide Detail' : 'Learn More'}
          </Button>
        </div>
      </div>
      <div className='hidden md:block md:col-span-6'>
        <div className='w-full mx-auto max-w-[463px] rounded-tl-[30px] rounded-br-[30px] overflow-hidden'>
          <PrismicImage field={image} />
        </div>
      </div>
    </div>
  )
}

export default TextWithImageDefault
