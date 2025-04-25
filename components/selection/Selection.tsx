import React from 'react'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export interface IOption {
  label: string
  value: string
}

interface TISelection {
  value: string
  className?: string
  label?: string
  options: IOption[]
  onSelect: (value: string) => void
}

const SelectionCustom = ({ value, className, label, options, onSelect }: TISelection) => {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && <Label className={cn('mb-1')}>{label}</Label>}
      <Select value={value} onValueChange={onSelect}>
        <SelectTrigger className='w-full border-border'>
          <SelectValue placeholder='Please Select' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((o) => (
              <SelectItem key={o.value} className={cn('hover:cursor-pointer')} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectionCustom
