import { cn } from "@/utils";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface IRichText {
  field: RichTextField
  className?: string
  h1Class?: string
  h2Class?: string
  h5Class?: string
  h6Class?: string
}

export default function RichText({ field, className, h1Class, h2Class, h6Class }: IRichText) {
  return (
    field && (
      <div className={className}>
        <PrismicRichText
          field={field}
          components={{
            heading1: ({ children }) => (
              <h2 className={cn('text-5xl font-semibold mb-9', h1Class)}>
                {children}
              </h2>
            ),
            heading2: ({ children }) => (
              <h2 className={cn('text-3xl font-semibold mb-5', h2Class)}>
                {children}
              </h2>
            ),
            heading5: ({ children }) => (
              <h5 className="font-semibold text-xl mb-5">
                {children}
              </h5>
            ),
            heading6: ({ children }) => (
              <h6 className={cn('font-semibold mb-5', h6Class)}>
                {children}
              </h6>
            ),
            paragraph: ({ children }) => (
              <p className="mb-5">{children}</p>
            ),
            listItem: ({ children }) => (
              <div className="flex items-center ml-4 my-2">
                <div className="w-1 h-1 rounded-full bg-black mr-3"></div>
                <div>{children}</div>
              </div>
            )
          }}
        />
      </div>
    )
  )
}
