import Button from "@/components/Shared/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-5"
    >
      <div className="section-wrapper">
        <div className="w-full py-3">
          <div className="flex items-center">
            <div className="w-1/2">
              <div>
                {slice.variation === 'withCategory' && <p className="text-[#231f20]">{slice.primary.category}</p>}
                <h2 className="text-tittle">{slice.primary.title}</h2>
                <PrismicNextImage field={slice.primary.info_image} className="mt-3 mb-5"/>
                <PrismicNextLink field={slice.primary.cta_link}>
                  <Button className="bg-orange-500" variant="solid" color="orange">
                    {slice.primary.cta_label}
                  </Button>
                </PrismicNextLink>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <PrismicNextImage field={slice.primary.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
