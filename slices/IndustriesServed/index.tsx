import IndustriesServedDefault from '@/components/industries/IndustriesServedDefault'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `IndustriesServed`.
 */
export type IndustriesServedProps = SliceComponentProps<Content.IndustriesServedSlice>

/**
 * Component for "IndustriesServed" Slices.
 */
const IndustriesServed = ({ slice }: IndustriesServedProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <IndustriesServedDefault slice={slice} />
      </SliceWrapper>
    </section>
  )
}

export default IndustriesServed
