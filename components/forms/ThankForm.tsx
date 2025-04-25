import React from 'react'
import { cn } from '@/lib/utils'

interface IThankForm {
  className?: string
}

const ThankForm = ({ className }: IThankForm) => {
  return (
    <div className={cn('talk-to-our-expert-section py-10 px-2', className)}>
      <div className='talk-to-our-expert-wrapper success text-xl text-center sm:text-2xl font-semibold'>
        <p>Thanks for submitting the form.</p>
      </div>
    </div>
  )
}

export default ThankForm
