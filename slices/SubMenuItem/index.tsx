import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SubMenuItem`.
 */
export type SubMenuItemProps = SliceComponentProps<Content.SubMenuItemSlice>;

/**
 * Component for "SubMenuItem" Slices.
 */
const SubMenuItem = ({ slice }: SubMenuItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-4"
    >
      <PrismicNextLink field={slice.primary.link} className="hover:text-red-500">
        {slice.primary.label}
      </PrismicNextLink>
    </section>
  );
};

export default SubMenuItem;
