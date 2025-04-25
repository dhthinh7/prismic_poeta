import React from 'react'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { prismicUtils } from '@/lib/utils/prismic.util'
import RichText from '../0shared/RichText'
import HeaderSection from '../0shared/section/HeaderSection'

interface IImageBlock {
  slice: Content.ImageSliceSlice
}

const ImageBlock = ({ slice }: IImageBlock) => {
  const { title, description, title_position, background, link, caption } = slice.primary

  return (
    <div className='flex flex-col gap-10 sm:gap-[50px]'>
      <HeaderSection title={title} description={description} titlePosition={title_position} />
      <div className='flex justify-center'>
        {prismicUtils.isExistedUrl(link) ? (
          <PrismicNextLink field={link}>
            <figure>
              <PrismicNextImage field={background} />
              <figcaption>
                <RichText field={caption} />
              </figcaption>
            </figure>
          </PrismicNextLink>
        ) : (
          <figure>
            <PrismicNextImage field={background} />
            <figcaption className='py-4'>
              <RichText field={caption} className='text-center' />
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  )
}

export default ImageBlock
