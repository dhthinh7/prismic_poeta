import React from 'react'
import { Content } from '@prismicio/client'
import HeaderSection from '../0shared/section/HeaderSection'
import BlogResourcesList from './BlogResourcesList'

interface IBlogResources {
  slice: {
    slice_type: 'resources'
    slice_label: null
    id: string
  } & Content.ResourcesSliceBlog
}

const BlogResources = ({ slice }: IBlogResources) => {
  const { title, description, title_position } = slice.primary
  return (
    <div>
      <HeaderSection
        title={title}
        description={description}
        titlePosition={title_position}
        classNameWrapper='max-w-[900px] mx-auto'
      />
      <BlogResourcesList />
    </div>
  )
}

export default BlogResources
