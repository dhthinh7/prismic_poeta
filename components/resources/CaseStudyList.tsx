import React from 'react'

import * as prismic from '@prismicio/client'
import { PrismicImage } from '@prismicio/react'
import { CaseStudyDocument, CategoryDocument } from '@/prismicio-types'
import Button from '../0shared/button/Button'
import { PrismicNextLink } from '@prismicio/next'
import { BreadcrumbMapper } from '@/lib/utils/dataMapper.util'
import { client } from '@/prismicio'
import { ICategory } from '@/lib/model/index.type.'

interface ICaseStudyList {
  categories: CategoryDocument<string>[]
}

export const CaseStudyList = async ({ categories = [] }: ICaseStudyList) => {
  let results: CaseStudyDocument[] = []

  const caseStudies = await client.get({
    filters: [prismic.filter.any('document.type', ['case_study'])],
    pageSize: 6
  })

  results = (caseStudies.results as CaseStudyDocument[]) || []

  return (
    <div className='grid grid-cols-12 mt-5 md:mt-14 gap-5 md:gap-x-[50px] md:gap-y-20'>
      {results.map((item) => (
        <div
          key={item.id}
          className='border border-[rgba(217, 217, 217, 0.50)] rounded-tl-[20px] overflow-hidden col-span-full sm:col-span-6 md:col-span-4 grid grid-cols-12 gap-5 md:gap-0 shadow-blog'
        >
          <div className='col-span-6 md:mr-5'>
            <PrismicImage
              field={item.data.thumbnail}
              className='object-cover w-full sm:h-[210px] lg:h-full aspect-auto object-center'
            />
          </div>
          <div className='col-span-6 flex flex-col gap-5 py-5 pr-5'>
            <div className='flex-grow'>
              <div className='text-[22px] font-semibold leading-[26px] text-blue-dianna line-clamp-3'>
                {item.data.display_name}
              </div>
            </div>
            <ViewCaseStudy page={item} categories={categories} />
          </div>
        </div>
      ))}
    </div>
  )
}

interface IViewCaseStudy {
  page: CaseStudyDocument
  categories: CategoryDocument<string>[]
}

const ViewCaseStudy = ({ page, categories }: IViewCaseStudy) => {
  const breadcrumbMapper = new BreadcrumbMapper(categories)
  const breadcrumbs: ICategory[] = [
    ...breadcrumbMapper.breadcrumbsMapper(page as CaseStudyDocument<string>),
    {
      id: page.id,
      uid: page.uid,
      categoryName: page.data.display_name || page.data.meta_title,
      isShow: true
    }
  ]

  const buildUrl = breadcrumbs.reduce((url, current) => {
    return url + '/' + current.uid
  }, '')

  return (
    <div className='flex flex-center'>
      <Button variant='outline' color='orange' className='w-full text-sm'>
        <PrismicNextLink href={buildUrl}>View Case study</PrismicNextLink>
      </Button>
    </div>
  )
}
