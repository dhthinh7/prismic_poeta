'use client'

import React, { Fragment, useCallback, useRef, useState } from "react";
import SubMenuHeader from "./SubMenuHeader";
import MenuItem from "@/slices/MenuItem";
import { SliceZone } from "@prismicio/client";
import { MenuItemSlice } from "@/prismicio-types";
import useClickOutside from "@/hooks/useClickOutside";

interface IMenuItems {
  slices: SliceZone<MenuItemSlice>
}

export default function MenuItems({slices}: IMenuItems) {
  const [menuItemId, setMenuItemId] = useState<string>('')
  const ref = useRef<HTMLElement>(null)
  const handleChangeMenuItemId = useCallback((value: string) => {
    if (menuItemId === value) {
      console.log(value, menuItemId)
      setMenuItemId('')
    } else {
      setMenuItemId(value)
    }
  }, [menuItemId])

  useClickOutside<HTMLElement>(ref, () => {
    setMenuItemId('')
  })


  return <section ref={ref}>
    <nav className="">
      <ul className='flex items-center justify-center'>
        {/* <SliceZone slices={layout.data.slices} components={components} /> */}
        {slices.length > 0 && slices.map(slice => {
          return <div key={slice.id}>
            <MenuItem slice={slice} index={0} slices={[]} context={undefined} itemId={menuItemId} onChangeActiveMenuItem={handleChangeMenuItemId}/>
          </div>
        })}
      </ul>
    </nav>
    <div className="bg-white absolute top-full left-0 right-0 z-[99]">
      {slices.length > 0 && slices.map((menu, index) => {
        if (menu.variation === 'withSubMenu') {
          return <div key={menu.id} className={menu.id === menuItemId ? 'block' : 'hidden'}>
            <SubMenuHeader slice={menu}/>
          </div>
        }
        return
      })}
    </div>
  </section>
}
