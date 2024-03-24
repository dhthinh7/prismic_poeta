import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface IRichText {
  field: RichTextField
  className?: string
}

export default function RichText({ field, className }: IRichText) {
  return (
    field && (
      <div className={className}>
        <PrismicRichText field={field} />
      </div>
    )
  )
}
