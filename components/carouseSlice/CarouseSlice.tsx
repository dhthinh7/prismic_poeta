'use client'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { SwiperOptions } from 'swiper/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import custom styles
import './style.css'

interface ICarouseSlice {
  slice: Content.CarouselSlice
  spaceBetween?: string | number | undefined
  breakpoints?: {
    [width: number]: SwiperOptions
    [ratio: string]: SwiperOptions
  }
  className?: string
}

const CarouseSlice = ({
  slice,
  spaceBetween = 5,
  breakpoints = {
    640: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 6
    }
  },
  className
}: ICarouseSlice) => {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={spaceBetween}
        // slidesPerView={slidePerView}
        navigation={{
          nextEl: '.tab-swiper-nav.next',
          prevEl: '.tab-swiper-nav.prev'
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={`my-swiper-slide ${className}`}
        breakpoints={breakpoints}
      >
        {slice.primary.items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PrismicNextImage field={item.image} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='absolute left-2 xl:-left-5 top-1/2 transform -translate-y-1/2 z-[2]'>
        <NavigateButton icon={faAngleLeft} type='prev' />
      </div>
      <div className='absolute right-2 xl:-right-5 top-1/2 transform -translate-y-1/2 z-[2]'>
        <NavigateButton icon={faAngleRight} type='next' />
      </div>
    </div>
  )
}

export default CarouseSlice

interface INavigateButton {
  icon: IconProp
  type: 'prev' | 'next'
  className?: string
}

const NavigateButton = ({ icon, type = 'prev', className = '' }: INavigateButton) => {
  return (
    <button
      aria-label={`${type === 'prev' ? 'Previous' : 'Next'}`}
      className={`tab-swiper-nav cursor-pointer ${type === 'prev' ? 'prev' : 'next'} ${className}`}
    >
      <FontAwesomeIcon className='text-5xl text-gray-400' icon={icon} />
    </button>
  )
}
