import Line from "@/components/Shared/Line";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

/**
 * Component for "Heading" Slices.
 */
const Heading = ({ slice }: HeadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-4"
    >
      <PrismicNextLink field={slice.primary.cta_link}>
        <p className="font-bold text-black text-base hover:text-red-500 hover:cursor-pointer mb-3">{slice.primary.cta_label}</p>
      </PrismicNextLink>
      <Line />
    </section>
  );
};

export default Heading;
