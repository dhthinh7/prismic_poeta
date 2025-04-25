'use client'

import { SubMenuDocument } from '@/prismicio-types'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'

interface ISubMenuHeader {
  subMenu?: SubMenuDocument<string>
}
export default function SubMenuHeader({ subMenu }: ISubMenuHeader) {
  return (
    subMenu && (
      <div className='shadow-primary-double'>
        <div className='py-7 px-6 -mx-2'>
          <div className='flex flex-wrap max-w-[1200px] justify-between mx-auto'>
            <div className='w-1/2 lg:w-1/4 px-2'>
              <SliceZone slices={subMenu?.data.slices} components={components} />
            </div>
            <div className='w-1/2 lg:w-1/4 px-2'>
              <SliceZone slices={subMenu?.data.slices1} components={components} />
            </div>
            <div className='w-1/2 lg:w-1/4 px-2'>
              <SliceZone slices={subMenu?.data.slices2} components={components} />
            </div>
            <div className='w-1/2 lg:w-1/4 px-2'>
              <SliceZone slices={subMenu?.data.slices3} components={components} />
            </div>
          </div>
        </div>
      </div>
    )
  )
}
