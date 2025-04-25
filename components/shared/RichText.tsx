import { E_LABEL } from '@/constants/enum'
import { cn } from '@/lib/utils'
import { isFilled, RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { FilledContentRelationshipField, FilledLinkToWebField, FilledLinkToMediaField } from '@prismicio/types'
// import Image from 'next/image'

interface IRichText {
  field: RichTextField
  classNameWrapper?: string
  className?: string
  h1Class?: string
  h2Class?: string
  h3Class?: string
  h4Class?: string
  h5Class?: string
  h6Class?: string
  pClass?: string
}

const linkResolver = (
  doc: FilledContentRelationshipField<string, string, unknown> | FilledLinkToWebField | FilledLinkToMediaField
) => {
  if (isFilled.contentRelationship(doc)) {
    return '/' + doc.uid
  }

  return '/'
}

export default function RichText({ field, classNameWrapper, className }: IRichText) {
  return (
    field && (
      <div className={classNameWrapper}>
        <PrismicRichText
          field={field}
          components={{
            heading1: ({ children }) => (
              <h1 className={cn('text-4xl font-semibold leading-tight', className)}>{children}</h1>
            ),
            heading2: ({ children }) => (
              <h2 className={cn('text-3xl font-semibold leading-snug', className)}>{children}</h2>
            ),
            heading3: ({ children }) => (
              <h3 className={cn('text-2xl font-semibold leading-normal', className)}>{children}</h3>
            ),
            heading4: ({ children }) => (
              <h4 className={cn('text-xl font-medium leading-relaxed', className)}>{children}</h4>
            ),
            heading5: ({ children }) => (
              <h5 className={cn('text-lg font-medium leading-loose', className)}>{children}</h5>
            ),
            heading6: ({ children }) => <h6 className={cn('text-base font-medium', className)}>{children}</h6>,
            paragraph: ({ children }) => (
              <p className={cn('text-base leading-relaxed text-gray-700', className)}>{children}</p>
            ),
            preformatted: ({ node }) => <pre>{JSON.stringify(node.text)}</pre>,
            strong: ({ children }) => <strong>{children}</strong>,
            em: ({ children }) => <em>{children}</em>,
            listItem: ({ children }) => (
              <div className='flex items-center ml-4 my-2'>
                <div className='w-1 h-1 rounded-full bg-black mr-3 shrink-0'></div>
                <div>{children}</div>
              </div>
            ),
            oListItem: ({ children }) => <li className='my-3 ml-3'>{children}</li>,
            list: ({ children }) => <ul className='list-disc pl-4'>{children}</ul>,
            oList: ({ children }) => <ol className='list-decimal pl-4'>{children}</ol>,
            image: ({ node }) => {
              const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
              // const linkTarget =
              //   node.linkTo && node.linkTo.target
              //     ? `target="${node.linkTo.target}" rel="noopener"`
              //     : ''
              // const linkTarget = ''
              // const wrapperClassList = ['block-img']
              // eslint-disable-next-line @next/next/no-img-element
              const img = <img src={node.url} alt={node.alt ? node.alt : 'image'} loading='lazy' />

              return (
                <div className='w-full my-5'>
                  <div className='max-w-2xl mx-auto'>
                    {linkUrl ? (
                      <a target='_blank' href={linkUrl}>
                        {img}
                      </a>
                    ) : (
                      img
                    )}
                  </div>
                </div>
              )
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
              return (
                <a target='_blank' className='hover:underline text-blue-600' href={url}>
                  {children}
                </a>
              )
            },
            label: ({ node, children }) => {
              switch (node.data.label.toLowerCase()) {
                case E_LABEL.TEXT_TITLE.toLowerCase():
                  return <span className='font-semibold'>{children}</span>
                case E_LABEL.BULLETED_LIST_CIRCLE_LEVEL_ONE.toLowerCase():
                  return (
                    <span
                      className=''
                      style={{
                        listStyle: 'circle'
                      }}
                    >
                      <span className='flex items-center ml-4 pl-10 my-2'>
                        <span className='w-1 h-1 rounded-full bg-white border-[1px] border-black mr-3 shrink-0'></span>
                        <span className=''>{children}</span>
                      </span>
                    </span>
                  )
                case E_LABEL.BULLETED_LIST_CIRCLE_LEVEL_TWO.toLowerCase():
                  return (
                    <span
                      className=''
                      style={{
                        listStyle: 'circle'
                      }}
                    >
                      <span className='flex items-center ml-4 pl-10 my-2'>
                        <span className='w-1 h-1 rounded-full bg-white border-[1px] border-black mr-3 shrink-0'></span>
                        <span className=''>{children} </span>
                      </span>
                    </span>
                  )
                case E_LABEL.HIGH_LIGHT.toLowerCase():
                  return <span className='text-primary'>{children}</span>
                case E_LABEL.HIGH_LIGHT_ORANGE_RED.toLowerCase():
                  return <span className='text-[#FF4B01]'>{children}</span>
                case E_LABEL.HIGH_LIGHT_ORANGE_YELLOW.toLowerCase():
                  return <span className='text-[#FAA000]'>{children}</span>
                case E_LABEL.HIGH_LIGHT_TEAL_GREEN.toLowerCase():
                  return <span className='text-[#4AA69D]'>{children}</span>
                case E_LABEL.TEXT_BANNER_LARGE.toLowerCase():
                  return <span className='lg:text-[94px]'>{children}</span>
                case E_LABEL.LARGE_TITLE.toLowerCase():
                  return <span className='text-[32px] lg:text-[64px] font-semibold text-slice-title'>{children}</span>
                case E_LABEL.SUBHEADING.toLowerCase():
                  return <span className='font-semibold text-black'>{children}</span>

                case E_LABEL.CASE_STUDY_TITLE.toLowerCase():
                  return <span className='text-[28px] leading-9 text-blue-dianna font-semibold'>{children}</span>

                case E_LABEL.CASE_STUDY_SUB_TITLE.toLowerCase():
                  return <span className='font-semibold text-sub-title-card'>{children}</span>

                case E_LABEL.CASE_STUDY_DESCRIPTION.toLowerCase():
                  return <span className='text-blue-dianna'>{children}</span>
                default:
                  return <span>{children}</span>
              }
            }
          }}
        />
      </div>
    )
  )
}
