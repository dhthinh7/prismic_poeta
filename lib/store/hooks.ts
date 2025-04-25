// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

// Typed hooks for Redux
// export const useAppDispatch1: () => AppDispatch = useDispatch;
// export const useAppSelector1: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppStore1: () => AppStore = useStore;
