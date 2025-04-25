import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { globalModalReducer } from './slices/globalModal.slice'

export const store = configureStore({
  reducer: {
    globalModalReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>
