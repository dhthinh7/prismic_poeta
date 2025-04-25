import React from 'react'
import { Content, KeyTextField, RichTextField } from '@prismicio/client'
import PartnerImage from './RightBottomImage'
import SectionWrapper from '../layout/SectionWrapper'
import RichText from '../0shared/RichText'

interface IBannerWithoutButton {
  slice: {
    slice_type: 'banner'
    slice_label: null
    id: string
  } & Content.BannerSliceBanner
}

const BannerWithoutButton = ({ slice }: IBannerWithoutButton) => {
  return (
    <div
      className='relative flex flex-col min-h-[400px] lg:min-h-[500px] items-start justify-center gap-[30px]'
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(90deg, var(--Color-5---Neat-Green, rgba(74, 166, 157, 0.70)) 0%, rgba(250, 160, 0, 0.70) 100%), url('${slice.primary.background_image.url}') lightgray 50% / cover no-repeat`
      }}
    >
      {/* <BackGroundImage backgroundImage={slice.primary.background_image} /> */}
      <PartnerImage partnerImage={slice.primary.partner_image} />
      <MainBanner title={slice.primary.title} description={slice.primary.description} />
    </div>
  )
}

export default BannerWithoutButton

interface IMainBanner {
  title: RichTextField
  description: KeyTextField
}

const MainBanner = ({ title, description }: IMainBanner) => {
  return (
    <SectionWrapper className='pt-8 pb-12 lg:py-10 flex flex-col items-center lg:items-start gap-[30px] w-full z-10'>
      <div className='flex items-center lg:items-start lg:justify-start gap-4 lg:gap-10 flex-col'>
        <RichText
          field={title}
          className='text-4xl leading-9 lg:text-[64px] text-center lg:text-left text-white font-semibold capitalize lg:leading-[54px]'
        />
        <p className='text-xl lg:text-4xl text-center lg:text-left text-white font-semibold lg:leading-[54px] capitalize'>
          {description}
        </p>
      </div>
    </SectionWrapper>
  )
}
