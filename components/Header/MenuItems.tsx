'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import SubMenuHeader from './SubMenuHeader'
import { isFilled, SliceZone } from '@prismicio/client'
import { MenuItemSlice, SubMenuDocument } from '@/prismicio-types'
import useClickOutside from '@/hooks/useClickOutside'
import { usePathname } from 'next/navigation'
import MenuItem from '@/slices/MenuItem'

interface IMenuItems {
  slices: SliceZone<MenuItemSlice>
  submenus?: (SubMenuDocument<string> | undefined)[]
}

export default function MenuItems({ slices, submenus }: IMenuItems) {
  const [menuItemId, setMenuItemId] = useState<string>('')
  const ref = useRef<HTMLElement>(null)
  const pathName = usePathname()

  const subMenuItemId = useMemo<string>(() => {
    const menuItem = slices.find((s) => s.id === menuItemId)
    if (!menuItem) return ''

    if (isFilled.contentRelationship(menuItem.primary.sub_menu) && menuItem.primary.sub_menu.id) {
      return menuItem.primary.sub_menu.id
    }

    return ''
  }, [menuItemId, slices])

  const handleChangeMenuItemId = useCallback(
    (value: string) => {
      if (menuItemId === value) {
        setMenuItemId('')
      } else {
        setMenuItemId(value)
      }
    },
    [menuItemId]
  )

  useClickOutside<HTMLElement>(ref, () => {
    setMenuItemId('')
  })

  useEffect(() => {
    setMenuItemId('')
  }, [pathName])

  return (
    <section ref={ref} className=''>
      <ul className='flex items-center justify-start flex-wrap'>
        {slices.length > 0 &&
          slices.map((slice, index) => {
            return (
              <MenuItem
                key={slice.id}
                slice={slice}
                index={index}
                slices={[]}
                context={undefined}
                itemId={menuItemId}
                onChangeActiveMenuItem={handleChangeMenuItemId}
              />
            )
          })}
      </ul>
      {submenus &&
        submenus.map((sub, index) => {
          if (sub) {
            return (
              <div key={index} className='absolute left-0 right-0 top-full z-[99] bg-white'>
                <div className={sub.id === subMenuItemId ? 'block' : 'hidden'}>
                  <SubMenuHeader subMenu={sub} />
                </div>
              </div>
            )
          }
          return
        })}
    </section>
  )
}
