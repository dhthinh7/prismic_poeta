import React from 'react'

interface ISearchResultHeader {
  term: string
}

const SearchResultHeader = ({ term }: ISearchResultHeader) => {
  return (
    <h1 className='text-slice-title font-sourceCodePro font-semibold mb-6 sm:mb-12 flex text-3xl lg:text-[64px]'>
      Results for &ldquo;<span className='italic'>{term ? term : <span>&nbsp;</span>}</span>&rdquo;
    </h1>
  )
}

export default SearchResultHeader
