import React from 'react'
import { Content } from '@prismicio/client'
import SectionWrapper from '../layout/SectionWrapper'
import ConditionRender from '../shared/ConditionRender'
import GridCardVariantThreeItem from './GridCardVariantThreeItem'
import HeaderSection from '../shared/section/HeaderSection'

interface IGridCardVariantThree {
  slice: {
    slice_type: 'grid_card'
    slice_label: null
    id: string
  } & Content.GridCardSliceGridCardVariantThree
}
const GridCardVariantThree = ({ slice }: IGridCardVariantThree) => {
  const { padding_top, padding_bottom, title, sub_title, description, cards } = slice.primary

  return (
    <SectionWrapper paddingTop={padding_top} paddingBottom={padding_bottom}>
      <div className='flex flex-col gap-10 sm:gap-[50px]'>
        <HeaderSection
          title={title}
          subTitle={sub_title}
          description={description}
          classNameWrapper='text-left'
          className='text-left'
        />
        <ConditionRender condition={cards.length > 0}>
          <div className='flex justify-evenly sm:flex-wrap overflow-auto no-scrollbar items-stretch gap-5 sm:gap-0 sm:-m-5 md:-m-8 lg:px-9'>
            {cards.map((card, index) => (
              <GridCardVariantThreeItem key={index} card={card} />
            ))}
          </div>
        </ConditionRender>
      </div>
    </SectionWrapper>
  )
}

export default GridCardVariantThree
