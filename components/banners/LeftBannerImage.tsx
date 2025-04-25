import { ImageField } from '@prismicio/client'
import React from 'react'
import ConditionRender from '../0shared/ConditionRender'
import { PrismicNextImage } from '@prismicio/next'
interface ILeftBannerImage {
  image: ImageField<never>
}
const LeftBannerImage = ({ image }: ILeftBannerImage) => {
  return (
    <ConditionRender condition={image}>
      <div className='absolute top-0 left-0 bottom-0 max-w-[280px] hidden sm:block'>
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

export default LeftBannerImage
