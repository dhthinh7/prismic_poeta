'use client'

import React, { useMemo, useState } from 'react'
import { Content } from '@prismicio/client'
import ConditionRender from '../shared/ConditionRender'
import Career from './Career'
import Button from '../shared/button/Button'
import HeaderSection from '../shared/section/HeaderSection'

interface ICareersDefault {
  slice: Content.CareersSlice
}

const CareersDefault = ({ slice }: ICareersDefault) => {
  const { title, sub_title, description, cards } = slice.primary

  const [showAll, setShowAll] = useState<boolean>(false)

  const cardList = useMemo(() => {
    return showAll ? [...cards] : [...cards].splice(0, 3)
  }, [cards, showAll])

  return (
    <div className='flex flex-col gap-10 sm:gap-[50px]'>
      <HeaderSection title={title} subTitle={sub_title} description={description} />
      <ConditionRender condition={cards.length > 0}>
        <div className='hidden sm:flex justify-evenly flex-wrap items-stretch gap-5 sm:gap-0 sm:-m-[35px]'>
          {cards.map((career, index) => (
            <Career key={index} career={career} />
          ))}
        </div>

        <div className='flex sm:hidden justify-evenly flex-wrap items-stretch gap-5 sm:gap-0 sm:-m-[35px]'>
          {cardList.map((career, index) => (
            <Career key={index} career={career} />
          ))}
        </div>

        <div className='flex justify-center'>
          <Button
            variant='outline'
            color='orange'
            className='block sm:hidden w-fit px-[60px]'
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'View Less' : 'View All'}
          </Button>
        </div>
      </ConditionRender>
    </div>
  )
}

export default CareersDefault

// interface ICareersInfo {
//   title: RichTextField
//   subTitle: RichTextField
//   description: RichTextField
// }

// const CareersInfo = ({ title, subTitle, description }: ICareersInfo) => {
//   return (
//     <ConditionRender
//       condition={
//         !prismicUtils.isRichTextEmpty(title) ||
//         !prismicUtils.isRichTextEmpty(subTitle) ||
//         !prismicUtils.isRichTextEmpty(description)
//       }
//     >
//       <div className='flex flex-col justify-center sm:justify-start gap-4 sm:gap-5 text-center'>
//         <ConditionRender condition={!prismicUtils.isRichTextEmpty(title)}>
//           <RichText
//             field={title}
//             className='text-[40px] sm:text-[44px] text-blue-dianna font-semibold capitalize my-0'
//           />
//         </ConditionRender>
//         <ConditionRender condition={!prismicUtils.isRichTextEmpty(subTitle)}>
//           <RichText field={subTitle} className='text-[24px] font-semibold mb-0 text-blue-dianna' />
//         </ConditionRender>
//         <ConditionRender condition={!prismicUtils.isRichTextEmpty(description)}>
//           <RichText field={description} className='text-lg text-slate-gray' />
//         </ConditionRender>
//       </div>
//     </ConditionRender>
//   )
// }
