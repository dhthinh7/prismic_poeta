import CarouselUtilSlice from '@/components/carouseSlice/CarouselUtilSlice'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `CarouselUtil`.
 */
export type CarouselUtilProps = SliceComponentProps<Content.CarouselUtilSlice>

/**
 * Component for "CarouselUtil" Slices.
 */
const CarouselUtil = ({ slice }: CarouselUtilProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary?.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <CarouselUtilSlice slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default CarouselUtil
