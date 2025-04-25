'use client'

import React from 'react'
import { CaseStudyDocument, CategoryDocument } from '@/prismicio-types'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SimilarCaseStudyItem from './SimilarCaseStudyItem'

interface ISimilarCaseStudyDefaultMobile {
  cards: CaseStudyDocument[]
  categories: CategoryDocument<string>[]
}

const SimilarCaseStudyDefaultMobile = ({ cards, categories }: ISimilarCaseStudyDefaultMobile) => {
  return (
    <div className='block relative sm:hidden'>
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
        className={`my-swiper-slide single-column !px-0`}
        breakpoints={{
          640: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 6
          }
        }}
      >
        {cards.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <SimilarCaseStudyItem card={card} categories={categories} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SimilarCaseStudyDefaultMobile
