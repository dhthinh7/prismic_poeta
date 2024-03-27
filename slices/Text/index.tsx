import RichText from "@/components/Shared/RichText";
import SectionWrapper from "@/components/Shared/SectionWrapper";
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
      className={slice.variation === "withBackgroundColor" ? 'bg-primary' : ''}
    >
      <SectionWrapper className="!pt-8">
        <div>
          <p>{slice.primary.tag}</p>
          <RichText field={slice.primary.text} />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Text;
