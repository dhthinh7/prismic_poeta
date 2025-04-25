import GridCardComponent from '@/components/card/GridCardComponent'
import GridCardVariantFour from '@/components/card/GridCardVariantFour'
import GridCardVariantThree from '@/components/card/GridCardVariantThree'
import GridCardVariantTwo from '@/components/card/GridCardVariantTwo'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `GridCard`.
 */
export type GridCardProps = SliceComponentProps<Content.GridCardSlice>

/**
 * Component for "GridCard" Slices.
 */
const GridCard = ({ slice }: GridCardProps): JSX.Element => {
  const { variation } = slice
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {variation === 'default' && <GridCardComponent slice={slice} />}
      <SliceWrapper bgColor={slice.primary?.background_color || 'transparent'}>
        {variation === 'gridCardVariantTwo' && <GridCardVariantTwo slice={slice} />}
        {variation === 'gridCardVariantThree' && <GridCardVariantThree slice={slice} />}
        {variation === 'gridCardVariantFour' && <GridCardVariantFour slice={slice} />}
      </SliceWrapper>
    </section>
  )
}

export default GridCard
