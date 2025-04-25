import { TSearchResultDocument } from '@/components/search/GlobalSearch'
import { ICreateQueryString } from '../model/search.type'
import { BreadcrumbMapper } from './dataMapper.util'
import { CategoryDocument } from '@/prismicio-types'

class Text {
  highlightText(text: string, keys: string[]): string {
    if (!Array.isArray(keys) || keys.length === 0) return text + 'outside'

    const lowerCaseKeys = keys.map((k) => k.toLowerCase())

    return text
      .split(/(\s+)/)
      .map((char) => {
        const lowerChar = char.toLowerCase()
        if (lowerCaseKeys.includes(lowerChar)) {
          return `<span class='font-bold'> ${char} </span>`
        }
        return char
      })
      .join('')
  }

  createQueryString = ({ updates, params }: ICreateQueryString) => {
    Object.entries(updates).forEach(([name, value]) => {
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
    })

    return params.toString()
  }

  handleGenerateLink = (page: TSearchResultDocument, uidPage: string, categories: CategoryDocument<string>[]) => {
    const breadcrumbMapper = new BreadcrumbMapper(categories)
    const breadcrumbs = breadcrumbMapper.breadcrumbsMapper(page)

    const categoryUrl = breadcrumbs.reduce((results, current) => {
      return results + '/' + current.uid
    }, '')

    categoryUrl.slice(0, 1)

    return categoryUrl + '/' + uidPage
  }
}

export const text = new Text()
