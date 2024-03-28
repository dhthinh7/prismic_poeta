import PageOverviewDefault from "@/components/PageOverview/PageOverviewDefault";
import SectionWrapper from "@/components/Shared/SectionWrapper";
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
      className="pt-10"
    >
      <SectionWrapper>
        {slice.variation === 'default' && <PageOverviewDefault slice={slice}/>}
      </SectionWrapper>
    </section>
  );
};

export default PageOverview;
