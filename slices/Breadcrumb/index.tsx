import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

/**
 * Props for `Breadcrumb`.
 */
export type BreadcrumbProps = SliceComponentProps<Content.BreadcrumbSlice>;

/**
 * Component for "Breadcrumb" Slices.
 */
const Breadcrumb = ({ slice }: BreadcrumbProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary"
    >
      <div className="mx-20">
        <div className="flex items-center gap-5 py-10">
          <div className="flex items-center gap-3">
            <PrismicNextLink field={slice.primary.cta_link} className="hover:text-orange-600 duration-100 ease-in">
              {slice.primary.cta_label}
            </PrismicNextLink>
            {slice.items.length > 0 && <FontAwesomeIcon icon={faAngleRight} className="text-[10px] mt-1"/>}
          </div>
          {slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index} className="flex items-center gap-3">
              <PrismicNextLink field={item.cta_link}>
                {item.cta_label}
              </PrismicNextLink>
              {index < slice.items.length - 1 && <FontAwesomeIcon icon={faAngleRight} className="text-[10px] mt-1"/>}
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
