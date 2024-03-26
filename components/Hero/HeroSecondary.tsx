import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../Shared/RichText'
import Button from '../Shared/Button'
import { PrismicNextLink } from '@prismicio/next'

interface IHeroSecondary {
  slice: {
    slice_type: "hero";
    slice_label: null;
    id: string;
  } & Content.HeroSliceSecondary
}
export default function HeroSecondary({ slice }: IHeroSecondary) {
  return (
    <div className="ml-28">
      <RichText field={slice.primary.title} className="font-semibold text-white leading-tight text-5xl mb-8" />
      <RichText field={slice.primary.description} className="font-semibold text-white text-2xl mb-8" />
      <div className="flex gap-2 mt-4">
        <Button className="bg-orange-600">
          <PrismicNextLink field={slice.primary.primary_button_link}>
            {slice.primary.primary_button_label}
          </PrismicNextLink>
        </Button>
      </div>
    </div>
  )
}
