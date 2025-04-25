import { https } from '@/lib/https'
import { IPrismicSearchParams, PrismicSearchResponse } from '@/lib/model/index.type.'

class PrimisRequest extends https {
  public search = (params: IPrismicSearchParams) => this.get<PrismicSearchResponse>('documents/search', params)
}

export const primisRequest = new PrimisRequest()
