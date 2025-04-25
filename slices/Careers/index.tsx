import CareersDefault from '@/components/careers/CareersDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Careers`.
 */
export type CareersProps = SliceComponentProps<Content.CareersSlice>

/**
 * Component for "Careers" Slices.
 */
const Careers = ({ slice }: CareersProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper
          paddingBottom={slice.primary.padding_bottom}
          paddingTop={slice.primary.padding_top}
          className='!max-w-[900px]'
        >
          <CareersDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default Careers
