import React from 'react'
import { Content, isFilled } from '@prismicio/client'
import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

interface ICarouselUtilSlice {
  slice: Content.CarouselUtilSlice
}

const CarouselUtilSlice = async ({ slice }: ICarouselUtilSlice) => {
  const client = createClient()

  const getCarousel = async () => {
    try {
      if (isFilled.contentRelationship(slice.primary.carousel) && slice.primary.carousel.uid) {
        const carouselResponse = await client.getByUID('carousel_util', slice.primary.carousel.uid)
        return carouselResponse
      }
    } catch (error) {
      // console.log('error', error)
    }
  }

  const carousel = await getCarousel()

  return (
    carousel && (
      <div>
        <SliceZone slices={carousel.data.slices} components={components} />
      </div>
    )
  )
}

export default CarouselUtilSlice
