import { ITextPosition } from '@/lib/model/index.type.'
import { RichTextField } from '@prismicio/client'
import React from 'react'
import RichText from '../RichText'
import { cn } from '@/lib/utils'
import { prismicUtils } from '@/lib/utils/prismic.util'
import ConditionRender from '../ConditionRender'

interface IHeaderSection {
  title?: RichTextField
  subTitle?: RichTextField
  description?: RichTextField
  titlePosition?: ITextPosition
  className?: string
  classNameWrapper?: string
}
const HeaderSection = ({
  title,
  subTitle,
  description,
  titlePosition,
  className,
  classNameWrapper
}: IHeaderSection) => {
  let titlePositionClassName = ''

  switch (titlePosition) {
    case 'Left':
      titlePositionClassName = 'sm:text-left'
      break
    case 'Right':
      titlePositionClassName = 'sm:text-right'
      break
    default:
      titlePositionClassName = 'text-center'
      break
  }

  const isShowHeader =
    (title && !prismicUtils.isRichTextEmpty(title)) ||
    (subTitle && !prismicUtils.isRichTextEmpty(subTitle)) ||
    (description && !prismicUtils.isRichTextEmpty(description))

  return (
    <ConditionRender condition={isShowHeader}>
      <div className={cn('flex flex-col gap-2 sm:gap-5 mx-auto w-full', classNameWrapper)}>
        {title && !prismicUtils.isRichTextEmpty(title) && (
          <RichText
            field={title}
            className={cn(
              'text-slice-title text-[40px] lg:text-[44px] font-semibold leading-[40px] lg:leading-[44px] text-center',
              className,
              titlePositionClassName
            )}
          />
        )}
        {subTitle && !prismicUtils.isRichTextEmpty(subTitle) && (
          <RichText field={subTitle} className={cn('text-2xl text-blue-dianna font-semibold text-center', className)} />
        )}

        {description && !prismicUtils.isRichTextEmpty(description) && (
          <RichText field={description} className={cn('text-lg text-blue-dianna text-center', className)} />
        )}
      </div>
    </ConditionRender>
  )
}

export default HeaderSection
