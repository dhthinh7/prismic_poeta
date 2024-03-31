import { cn } from "@/utils";
import { isFilled, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { FilledContentRelationshipField, FilledLinkToWebField, FilledLinkToMediaField } from "@prismicio/types";
import Image from "next/image";

interface IRichText {
  field: RichTextField
  className?: string
  h1Class?: string
  h2Class?: string
  h3Class?: string
  h5Class?: string
  h6Class?: string
}

const linkResolver = (doc: FilledContentRelationshipField<string, string, unknown> | FilledLinkToWebField | FilledLinkToMediaField) => {
  if (isFilled.contentRelationship(doc)) {
    return '/' + doc.uid
  }

  return '/'
}

export default function RichText({ field, className, h1Class, h2Class, h3Class, h6Class }: IRichText) {
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
            heading3: ({ children }) => (
              <h3 className={cn('text-[28px] font-medium mb-5', h3Class)}>
                {children}
              </h3>
            ),
            heading4: ({ children }) => <h4>{children}</h4>,
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
            preformatted: ({ node }) => <pre>{JSON.stringify(node.text)}</pre>,
            strong: ({ children }) => <strong>{children}</strong>,
            em: ({ children }) => <em>{children}</em>,
            listItem: ({ children }) => (
              <div className="flex items-center ml-4 my-2">
                <div className="w-1 h-1 rounded-full bg-black mr-3 shrink-0"></div>
                <div>{children}</div>
              </div>
            ),
            oListItem: ({ children }) => <li>{children}</li>,
            list: ({ children }) => <ul>{children}</ul>,
            oList: ({ children }) => <ol>{children}</ol>,
            image: ({ node }) => {
              const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
              // const linkTarget =
              //   node.linkTo && node.linkTo.target
              //     ? `target="${node.linkTo.target}" rel="noopener"`
              //     : ''
              const linkTarget = ''
              const wrapperClassList = ['block-img']
              // eslint-disable-next-line @next/next/no-img-element
              const img = <img src={node.url} alt={node.alt ? node.alt : 'image'} loading="lazy"/>
          
              return <div className="w-full my-5">
                <div className="max-w-2xl mx-auto">
                  {linkUrl ? <a target="_blank" href={linkUrl}>{img}</a> : img}
                </div>
              </div>
            },
            // embed: ({ node }) => {
            //   return <div data-oembed={node.oembed.embed_url}
            //     data-oembed-type={node.oembed.type}
            //     data-oembed-provider={node.oembed.provider_name}
            //   >
            //     {node.oembed.html}
            //   </div>
            // },
            hyperlink: ({ node, children }) => {
              const url = node.data.url
              return <a target="_blank" className="hover:underline text-blue-600" href={url}>{children}</a>
            },
          }}
        />
      </div>
    )
  )
}
