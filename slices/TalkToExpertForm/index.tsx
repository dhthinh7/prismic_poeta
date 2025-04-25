import TalkToExpert from '@/components/forms/TalkToExpert'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TalkToExpertForm`.
 */
export type TalkToExpertFormProps = SliceComponentProps<Content.TalkToExpertFormSlice>

/**
 * Component for "TalkToExpertForm" Slices.
 */
const TalkToExpertForm = ({ slice }: TalkToExpertFormProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <TalkToExpert className='max-w-[800px] px-1' isModal={false} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default TalkToExpertForm
