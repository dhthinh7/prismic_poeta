import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import VideoBlockDefault from '@/components/video/VideoBlockDefault'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper
          className='!max-w-[800px]'
          paddingTop={slice.primary.padding_top}
          paddingBottom={slice.primary.padding_bottom}
        >
          <VideoBlockDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default VideoBlock
