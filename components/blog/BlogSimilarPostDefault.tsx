import React from 'react'
import { AllDocumentTypes, BlogDocument, BlogDocumentData, Simplify } from '@/prismicio-types'
import * as prismic from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Button from '../shared/button/Button'
import { client } from '@/prismicio'

interface IBlogSimilarPostDefault {
  slice: prismic.Content.SimilarPostSlice
  page: BlogDocument<string>
}

type TBlogDocument = Omit<AllDocumentTypes, 'data'> & {
  data: Simplify<BlogDocumentData>
}

const BlogSimilarPostDefault = async ({ page }: IBlogSimilarPostDefault) => {
  let results: TBlogDocument[] = []

  const blogs = await client.get({
    filters: [
      prismic.filter.any('document.type', ['blog']),
      page.tags.length > 0 ? prismic.filter.any('document.tags', page.tags) : ''
    ],
    pageSize: 10
  })

  results = (blogs.results as TBlogDocument[]) || []

  const similarBlogs = results.filter((result) => {
    return result.id !== page?.id
  })

  return (
    <div className='grid grid-cols-12 gap-y-10 sm:gap-x-8'>
      {similarBlogs.slice(0, 4).map((blog) => (
        <div
          key={blog.id}
          className='col-span-full sm:col-span-6 grid grid-cols-12 items-stretch gap-y-4 md:gap-x-6 rounded overflow-hidden'
        >
          <div className='col-span-full lg:col-span-6 w-full'>
            <PrismicNextImage
              field={blog.data.thumbnail}
              className='object-contain w-full sm:h-[210px] lg:h-full aspect-auto object-center'
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

export default BlogSimilarPostDefault
