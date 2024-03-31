import Button from "@/components/Shared/Button";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
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
      <SliceWrapper>
        <SectionWrapper>
          <div className="flex items-center">
            <div className="w-1/2">
              <div>
                {slice.variation === 'withCategory' && <p className="text-[#231f20]">{slice.primary.category}</p>}
                <h2 className="text-tittle">{slice.primary.title}</h2>
                <PrismicNextImage field={slice.primary.info_image} className="mt-3 mb-5"/>
                <PrismicNextLink field={slice.primary.cta_link}>
                  <Button variant="solid" color="orange">
                    {slice.primary.cta_label}
                  </Button>
                </PrismicNextLink>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <PrismicNextImage field={slice.primary.image} />
            </div>
          </div>
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default Showcase;
