'use client'

import React from 'react'
import { FooterItemSlice } from '@/prismicio-types'
import { PrismicNextLink } from '@prismicio/next'
import { usePathname } from 'next/navigation'
import { prismicUtils } from '@/lib/utils/prismic.util'

interface IFooterItem {
  item: FooterItemSlice
}
export default function FooterItem({ item }: IFooterItem) {
  const path = usePathname()

  return (
    <section>
      <h2 className='text-[#FFFFFF] font-bold mb-4 md:mb-5 hover:text-orange-600 hover:cursor-pointer'>
        {item.primary.title}
      </h2>
      <div className='flex flex-col gap-5 md:gap-2'>
        {item.items.map((item, index) => {
          return (
            <div key={index}>
              {prismicUtils.getUrl(item.cta_link) === path ? (
                <p className='text-[#faa000]'>{item.cta_label}</p>
              ) : (
                <div key={index} className='text-[#FFFFFF] hover:text-orange-600'>
                  <PrismicNextLink field={item.cta_link}>
                    <p>{item.cta_label}</p>
                  </PrismicNextLink>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
