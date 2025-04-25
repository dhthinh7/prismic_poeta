import { Content } from '@prismicio/client'
import React from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import RichText from '../shared/RichText'
import ClientButtonWrapper from '../shared/button/ClientButtonWrapper'
import ConditionRender from '../shared/ConditionRender'
import { PrismicImage, PrismicLink } from '@prismicio/react'

interface IIndustriesServedDefault {
  slice: Content.IndustriesServedSlice
}

const IndustriesServedDefault = ({ slice }: IIndustriesServedDefault) => {
  const { title, items, background, button_label, button_link, button_type, form_selection } = slice.primary
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(74, 166, 157, 0.70) 0%, rgba(250, 160, 0, 0.35) 100%), url(${background.url}) lightgray 50% / cover no-repeat`
      }}
    >
      <SectionWrapper>
        <div className='px-4 md:px-10 py-6 md:py-[60px] flex flex-col gap-5 md:gap-0 md:flex-row bg-white rounded-[20px] max-w-[1150px] mx-auto my-5 md:my-28 text-center md:text-left'>
          <div className='w-full md:w-1/2 pr-0 md:pr-5 lg:pr-[15px]'>
            <RichText
              field={title}
              className='text-3xl lg:text-[44px] text-blue-dianna font-semibold leading-[35px] md:leading-[54px]'
            />
            <ClientButtonWrapper
              className='hidden md:block w-fit px-6 py-[10px] mt-[30px]'
              label={button_label}
              type={button_type}
              link={button_link}
              form={form_selection}
              variant='solid'
              color='orange'
            />
          </div>
          <div className='w-full md:w-1/2 pl-0 md:pl-5 lg:pl-[15px] grid grid-cols-2 gap-y-5 lg:gap-y-7 gap-x-5 lg:gap-x-10'>
            <ConditionRender condition={items.length > 0}>
              {items.map((item, index) => (
                <PrismicLink
                  key={index}
                  field={item.link}
                  className='col-span-full px-2 md:px-0 sm:col-span-1 flex items-center gap-[10px] hover:text-primary duration-200 transition-colors ease-in-out'
                >
                  <PrismicImage
                    field={item.icon}
                    width={40}
                    height={40}
                    className='w-10 aspect-square object-contain object-center overflow-hidden flex-shrink-0'
                  />
                  <div className='text-xl lg:text-2xl font-semibold'>{item.link.text}</div>
                </PrismicLink>
              ))}
            </ConditionRender>
          </div>

          <div className='flex justify-center md:hidden'>
            <ClientButtonWrapper
              className='w-fit px-6 py-[10px]'
              label={button_label}
              type={button_type}
              link={button_link}
              form={form_selection}
              variant='solid'
              color='orange'
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default IndustriesServedDefault
