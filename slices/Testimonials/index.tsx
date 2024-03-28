import TestimonialsCard from "@/components/Card/TestimonialsCard";
import TestimonialCardDefault from "@/components/Testimonial/TestimonialCardDefault";
import TestimonialCardWithSlice from "@/components/Testimonial/TestimonialCardWithSlice";
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
      className={`${slice.primary.background ? 'bg-primary' : ''}`}
    >
      <div className="section-wrapper">
        {slice.variation === 'default' && <TestimonialCardDefault slice={slice}/>}
        {slice.variation === 'withSlice' && <TestimonialCardWithSlice slice={slice} />}
      </div>
    </section>
  );
};

export default Testimonials;
