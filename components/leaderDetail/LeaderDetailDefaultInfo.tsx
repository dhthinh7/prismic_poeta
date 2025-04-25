import { RichTextField } from '@prismicio/client'
import React from 'react'
import RichText from '../shared/RichText'

interface ILeaderDetailDefaultInfo {
  title: RichTextField
  description: RichTextField
}

const LeaderDetailDefaultInfo = ({ title, description }: ILeaderDetailDefaultInfo) => {
  return (
    <div className='text-center'>
      <RichText field={title} className='text-3xl font-semibold text-blue-dianna mb-4' />
      <RichText field={description} className='text-lg sm:text-xl text-blue-dianna' />
    </div>
  )
}

export default LeaderDetailDefaultInfo
