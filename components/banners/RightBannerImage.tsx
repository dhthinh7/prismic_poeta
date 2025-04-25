import React from 'react'
import { ImageField } from '@prismicio/client'
import ConditionRender from '../0shared/ConditionRender'
import { PrismicNextImage } from '@prismicio/next'
interface IRightBannerImage {
  image: ImageField<never>
}
const RightBannerImage = ({ image }: IRightBannerImage) => {
  return (
    <ConditionRender condition={image}>
      <div className='absolute top-0 right-0 bottom-0 max-w-[280px] hidden sm:block'>
        <PrismicNextImage
          field={image}
          width={450}
          height={600}
          className='w-full h-full object-cover aspect-auto object-left-center'
        />
      </div>
    </ConditionRender>
  )
}

export default RightBannerImage
