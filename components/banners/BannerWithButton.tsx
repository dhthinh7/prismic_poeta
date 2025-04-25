import React from 'react'
import { Content, GroupField, KeyTextField, RichTextField } from '@prismicio/client'

import { Simplify } from '@/prismicio-types'
import ConditionRender from '@/components/shared/ConditionRender'
import ClientButtonWrapper from '@/components/shared/button/ClientButtonWrapper'
import SectionWrapper from '../layout/SectionWrapper'
import LeftBannerImage from './LeftBannerImage'
import RightBannerImage from './RightBannerImage'
import RightBottomImage from './RightBottomImage'
import RichText from '../shared/RichText'

interface IBannerWithButton {
  slice: {
    slice_type: 'banner'
    slice_label: null
    id: string
  } & Content.BannerSliceDefault
}

const BannerWithButton = ({ slice }: IBannerWithButton) => {
  return (
    <div
      className='relative flex flex-col min-h-[400px] lg:min-h-[500px] items-start justify-center gap-[30px]'
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(250, 160, 0, 0.80) 0%, rgba(250, 160, 0, 0.49) 26%, rgba(74, 166, 157, 0.59) 50%, rgba(74, 166, 157, 0.80) 82%), url('${slice.primary.background_image.url}')  lightgray 50% / cover no-repeat`
      }}
    >
      <RightBottomImage partnerImage={slice.primary.right_bottom_image} />
      <LeftBannerImage image={slice.primary.left_image} />
      <RightBannerImage image={slice.primary.right_image} />
      <MainBanner title={slice.primary.title} description={slice.primary.description} button={slice.primary.button} />
    </div>
  )
}

export default BannerWithButton

interface IMainBanner {
  title: RichTextField
  description: KeyTextField
  button: GroupField<Simplify<Content.BannerSliceDefaultPrimaryButtonItem>>
}

const MainBanner = ({ title, description, button }: IMainBanner) => {
  return (
    <SectionWrapper className='pt-8 pb-12 lg:py-10 flex flex-col items-center lg:items-start gap-[30px] w-full z-10'>
      <div className='lg:mr-auto py-8 lg:py-10 flex flex-col items-center lg:items-start gap-[30px]'>
        <div className='flex items-center lg:items-start lg:justify-start gap-4 flex-col'>
          <RichText
            field={title}
            className='text-[40px] leading-[40px] lg:text-[64px] text-center lg:text-left text-white font-bold capitalize lg:leading-[66px]'
          />
          <p className='text-xl lg:text-4xl text-center lg:text-left text-white font-bold lg:leading-[62px] capitalize'>
            {description}
          </p>
        </div>
        <ConditionRender condition={button && button.length > 0}>
          <div className='mt-2 sm:mt-4 flex flex-col gap-[15px] lg:gap-6 md:gap-4 md:flex-row'>
            {button.map((b, index) => (
              <ClientButtonWrapper
                className='w-full px-6 py-[10px]'
                key={index}
                label={b.button_label}
                type={b.button_type}
                link={b.button_link}
                form={b.form_selection}
                variant={`${index === 0 ? 'solid' : 'outline'}`}
                color={`${index === 0 ? 'orange' : 'white'}`}
              />
            ))}
          </div>
        </ConditionRender>
      </div>
    </SectionWrapper>
  )
}
