'use client'

import React, { useState } from 'react'
import { Content } from '@prismicio/client'
import BackGroundImage from '../banners/BackGroundImage'
import SectionWrapper from '../layout/SectionWrapper'
import ConditionRender from '../shared/ConditionRender'
import GridCardItem from './GridCardItem'
import HeaderSection from '../shared/section/HeaderSection'

interface IGridCarComponent {
  slice: {
    slice_type: 'grid_card'
    slice_label: null
    id: string
  } & Content.GridCardSliceDefault
}
const GridCardComponent = ({ slice }: IGridCarComponent) => {
  const { title, description, title_position, background, padding_bottom, padding_top, cards } = slice.primary

  const [backgroundColorHover, setBackgroundColor] = useState<string>('transparent')
  return (
    <div
      className='relative transition-all duration-300 ease-in-out'
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, ${backgroundColorHover} 0%, ${backgroundColorHover} 100%), url(${background.url}) lightgray 50% / cover no-repeat`
      }}
    >
      <BackGroundImage backgroundImage={background} />
      <SectionWrapper paddingTop={padding_top} paddingBottom={padding_bottom} className='px-0 sm:px-5'>
        <HeaderSection title={title} description={description} titlePosition={title_position} className='text-white' />
        <ConditionRender condition={cards.length > 0}>
          <div className='flex justify-evenly sm:flex-wrap overflow-auto no-scrollbar items-stretch gap-9 sm:gap-0 sm:-mx-4 pt-5 px-12 sm:px-0'>
            {cards.map((card, index) => (
              <GridCardItem
                color={card.color}
                description={card.description}
                iconValue={index + 1}
                title={card.title}
                key={index}
                icon={card.icon}
                onChangeHoverColor={setBackgroundColor}
              />
            ))}
          </div>
        </ConditionRender>
      </SectionWrapper>
    </div>
  )
}

export default GridCardComponent

// 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(250, 160, 0, 0.70) 0%, rgba(250, 160, 0, 0.70) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat'
// 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(247, 139, 99, 0.70) 0%, rgba(247, 139, 99, 0.70) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat'
