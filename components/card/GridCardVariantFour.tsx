import React from 'react'

import { Content } from '@prismicio/client'
import SectionWrapper from '../layout/SectionWrapper'
import ConditionRender from '../shared/ConditionRender'
import GridCardVariantFourItem from './GridCardVariantFourItem'
import HeaderSection from '../shared/section/HeaderSection'

interface IGridCardVariantFour {
  slice: {
    slice_type: 'grid_card'
    slice_label: null
    id: string
  } & Content.GridCardSliceGridCardVariantFour
}
const GridCardVariantFour = ({ slice }: IGridCardVariantFour) => {
  const { padding_top, padding_bottom, title, sub_title, description, cards } = slice.primary

  return (
    <SectionWrapper paddingTop={padding_top} paddingBottom={padding_bottom}>
      <div className='flex flex-col gap-10 sm:gap-[50px]'>
        <HeaderSection title={title} subTitle={sub_title} description={description} classNameWrapper='max-w-[900px]' />
        <ConditionRender condition={cards.length > 0}>
          <div className='flex justify-evenly flex-wrap items-stretch gap-5 sm:gap-0 sm:-m-5'>
            {cards.map((card, index) => (
              <GridCardVariantFourItem key={index} card={card} />
            ))}
          </div>
        </ConditionRender>
      </div>
    </SectionWrapper>
  )
}

export default GridCardVariantFour
