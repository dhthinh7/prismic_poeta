import React, { useMemo } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader
  // DialogTrigger
} from '@/components/ui/dialog'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import {
  closeModal,
  selectComponent,
  selectModalClassWrapper,
  updateModalClassWrapper
} from '@/lib/store/slices/globalModal.slice'
import { DialogTitle } from '@radix-ui/react-dialog'
import CloseIcon from '../../icons/CloseIcon'
import { cn } from '@/lib/utils'

const GlobalModal = () => {
  const dispatch = useAppDispatch()
  const modalComponent = useAppSelector(selectComponent)
  const modalClassWrapper = useAppSelector(selectModalClassWrapper)

  const open = useMemo(() => {
    return modalComponent ? true : false
  }, [modalComponent])

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          dispatch(updateModalClassWrapper(''))
          dispatch(closeModal())
        }
      }}
    >
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className={cn('p-0 w-[900px] max-w-[90%] sm:max-w-[80%] rounded-lg', modalClassWrapper)}>
        <DialogHeader>
          <DialogTitle />
          <DialogClose className='flex justify-end p-2 pb-0 !mt-0'>
            <CloseIcon className='w-6 h-6' />
          </DialogClose>
        </DialogHeader>
        <DialogDescription>{modalComponent}</DialogDescription>
        <DialogFooter />
      </DialogContent>
    </Dialog>
  )
}

export default GlobalModal
