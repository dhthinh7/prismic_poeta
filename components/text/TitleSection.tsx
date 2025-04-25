import React from 'react'
import { KeyTextField, RichTextField } from '@prismicio/client'
import { cn } from '@/lib/utils'
import { prismicUtils } from '@/lib/utils/prismic.util'
import { ITextPosition } from '@/lib/model/index.type.'
import RichText from '../0shared/RichText'

interface ITitleSection {
  title: KeyTextField | RichTextField
  titlePosition?: ITextPosition
  className?: string
  titleColor?: string
}

const TitleSection = ({ title, titlePosition, className, titleColor }: ITitleSection) => {
  let titlePositionClassName = ''

  switch (titlePosition) {
    case 'Left':
      titlePositionClassName = 'text-left'
      break
    case 'Right':
      titlePositionClassName = 'text-right'
      break
    default:
      titlePositionClassName = 'text-center'
      break
  }

  return (
    <div>
      {prismicUtils.isKeyTextField(title) ? (
        <h2
          className={cn(
            'font-helvetica font-semibold text-[#231f20] mb-5 text-[32px] transform-none',
            titleColor,
            className,
            titlePositionClassName
          )}
        >
          {title}
        </h2>
      ) : (
        <>
          {!prismicUtils.isRichTextEmpty(title) && (
            <RichText
              field={title}
              className={cn(
                'mb-5 md:mb-10 font-helvetica font-semibold text-[#231f20] text-[32px] transform-none',
                className,
                titleColor,
                titlePositionClassName
              )}
            />
          )}
        </>
      )}
    </div>
  )
}

export default TitleSection
