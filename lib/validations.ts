import { z } from 'zod'

export const TalkToExportSchema = z.object({
  email: z.string().email('Email must be formatted correctly.'),
  first_name: z.string(),
  last_name: z.string(),
  company_name: z.string(),
  country_region: z.string(),
  city: z.string(),
  street_address: z.string(),
  check_lists: z.array(z.string()),
  area_text: z.string(),
  agreement: z.array(z.string())
})

export const ContactFormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  phone_number: z.string(),
  email: z.string().email('Email must be formatted correctly.'),
  industry: z.string(),
  anythingElse: z.string(),
  service: z.string(),
  agreement: z.array(z.string())
})
