import React from 'react'
import { Content } from '@prismicio/client'
import ConditionRender from '../0shared/ConditionRender'
import { PrismicNextImage } from '@prismicio/next'
import HeaderSection from '../0shared/section/HeaderSection'

interface ICertificateDefault {
  slice: Content.CertificateSlice
}
const CertificateDefault = ({ slice }: ICertificateDefault) => {
  const { title, sub_title, description, images } = slice.primary
  return (
    <div className='flex flex-col gap-10 sm:gap-[50px]'>
      <HeaderSection title={title} subTitle={sub_title} description={description} />
      <ConditionRender condition={images.length > 0}>
        <div className='flex justify-center flex-wrap max-w-[875px] mx-auto w-full'>
          {images.map((img, index) => (
            <div key={index} className='w-1/2 md:w-1/4 p-2 md:px-[25px] flex flex-center'>
              <div className='relative w-full group flex flex-center'>
                <PrismicNextImage
                  width={180}
                  height={180}
                  field={img.image}
                  className='w-full max-w-[180px] aspect-square object-cover object-center opacity-100 group-hover:scale-105 group-hover:opacity-0 duration-200 ease-in-out transition-all'
                />
                <PrismicNextImage
                  width={180}
                  height={180}
                  field={img.hover_image}
                  className='absolute top-0 w-full max-w-[180px] aspect-square object-cover object-center opacity-0 group-hover:scale-105 group-hover:opacity-100 duration-200 ease-in-out transition-all'
                />
              </div>
            </div>
          ))}
        </div>
      </ConditionRender>
    </div>
  )
}

export default CertificateDefault
