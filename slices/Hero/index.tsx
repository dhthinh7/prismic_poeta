import HeroDefault from "@/components/Hero/HeroDefault";
import HeroSecondary from "@/components/Hero/HeroSecondary";
import HeroTertiary from "@/components/Hero/HeroTertiary";
import BackgroundOverlay from "@/components/Shared/BackgroundOverlay";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
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
      <SliceWrapper>
        <div className="min-h-[500px] relative flex items-center">
          <BackgroundOverlay />
          <div className="h-full w-full absolute top-0 -z-10">
            <PrismicNextImage field={slice.primary.background_image} className="object-cover object-center h-full w-full"/>
          </div>
          <div className="max-w-[1400px] mr-auto">
            {slice.variation === 'default' && <HeroDefault slice={slice} />}
            {slice.variation === 'secondary' && <HeroSecondary slice={slice} />}
            {slice.variation === 'tertiary' && <HeroTertiary slice={slice} />}
          </div>
        </div>
      </SliceWrapper>
    </section>
  );
};

export default Hero;
