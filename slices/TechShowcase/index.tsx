import RichText from "@/components/Shared/RichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TechShowcase`.
 */
export type TechShowcaseProps = SliceComponentProps<Content.TechShowcaseSlice>;

/**
 * Component for "TechShowcase" Slices.
 */
const TechShowcase = ({ slice }: TechShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary"
    >
      <div className="section-wrapper !py-7">
        {slice.primary.title && <RichText field={slice.primary.title} className="text-center pb-5"/>}
        <div className="flex items-center justify-between gap-4 pt-2 pb-4">
          {slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index}>
              <PrismicNextImage field={item.image} />
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
