import {
  ContentRelationshipField,
  FilledContentRelationshipField,
  ImageField,
  isFilled,
  KeyTextField,
  LinkField,
  RichTextField
} from '@prismicio/client'

class PrismicUtils {
  // const isKeyTextField = (field: KeyTextField | RichTextField): field is KeyTextField => typeof field === 'string'
  public isKeyTextField(field: KeyTextField | RichTextField): field is KeyTextField {
    return typeof field === 'string'
  }

  public isRichTextEmpty(field: RichTextField): boolean {
    if (!field) return true
    return field.length === 0
  }

  public isExistedUrl(linkField?: LinkField): boolean {
    return linkField && isFilled.contentRelationship(linkField) && linkField.url ? true : false
  }

  public isExistedContentRelationship(contentRelationship: ContentRelationshipField<string>): boolean {
    return isFilled.contentRelationship(contentRelationship) && contentRelationship.id ? true : false
  }

  public getUrl(linkField?: LinkField): string {
    // if (linkField && isFilled.contentRelationship(linkField) && linkField.url) return linkField.url || ''
    if (this.isExistedUrl(linkField)) return (linkField as FilledContentRelationshipField).url || ''

    return ''
  }

  public getAlt(image?: ImageField<never>): string {
    // if (linkField && isFilled.contentRelationship(linkField) && linkField.url) return linkField.url || ''
    return image?.alt || ''
  }
}

export const prismicUtils = new PrismicUtils()
