import React, { Suspense } from 'react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SearchResultHeader from '@/components/search/SearchResultHeader'
import SearchResultList from '@/components/search/SearchResultList'
import SearchResultLoader from '@/components/search/SearchResultLoader'

interface IPage {
  searchParams: Record<string, string>
}

export const dynamic = 'force-dynamic' // Re-generate the page on every request

export default async function Page({ searchParams }: IPage) {
  const search = searchParams['search'] || ''
  const page = searchParams['page'] || '1'

  return (
    <SectionWrapper className='!my-10'>
      <SearchResultHeader term={search} />
      <Suspense fallback={<SearchResultLoader />} key={`${search}-${page}`}>
        <SearchResultList search={search} page={+page} />
      </Suspense>
    </SectionWrapper>
  )
}
