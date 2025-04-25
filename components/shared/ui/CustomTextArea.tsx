import { FormLabel } from '@/components/ui/form'
import { Textarea, TextAreaProps } from '@/components/ui/textarea'
import React, { forwardRef } from 'react'
import ConditionRender from '../ConditionRender'

interface ICustomTextAreaProps extends TextAreaProps {
  label?: string
  required?: boolean
}
const CustomTextArea = forwardRef<HTMLTextAreaElement, ICustomTextAreaProps>(
  ({ label, required, rows = 4, ...props }: ICustomTextAreaProps, ref) => {
    return (
      <div className='flex flex-col gap-3'>
        <FormLabel className='text-base text-title'>
          {label}
          <ConditionRender condition={required}>
            <span className='text-primary ml-1 text-lg'>*</span>
          </ConditionRender>
        </FormLabel>
        <Textarea className='rounded-none bg-white text-title text-[15px] p-2' rows={rows} ref={ref} {...props} />
      </div>
    )
  }
)

CustomTextArea.displayName = 'CustomTextArea'

export default CustomTextArea
