import { PageDocument } from '@/prismicio-types'
import { KeyTextField, LinkField } from '@prismicio/client'

export type ITextPosition = 'Left' | 'Right' | 'Center'

export type TBackgroundColor = '#FFFFFF' | '#EDF3FB' | '#EEEEEE' | '#425B76' | '#C3D4F119' | '#C3D4F133' | 'transparent'

export interface ICategory {
  id: string
  uid: string
  categoryName: string | KeyTextField
  categoryLink?: LinkField
  isShow?: boolean
}

export interface IPrismicSearchParams {
  ref?: string
  q: string
  src: 'apibrowser'
  format: 'json'
}

export interface PrismicSearchResponse {
  page: number
  results_per_page: number
  results_size: number
  total_results_size: number
  total_pages: number
  next_page: string | null
  prev_page: string | null
  results: PageDocument<string>[]
  version: string
  license: string
}
