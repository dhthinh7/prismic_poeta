import { OurSolutionsSliceDefault } from '@/prismicio-types';
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import React from 'react'
import RichText from '../Shared/RichText';

interface IOurSolutionsDefault {
  slice: {
    slice_type: "our_solutions";
    slice_label: null;
    id: string;
  } & OurSolutionsSliceDefault
}
export default function OurSolutionsDefault({slice}: IOurSolutionsDefault) {
  return (
    <section>
      <RichText field={slice.primary.title} className='text-center'/>
      <div>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </section>
  )
}
