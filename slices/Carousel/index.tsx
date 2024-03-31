import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps, SliceZone } from "@prismicio/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import Slice from "@/components/CarouseSlice/CarouseSlice";
import RichText from "@/components/Shared/RichText";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps) => {
  return <SliceWrapper background={slice.primary.background}>
    <SectionWrapper paddingTop={slice.primary.padding_top}>
      {slice.primary.title && <RichText field={slice.primary.title}/>}
      <Slice slice={slice}/>
    </SectionWrapper>
  </SliceWrapper>
};

export default Carousel;

