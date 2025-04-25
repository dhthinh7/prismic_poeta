'use client'

import ChevronDown from '@/components/icons/ChevronDown'
import { cn } from '@/lib/utils'
import { prismicUtils } from '@/lib/utils/prismic.util'
import { Content, isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

/**
 * Props for `MenuItem`.
 */
export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>

/**
 * Component for "MenuItem" Slices.
 */

interface IMenuItem extends MenuItemProps {
  itemId?: string
  onChangeActiveMenuItem: (value: string) => void
}
const MenuItem = ({ slice, itemId, onChangeActiveMenuItem }: IMenuItem) => {
  const path = usePathname()

  return (
    <li
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='mx-4 inline-block text-white duration-100 hover:text-orange-600'
    >
      {!(isFilled.contentRelationship(slice.primary?.sub_menu) && slice.primary.sub_menu.id) ? (
        <Fragment>
          {prismicUtils.getUrl(slice.primary.link) === path ? (
            <p className='text-[#faa000]'>{slice.primary?.label}</p>
          ) : (
            <PrismicNextLink field={slice.primary?.link} className=''>
              {slice.primary?.label}
            </PrismicNextLink>
          )}
        </Fragment>
      ) : (
        <button
          onClick={() => onChangeActiveMenuItem(slice.id)}
          className='flex cursor-pointer items-center justify-between gap-1 text-nowrap'
        >
          {slice.primary.label}
          <div>
            <ChevronDown
              className={cn(
                'h-4 w-4 fill-current text-[#faa000] transition-transform duration-200 ease-in',
                slice.id === itemId ? 'rotate-180 transform' : ''
              )}
            />
          </div>
        </button>
      )}
    </li>
  )
}

export default MenuItem
