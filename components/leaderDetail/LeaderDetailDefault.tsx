import React from 'react'
import { Content } from '@prismicio/client'
import LeaderDetailDefaultInfo from './LeaderDetailDefaultInfo'
import LeaderDetailMainContent from './LeaderDetailMainContent'

interface ILeaderDetailDefault {
  slice: Content.LeaderDetailSlice
}

const LeaderDetailDefault = ({ slice }: ILeaderDetailDefault) => {
  const { title, description, name, job_title, leader_image, short_content, full_content } = slice.primary
  return (
    <div className='flex flex-col gap-[30px]'>
      <LeaderDetailDefaultInfo title={title} description={description} />
      <LeaderDetailMainContent
        leader_image={leader_image}
        name={name}
        short_content={short_content}
        job_title={job_title}
        full_content={full_content}
      />
    </div>
  )
}

export default LeaderDetailDefault
