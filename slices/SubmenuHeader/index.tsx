import Line from '@/components/shared/line/Line'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SubmenuHeader`.
 */
export type SubmenuHeaderProps = SliceComponentProps<Content.SubmenuHeaderSlice>

/**
 * Component for "SubmenuHeader" Slices.
 */
const SubmenuHeader = ({ slice }: SubmenuHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicNextLink field={slice.primary.sub_menu_header_link}>
        <p className='mb-3 text-base font-bold text-black hover:cursor-pointer hover:text-red-500'>
          {slice.primary.sub_menu_header_label}
        </p>
      </PrismicNextLink>
      <Line />
    </section>
  )
}

export default SubmenuHeader
