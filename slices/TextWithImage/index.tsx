import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import TextOnly from '@/components/text/TextOnly'
import TextWithImageButton from '@/components/text/TextWithImageButton'
import TextWithImageButtonSecondary from '@/components/text/TextWithImageButtonSecondary'
import TextWithImageDefault from '@/components/text/TextWithImageDefault'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          {slice.variation === 'default' && <TextWithImageDefault slice={slice} />}
          {slice.variation === 'textWithImageButton' && <TextWithImageButton slice={slice} />}
          {slice.variation === 'textWithImageButtonSecondary' && <TextWithImageButtonSecondary slice={slice} />}
          {slice.variation === 'text' && <TextOnly slice={slice} />}
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default TextWithImage
