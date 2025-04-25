'use client'

import React, { forwardRef } from 'react'
import { FormLabel } from '@/components/ui/form'
import { Input, InputProps } from '@/components/ui/input'
import ConditionRender from '../ConditionRender'

interface ICustomInputProps extends InputProps {
  label?: string
  required?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(({ label, required, ...props }, ref) => {
  return (
    <div className='flex flex-col gap-3'>
      <FormLabel className='text-base text-title'>
        {label}
        <ConditionRender condition={required}>
          <span className='text-primary ml-1 text-lg'>*</span>
        </ConditionRender>
      </FormLabel>
      <Input className='rounded-none text-title text-[15px] p-2 bg-white' ref={ref} {...props} />
    </div>
  )
})

CustomInput.displayName = 'CustomInput'

export default CustomInput
