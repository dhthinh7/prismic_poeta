'use client'

import React, { useCallback, useEffect, useState, useTransition } from 'react'
import Search from '../icons/Search'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import GlobalSearchResult from './GlobalSearchResult'
import {
  BlogDocument,
  CaseStudyDocument,
  CategoryDocument,
  HomePageDocument,
  IndustryDocument,
  PageDocument,
  PartnershipsDocument,
  ServicesDocument
} from '@/prismicio-types'
import CloseIcon from '../icons/CloseIcon'
import ConditionRender from '../0shared/ConditionRender'
import * as prismic from '@prismicio/client'
import { searchDocument } from '@/lib/actions/search.action'
import { text } from '@/lib/utils/text'
import { eQueryKey } from '@/constants/enum'
import { cn } from '@/lib/utils'

interface IGlobalSearchProps {
  categories: CategoryDocument<string>[]
  className?: string
  classNameInput?: string
}

export type TSearchResultDocument =
  | PageDocument<string>
  | CaseStudyDocument<string>
  | ServicesDocument<string>
  | PartnershipsDocument<string>
  | IndustryDocument<string>
  | HomePageDocument<string>
  | BlogDocument<string>

const GlobalSearch = ({ categories, className }: IGlobalSearchProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [isPending, startTransition] = useTransition()

  const [searchKey, setSearchKey] = useState<string>(() => {
    return searchParams.get('search') || ''
  })

  const [documents, setDocuments] = useState<TSearchResultDocument[]>([])

  const debouncedSearch = useDebounce(searchKey, 500)

  const handleChange = useCallback((debouncedSearch: string) => {
    startTransition(async () => {
      const searchResults = await searchDocument({
        filters: [
          prismic.filter.fulltext('document', debouncedSearch),
          prismic.filter.any('document.type', [
            'home_page',
            'blog',
            'case_study',
            'services',
            'industry',
            'partnerships',
            'page'
          ])
        ],
        pageSize: 10
      })

      setDocuments((searchResults.results as TSearchResultDocument[]) || [])
    })
  }, [])

  useEffect(() => {
    if (debouncedSearch && !pathname.includes('/search')) {
      handleChange(debouncedSearch)
    }
  }, [debouncedSearch, handleChange, pathname])

  return (
    <div
      className={cn('border-b border-white min-w-64 flex-grow relative hidden lg:block max-w-[254px] mr-10', className)}
    >
      <div className='flex items-center gap-3'>
        <button
          className='p-2'
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString())

            const queryString = text.createQueryString({
              updates: {
                [eQueryKey.SEARCH]: searchKey,
                [eQueryKey.PAGE]: ''
              },
              params: params
            })

            router.push('/search' + '?' + queryString)
          }}
        >
          <Search className='h-6 w-6' />
        </button>
        <input
          type='text'
          value={searchKey}
          placeholder='Search'
          onChange={(e) => {
            setSearchKey(e.target.value)
            // setLoading(true)
          }}
          className={cn(
            'bg-transparent py-2 text-white placeholder:text-white text-sm font-semibold leading-6 font-sourceCodePro focus:outline-none flex-grow'
          )}
        />
        <ConditionRender condition={searchKey}>
          <button
            className='hover:cursor-pointer'
            onClick={() => {
              setSearchKey('')
              setDocuments([])
            }}
          >
            <CloseIcon className='h-6 w-6' />
          </button>
        </ConditionRender>
      </div>
      <ConditionRender condition={!pathname.includes('/search')}>
        <GlobalSearchResult
          searchKey={debouncedSearch}
          documents={documents}
          loading={isPending}
          showResults={Boolean(debouncedSearch) && Boolean(searchKey)}
          categories={categories}
        />
      </ConditionRender>
    </div>
  )
}

export default GlobalSearch
