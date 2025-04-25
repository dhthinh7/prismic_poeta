import React from 'react'
import RichText from '../shared/RichText'
import { RichTextField, SelectField } from '@prismicio/client'
import { cn } from '@/lib/utils'

interface ISliceInfo {
  title: RichTextField
  description: RichTextField
  position: SelectField<'Left' | 'Right' | 'Center', 'filled'>
}

const SliceInfo = ({ title, description, position }: ISliceInfo) => {
  let titlePosition = ''

  switch (position) {
    case 'Left':
      titlePosition = 'text-left'
      break
    case 'Right':
      titlePosition = 'text-right'
      break
    default:
      titlePosition = 'text-center'
      break
  }
  return (
    <div className={cn(titlePosition)}>
      <RichText field={title} className='text-5xl text-white font-semibold leading-9 capitalize my-0' />
      <RichText field={description} className='text-2xl text-white font-medium leading-9 capitalize my-0 py-[10px]' />
    </div>
  )
}

export default SliceInfo
