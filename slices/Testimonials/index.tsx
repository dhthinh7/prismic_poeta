import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { QuoteDefault } from '@/components/quote/QuoteDefault'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary?.background_color}>
        <div
          className='relative w-full'
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(90deg, rgba(74, 166, 157, 0.70) 0%, rgba(250, 160, 0, 0.70) 100%), url('${slice.primary.background_image.url}') lightgray 50% / cover no-repeat`
          }}
        >
          <SectionWrapper
            paddingTop={slice.primary.padding_top}
            paddingBottom={slice.primary.padding_bottom}
            className='!px-0 sm:!px-5'
          >
            <QuoteDefault slice={slice} />
          </SectionWrapper>
        </div>
      </SliceWrapper>
    </section>
  )
}

export default Testimonials
