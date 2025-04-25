import React from 'react'

import { Content, ImageField, RichTextField } from '@prismicio/client'
import SectionWrapper from '../layout/SectionWrapper'
import RichText from '../0shared/RichText'
import LeftBannerImage from './LeftBannerImage'
import RightBannerImage from './RightBannerImage'
import { PrismicImage } from '@prismicio/react'
import { cn } from '@/lib/utils'

interface IBannerWithSideImage {
  slice: {
    slice_type: 'banner'
    slice_label: null
    id: string
  } & Content.BannerSliceBannerWithSideImage
}

const BannerWithSideImage = ({ slice }: IBannerWithSideImage) => {
  return (
    <div
      className='relative flex flex-col min-h-[400px] lg:min-h-[500px] items-start justify-center gap-[30px]'
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(180deg, rgba(74, 166, 157, 0.90) 56.5%, rgba(250, 160, 0, 0.90) 100%), url(${slice.primary.background_image.url}) lightgray 50% / cover no-repeat`
      }}
    >
      <LeftBannerImage image={slice.primary.left_image} />
      <RightBannerImage image={slice.primary.right_image} />
      <MainBanner
        title={slice.primary.title}
        subTitle={slice.primary.sub_title}
        description={slice.primary.description}
        sideImage={slice.primary.side_image}
        sideImagePosition={slice.primary.side_image_position}
      />
    </div>
  )
}

export default BannerWithSideImage

interface IMainBanner {
  title: RichTextField
  subTitle: RichTextField
  description: RichTextField
  sideImage: ImageField<never>
  sideImagePosition: 'Right' | 'Left'
}

const MainBanner = ({ title, subTitle, description, sideImage, sideImagePosition }: IMainBanner) => {
  return (
    <SectionWrapper className='pt-8 pb-12 lg:py-10 flex flex-col items-center lg:items-start gap-[30px] w-full z-10'>
      <div className='grid grid-cols-12 gap-y-5 md:gap-x-5 lg:gap-x-16 justify-center items-center'>
        <div
          className={cn(
            'text-center md:text-left text-white col-span-full md:col-span-6',
            sideImagePosition === 'Left' ? 'md:order-1' : ''
          )}
        >
          <RichText field={title} className='text-[40px] lg:text-[64px] lg:leading-[70px] font-semibold text-white' />
          <RichText field={subTitle} className='text-2xl lg:text-4xl lg:leading-[54px] font-semibold mt-2 text-white' />
          <RichText field={description} className='text-lg mt-5 text-white' />
        </div>
        <div className='col-span-full md:col-span-6'>
          <div className='w-full rounded-[20px] overflow-hidden bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <PrismicImage field={sideImage} className='w-full aspect-auto' />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
