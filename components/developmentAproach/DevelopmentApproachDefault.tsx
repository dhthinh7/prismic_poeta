import React, { Fragment } from 'react'
import { Content } from '@prismicio/client'
import DevelopmentApproachDefaultDesktop from './DevelopmentApproachDefaultDesktop'
import DevelopmentApproachDefaultMobile from './DevelopmentApproachDefaultMobile'
interface IDevelopmentApproachDefault {
  slice: Content.DevelopmentApproachSlice
}

const DevelopmentApproachDefault = ({ slice }: IDevelopmentApproachDefault) => {
  return (
    <Fragment>
      <DevelopmentApproachDefaultDesktop slice={slice} />
      <DevelopmentApproachDefaultMobile slice={slice} />
    </Fragment>
  )
}

export default DevelopmentApproachDefault
