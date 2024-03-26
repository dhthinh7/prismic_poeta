import { LayoutDocumentDataCopyRightItem, Simplify } from '@/prismicio-types'
import React, { Fragment } from 'react'

interface ICopyRight {
  copyRight?: Simplify<LayoutDocumentDataCopyRightItem>
}
export default function CopyRight({copyRight}: ICopyRight) {
  const currentYear = new Date().getFullYear()
  return <Fragment>
    {copyRight && <section>
      <span>{copyRight.primary_text}</span>
      <span> &copy </span>
      <span>{currentYear}, </span>
      <span>{copyRight.secondary_text}</span>
    </section>}
  </Fragment>
}
