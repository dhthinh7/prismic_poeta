import React from 'react'
import { Content } from '@prismicio/client'
import SectionWrapper from '../layout/SectionWrapper'
import ConditionRender from '../shared/ConditionRender'
import GridCardVariantTwoItem from './GridCardVariantTwoItem'
import HeaderSection from '../shared/section/HeaderSection'

interface IGridCardVariantTwo {
  slice: {
    slice_type: 'grid_card'
    slice_label: null
    id: string
  } & Content.GridCardSliceGridCardVariantTwo
}

const GridCardVariantTwo = ({ slice }: IGridCardVariantTwo) => {
  const { padding_top, padding_bottom, title, sub_title, description, cards } = slice.primary
  return (
    <SectionWrapper paddingTop={padding_top} paddingBottom={padding_bottom}>
      {/* <CardVariantTwoInfo title={title} subTitle={sub_title} description={description} /> */}
      <HeaderSection
        title={title}
        subTitle={sub_title}
        description={description}
        className='text-left'
        titlePosition='Left'
      />
      <ConditionRender condition={cards.length > 0}>
        <div className='flex justify-evenly flex-wrap overflow-auto no-scrollbar items-stretch gap-9 sm:gap-0 sm:-mx-5 pt-5 sm:px-0'>
          {cards.map((card, index) => (
            <GridCardVariantTwoItem key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </ConditionRender>
    </SectionWrapper>
  )
}

export default GridCardVariantTwo
