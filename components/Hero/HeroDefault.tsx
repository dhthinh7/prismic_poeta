import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../Shared/RichText'
import Button from '../Shared/Button'
import { PrismicNextLink } from '@prismicio/next'

interface IHeroDefault {
  slice: {
    slice_type: "hero";
    slice_label: null;
    id: string;
  } & Content.HeroSliceDefault
}
export default function HeroDefault({ slice }: IHeroDefault) {
  return (
    <div className="ml-28 w-1/2">
      <RichText field={slice.primary.title} className="font-semibold text-white leading-tight text-4xl mb-3" />
      <RichText field={slice.primary.description} className="font-semibold text-white leading-snug text-2xl" />
      <div className="flex gap-2 mt-4">
        <Button>
          <PrismicNextLink field={slice.primary.primary_button_link}>
            {slice.primary.primary_button_label}
          </PrismicNextLink>
        </Button>
        <Button variant="outline" color="white">
          <PrismicNextLink field={slice.primary.primary_button_link}>
            {slice.primary.secondary_button_label}
          </PrismicNextLink>
        </Button>
      </div>
    </div>
  )
}
