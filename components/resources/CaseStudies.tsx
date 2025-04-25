import React from 'react'
import { Content } from '@prismicio/client'
import HeaderSection from '../0shared/section/HeaderSection'
import { CaseStudyList } from './CaseStudyList'
import { CategoryDocument } from '@/prismicio-types'

interface ICaseStudies {
  slice: Content.ResourcesSlice
  categories: CategoryDocument<string>[]
}

const CaseStudies = ({ slice, categories }: ICaseStudies) => {
  const { title, description, title_position } = slice.primary
  return (
    <div>
      <HeaderSection
        title={title}
        description={description}
        titlePosition={title_position}
        classNameWrapper='max-w-[900px] mx-auto'
      />
      <CaseStudyList categories={categories} />
    </div>
  )
}

export default CaseStudies
