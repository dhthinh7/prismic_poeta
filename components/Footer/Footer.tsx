import React from "react";
import { LayoutDocument } from "@/prismicio-types";
import FooterItem from "./FooterItem";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import CopyRight from "./CopyRight";
import SocialMedias from "./SocialMedias";
import Line from "../Shared/Line";

interface IFooter {
  layout: LayoutDocument<string>
}

export default function Footer({layout}: IFooter) {

  return <section className="pb-10 pt-5 bg-no-repeat bg-center bg-cover" style={{
    backgroundImage: `url(https://www.poetadigital.com/hubfs/Group%20117.jpg)`
  }}>
    <div className="section-wrapper">
      <div className="w-full p-3">
        <div className="flex">
          {layout.data.slices1.length > 0 && layout.data.slices1.map((item, index) => {
            return <div key={index} className="w-1/4">
              <div className="w-full flex justify-center">
                <FooterItem item={item}/>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto">
      <Line width="100%" height="1px" backgroundColor="white"/>
      <div className="flex items-center justify-start gap-8 text-white mt-3">
        <div className="w-1/6">
          <PrismicNextLink field={layout.data.cta_logo_link}>
            <PrismicNextImage field={layout.data.cta_link_logo} />
          </PrismicNextLink>
        </div>
        <div className="w-1/6 px-3">
          <p>{layout.data.address}</p>
        </div>
        <div className="w-1/6 px-3">
          <p>{layout.data.phone_number}</p>
        </div>
        <div className="w-1/6 px-3">
          <p>{layout.data.email}</p>
        </div>
        <div className="w-1/6 px-3">
          <SocialMedias />
        </div>
      </div>
    </div>
    <div className="text-white text-center mt-10">
      <CopyRight copyRight={layout.data.copy_right[0]}/>
    </div>
  </section>
}
