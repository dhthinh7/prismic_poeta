'use client'

import { prismicUtils } from '@/lib/utils/prismic.util'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

/**
 * Props for `SubMenuItem`.
 */
export type SubMenuItemProps = SliceComponentProps<Content.SubMenuItemSlice>

/**
 * Component for "SubMenuItem" Slices.
 */
const SubMenuItem = ({ slice }: SubMenuItemProps): JSX.Element => {
  const path = usePathname()

  const isActive = useMemo(() => {
    return prismicUtils.getUrl(slice.primary.link) === path
  }, [path, slice.primary.link])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='py-[11px] md:py-0 md:my-4'
    >
      <div>
        {isActive ? (
          <p className='text-[#faa000]'>{slice.primary.label}</p>
        ) : (
          <PrismicNextLink field={slice.primary.link} className='hover:text-red-500'>
            {slice.primary.label}
          </PrismicNextLink>
        )}
      </div>
    </section>
  )
}

export default SubMenuItem
