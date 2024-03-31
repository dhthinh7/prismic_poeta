import { OurSolutionsSliceWithDescriptionAndGrid } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import RichText from "../Shared/RichText";

interface IOurSolutionsWithDescriptionAndGrid {
  slice: {
    slice_type: "our_solutions";
    slice_label: null;
    id: string;
  } & OurSolutionsSliceWithDescriptionAndGrid
}
export default function OurSolutionsWithDescriptionAndGrid({ slice }: IOurSolutionsWithDescriptionAndGrid) {
  return <div>
    <RichText field={slice.primary.title} className='text-left'/>
    <div className="flex items-center">
      <div className="w-8/12 pr-14">
        <RichText field={slice.primary.description}/>
      </div>
      <div className="w-4/12">
        <div className="p-5 shadow rounded-lg border-2 border-card-border bg-primary">
          <RichText field={slice.primary.text_right_panel}/>
        </div>
      </div>
    </div>
    <div>
      <PrismicNextImage field={slice.primary.image} />
    </div>
  </div>;
}
