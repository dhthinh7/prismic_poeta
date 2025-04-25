import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import OurVisionDefault from '@/components/ourVision/OurVisionDefault'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `OurVision`.
 */
export type OurVisionProps = SliceComponentProps<Content.OurVisionSlice>

/**
 * Component for "OurVision" Slices.
 */
const OurVision = ({ slice }: OurVisionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary?.background_color || 'transparent'}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <OurVisionDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default OurVision
