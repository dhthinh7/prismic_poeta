import React from 'react'
import { Content } from '@prismicio/client'
import ConditionRender from '../0shared/ConditionRender'
import InnovationLeaderItem from './InnovationLeaderItem'
import HeaderSection from '../0shared/section/HeaderSection'

interface IInnovationLeadDefault {
  slice: Content.InnovationLeadSlice
}

const InnovationLeadDefault = ({ slice }: IInnovationLeadDefault) => {
  const { title, description, leaders } = slice.primary

  return (
    <div className='flex flex-col gap-5 sm:gap-12 items-center'>
      <HeaderSection title={title} description={description} classNameWrapper='max-w-[900px]' />
      <ConditionRender condition={leaders.length > 0}>
        <div className='grid grid-cols-12 gap-5 sm:gap-7 px-5 items-stretch'>
          {leaders.map((leader, index) => (
            <InnovationLeaderItem key={index} leader={leader} />
          ))}
        </div>
      </ConditionRender>
    </div>
  )
}

export default InnovationLeadDefault
