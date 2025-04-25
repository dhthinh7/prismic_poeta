import { RichTextField } from '@prismicio/client'
import React from 'react'
import RichText from '../0shared/RichText'

interface IBlogHeader {
  publishedDate: string
  title: RichTextField
  subTitle: RichTextField
}

const BlogHeader = ({ publishedDate, title, subTitle }: IBlogHeader) => {
  return (
    <div className='flex flex-col gap-4 items-center text-center'>
      {publishedDate && <div className='font-semibold'>Posted: {publishedDate}</div>}
      <RichText field={title} className='text-4xl lg:text-[64px] font-semibold text-[#0D1011] leading-[1.2]' />
      <RichText field={subTitle} className='text-xl lg:text-[32px] font-semibold text-[#0D1011]' />
    </div>
  )
}

export default BlogHeader
