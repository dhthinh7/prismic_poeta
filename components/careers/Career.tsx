import { Simplify } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../0shared/RichText'
import { PrismicNextImage } from '@prismicio/next'

interface ICareer {
  career: Simplify<Content.CareersSliceDefaultPrimaryCardsItem>
}
const Career = ({ career }: ICareer) => {
  return (
    <div className='w-full sm:w-1/2 px-[40px] sm:p-[35px] lg:w-1/3'>
      <div className='h-full flex flex-col items-center gap-4 p-[30px] bg-[#EDF3FB] rounded-tl-[30px] rounded-br-[30px] border border-transparent hover:border-primary transition-all duration-300 ease-in-out'>
        <div className='p-5 rounded-full bg-white'>
          <PrismicNextImage
            field={career.image}
            width={80}
            height={80}
            className='object-cover object-center w-10 aspect-square'
          />
        </div>
        <div className='text-center'>
          <RichText field={career.position_title} className='font-semibold text-blue-dianna' />
          <RichText field={career.department} className='text-blue-dianna' />
        </div>
      </div>
    </div>
  )
}

export default Career
