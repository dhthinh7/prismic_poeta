import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import RichText from '@/components/0shared/RichText'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SingleHeading`.
 */
export type SingleHeadingProps = SliceComponentProps<Content.SingleHeadingSlice>

/**
 * Component for "SingleHeading" Slices.
 */
const SingleHeading = ({ slice }: SingleHeadingProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingBottom={slice.primary.padding_bottom} paddingTop={slice.primary.padding_top}>
          <RichText field={slice.primary.title} className='text-[30px] font-semibold text-center mb-0' />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default SingleHeading
