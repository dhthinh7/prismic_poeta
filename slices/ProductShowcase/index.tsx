import ShowcaseProductCard from "@/components/Card/ShowcaseProductCard";
import GridFlatten from "@/components/Shared/GridFlatten";
import RichText from "@/components/Shared/RichText";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductShowcase`.
 */
export type ProductShowcaseProps =
  SliceComponentProps<Content.ProductShowcaseSlice>;

/**
 * Component for "ProductShowcase" Slices.
 */
const ProductShowcase = ({ slice }: ProductShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          {slice.primary.title && <RichText field={slice.primary.title} className="text-center"/>}
          <div className="w-full flex items-stretch flex-wrap px-20">
            {slice.variation === 'default' && slice.items.length > 0 && slice.items.map((item, index) => {
              return <div key={index} className="w-1/2">
                <ShowcaseProductCard item={item}/>
              </div>
            })}
            {slice.variation === 'flatten' && slice.items.length > 0 && slice.items.map((item, index) => {
              return <GridFlatten key={index} length={slice.items.length}>
                <ShowcaseProductCard item={item}/>
              </GridFlatten>
            })}
          </div>
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default ProductShowcase;
