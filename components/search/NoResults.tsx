import React from 'react'

interface INoResults {
  term: string
}

const NoResults = ({ term }: INoResults) => {
  return (
    <div className='text-lg font-sourceCodePro flex flex-col gap-8'>
      <p>
        Sorry there were no results for &nbsp;&ldquo;
        <span className='italic'>{term ? term : <span>&nbsp;</span>} </span>
        &rdquo;.
      </p>
      <p>Try rewording your query, or browse through the site. </p>
    </div>
  )
}

export default NoResults
