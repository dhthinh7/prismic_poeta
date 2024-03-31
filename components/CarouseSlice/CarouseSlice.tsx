'use client'
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

interface ICarouseSlice {
  slice: Content.CarouselSlice
} 

export default function CarouseSlice({ slice }: ICarouseSlice) {

  const client = createClient()

  const [carousel, setCarousel] = useState<Content.CarouselDocument<string>>()

  const getCarousel = useCallback(async () => {
    if (isFilled.contentRelationship(slice.primary.carousel) && slice.primary.carousel.uid) {
      const carousel = await client.getByUID('carousel', slice.primary.carousel.uid)
      setCarousel(carousel)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getCarousel()
  }, [getCarousel])

  return carousel && <div>
    <SliceZone slices={carousel.data.slices} components={components}/>
  </div>
}
