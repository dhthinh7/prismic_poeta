import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import WeAreHereDefault from '@/components/weAreHere/WeAreHereDefault'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `WeAreHere`.
 */
export type WeAreHereProps = SliceComponentProps<Content.WeAreHereSlice>

/**
 * Component for "WeAreHere" Slices.
 */

const WeAreHere = ({ slice }: WeAreHereProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper className='relative'>
        <div
          className='relative w-full'
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(90deg, rgba(74, 166, 157, 0.90) 56.5%, rgba(250, 160, 0, 0.90) 100%), url(${slice.primary.background_image.url}) lightgray 50% / cover no-repeat`
          }}
        >
          <SectionWrapper
            paddingTop={slice.primary.padding_top}
            paddingBottom={slice.primary.padding_bottom}
            className='z-10 relative'
          >
            <WeAreHereDefault slice={slice} />
          </SectionWrapper>
        </div>
      </SliceWrapper>
    </section>
  )
}

export default WeAreHere
