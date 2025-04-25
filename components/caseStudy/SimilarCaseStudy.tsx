import React from 'react'
import { CaseStudyDocument, CategoryDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import HeaderSection from '../shared/section/HeaderSection'
import SimilarCaseStudyList from './SimilarCaseStudyList'

interface ISimilarCaseStudy {
  slice: Content.SimilarCaseStudiesSlice
  page: CaseStudyDocument
  categories: CategoryDocument<string>[]
}

const SimilarCaseStudy = ({ slice, page, categories = [] }: ISimilarCaseStudy) => {
  const { title } = slice.primary
  return (
    <div className='flex flex-col gap-10 sm:gap-[50px]'>
      <HeaderSection title={title} />
      <SimilarCaseStudyList page={page} categories={categories} />
    </div>
  )
}

export default SimilarCaseStudy
