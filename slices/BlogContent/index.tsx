import BlogContentDefault from '@/components/blog/BlogContentDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { BlogDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `BlogContent`.
 */
export type BlogContentProps = Omit<SliceComponentProps<Content.BlogContentSlice>, 'context'> & {
  context: {
    page: BlogDocument<string>
  }
}
/**
 * Component for "BlogContent" Slices.
 */
const BlogContent = ({ slice, context }: BlogContentProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper className='!pb-12'>
          <BlogContentDefault slice={slice} context={context} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default BlogContent
