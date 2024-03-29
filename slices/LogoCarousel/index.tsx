'use client'

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// Import custom styles
import './style.css';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import RichText from "@/components/Shared/RichText";
import SliceWrapper from "@/components/Shared/SliceWrapper";

/**
 * Props for `LogoCarousel`.
 */
export type LogoCarouselProps = SliceComponentProps<Content.LogoCarouselSlice>;

/**
 * Component for "LogoCarousel" Slices.
 */
const LogoCarousel = ({ slice }: LogoCarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper className="!py-7">
          {slice.variation === 'withTitle' && <RichText field={slice.primary.title} className="mb-6"/>}
          <div className="relative">
            <Swiper
              spaceBetween={5}
              slidesPerView={6}
              navigation={{
                nextEl: '.tab-swiper-nav.next',
                prevEl: '.tab-swiper-nav.prev'
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="my-swiper-slide"
            >
              {slice.items.map((item, index) => {
                return <div key={index} className="">
                  <SwiperSlide>
                    <PrismicNextImage field={item.logo} />
                  </SwiperSlide>
                </div>
              })}
            </Swiper>
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2">
              <NavigateButton icon={faAngleLeft} type="prev"/>
            </div>
            <div className="absolute -right-5 top-1/2 transform -translate-y-1/2">
              <NavigateButton icon={faAngleRight} type="next"/>
            </div>
          </div>
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default LogoCarousel;

interface INavigateButton {
  icon: IconProp
  type: 'prev' | 'next'
  className?: string
}

const NavigateButton = ({icon, type = 'prev', className = ''}: INavigateButton) => {
  return <button
    aria-label={`${type === 'prev' ? 'Previous' : 'Next'}`}
    className={`tab-swiper-nav hover:cursor-pointer ${type === 'prev' ? 'prev' : 'next'} ${className}`}
  >
    <FontAwesomeIcon className="text-5xl text-gray-400" icon={icon}></FontAwesomeIcon>
  </button>
}