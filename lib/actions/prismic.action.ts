'use server'

import { primisRequest } from '@/app/apiRequest/prismicRequest'
import { IPrismicSearchParams } from '../model/index.type.'

export const fullTextSearch = async (params: IPrismicSearchParams) => {
  return await primisRequest.search({
    ...params,
    ref: process.env.NEXT_PUBLIC_PRISMIC_REF || ''
  })
}
