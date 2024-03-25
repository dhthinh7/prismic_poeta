import ServiceCardItem from "@/components/Card/ServiceCardItem";
import ServiceCardItemWithoutIcon from "@/components/Card/ServiceCardItemWithoutIcon";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceCards`.
 */
export type ServiceCardsProps = SliceComponentProps<Content.ServiceCardsSlice>;

/**
 * Component for "ServiceCards" Slices.
 */
const ServiceCards = ({ slice }: ServiceCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`py-5 ${slice.variation === 'default' ? 'bg-primary' : ''}`}
    >
      <div className="section-wrapper">
        <div className="flex items-stretch flex-wrap w-full m-auto">
          {slice.variation === 'default' && slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index} className="w-full md:w-1/2 lg:w-1/4">
              <ServiceCardItem item={item} />
            </div>
          })}
          {slice.variation === 'gridWithoutIcon' && slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index} className="w-full md:w-1/2 lg:w-1/4">
              <ServiceCardItemWithoutIcon index={index} item={item}/>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
