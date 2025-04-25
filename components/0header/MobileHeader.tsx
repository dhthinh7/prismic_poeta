'use client'

import React, { Fragment, Suspense, useEffect, useMemo, useState } from 'react'
import Hamburger from '../icons/Hamburger'
import Drawer from '../0shared/drawer/Drawer'
import ChevronDown from '../icons/ChevronDown'
import { CategoryDocument, MenuItemSlice, SubMenuDocument } from '@/prismicio-types'
import { isFilled, SliceZone } from '@prismicio/client'
import CloseIcon from '../icons/CloseIcon'
import { cn } from '@/lib/utils'
import { components } from '@/slices'
import { SliceZone as SliceZoneComponent } from '@prismicio/react'
import { usePathname, useSearchParams } from 'next/navigation'
import GlobalSearch from '../search/GlobalSearch'

interface IMobileHeader {
  slices: SliceZone<MenuItemSlice>
  submenus?: (SubMenuDocument<string> | undefined)[]
  categories: CategoryDocument<string>[]
}

const MobileHeader = ({ slices, submenus, categories }: IMobileHeader) => {
  const path = usePathname()
  const searchParam = useSearchParams()

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [menuItemId, setMenuItemId] = useState<string>('')

  const mainMenu = useMemo(() => {
    return slices.find((s) => s.id === menuItemId)
  }, [menuItemId, slices])

  const subMenuItemId = useMemo<string>(() => {
    const menuItem = slices.find((s) => s.id === menuItemId)
    if (!menuItem) return ''

    if (isFilled.contentRelationship(menuItem.primary.sub_menu) && menuItem.primary.sub_menu.id) {
      return menuItem.primary.sub_menu.id
    }

    return ''
  }, [menuItemId, slices])

  const submenuData = useMemo(() => {
    return submenus?.filter((s) => s !== undefined) || []
  }, [submenus])

  useEffect(() => {
    setMenuItemId('')
    setShowMenu(false)
  }, [path, searchParam])

  return (
    <div className='lg:hidden px-4'>
      <button onClick={() => setShowMenu(true)}>
        <Hamburger className='text-white fill-current' />
      </button>
      <button
        onClick={() => {
          setShowMenu(false)
          setMenuItemId('')
        }}
        className={cn(
          'fixed bottom-[4%] left-1/2 -translate-x-1/2 h-[30px] w-[30px] z-[9999] opacity-0 invisible duration-300 ease-in',
          showMenu ? 'opacity-100 visible transition-all' : 'transition-none'
        )}
      >
        <CloseIcon />
      </button>

      <Drawer isOpen={showMenu} position='right' top={<Fragment />} controlOverflow={true}>
        <div className=''>
          <div
            className='px-5'
            style={{
              background: 'linear-gradient(76deg, #223C4D 0%, rgba(34, 60, 77, 0.50) 100%)'
            }}
          >
            <Suspense>
              <GlobalSearch
                categories={categories}
                className='block w-full max-w-full mx-auto rounded-sm pr-2 py-2 border-none'
              />
            </Suspense>
          </div>

          <ul className='p-4'>
            {slices.map((slice) => {
              return (
                <li key={slice.id} className='mx-[0.75rem]'>
                  <button
                    onClick={() => setMenuItemId(slice.id)}
                    className='flex justify-between w-full py-[11px] px-4 group items-center'
                  >
                    <span className='group-hover:text-primary transition-colors duration-300 ease-in-out font-helvetica text-black leading-[1.4]'>
                      {slice.primary?.label}
                    </span>
                    {isFilled.contentRelationship(slice.primary?.sub_menu) && slice.primary.sub_menu.id && (
                      <ChevronDown className='w-[15px] h-[15px] text-secondary -rotate-90' />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </Drawer>

      {submenuData.map((sub) => {
        return (
          <Drawer
            key={sub?.id}
            isOpen={subMenuItemId === sub?.id}
            position='right'
            title={mainMenu?.primary.label || ''}
            onTopControl={() => setMenuItemId('')}
          >
            <div className='py-[11x] px-10'>
              <SliceZoneComponent slices={sub?.data.slices} components={components} />
              <SliceZoneComponent slices={sub?.data.slices1} components={components} />
              <SliceZoneComponent slices={sub?.data.slices2} components={components} />
              <SliceZoneComponent slices={sub?.data.slices3} components={components} />
            </div>
          </Drawer>
        )
      })}
    </div>
  )
}

export default MobileHeader
