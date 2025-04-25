import React from 'react'
import { LayoutDocument } from '@/prismicio-types'
import FooterItem from './FooterItem'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import CopyRight from './CopyRight'
import SocialMedias from './SocialMedias'
import SectionWrapper from '../layout/SectionWrapper'
import Line from '../shared/line/Line'

interface IFooter {
  layout: LayoutDocument<string>
}

export default function Footer({ layout }: IFooter) {
  return (
    <section>
      <div
        className='pb-5 pt-5 relative'
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.2) 100%), rgba(34, 60, 77, 0.1)'
        }}
      >
        <div
          className='absolute top-0 right-0 w-full h-full opacity-80 -z-10'
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(74, 166, 157, 0.80) 2.5%, rgba(74, 166, 157, 0.56) 33%, rgba(250, 160, 0, 0.40) 75.5%, rgba(250, 160, 0, 0.80) 100%), linear-gradient(180deg, rgba(34, 60, 77, 0.00) 0%, rgba(34, 60, 77, 0.06) 16.15%, rgba(34, 60, 77, 0.27) 100%), url('${layout.data.cover_image.url}')  lightgray 50% / cover no-repeat`
          }}
        >
          {/* <PrismicNextImage
            field={layout.data.cover_image}
            className='absolute top-0 right-0 h-full w-full object-cover -z-10'
          /> */}
        </div>

        <SectionWrapper className='z-10 !max-w-[1200px]'>
          <div className='w-full py-5 md:py-4 md:px-3'>
            <div className='flex flex-col md:flex-row gap-10'>
              {layout.data.slices1.length > 0 &&
                layout.data.slices1.map((item, index) => {
                  return (
                    <div key={index} className='w-full md:w-1/4 text-center md:text-left'>
                      <div className='flex w-full justify-center'>
                        <FooterItem item={item} />
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </SectionWrapper>

        <Line width='100%' height='1px' backgroundColor='white' />

        <SectionWrapper className='z-10 !max-w-[1200px]'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-[30px] md:gap-[70px] w-full mt-5 text-[#FFFFFF]'>
            <div className='flex-shrink-0 mb-6 md:mb-0'>
              <PrismicNextLink field={layout.data.cta_logo_link}>
                <PrismicNextImage field={layout.data.cta_link_logo} className='w-[132px]' />
              </PrismicNextLink>
            </div>
            <div className='flex flex-col md:flex-row gap-5 md:gap-7 items-center justify-between'>
              <div className='flex-center gap-2 text-sm font-semibold leading-5 capitalize'>
                <PrismicNextImage field={layout.data.address_indicator} />
                <p className='text-wrap'>{layout.data.address}</p>
              </div>
              <div className='flex-center gap-2 text-sm font-semibold leading-5 capitalize flex-shrink-0'>
                <PrismicNextImage field={layout.data.phone_indicator} />
                <p>{layout.data.phone_number}</p>
              </div>
              <div className='flex-center gap-2 text-sm font-semibold leading-5 capitalize flex-shrink-0'>
                <PrismicNextImage field={layout.data.email_indicator} />
                <p>{layout.data.email}</p>
              </div>
            </div>
            <div className='flex-shrink-0'>
              <SocialMedias />
            </div>
          </div>
        </SectionWrapper>
      </div>
      <CopyRight />
    </section>
  )
}
