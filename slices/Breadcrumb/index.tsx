import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { ICategory } from '@/lib/model/index.type.'
import { Fragment } from 'react'
import Link from 'next/link'
import { prismicUtils } from '@/lib/utils/prismic.util'

/**
 * Props for `Breadcrumb`.
 */
export type BreadcrumbProps = Omit<SliceComponentProps<Content.BreadcrumbSlice>, 'context'> & {
  context: {
    breadcrumbs: ICategory[]
  }
}

/**
 * Component for "Breadcrumb" Slices.
 */
const Breadcrumb = ({
  slice,
  context = {
    breadcrumbs: []
  }
}: BreadcrumbProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary?.background_color}>
        <SectionWrapper
          className='!py-0'
          paddingTop={slice.primary.padding_top}
          paddingBottom={slice.primary.padding_bottom}
        >
          <div className='flex items-center flex-wrap py-5'>
            {slice.variation === 'dynamicBreadcrumb' && context.breadcrumbs && (
              <Fragment>
                <div className='flex items-center gap-3 m-[11px] pt-2 pl-2 pb-2'>
                  <Link href={'/'}>Home</Link>
                  {context.breadcrumbs.length > 0 && (
                    <FontAwesomeIcon icon={faAngleRight} className='text-[10px] mt-1' />
                  )}
                </div>
                {context.breadcrumbs.map((b, index) => {
                  return (
                    <Fragment key={index}>
                      {b.isShow ? (
                        <div key={b.id} className='flex items-center gap-3 m-[11px] mr-0 pt-2 pl-2 pb-2'>
                          {prismicUtils.isExistedUrl(b.categoryLink) ? (
                            <PrismicNextLink field={b.categoryLink}>{b.categoryName}</PrismicNextLink>
                          ) : (
                            <span>{b.categoryName}</span>
                          )}

                          {index < context.breadcrumbs.length - 1 && (
                            <FontAwesomeIcon icon={faAngleRight} className='text-[10px]' />
                          )}
                        </div>
                      ) : (
                        'abc'
                      )}
                    </Fragment>
                  )
                })}
              </Fragment>
            )}
          </div>
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default Breadcrumb
