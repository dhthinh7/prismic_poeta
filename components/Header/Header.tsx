import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import MenuItems from "./MenuItems";
import './Style.css'

export default async function Header() {
  const client = createClient();
  const layout = await client.getSingle('layout')

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
