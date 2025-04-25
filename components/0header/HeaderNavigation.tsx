import React from 'react'
import MenuItems from './MenuItems'
import { SliceZone } from '@prismicio/client'
import { MenuItemSlice, SubMenuDocument } from '@/prismicio-types'

interface THeaderNavigationProps {
  slices: SliceZone<MenuItemSlice>
  submenus?: (SubMenuDocument<string> | undefined)[]
}

const HeaderNavigation = ({ slices, submenus }: THeaderNavigationProps) => {
  return (
    <div className='hidden lg:flex items-center justify-start gap-2 flex-grow'>
      <MenuItems slices={slices} submenus={submenus} />
    </div>
  )
}

export default HeaderNavigation
