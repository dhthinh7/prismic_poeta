import React from 'react'
import { Content } from '@prismicio/client'
import BlogHeader from './BlogHeader'
import RichText from '../0shared/RichText'
import ConditionRender from '../0shared/ConditionRender'
import BlogTags from './BlogTags'
import { timeUtil } from '@/lib/utils/time.util'
import { BlogDocument } from '@/prismicio-types'

interface IBlogContent {
  slice: Content.BlogContentSlice
  context: {
    page: BlogDocument<string>
  }
}

const BlogContentDefault = ({ slice, context }: IBlogContent) => {
  const { title, sub_title, content } = slice.primary

  return (
    <div className='-mt-[150px] lg:-mt-[240px] relative'>
      <div className='p-4 py-10 lg:px-[120px] lg:pb-[130px] lg:pt-[80px] flex flex-col gap-5 lg:gap-12 bg-white shadow-blog'>
        <BlogHeader
          publishedDate={timeUtil.convertStringToHumanTime({
            date: context.page?.first_publication_date || '',
            format: 'MM/DD/YYYY'
          })}
          title={title}
          subTitle={sub_title}
        />
        <RichText field={content} />
      </div>
      <ConditionRender condition={context.page?.tags.length > 0}>
        <BlogTags tags={context.page?.tags} />
      </ConditionRender>
    </div>
  )
}

export default BlogContentDefault
