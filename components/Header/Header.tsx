import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import MenuItems from "./MenuItems";
import { LayoutDocument } from "@/prismicio-types";

// Import css
import './Style.css'
interface IHeader {
  layout: LayoutDocument<string>
}

export default async function Header({layout}: IHeader) {
  console.log('layout.data.logo[0]?.logo_icon_link', layout.data.logo[0]?.logo_icon_link)
  return <div style={{paddingTop: 'var(--header-height)'}} className="relative">
    <div className="fixed top-0 z-10 w-full">
      <div className="bg-[#223c4db2] w-full overflow-hidden" style={{minHeight: 'var(--header-height)', height: 'var(--header-height)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex">
            <div className="logo-wrapper relative w-52 bg-[#223C4D] px-8 py-4">
              <PrismicNextLink field={layout.data.logo[0]?.logo_icon_link}>
                <PrismicNextImage field={layout.data.logo[0]?.logo_icon} />
              </PrismicNextLink>
              
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
    </div>
  </div>
}
