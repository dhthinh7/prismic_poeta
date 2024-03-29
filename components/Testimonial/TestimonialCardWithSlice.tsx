
'use client'

import React from 'react'
import { Content } from '@prismicio/client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { PaginationOptions } from 'swiper/types';

// Import styles
import './style.css'
import TestimonialsCard from '../Card/TestimonialsCard';
import { PrismicRichText } from '@prismicio/react';
import RichText from '../Shared/RichText';

interface ITestimonialWithSlice {
  slice: {
    slice_type: "testimonials";
    slice_label: null;
    id: string;
  } & Content.TestimonialsSliceWithSlice
}

export default function TestimonialCardWithSlice({slice}: ITestimonialWithSlice) {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className='py-5'>
      <RichText field={slice.primary.title} className="text-center"/>
      <div className="">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="my-swiper-slide-bullet relative"
        >
          {slice.items.map((item, index) => {
            return <div key={index} className="">
              <SwiperSlide>
                <div className="flex justify-center w-3/5 mx-auto">
                  <TestimonialsCard
                    description={item.description}
                    name={item.name}
                    job_title={item.job_title}
                  />
                </div>
              </SwiperSlide>
            </div>
          })}
        </Swiper>
      </div>
    </div>
  )
}
