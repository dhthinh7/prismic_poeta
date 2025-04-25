import React from 'react'
import { Content } from '@prismicio/client'
import ConditionRender from '../shared/ConditionRender'
import { client } from '@/prismicio'
import * as prismic from '@prismicio/client'
import { CaseStudyDocument, CategoryDocument } from '@/prismicio-types'
import SimilarCaseStudyItem from './SimilarCaseStudyItem'
import SimilarCaseStudyDefaultMobile from './SimilarCaseStudyDefaultMobile'
import HeaderSection from '../shared/section/HeaderSection'

interface ICaseStudyDefault {
  slice: Content.CaseStudySlice
  categories: CategoryDocument<string>[]
}

const CaseStudyDefault = async ({ slice, categories }: ICaseStudyDefault) => {
  const { title, sub_title, description } = slice.primary
  let similarCaseStudies: CaseStudyDocument[] = []

  const caseStudies = await client.get({
    filters: [prismic.filter.any('document.type', ['case_study'])],
    orderings: [{ field: 'document.last_publication_date', direction: 'desc' }],
    pageSize: 4
  })

  similarCaseStudies = (caseStudies.results as CaseStudyDocument[]) || []

  // const similarCaseStudies = results.filter((result) => {
  //   return case_study_list.some(
  //     (relativeCaseStudy) =>
  //       prismic.isFilled.contentRelationship(relativeCaseStudy.case_study) &&
  //       relativeCaseStudy.case_study.id === result.id
  //   )
  // })

  return (
    <div className='flex flex-col gap-10 sm:gap-[50px]'>
      <HeaderSection title={title} subTitle={sub_title} description={description} />
      <ConditionRender condition={similarCaseStudies.length > 0}>
        <div className='hidden sm:flex justify-evenly flex-wrap items-stretch sm:-m-5 md:-mx-[30px] md:-my-[20px]'>
          {similarCaseStudies.map((card, index) => (
            <SimilarCaseStudyItem key={index} card={card} categories={categories} />
          ))}
        </div>

        <SimilarCaseStudyDefaultMobile cards={similarCaseStudies} categories={categories} />
      </ConditionRender>
    </div>
  )
}

export default CaseStudyDefault
