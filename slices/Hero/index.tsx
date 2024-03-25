import BackgroundOverlay from "@/components/Shared/BackgroundOverlay";
import Button from "@/components/Shared/Button";
import RichText from "@/components/Shared/RichText";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="min-h-[500px] relative flex items-center">
        <BackgroundOverlay />
        <div className="h-full w-full absolute top-0 -z-10">
          <PrismicNextImage field={slice.primary.background_image} className="object-cover object-center h-full w-full"/>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="ml-28 w-1/2">
            <RichText field={slice.primary.title} className="font-semibold text-white leading-tight text-4xl mb-3"/>
            <RichText field={slice.primary.description} className="font-semibold text-white leading-snug text-2xl"/>
            <div className="flex gap-2 mt-4">
              <Button className="bg-orange-600">
                <PrismicNextLink field={slice.primary.primary_button_link}>
                  {slice.primary.primary_button_label}
                </PrismicNextLink>
              </Button>
              <Button variant="outline" color="white">
                <PrismicNextLink field={slice.primary.primary_button_link}>
                  {slice.primary.secondary_button_label}
                </PrismicNextLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
