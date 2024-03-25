import TestimonialsCard from "@/components/Card/TestimonialsCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary pb-5"
    >
      <div className="section-wrapper">
        <div className="w-full py-3">
          <h2 className="text-tittle mb-5 text-center">{slice.primary.title}</h2>
          <div className="flex justify-center w-3/5 mx-auto">
            <TestimonialsCard description={slice.primary.description} name={slice.primary.name} job_title={slice.primary.job_title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
