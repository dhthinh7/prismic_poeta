import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";

import './Style.css'
import SubMenuItem from "@/slices/SubMenuItem";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import MenuItem from "@/slices/MenuItem";
import SubMenuHeader from "./SubMenuHeader";
import MenuItems from "./MenuItems";



export default async function Header() {
  const client = createClient();
  const layout = await client.getSingle('layout')
  let menuItemActiveId = ''

  return <div className="sticky top-0 z-10">
    <div className="bg-[#223c4db2] w-full relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex">
          <div className="logo-wrapper relative w-52 bg-[#223C4D] px-8 py-4">
            <PrismicNextImage field={layout.data.logo[0]?.logo_icon} />
          </div>
          <div className="flex justify-center items-center flex-[8]">
            <div className='flex-[5]'>
              <MenuItems slices={layout.data.slices} />
            </div>
            <div className="flex-[2]">
              Call to action search
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
