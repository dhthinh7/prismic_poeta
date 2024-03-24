'use client'

import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MenuItem`.
 */
export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>;

/**
 * Component for "MenuItem" Slices.
 */

interface IMenuItem extends MenuItemProps {
  itemId?: string
  onChangeActiveMenuItem: (value: string) => void
}
const MenuItem = ({ slice, itemId, onChangeActiveMenuItem }: IMenuItem) => {
  return (
    <li
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='inline-block text-white mx-3 hover:text-orange-600 duration-100'
    >
      {slice.variation === 'default' ? (
        <PrismicNextLink
          field={slice.primary.link}
          className=''
        >
          {slice.primary.label}
        </PrismicNextLink>
      ) : (
        <button onClick={() => onChangeActiveMenuItem(slice.id)} className="cursor-pointer flex justify-between items-center gap-3">
          {slice.primary.label}
          <div className={`transition-transform duration-200 ease-in ${slice.id === itemId ? 'transform rotate-180': ''}`}>
            <svg className="h-4 w-4 fill-current text-[#faa000]" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><g id="chevron-down1_layer"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></g></svg>
          </div>
        </button>
      )}
    </li>
  );
};

export default MenuItem;
