import ShowcaseProductCard from "@/components/Card/ShowcaseProductCard";
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
      <div className="section-wrapper">
        <div className="w-full flex items-stretch flex-wrap px-20">
          {slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index} className="w-1/2">
              <div className="py-3 flex justify-center h-full">
                <ShowcaseProductCard item={item}/>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
