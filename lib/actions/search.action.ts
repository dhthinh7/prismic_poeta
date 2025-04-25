'use server'

import { client } from '@/prismicio'
import { AllDocumentTypes } from '@/prismicio-types'
import * as prismic from '@prismicio/client'

import { ISearchDocument } from '../model/search.type'

export const searchDocument = async (params: ISearchDocument): Promise<prismic.Query<AllDocumentTypes>> => {
  const { filters, pageSize, page } = params
  try {
    const searchResults = await client.get({
      filters,
      pageSize,
      page
    })

    return searchResults
  } catch (error) {
    return {
      next_page: null,
      page: 0,
      prev_page: null,
      results: [],
      results_per_page: 0,
      results_size: 0,
      total_pages: 0,
      total_results_size: 0
    }
  }
}
