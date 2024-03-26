import { Simplify } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import Button from "../Shared/Button";

interface IShowcaseProductCard {
  item: Simplify<Content.ProductShowcaseSliceDefaultItem>
}
export default function ShowcaseProductCard({item}: IShowcaseProductCard) {
  return <div className="max-w-[400px] shadow-primary-double h-full flex flex-col">
    <div className="overflow-hidden">
      <PrismicNextImage field={item.imge} style={{filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}}/>
    </div>
    <div className="pt-5 px-5 pb-8 flex-grow">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <h6 className="text-card-name-light mb-4">{item.name}</h6>
          <p className="mb-5">{item.description}</p>
        </div>
        <div className="flex justify-center">
          <PrismicNextLink field={item.cta_link}>
            <Button className="text-orange-500 border-orange-500" variant="outline" color="orange">
              {item.cta_label}
            </Button>
          </PrismicNextLink>
        </div>
      </div>
    </div>
  </div>;
}
