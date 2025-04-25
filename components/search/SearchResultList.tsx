import React, { Fragment } from 'react'
import { text } from '@/lib/utils/text'
import { searchDocument } from '@/lib/actions/search.action'
import * as prismic from '@prismicio/client'
import { TSearchResultDocument } from '@/lib/model/search.type'
import Pagination from '@/components/shared/pagination/Pagination'
import { client } from '@/prismicio'
import Link from 'next/link'
import NoResults from './NoResults'
import { CategoryDocument } from '@/prismicio-types'

interface ISearchResultList {
  search: string
  page: number
}

export default async function SearchResultList({ search, page }: ISearchResultList) {
  let documents: TSearchResultDocument[] = []
  let totalSize = 0
  let categoryList: CategoryDocument<string>[] = []

  if (search) {
    const searchResults = await searchDocument({
      filters: [
        prismic.filter.fulltext('document', search),
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
      pageSize: 10,
      page: page
    })

    const { results, total_results_size } = searchResults

    documents = results as TSearchResultDocument[]

    totalSize = total_results_size

    categoryList = await client.getAllByType('category')
  }

  return (
    <Fragment>
      {documents.length > 0 ? (
        <Fragment>
          <div className='flex flex-col gap-9'>
            {documents.map((item) => {
              return (
                <div key={item.id} className='flex flex-col gap-3 text-slice-title'>
                  <Link
                    href={text.handleGenerateLink(item, item.uid || '', categoryList)}
                    className='text-base sm:text-[32px] leading-snug font-semibold hover:pointer-events-auto hover:underline'
                  >
                    <p
                      className='line-clamp-6'
                      dangerouslySetInnerHTML={{
                        __html: text.highlightText(item.data.display_name || (item.data.meta_title as string) || '', [
                          search
                        ])
                      }}
                    />
                  </Link>
                  {item.data.description && (
                    <p
                      className='text-lg whitespace-pre-wrap'
                      dangerouslySetInnerHTML={{
                        __html: text.highlightText((item.data.description as string) || '', [search])
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <Pagination className='px-2 md:pr-5 mt-10' totalCount={totalSize} pageSize={10} />
        </Fragment>
      ) : (
        <NoResults term={search} />
      )}
    </Fragment>
  )
}
