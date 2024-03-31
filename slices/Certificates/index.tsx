import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Certificates`.
 */
export type CertificatesProps = SliceComponentProps<Content.CertificatesSlice>;

/**
 * Component for "Certificates" Slices.
 */
const Certificates = ({ slice }: CertificatesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <h2 className="text-tittle text-center">{slice.primary.title}</h2>
          <div className="w-full flex items-stretch justify-between">
            {slice.items.length > 0 && slice.items.map((item, index) => {
              return <div key={index} className="p-8 w-64 h-64">
                <PrismicNextImage field={item.image} className="w-full h-full"/>
              </div>
            })}
          </div>
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default Certificates;
