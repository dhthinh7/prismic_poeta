import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SocialMedia`.
 */
export type SocialMediaProps = SliceComponentProps<Content.SocialMediaSlice>

/**
 * Component for "SocialMedia" Slices.
 */
const SocialMedia = ({ slice }: SocialMediaProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className='flex items-center gap-5'>
        {slice.items.length > 0 &&
          slice.items.map((item, index) => {
            return (
              <div key={index} className='shrink-0'>
                <PrismicNextLink field={item.cta_link}>
                  <PrismicNextImage field={item.icon} className='w-10 h-10 text-white' />
                </PrismicNextLink>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default SocialMedia
