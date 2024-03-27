import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PageOverview`.
 */
export type PageOverviewProps = SliceComponentProps<Content.PageOverviewSlice>;

/**
 * Component for "PageOverview" Slices.
 */
const PageOverview = ({ slice }: PageOverviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for page_overview (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PageOverview;
