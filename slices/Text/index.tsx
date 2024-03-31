import RichText from "@/components/Shared/RichText";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <p>{slice.primary.tag}</p>
          <RichText field={slice.primary.text} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default Text;
