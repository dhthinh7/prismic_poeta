import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterItem`.
 */
export type FooterItemProps = SliceComponentProps<Content.FooterItemSlice>;

/**
 * Component for "FooterItem" Slices.
 */
const FooterItem = ({ slice }: FooterItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterItem;
