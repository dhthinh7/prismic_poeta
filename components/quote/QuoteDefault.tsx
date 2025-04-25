'use client'

import React from 'react'
import { Content } from '@prismicio/client'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/lib/utils'
import AngleRight from '../icons/AngleRight'
import RichText from '../0shared/RichText'
import QuoteIcon from '../icons/QuoteIcon'
import { PrismicImage } from '@prismicio/react'
import HeaderSection from '../0shared/section/HeaderSection'

import './style.css'

interface IQuoteDefault {
  slice: Content.TestimonialsSlice
}
export const QuoteDefault = ({ slice }: IQuoteDefault) => {
  const { title, quotes } = slice.primary
  return (
    <div className='relative flex flex-col gap-5 sm:gap-10'>
      <HeaderSection title={title} className='text-white px-5' />
      <div className='w-full'>
        <Swiper
          spaceBetween={1}
          // slidesPerView={slidePerView}
          navigation={{
            nextEl: '.tab-swiper-nav.next',
            prevEl: '.tab-swiper-nav.prev'
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Navigation]}
          className={`my-swiper-slide relative !pb-[65px] md:!pb-0`}
        >
          {quotes.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='rounded-[10px] flex flex-col items-start gap-5 bg-white py-5 pl-[60px] sm:pl-[70px] pr-[15px] md:py-[30px] md:px-[90px] w-full md:max-w-[75%] mx-auto relative'>
                  <RichText
                    field={card.description}
                    className='text-sm sm:text-2xl text-slate-gray text-left mb-0 leading-5 sm:leading-[34px]'
                  />
                  <div>
                    <RichText
                      field={card.name}
                      className='text-[13px] sm:text-xl font-bold text-slate-gray mb-0 leading-[24px] sm:leading-[34px] text-left'
                    />
                    <RichText
                      field={card.job_title}
                      className='text-xs sm:text-sm font-semibold text-slate-gray mb-0 leading-[24px] sm:leading-[34px] text-left'
                    />
                  </div>
                  <div className='absolute top-6 sm:top-[36px] left-[15px] md:left-[40px]'>
                    <QuoteIcon className='w-6 h-6 sm:w-8 sm:h-8' />
                  </div>
                  <div className='hidden sm:block absolute bottom-7 right-6'>
                    <PrismicImage
                      field={card.logo_placement}
                      className='max-w-[200px] max-h-10 object-cover object-center aspect-auto'
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <div className='absolute left-1/2 -translate-x-[calc(50%_+_35px)] md:left-2 xl:left-[50px] bottom-0 md:bottom-1/2 transform md:translate-y-1/2 md:translate-x-0 z-[2]'>
            <NavigateButton type='prev' />
          </div>
          <div className='absolute right-1/2 translate-x-[calc(50%_+_35px)] md:right-2 xl:right-[50px] bottom-0 md:bottom-1/2 transform md:translate-y-1/2 md:translate-x-0 z-[2]'>
            <NavigateButton type='next' />
          </div>
        </Swiper>
      </div>
    </div>
  )
}

interface INavigateButton {
  // icon: IconProp
  type: 'prev' | 'next'
  className?: string
}

const NavigateButton = ({ type = 'prev', className = '' }: INavigateButton) => {
  return (
    <button
      aria-label={`${type === 'prev' ? 'Previous' : 'Next'}`}
      className={cn(`tab-swiper-nav cursor-pointer ${type === 'prev' ? 'prev' : 'next'} ${className}`, '!opacity-100')}
    >
      <div
        className={cn(
          'w-11 h-11 rounded-full bg-white hover:bg-[rgba(195,207,241,0.5)] transition-all duration-200 ease-in-out flex flex-center',
          type === 'next' ? 'rotate-180' : ''
        )}
      >
        <AngleRight />
      </div>
    </button>
  )
}
