import CertificateDefault from '@/components/certificate/CertificateDefault'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Certificate`.
 */
export type CertificateProps = SliceComponentProps<Content.CertificateSlice>

/**
 * Component for "Certificate" Slices.
 */
const Certificate = ({ slice }: CertificateProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <CertificateDefault slice={slice} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default Certificate
