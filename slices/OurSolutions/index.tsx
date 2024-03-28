import OurSolutionsDefault from "@/components/OurSolutions/OurSolutionsDefault";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OurSolutions`.
 */
export type OurSolutionsProps = SliceComponentProps<Content.OurSolutionsSlice>;

/**
 * Component for "OurSolutions" Slices.
 */
const OurSolutions = ({ slice }: OurSolutionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          {slice.variation === 'default' && <OurSolutionsDefault slice={slice} />}
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default OurSolutions;
