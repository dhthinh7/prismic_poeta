import Line from "@/components/Shared/Line";
import { Content } from "@prismicio/client";
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
      <p className="font-bold text-black text-base hover:text-red-500 hover:cursor-pointer mb-3">{slice.primary.label}</p>
      <Line />
    </section>
  );
};

export default Heading;
