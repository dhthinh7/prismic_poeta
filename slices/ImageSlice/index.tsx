import ImageBlock from '@/components/imageBlock/ImageBlock'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `ImageSlice`.
 */
export type ImageSliceProps = SliceComponentProps<Content.ImageSliceSlice>

/**
 * Component for "ImageSlice" Slices.
 */
const ImageSlice = ({ slice }: ImageSliceProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary?.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <ImageBlock slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default ImageSlice
