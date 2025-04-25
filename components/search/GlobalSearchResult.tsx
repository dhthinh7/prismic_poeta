'use client'

import React, { Fragment } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import FadeLoader from 'react-spinners/FadeLoader'
import { CategoryDocument } from '@/prismicio-types'
import { TSearchResultDocument } from './GlobalSearch'
import { text } from '@/lib/utils/text'

interface IGlobalSearchResult {
  searchKey: string
  documents: TSearchResultDocument[]
  loading: boolean
  categories: CategoryDocument<string>[]
  showResults: boolean
}

const GlobalSearchResult = ({ searchKey, documents, loading, categories, showResults }: IGlobalSearchResult) => {
  return (
    <ul
      className={cn(
        'absolute bg-white right-0 left-0 px-4 py-2 text-gray-600 transform transition-all duration-300 shadow-service-card rounded-b-lg z-10',
        showResults ? 'top-11 opacity-100 pointer-events-auto' : 'opacity-0 invisible pointer-events-none -top-1'
      )}
    >
      <li className='py-1 border-b border-gray-600'>Result for `{searchKey}`</li>
      {loading ? (
        <div className='flex items-center justify-center py-4'>
          <FadeLoader speedMultiplier={1} color='#ff4b01' />
        </div>
      ) : documents.length > 0 ? (
        <Fragment>
          {documents.map((doc) => {
            return (
              <li key={doc.id} className='py-2 hover:text-primary duration-200'>
                <Link href={text.handleGenerateLink(doc, doc.uid || '', categories)}>
                  {doc.data.display_name || doc.data.meta_title}
                </Link>
              </li>
            )
          })}
        </Fragment>
      ) : (
        <div className='flex items-center justify-center py-4'>
          <li className='py-1 text-center flex items-center gap-2'>
            No result <span className='text-3xl'></span>
          </li>
        </div>
      )}
    </ul>
  )
}

export default GlobalSearchResult
