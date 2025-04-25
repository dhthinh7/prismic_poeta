'use client'

import React, { forwardRef, useRef } from 'react'
import { CaseStudyDocument, CategoryDocument } from '@/prismicio-types'
import { cn } from '@/lib/utils'
import AngleRight from '../icons/AngleRight'

import useScreenDimensions from '@/hooks/useScreenDimensions'
import useElementChildrenBounding from '@/hooks/useElementChildrenBounding'
import Button from '../0shared/button/Button'
import RichText from '../0shared/RichText'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { BreadcrumbMapper } from '@/lib/utils/dataMapper.util'

import './style.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ICategory } from '@/lib/model/index.type.'

interface ICaseStudyDocument {
  card: CaseStudyDocument
  categories: CategoryDocument<string>[]
}

const SimilarCaseStudyItem = ({ card, categories }: ICaseStudyDocument) => {
  const { data } = card

  const buttonRef = useRef(null)
  const parentRef = useRef(null)

  const { left, right } = useElementChildrenBounding(buttonRef, parentRef)
  const { width } = useScreenDimensions()
  return (
    <div className='sm:w-1/2 sm:p-6 md:px-[30px] md:py-[20px]'>
      <div className='h-full flex flex-col sm:shadow-primary-double sm:py-5 rounded'>
        <div
          className='w-full flex justify-center'
          style={{
            background: 'linear-gradient(180deg, rgba(237, 243, 251, 0.00) 0%, #EDF3FB 100%'
          }}
        >
          <PrismicNextImage
            field={data.thumbnail}
            // style={{ filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))' }}
            className='px-10 sm:px-5 lg:px-10 w-full object-cover object-center'
          />
        </div>

        <div className='px-5 lg:px-10 mt-[30px] flex-grow flex flex-col gap-[10px] text-center sm:text-left'>
          <RichText field={data.short_description} className='mb-[10px]' />
        </div>

        <div ref={parentRef} className='px-10 sm:px-5 lg:px-10 mt-5 relative flex justify-center sm:justify-start'>
          <ViewCaseStudy ref={buttonRef} page={card} categories={categories} />
          <div
            className='sm:hidden absolute'
            style={{
              left: `${left - (width > 475 ? 80 : 50)}px`
            }}
          >
            <NavigateButton type='prev' />
          </div>
          <div
            className='sm:hidden absolute'
            style={{
              right: `${right - (width > 475 ? 80 : 50)}px`
            }}
          >
            <NavigateButton type='next' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarCaseStudyItem

interface INavigateButton {
  // icon: IconProp
  type: 'prev' | 'next'
  className?: string
}

const NavigateButton = forwardRef<HTMLButtonElement, INavigateButton>(({ type = 'prev', className = '' }, ref) => {
  return (
    <button
      ref={ref}
      aria-label={`${type === 'prev' ? 'Previous' : 'Next'}`}
      className={cn(`tab-swiper-nav cursor-pointer ${type === 'prev' ? 'prev' : 'next'} ${className}`, '!opacity-100')}
    >
      <div
        className={cn(
          'w-11 h-11 rounded-full bg-[#c3d4f133] hover:bg-[rgba(195,207,241,0.5)] transition-all duration-200 ease-in-out flex flex-center',
          type === 'next' ? 'rotate-180' : ''
        )}
      >
        <AngleRight />
      </div>
    </button>
  )
})

NavigateButton.displayName = 'NavigateButton'

interface IViewCaseStudy {
  page: CaseStudyDocument
  categories: CategoryDocument<string>[]
}

const ViewCaseStudy = forwardRef<HTMLDivElement, IViewCaseStudy>(({ page, categories }, ref) => {
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
    <div ref={ref} className='flex flex-center'>
      <Button variant='outline' color='orange' className='w-fit !px-[15px] !py-[10px]'>
        <PrismicNextLink href={buildUrl}>View Case study</PrismicNextLink>
      </Button>
    </div>
  )
})

ViewCaseStudy.displayName = 'ViewCaseStudy'
