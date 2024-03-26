import { FooterItemSlice } from '@/prismicio-types'
import { PrismicNextLink } from '@prismicio/next'
import React from 'react'

interface IFooterItem {
  item: FooterItemSlice
}
export default function FooterItem({item}: IFooterItem) {
  return (
    <section>
      <h2 className="text-[#FFFFFF] font-bold mb-5 hover:text-orange-600 hover:cursor-pointer">{item.primary.title}</h2>
      <div>
        {item.items.length > 0 && item.items.map((item, index) => {
          return <div key={index} className='text-[#FFFFFF] my-2 hover:text-orange-600'>
            <PrismicNextLink field={item.cta_link}>
              <p>{item.cta_label}</p>
            </PrismicNextLink>
          </div>
        })}
      </div>
    </section>
  )
}
