import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SocialMedia`.
 */
export type SocialMediaProps = SliceComponentProps<Content.SocialMediaSlice>;

/**
 * Component for "SocialMedia" Slices.
 */
const SocialMedia = ({ slice }: SocialMediaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex items-center">
        {slice.items.length > 0 && slice.items.map((item, index) => {
          return <div key={index} className="shrink-0">
            <PrismicNextLink field={item.cta_link}>
              <div className="px-5">
                <PrismicNextImage field={item.icon} className="w-4 h-4 text-white"/>
              </div>
            </PrismicNextLink>
          </div>
        })}
      </div>
    </section>
  );
}; 

export default SocialMedia;
