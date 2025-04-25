import { eQueryKey } from '@/constants/enum'
import {
  BlogDocument,
  CaseStudyDocument,
  HomePageDocument,
  IndustryDocument,
  PageDocument,
  PartnershipsDocument,
  ServicesDocument
} from '@/prismicio-types'
import { AbortSignalLike, BuildQueryURLArgs, RequestInitLike } from '@prismicio/client'

export type FetchParams = {
  /**
   * Options provided to the client's `fetch()` on all network requests. These
   * options will be merged with internally required options. They can also be
   * overriden on a per-query basis using the query's `fetchOptions` parameter.
   */
  fetchOptions?: RequestInitLike
  /**
   * An `AbortSignal` provided by an `AbortController`. This allows the network
   * request to be cancelled if necessary.
   *
   * @deprecated Move the `signal` parameter into `fetchOptions.signal`:
   *
   * @see \<https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal\>
   */
  signal?: AbortSignalLike
}

export type TSearchResultDocument =
  | PageDocument<string>
  | CaseStudyDocument<string>
  | ServicesDocument<string>
  | PartnershipsDocument<string>
  | IndustryDocument<string>
  | HomePageDocument<string>
  | BlogDocument<string>

export type ISearchDocument = Partial<BuildQueryURLArgs> & FetchParams

export interface ICreateQueryString {
  updates: Partial<Record<eQueryKey, string>> | Record<string, string>
  params: URLSearchParams
}
