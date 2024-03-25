import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextContent`.
 */
export type TextContentProps = SliceComponentProps<Content.TextContentSlice>;

/**
 * Component for "TextContent" Slices.
 */
const TextContent = ({ slice }: TextContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-5"
    >
      <div className="section-wrapper relative">
        <div>
          <h2 className="text-tittle mb-5">{slice.primary.title}</h2>
          <p className="font-bold mb-5">{slice.primary.sub_title}</p>
        </div>
        <div>
          {slice.items.length > 0 && slice.items.map((item, index) => {
            return <div key={index} className="my-3">
              <span>{index + 1}. </span>
              <span className="font-bold">{item.description_main} </span>
              <span>- {item.description_sub}</span>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default TextContent;
