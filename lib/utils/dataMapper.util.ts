import {
  BlogDocument,
  CaseStudyDocument,
  CategoryDocument,
  HomePageDocument,
  IndustryDocument,
  PageDocument,
  PartnershipsDocument,
  ServicesDocument
} from '@/prismicio-types'
import { ICategory } from '../model/index.type.'
import { isFilled } from '@prismicio/client'
import { ContactFormSchema, TalkToExportSchema } from '../validations'
import { z } from 'zod'
import { utils } from './utils'

export class DataMapper<TInput, TOutput> {
  private data: TInput[]

  constructor(data: TInput[]) {
    this.data = data
  }

  protected map(handler: (item: TInput) => TOutput): TOutput[] {
    return this.data.map(handler)
  }
}

export class BreadcrumbMapper extends DataMapper<CategoryDocument<string>, ICategory> {
  constructor(data: CategoryDocument<string>[] = []) {
    super(data)
  }

  private categoryDTOs(): ICategory[] {
    return this.map((c) => ({
      id: c.id,
      uid: c.uid,
      categoryName: c.data.category_name || '',
      categoryLink: c.data.category_link,
      isShow: true
    }))
  }

  private validatePageType(
    page:
      | PageDocument<string>
      | CaseStudyDocument<string>
      | ServicesDocument<string>
      | PartnershipsDocument<string>
      | IndustryDocument<string>
      | HomePageDocument<string>
      | BlogDocument<string>,
    breadcrumbs: ICategory[]
  ): ICategory[] {
    switch (page.type) {
      case 'case_study':
        return [
          {
            id: 'case-study',
            uid: 'case-study',
            categoryName: 'Case Study',
            isShow: true
          },
          ...breadcrumbs
        ]
      case 'blog':
        return [
          {
            id: 'blog',
            uid: 'blog',
            categoryName: 'Blog',
            isShow: false
          },
          ...breadcrumbs
        ]
      case 'industry':
        return [
          {
            id: 'industry',
            uid: 'industry',
            categoryName: 'Industry',
            isShow: true
          },
          ...breadcrumbs
        ]
      case 'services':
        return [
          {
            id: 'services',
            uid: 'services',
            categoryName: 'Services',
            isShow: true
          },
          ...breadcrumbs
        ]
      case 'partnerships':
        return [
          {
            id: 'partnerships',
            uid: 'partnerships',
            categoryName: 'Partnerships',
            isShow: true
          },
          ...breadcrumbs
        ]

      default:
        return breadcrumbs
    }
  }

  public breadcrumbsMapper(
    page:
      | PageDocument<string>
      | CaseStudyDocument<string>
      | ServicesDocument<string>
      | PartnershipsDocument<string>
      | IndustryDocument<string>
      | HomePageDocument<string>
      | BlogDocument<string>
  ): ICategory[] {
    const categoryDTOs = this.categoryDTOs()

    const levelOneId =
      isFilled.contentRelationship(page.data.level_one) && page.data.level_one.id ? page.data.level_one.id : ''
    const levelTwoId =
      isFilled.contentRelationship(page.data.level_two) && page.data.level_two.id ? page.data.level_two.id : ''
    const levelThreeId =
      isFilled.contentRelationship(page.data.level_three) && page.data.level_three.id ? page.data.level_three.id : ''

    const levelOne = categoryDTOs.find((c) => c.id === levelOneId)
    const levelTwo = categoryDTOs.find((c) => c.id === levelTwoId)
    const levelThree = categoryDTOs.find((c) => c.id === levelThreeId)

    const breadcrumbs: ICategory[] = []

    if (levelOne) breadcrumbs.push(levelOne)
    if (levelTwo) breadcrumbs.push(levelTwo)
    if (levelThree) breadcrumbs.push(levelThree)

    const _breadcrumbs = this.validatePageType(page, breadcrumbs)

    return _breadcrumbs
  }
}

export class TalkToExportDataMapper extends DataMapper<z.infer<typeof TalkToExportSchema>, string[]> {
  constructor(data: z.infer<typeof TalkToExportSchema>[]) {
    super(data)
  }

  private stringify(stringData: string[]): string {
    return stringData.reduce((results, current) => {
      return results ? results + ',' + '\n' + current : current
    }, '')
  }

  private formatExportData(item: z.infer<typeof TalkToExportSchema>): string[] {
    return [
      utils.generateDateTime(),
      '',
      item.email,
      '',
      this.stringify(item.check_lists),
      item.last_name,
      item.first_name,
      item.company_name,
      item.country_region,
      item.city,
      item.street_address,
      item.area_text,
      this.stringify(item.agreement)
    ]
  }

  public talkToExportMapper(): string[][] {
    return this.map((item) => this.formatExportData(item))
  }
}

export class ContactDataMapper extends DataMapper<z.infer<typeof ContactFormSchema>, string[]> {
  constructor(data: z.infer<typeof ContactFormSchema>[]) {
    super(data)
  }

  private stringify(stringData: string[]): string {
    return stringData.reduce((results, current) => {
      return results ? results + ',' + '\n' + current : current
    }, '')
  }

  private formatExportData(item: z.infer<typeof ContactFormSchema>): string[] {
    return [
      utils.generateDateTime(),
      item.first_name,
      item.last_name,
      item.phone_number,
      item.email,
      item.industry,
      item.service,
      item.anythingElse,
      this.stringify(item.agreement)
    ]
  }

  public contactUsMapper(): string[][] {
    return this.map((item) => this.formatExportData(item))
  }
}
