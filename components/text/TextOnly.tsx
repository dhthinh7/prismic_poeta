import React from 'react'

import { Content } from '@prismicio/client'
import RichText from '../0shared/RichText'

interface ITextOnly {
  slice: {
    slice_type: 'text_with_image'
    slice_label: null
    id: string
  } & Content.TextWithImageSliceText
}

const TextOnly = ({ slice }: ITextOnly) => {
  const { description } = slice.primary

  return (
    <div>
      <RichText field={description} />
    </div>
  )
}

export default TextOnly
