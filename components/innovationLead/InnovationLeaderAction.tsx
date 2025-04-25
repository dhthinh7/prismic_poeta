'use client'

import React, { useCallback } from 'react'
import { useAppDispatch } from '@/lib/store/hooks'
import { openModal, updateModalClassWrapper } from '@/lib/store/slices/globalModal.slice'
import Button from '../shared/button/Button'
import { Simplify } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

interface IInnovationLeaderAction {
  leader: Simplify<Content.InnovationLeadSliceDefaultPrimaryLeadersItem>
  leaderDetail?: Content.LeaderdetailDocument<string>
}

const InnovationLeaderAction = ({ leader, leaderDetail }: IInnovationLeaderAction) => {
  const dispatch = useAppDispatch()

  const handleOpenLeaderDetail = useCallback(() => {
    if (!leaderDetail) return

    dispatch(updateModalClassWrapper('w-[90%] !max-w-[1200px]'))
    dispatch(
      openModal(
        <div className='max-h-[80vh] px-1 overflow-y-auto mx-auto'>
          <SliceZone slices={leaderDetail.data.slices} components={components} />
        </div>
      )
    )
  }, [dispatch, leaderDetail])

  return (
    <div className='flex flex-center' onClick={handleOpenLeaderDetail}>
      <Button variant={leader.button_variant || 'solid'}>{leader.button_label}</Button>
    </div>
  )
}

export default InnovationLeaderAction
