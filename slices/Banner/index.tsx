import BannerWithButton from '@/components/banners/BannerWithButton'
import BannerWithoutButton from '@/components/banners/BannerWithoutButton'
import BannerWithSideImage from '@/components/banners/BannerWithSideImage'
import { SliceComponentProps } from '@prismicio/react'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper className='!bg-transparent'>
        {slice.variation === 'default' && <BannerWithButton slice={slice} />}
        {slice.variation === 'banner' && <BannerWithoutButton slice={slice} />}
        {slice.variation === 'bannerWithSideImage' && <BannerWithSideImage slice={slice} />}
      </SliceWrapper>
    </section>
  )
}

export default Banner
