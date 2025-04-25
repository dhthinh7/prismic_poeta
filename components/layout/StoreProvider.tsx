'use client'
import { Provider } from 'react-redux'
import GlobalModal from '../shared/modal/GlobalModal'
import { store } from '@/lib/store/store'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GlobalModal />
      {children}
    </Provider>
  )
}
