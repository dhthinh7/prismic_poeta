import React from 'react'

import * as prismic from '@prismicio/client'
import { AllDocumentTypes, BlogDocumentData, Simplify } from '@/prismicio-types'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Button from '../0shared/button/Button'
import { client } from '@/prismicio'

type TBlogDocument = Omit<AllDocumentTypes, 'data'> & {
  data: Simplify<BlogDocumentData>
}

const BlogResourcesList = async () => {
  let results: TBlogDocument[] = []

  const blogs = await client.get({
    filters: [prismic.filter.any('document.type', ['blog'])],
    pageSize: 6
  })

  results = (blogs.results as TBlogDocument[]) || []

  const similarBlogs = results.slice(0, 6)
  return (
    <div className='grid grid-cols-12 gap-y-10 sm:gap-x-8 mt-5 md:mt-14'>
      {similarBlogs.map((blog) => (
        <div
          key={blog.id}
          className='col-span-full sm:col-span-6 grid grid-cols-12 items-stretch gap-y-4 md:gap-x-6 rounded overflow-hidden'
        >
          <div className='col-span-full lg:col-span-6 w-full'>
            <PrismicNextImage
              field={blog.data.thumbnail}
              className='object-cover w-full sm:h-[210px] lg:h-full aspect-auto object-center'
            />
          </div>
          <div className='col-span-full lg:col-span-6 flex flex-col gap-5'>
            <div className='flex-grow flex flex-col gap-2'>
              <div className='text-xl text-blue-dianna font-semibold line-clamp-3'>{blog.data.display_name}</div>
              <div className='flex gap-2 items-center flex-wrap'>
                {blog.tags.map((tag, index) => (
                  <div key={index} className='text-[#4A5B66] bg-[#C3D4F1] rounded-md px-2 py-1 text-sm'>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            {blog.uid && (
              <div className='flex flex-center'>
                <Button variant='outline' color='orange' className='!px-[15px] !py-[10px] w-fit'>
                  <PrismicNextLink href={`/blog/${blog.uid}`}>View Blog</PrismicNextLink>
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogResourcesList
