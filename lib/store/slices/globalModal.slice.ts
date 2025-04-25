import { ReactNode } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IGlobalModal {
  component: ReactNode | null
  modalClassWrapper: string
}

const initialState: IGlobalModal = {
  component: null,
  modalClassWrapper: ''
}

export const globalModalSlice = createSlice({
  name: 'globalModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ReactNode>) => {
      state.component = action.payload
    },
    closeModal: (state) => {
      state.component = null
    },
    updateModalClassWrapper: (state, action: PayloadAction<string>) => {
      state.modalClassWrapper = action.payload
    }
  }
})

// Actions
export const { openModal, closeModal, updateModalClassWrapper } = globalModalSlice.actions

// Reducers
export const selectComponent = (state: RootState) => state.globalModalReducer.component
export const selectModalClassWrapper = (state: RootState) => state.globalModalReducer.modalClassWrapper

export const globalModalReducer = globalModalSlice.reducer
