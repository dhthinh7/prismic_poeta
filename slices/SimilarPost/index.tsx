import BlogSimilarPostDefault from '@/components/blog/BlogSimilarPostDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { BlogDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SimilarPost`.
 */
export type SimilarPostProps = Omit<SliceComponentProps<Content.SimilarPostSlice>, 'context'> & {
  context: {
    page: BlogDocument<string>
  }
}

/**
 * Component for "SimilarPost" Slices.
 */
const SimilarPost = ({ slice, context }: SimilarPostProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color || 'transparent'}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <BlogSimilarPostDefault slice={slice} page={context.page} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default SimilarPost
