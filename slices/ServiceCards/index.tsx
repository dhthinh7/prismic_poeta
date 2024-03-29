import ServiceCardItem from "@/components/Card/ServiceCardItem";
import ServiceCardItemBasic from "@/components/Card/ServiceCardItemBasic";
import ServiceCardItemWithoutIcon from "@/components/Card/ServiceCardItemWithoutIcon";
import GridFlatten from "@/components/Shared/GridFlatten";
import RichText from "@/components/Shared/RichText";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { CSSProperties } from "react";

/**
 * Props for `ServiceCards`.
 */
export type ServiceCardsProps = SliceComponentProps<Content.ServiceCardsSlice>;

/**
 * Component for "ServiceCards" Slices.
 */
const classItems = [
  'w-full',
  'w-1/2',
  'w-full lg:w-1/3',
  'w-full md:w-1/2 lg:w-1/4',
]
const ServiceCards = ({ slice }: ServiceCardsProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper className={`!px-0 ${slice.items.length < 4 ? '!max-w-[1000px]' : ''}`}>
          {slice.primary.title && <RichText field={slice.primary.title} className="text-center"/>}
          <div className="flex items-stretch flex-wrap w-full m-auto">
            {slice.variation === 'default' && slice.items.length > 0 && slice.items.map((item, index) => {
              return <GridFlatten key={index} length={slice.items.length}>
                <ServiceCardItem item={item} />
              </GridFlatten>
            })}
            {slice.variation === 'gridWithoutIcon' && slice.items.length > 0 && slice.items.map((item, index) => {
              return <GridFlatten key={index} length={slice.items.length}>
                <ServiceCardItemWithoutIcon index={index} item={item}/>
              </GridFlatten>
            })}
            {slice.variation === 'gridCardBasic' &&  slice.items.length > 0 && slice.items.map((item, index) => {
              return <GridFlatten key={index} length={slice.items.length}>
                <ServiceCardItemBasic item={item}/>
              </GridFlatten>
            })}
          </div>
        </SectionWrapper>
      </SliceWrapper>
      {/* <div className={`section-wrapper !px-0 ${slice.items.length < 4 ? '!max-w-[1000px]' : ''}`}>

      </div> */}
    </section>
  );
};

export default ServiceCards;
