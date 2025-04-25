import DevelopmentApproachDefault from '@/components/developmentAproach/DevelopmentApproachDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `DevelopmentApproach`.
 */
export type DevelopmentApproachProps = SliceComponentProps<Content.DevelopmentApproachSlice>

/**
 * Component for "DevelopmentApproach" Slices.
 */
const DevelopmentApproach = ({ slice }: DevelopmentApproachProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <DevelopmentApproachDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default DevelopmentApproach
