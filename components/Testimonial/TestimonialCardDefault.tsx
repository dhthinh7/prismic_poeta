import React from "react";
import { Content } from "@prismicio/client";
import TestimonialsCard from "../Card/TestimonialsCard";
import { PrismicRichText } from "@prismicio/react";
import RichText from "../Shared/RichText";

interface ITestimonialDefault {
  slice: {
    slice_type: "testimonials";
    slice_label: null;
    id: string;
  } & Content.TestimonialsSliceDefault
}
export default function TestimonialCardDefault({slice}: ITestimonialDefault) {
  return (
    <div className="w-full py-3">
      <RichText field={slice.primary.title} className="text-center mb-10"/>
      <div className="flex justify-center w-3/5 mx-auto">
        <TestimonialsCard
          description={slice.primary.description}
          name={slice.primary.name}
          job_title={slice.primary.job_title}
        />
      </div>
    </div>
  );
}
