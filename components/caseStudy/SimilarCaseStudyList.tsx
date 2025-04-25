import React from 'react'

import * as prismic from '@prismicio/client'
import {
  CaseStudyDocument,
  CategoryDocument,
  IndustryDocument,
  PartnershipsDocument,
  ServicesDocument
} from '@/prismicio-types'
import ConditionRender from '../shared/ConditionRender'
import SimilarCaseStudyItem from './SimilarCaseStudyItem'
import SimilarCaseStudyDefaultMobile from './SimilarCaseStudyDefaultMobile'
import { client } from '@/prismicio'

interface ISimilarCaseStudyList {
  page: CaseStudyDocument | ServicesDocument | IndustryDocument | PartnershipsDocument
  categories: CategoryDocument<string>[]
}

const SimilarCaseStudyList = async ({ page, categories = [] }: ISimilarCaseStudyList) => {
  let results: CaseStudyDocument[] = []

  const itemNumbers = page.type === 'case_study' ? 2 : 4

  const caseStudies = await client.get({
    filters: [
      prismic.filter.any('document.type', ['case_study']),
      page.tags.length > 0 ? prismic.filter.any('document.tags', page.tags) : ''
    ],
    pageSize: 10
  })

  results = (caseStudies.results as CaseStudyDocument[]) || []

  const similarCaseStudies = results.filter((result) => {
    return result.id !== page?.id
  })

  return (
    <div>
      <ConditionRender condition={results.length > 0}>
        <div className='hidden sm:flex justify-evenly flex-wrap items-stretch sm:-m-5 md:-mx-[30px] md:-my-[20px]'>
          {similarCaseStudies.slice(0, itemNumbers).map((card, index) => (
            <SimilarCaseStudyItem key={index} card={card} categories={categories} />
          ))}
        </div>

        <SimilarCaseStudyDefaultMobile cards={similarCaseStudies} categories={categories} />
      </ConditionRender>
    </div>
  )
}

export default SimilarCaseStudyList
