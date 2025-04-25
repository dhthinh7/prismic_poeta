import React, { Suspense } from 'react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { LayoutDocument, MenuItemSliceWithSubMenu } from '@/prismicio-types'
import { createClient } from '@/prismicio'
import { isFilled } from '@prismicio/client'
import SectionWrapper from '../layout/SectionWrapper'
import HeaderNavigation from './HeaderNavigation'
import MobileHeader from './MobileHeader'
import GlobalSearch from '../search/GlobalSearch'

// Import css
import './Style.css'

interface IHeader {
  layout: LayoutDocument<string>
}

export default async function Header({ layout }: IHeader) {
  const client = createClient()

  const getSubmenuItem = async (slice: MenuItemSliceWithSubMenu) => {
    try {
      if (isFilled.contentRelationship(slice.primary.sub_menu) && slice.primary.sub_menu.uid) {
        return await client.getByUID('sub_menu', slice.primary.sub_menu.uid)
      }
    } catch (error) {
      //
    }
  }

  const submenus = await Promise.all(
    layout.data.slices
      .filter((slice) => isFilled.contentRelationship(slice.primary?.sub_menu) && slice.primary.sub_menu.uid)
      .map(getSubmenuItem)
  )

  const categories = await client.getAllByType('category')

  return (
    <div style={{ paddingTop: 'var(--header-height)' }} className='relative'>
      <div className='fixed top-0 z-[30] w-full'>
        <div
          className='w-full'
          style={{
            minHeight: 'var(--header-height)',
            height: 'var(--header-height)',
            background: 'linear-gradient(76deg, #223C4D 0%, rgba(34, 60, 77, 0.50) 100%)'
          }}
        >
          <SectionWrapper className='flex !max-w-[1200px] !py-0 gap-8 lg:gap-10 justify-between lg:justify-center items-center h-full'>
            <PrismicNextLink
              field={layout.data.logo[0]?.logo_icon_link}
              className='logo-wrapper relative w-44 md:w-[170px] h-full bg-white px-4 md:px-8 py-4 flex items-center flex-shrink-0'
            >
              <PrismicNextImage field={layout.data.logo[0]?.logo_icon} />
            </PrismicNextLink>
            <HeaderNavigation slices={layout.data.slices} submenus={submenus} />
            <Suspense>
              <MobileHeader slices={layout.data.slices} submenus={submenus} categories={categories} />
            </Suspense>

            <Suspense>
              <GlobalSearch categories={categories} />
            </Suspense>
          </SectionWrapper>
        </div>
      </div>
    </div>
  )
}
