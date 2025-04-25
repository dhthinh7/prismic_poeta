import CaseStudyDefault from '@/components/caseStudy/CaseStudyDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { CategoryDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `CaseStudy`.
 */
export type CaseStudyProps = Omit<SliceComponentProps<Content.CaseStudySlice>, 'context'> & {
  context: {
    categories: CategoryDocument<string>[]
  }
}

/**
 * Component for "CaseStudy" Slices.
 */
const CaseStudy = ({ slice, context }: CaseStudyProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper
          paddingTop={slice.primary.padding_top}
          paddingBottom={slice.primary.padding_bottom}
          className='!px-0 sm:!px-5'
        >
          <CaseStudyDefault slice={slice} categories={context.categories} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default CaseStudy
