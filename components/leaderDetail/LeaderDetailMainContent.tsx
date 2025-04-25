import React from 'react'
import { PrismicImage } from '@prismicio/react'
import { ImageField, RichTextField } from '@prismicio/client'
import RichText from '../0shared/RichText'

interface ILeaderDetailMainContent {
  leader_image: ImageField<never>
  name: RichTextField
  job_title: RichTextField
  short_content: RichTextField
  full_content: RichTextField
}

const LeaderDetailMainContent = ({
  leader_image,
  name,
  job_title,
  short_content,
  full_content
}: ILeaderDetailMainContent) => {
  return (
    <div className='grid grid-cols-12 gap-5 sm:gap-12 xl:gap-x-24'>
      <div className='col-span-full sm:col-span-4'>
        <div className='rounded-tl-[20px] rounded-br-[20px] relative overflow-hidden group flex-grow flex-shrink-0'>
          <div className='w-full'>
            <PrismicImage field={leader_image} className='h-full object-cover aspect-square object-center' />
          </div>
          <div className='absolute bottom-0 w-full p-2'>
            <RichText field={name} className='text-[22px] sm:text-4xl font-bold text-center text-white w-full' />
            <RichText field={job_title} className='sm:text-3xl text-center text-white w-full' />
          </div>
        </div>
        <RichText field={short_content} className='text-[15px] text-center sm:text-center mt-5' />
      </div>
      <div className='col-span-full sm:col-span-8'>
        <RichText field={full_content} className='text-left' />
      </div>
    </div>
  )
}

export default LeaderDetailMainContent
