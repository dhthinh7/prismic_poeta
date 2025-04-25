'use client'

import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Component
import { ContactFormSchema } from '@/lib/validations'
import CustomInput from '../0shared/ui/CustomInput'
import { Checkbox } from '../ui/checkbox'
import CustomTextArea from '../0shared/ui/CustomTextArea'
// import ReCAPTCHA from 'react-google-recaptcha'
import { IEmailAppendData } from '@/lib/model/mail.type'
import { addSheetData } from '@/lib/actions/sheet.action'
import { ContactDataMapper } from '@/lib/utils/dataMapper.util'
import ConditionRender from '../0shared/ConditionRender'
import { cn } from '@/lib/utils'
import { useAppDispatch } from '@/lib/store/hooks'
import { openModal } from '@/lib/store/slices/globalModal.slice'
import ThankForm from './ThankForm'
import Button from '../0shared/button/Button'
import SelectionCustom from '../selection/Selection'
import { industryOptions, serviceOptions } from '@/constants/constant'

interface IContactUs {
  className?: string
  isModal?: boolean
}

const agreements = ['I agree to receive other communications from Poeta Digital.']

const ContactUs = ({ className, isModal = true }: IContactUs) => {
  const dispatch = useAppDispatch()
  // const recaptchaRef = useRef<ReCAPTCHA>(null)
  // const [captchaError, setCaptchaError] = useState<string>('')
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      industry: '',
      anythingElse: '',
      service: '',
      agreement: []
    },
    reValidateMode: 'onChange',
    mode: 'onChange'
  })

  const onSubmit = useCallback(
    async (value: z.infer<typeof ContactFormSchema>) => {
      try {
        // if (!recaptchaRef.current) return

        // const recaptchaResponse = recaptchaRef.current.getValue()

        // if (!recaptchaResponse) {
        //   setCaptchaError('Please complete the captcha verification')
        //   return
        // }

        setIsLoading(true)
        // setCaptchaError('')

        const appendSheetDataMapper = new ContactDataMapper([value])

        const appendData: IEmailAppendData = {
          range: 'ContactUs',
          data: appendSheetDataMapper.contactUsMapper(),
          subject: 'Contact Us Form Submission',
          html: `
          <p>Hello Admin,</p>
          <p>You have received a new message from your website's:</p>
          <p><strong>Name:</strong> ${value.first_name + ' ' + value.last_name}</p>
          <p><strong>Email:</strong> ${value.email}</p>
          <p><strong>Message:</strong> ${value.anythingElse}</p>
          <a href="https://docs.google.com/spreadsheets/d/${process.env.NEXT_PUBLIC_TALK_TO_EXPERT_GOOGLE_SHEET_ID}#gid=1308345538">View details in Google Sheets</a>
          <a>
        `
        }

        await addSheetData(appendData)

        setIsFormSubmitted(true)
        setIsLoading(false)
        isModal && dispatch(openModal(<ThankForm />))
      } catch (error) {
        setIsLoading(false)
        setIsFormSubmitted(false)
      }
    },
    [dispatch, isModal]
  )

  return (
    <div className={cn('overflow-y-auto mx-auto', className)}>
      {!isFormSubmitted ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full grid grid-cols-12 gap-y-8 gap-x-2 text-left'>
            <div className='col-span-full grid grid-cols-12 gap-y-5 gap-x-2'>
              <FormField
                control={form.control}
                name='first_name'
                render={({ field }) => (
                  <FormItem className='col-span-full md:col-span-6'>
                    <CustomInput label='First name' {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='last_name'
                render={({ field }) => (
                  <FormItem className='col-span-full md:col-span-6'>
                    <CustomInput label='Last name' {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone_number'
                render={({ field }) => (
                  <FormItem className='col-span-full'>
                    <CustomInput label='Mobile phone number' {...field} />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='col-span-full'>
                  <CustomInput label='Email' required={true} {...field} />
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='industry'
              render={({ field }) => (
                <FormItem className='col-span-full'>
                  <FormLabel className='text-base text-title'>Industry</FormLabel>
                  <SelectionCustom
                    value={field.value}
                    options={industryOptions}
                    onSelect={(value) => {
                      field.onChange(value)
                    }}
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='anythingElse'
              render={({ field }) => (
                <FormItem className='col-span-full'>
                  <CustomTextArea label='Is there anything else that you think we should know?' {...field} />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='service'
              render={({ field }) => (
                <FormItem className='col-span-full'>
                  <FormLabel className='text-base text-title'>Service</FormLabel>
                  <SelectionCustom
                    value={field.value}
                    options={serviceOptions}
                    onSelect={(value) => {
                      field.onChange(value)
                    }}
                  />
                </FormItem>
              )}
            />

            <FormDescription className='col-span-full text-base text-title'>
              If you consent to Poeta Digital sending you news & product & services information, please click on the box
              below. We&apos;ll protect & respect your privacy and only use your personal information to send you news
              or company information and administer your account.
            </FormDescription>

            <FormField
              control={form.control}
              name='agreement'
              render={() => (
                <FormItem className='col-span-full'>
                  {agreements.map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name='agreement'
                      render={({ field }) => {
                        return (
                          <FormItem key={item} className='flex gap-3 items-center py-1 '>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item])
                                    : field.onChange(field.value?.filter((value) => value !== item))
                                }}
                              />
                            </FormControl>
                            <FormLabel className='!mt-0 text-base hover:cursor-pointer text-text-light'>
                              {item}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />

            <FormDescription className='col-span-full text-base text-title'>
              You may unsubscribe at any time. Please review our Privacy policy on our privacy practices for more
              information.
            </FormDescription>

            <FormDescription className='col-span-full text-base text-title'>
              Please complete all required fields.
            </FormDescription>

            {/* <div className='col-span-full'>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={(e) => {
                  if (e) setCaptchaError('')
                }}
                className='overflow-x-auto'
              />
              <ConditionRender condition={captchaError}>
                <FormMessage className='text-red-500 mt-1'>{captchaError}</FormMessage>
              </ConditionRender>
            </div> */}

            <Button
              type='submit'
              variant='solid'
              color='orange'
              className='col-span-full !py-[10px]'
              isLoading={isLoading}
            >
              Submit
            </Button>
          </form>
        </Form>
      ) : (
        <ConditionRender condition={!isModal}>
          <ThankForm className='py-20' />
        </ConditionRender>
      )}
    </div>
  )
}

export default ContactUs
