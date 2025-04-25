'use client'

import { useCallback } from 'react'
import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DOTS, usePagination } from '@/hooks/usePagination'
import { text } from '@/lib/utils/text'
import { eQueryKey } from '@/constants/enum'

export interface IPagination {
  onPageChange?: (page: number) => void
  totalCount: number
  siblingCount?: number
  // currentPage: number
  pageSize: number
  className: string
}

const paginationItemClassName =
  'rounded-md border-primary border flex-center bg-white p-[10px] text-base w-11 h-11 font-semibold text-primary hover:cursor-pointer transform transition-all duration-300'

const disabledClassName = 'pointer-events-none hover:cursor-default'

const selectedItemClassName = 'bg-[#FF4B01] text-white'

const Pagination = (props: IPagination) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = searchParams.get('page')
  const currentPage = page ? +page : 1

  const { onPageChange, totalCount, siblingCount = 1, pageSize, className } = props

  const { paginationRange, lastPage } = usePagination({
    currentPage: currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  // const onNext = () => {
  //   onPageChange(currentPage + 1);
  // };

  // const onPrevious = () => {
  //   onPageChange(currentPage - 1);
  // };

  // const lastPage = paginationRange[paginationRange.length - 1];

  const handlePageChange = useCallback(
    (page: number) => {
      if (onPageChange) {
        onPageChange(page)
      } else {
        const params = new URLSearchParams(searchParams.toString())

        const queryString = text.createQueryString({
          updates: {
            [eQueryKey.PAGE]: +page > 1 ? page.toString() : ''
          },
          params: params
        })

        router.push(pathname + '?' + queryString)
      }
    },
    [onPageChange, pathname, router, searchParams]
  )

  return (
    <div>
      {totalCount > 0 ? (
        <div className={cn('w-full flex justify-center p-[10px] mt-0 md:mt-[26px]', className)}>
          <ul className='flex list-none gap-2 sm:gap-5 relative'>
            {paginationRange.length > 1 &&
              paginationRange.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                  return (
                    <li key={pageNumber + index} className={cn(paginationItemClassName, disabledClassName)}>
                      &#8230;
                    </li>
                  )
                }

                if (pageNumber === lastPage) {
                  return (
                    <li
                      key={pageNumber}
                      className={cn(
                        paginationItemClassName,
                        pageNumber.toString() === currentPage?.toString() ? selectedItemClassName : ''
                      )}
                      onClick={() => handlePageChange(lastPage as number)}
                    >
                      Last
                    </li>
                  )
                }

                return (
                  <li
                    key={pageNumber}
                    className={cn(
                      'rounded-md border-primary border flex-center bg-white p-[10px] text-base w-11 h-11 font-semibold text-primary hover:cursor-pointer transform transition-all duration-300',
                      pageNumber.toString() === currentPage?.toString() ? selectedItemClassName : ''
                    )}
                    onClick={() => handlePageChange(pageNumber as number)}
                  >
                    {pageNumber}
                  </li>
                )
              })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Pagination
