import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import LeaderDetailDefault from '@/components/leaderDetail/LeaderDetailDefault'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `LeaderDetail`.
 */
export type LeaderDetailProps = SliceComponentProps<Content.LeaderDetailSlice>

/**
 * Component for "LeaderDetail" Slices.
 */
const LeaderDetail = ({ slice }: LeaderDetailProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <LeaderDetailDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default LeaderDetail
