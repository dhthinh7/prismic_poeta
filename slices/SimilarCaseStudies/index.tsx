import SimilarCaseStudy from '@/components/caseStudy/SimilarCaseStudy'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { CaseStudyDocument, CategoryDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SimilarCaseStudies`.
 */
export type SimilarCaseStudiesProps = Omit<SliceComponentProps<Content.SimilarCaseStudiesSlice>, 'context'> & {
  context: {
    page: CaseStudyDocument<string>
    categories: CategoryDocument<string>[]
  }
}

/**
 * Component for "SimilarCaseStudies" Slices.
 */
const SimilarCaseStudies = ({ slice, context }: SimilarCaseStudiesProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color || 'transparent'}>
        <SectionWrapper
          paddingTop={slice.primary.padding_top}
          paddingBottom={slice.primary.padding_bottom}
          className='!px-0 sm:!px-5'
        >
          <SimilarCaseStudy slice={slice} page={context.page} categories={context.categories} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default SimilarCaseStudies
