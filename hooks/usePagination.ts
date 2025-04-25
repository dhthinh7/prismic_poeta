'use client'

import { useMemo } from 'react'
// import useScreenDimensions from './useScreenDimensions'
// import { eBreakPoints } from '@/lib/constant'

export const DOTS = '...'

export interface IPaginationRange {
  totalCount: number
  pageSize: number
  siblingCount?: number
  currentPage: number
}

const range = (start: number, end: number) => {
  const length = end - start + 1
  /*
    Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}

interface IPagination {
  paginationRange: (number | string)[]
  entriesInfo: string
  startIndex: number
  endIndex: number
  lastPage: number
}

const offsetRange = 3

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: IPaginationRange): IPagination => {
  // const { width } = useScreenDimensions()

  // const offsetRange = useMemo(() => {
  //   if (width <= eBreakPoints.XS) return 0
  //   else if (width <= eBreakPoints.SM) return 1
  //   return 3
  // }, [width])

  const pagination = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    const startIndex = totalCount > 0 ? (currentPage - 1) * pageSize + 1 : 0
    const endIndex = Math.min(startIndex + pageSize - 1, totalCount)

    // const entriesInfo = t('common.dataTableInfo', {
    //   startIndex,
    //   endIndex,
    //   totalCount
    // }) as string

    const entriesInfo = ''

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return { paginationRange: range(1, totalPageCount), entriesInfo, startIndex, endIndex, totalPageCount }
    }

    /*
      Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
      Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = offsetRange + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return {
        paginationRange: [...leftRange, DOTS, totalPageCount],
        entriesInfo,
        startIndex,
        endIndex,
        totalPageCount
      }
    }

    /*
      Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = offsetRange + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return {
        paginationRange: [firstPageIndex, DOTS, ...rightRange],
        entriesInfo,
        startIndex,
        endIndex,
        totalPageCount
      }
    }

    /*
      Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return {
        paginationRange: [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex],
        entriesInfo,
        startIndex,
        endIndex,
        totalPageCount
      }
    }
  }, [totalCount, pageSize, currentPage, siblingCount])

  return {
    paginationRange: pagination!.paginationRange,
    entriesInfo: pagination!.entriesInfo,
    startIndex: pagination!.startIndex,
    endIndex: pagination!.endIndex,
    lastPage: pagination!.totalPageCount
  }
}
