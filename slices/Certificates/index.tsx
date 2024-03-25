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
      className="bg-primary pt-8"
    >
      <div className="section-wrapper">
        <h2 className="text-tittle text-center">{slice.primary.title}</h2>
        <div className="w-full flex items-stretch justify-center px-20">
          {slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index} className="p-8">
              <PrismicNextImage field={item.image} />
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
