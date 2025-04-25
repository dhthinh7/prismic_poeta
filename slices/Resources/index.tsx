import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import BlogResources from '@/components/resources/BlogResources'
import CaseStudies from '@/components/resources/CaseStudies'
import { CategoryDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Resources`.
 */
export type ResourcesProps = Omit<SliceComponentProps<Content.ResourcesSlice>, 'context'> & {
  context: {
    categories: CategoryDocument<string>[]
  }
}

/**
 * Component for "Resources" Slices.
 */
const Resources = ({ slice, context }: ResourcesProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary?.background_color || 'transparent'}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          {slice.variation === 'default' && <CaseStudies slice={slice} categories={context.categories} />}
          {slice.variation === 'blog' && <BlogResources slice={slice} />}
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default Resources
