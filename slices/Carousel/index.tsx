import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import CarouseSlice from '@/components/0carouseSlice/CarouseSlice'

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps) => {
  return (
    <SliceWrapper bgColor={slice.primary?.background_color}>
      <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
        <CarouseSlice slice={slice} />
      </SectionWrapper>
    </SliceWrapper>
  )
}

export default Carousel
