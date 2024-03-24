import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LogoCarousel`.
 */
export type LogoCarouselProps = SliceComponentProps<Content.LogoCarouselSlice>;

/**
 * Component for "LogoCarousel" Slices.
 */
const LogoCarousel = ({ slice }: LogoCarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for logo_carousel (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LogoCarousel;
