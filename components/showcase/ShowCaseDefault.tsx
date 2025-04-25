import React from 'react'
import { Content } from '@prismicio/client'
import ShowCaseDefaultLefSide from './ShowCaseDefaultLefSide'
import ShowCaseRightSide from './ShowCaseRightSide'

interface IShowCaseDefault {
  slice: Content.ShowcaseSlice
}
const ShowCaseDefault = ({ slice }: IShowCaseDefault) => {
  return (
    <div className='grid grid-cols-12 gap-5'>
      <ShowCaseDefaultLefSide className='col-span-full sm:col-span-7' slice={slice} />
      <ShowCaseRightSide
        className='hidden sm:block col-span-5'
        image={slice.primary.right_image}
        label={slice.primary.right_image_label}
      />
    </div>
  )
}

export default ShowCaseDefault
