import InnovationLeadDefault from '@/components/innovationLead/InnovationLeadDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `InnovationLead`.
 */
export type InnovationLeadProps = SliceComponentProps<Content.InnovationLeadSlice>

/**
 * Component for "InnovationLead" Slices.
 */
const InnovationLead = ({ slice }: InnovationLeadProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <InnovationLeadDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default InnovationLead
