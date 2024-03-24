'use client'

import { createClient } from "@/prismicio";
import { MenuItemSlice, MenuItemSliceWithSubMenu, SubMenuDocument } from "@/prismicio-types";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import React, { useCallback, useEffect, useState } from "react";

interface ISubMenuHeader {
  slice: MenuItemSliceWithSubMenu
}
export default function SubMenuHeader({slice}: ISubMenuHeader) {
  const [submenuItem, setSubmenuItem] = useState<SubMenuDocument<string>>()
  const client = createClient()
  const getSubmenuItem = useCallback(async () => {
    const item = await client.getByUID('sub_menu', slice.primary.sub_menu.uid)
    setSubmenuItem(item)
  }, [])

  useEffect(() => {
    getSubmenuItem()
  }, [getSubmenuItem])


  return <div className="flex max-w-[1200px] mx-auto gap-14 py-7 justify-between">
    <div>
      <SliceZone slices={submenuItem?.data.slices} components={components} />
    </div>
    <div>
      <SliceZone slices={submenuItem?.data.slices1} components={components} />
    </div>
    <div>
      <SliceZone slices={submenuItem?.data.slices2} components={components} />
    </div>
    <div>
      <SliceZone slices={submenuItem?.data.slices3} components={components} />
    </div>
  </div>;
}