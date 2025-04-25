import React from 'react'

interface IBlogTags {
  tags: string[]
}

const BlogTags = ({ tags = [] }: IBlogTags) => {
  return (
    <div className='mt-12 flex flex-wrap gap-3'>
      {tags.map((tag, index) => (
        <div
          key={index}
          className='border-l-2 border-primary shadow-blog py-[10px] px-[15px] bg-white flex-shrink-0 font-semibold hover:scale-105 duration-200 transition-all ease-in-out'
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default BlogTags
