'use client'

import React, { forwardRef, useCallback } from 'react'
import { useAppDispatch } from '@/lib/store/hooks'
import { KeyTextField, LinkField, SelectField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { openModal } from '@/lib/store/slices/globalModal.slice'
import TalkToExpert from '@/components/forms/TalkToExpert'
import ContactUs from '@/components/forms/ContactUs'
import { cn } from '@/lib/utils'
import Button, { IButton } from './Button'

interface IClientButtonWrapper extends Omit<IButton, 'children' | 'type'> {
  label: KeyTextField
  type: SelectField<'Link' | 'Form Modal'>
  link?: LinkField
  form?: SelectField<'TALK TO EXPERT FORM' | 'CONTACT US FORM'>
  className?: string
}

const ClientButtonWrapper = forwardRef<HTMLDivElement, IClientButtonWrapper>(
  ({ label, type, link, form, className, variant, color }, ref) => {
    const dispatch = useAppDispatch()

    const handleOpenForm = useCallback(() => {
      let formComponent = null

      switch (form) {
        case 'TALK TO EXPERT FORM':
          formComponent = <TalkToExpert className='overflow-y-auto px-6 h-[85vh]' />
          break
        case 'CONTACT US FORM':
          formComponent = <ContactUs className='overflow-y-auto px-6 h-[85vh]' />
          break
        default:
          break
      }

      dispatch(openModal(formComponent))
    }, [dispatch, form])

    return (
      <div ref={ref}>
        {type === 'Link' && (
          <Button variant={variant} color={color} className={cn('w-fit text-nowrap', className)}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </Button>
        )}

        {type === 'Form Modal' && (
          <Button
            variant={variant}
            color={color}
            className={cn('w-fit text-nowrap', className)}
            onClick={handleOpenForm}
          >
            {label}
          </Button>
        )}
      </div>
    )
  }
)

ClientButtonWrapper.displayName = 'ClientButtonWrapper'

export default ClientButtonWrapper
