import ContactUs from '@/components/forms/ContactUs'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SliceWrapper from '@/components/layout/SliceWrapper'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `ContactUsForm`.
 */
export type ContactUsFormProps = SliceComponentProps<Content.ContactUsFormSlice>

/**
 * Component for "ContactUsForm" Slices.
 */
const ContactUsForm = ({ slice }: ContactUsFormProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <SliceWrapper bgColor={slice.primary.background_color}>
        <SectionWrapper paddingTop={slice.primary.padding_top} paddingBottom={slice.primary.padding_bottom}>
          <ContactUs className='max-w-[800px] px-1' isModal={false} />
        </SectionWrapper>
      </SliceWrapper>
    </section>
  )
}

export default ContactUsForm
