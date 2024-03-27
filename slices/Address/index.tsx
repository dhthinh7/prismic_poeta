'use client'

import Button from "@/components/Shared/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Address`.
 */
export type AddressProps = SliceComponentProps<Content.AddressSlice>;

/**
 * Component for "Address" Slices.
 */
const Address = ({ slice }: AddressProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="section-wrapper">
        <div className="flex items-center w-full">
          <div className="w-1/2">
            <div className="p-5">
              <PrismicNextImage field={slice.primary.image} />
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-5">
              <h2 className="text-tittle mb-5">{slice.primary.title}</h2>
              <p className="font-bold mb-5">{slice.primary.description}</p>
              <Button variant="solid" color="orange" onClick={() => alert('Show form input')}>
                {slice.primary.cta_button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
