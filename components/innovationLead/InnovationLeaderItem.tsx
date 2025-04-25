import React from 'react'
import { PrismicImage } from '@prismicio/react'
import RichText from '../shared/RichText'
import { Simplify } from '@/prismicio-types'
import { Content, isFilled } from '@prismicio/client'
import { createClient } from '@/prismicio'
import InnovationLeaderAction from './InnovationLeaderAction'

interface IInnovationLeaderItem {
  leader: Simplify<Content.InnovationLeadSliceDefaultPrimaryLeadersItem>
}

const InnovationLeaderItem = async ({ leader }: IInnovationLeaderItem) => {
  const client = createClient()

  const getLeaderDetail = async () => {
    try {
      if (isFilled.contentRelationship(leader.leader_detail) && leader.leader_detail.uid) {
        const leaderDetail = await client.getByUID('leaderdetail', leader.leader_detail.uid)
        return leaderDetail
      }
    } catch (error) {
      // console.log('error', error)
    }
  }

  const leaderDetail = await getLeaderDetail()

  return (
    <div className='col-span-full sm:col-span-4 flex flex-col gap-7'>
      <div className='rounded-tl-[20px] rounded-br-[20px] relative overflow-hidden group flex-grow flex-shrink-0'>
        <div className='w-[270px] h-[270px]'>
          <PrismicImage
            field={leader.leader_image}
            className='grayscale group-hover:grayscale-0 h-full w-full object-cover object-center aspect-auto duration-200 transition-all ease-in-out'
          />
        </div>
        <div className='absolute bottom-0 w-full p-2 translate-y-full group-hover:translate-y-0 duration-200 transition-all ease-in-out'>
          <RichText field={leader.name} className='text-3xl sm:text-4xl font-bold text-center text-white w-full' />
          <RichText field={leader.job_title} className='text-xl sm:text-3xl text-center text-white w-full' />
        </div>
      </div>

      <InnovationLeaderAction leader={leader} leaderDetail={leaderDetail} />
    </div>
  )
}

export default InnovationLeaderItem
