import React from 'react'
import { cn } from '@/lib/utils'
import RichText from '../0shared/RichText'
import { Content } from '@prismicio/client'
import ConditionRender from '../0shared/ConditionRender'
import { PrismicImage } from '@prismicio/react'
import ClientButtonWrapper from '../0shared/button/ClientButtonWrapper'

import ShowCaseCounterUp from './ShowCaseCounterUp'

interface IShowCaseDefaultLefSide {
  className?: string
  slice: Content.ShowcaseSlice
}
const ShowCaseDefaultLefSide = ({ className, slice }: IShowCaseDefaultLefSide) => {
  const { title, counter_up, button_label, button_type, button_link, form_selection } = slice.primary
  return (
    <div className={cn(className)}>
      <div className='flex flex-col gap-5 md:gap-[30px]'>
        <RichText
          field={title}
          className='text-2xl sm:text-3xl lg:text-[44px] font-semibold lg:leading-[54px] text-center sm:text-left mb-0'
        />
        <ConditionRender condition={counter_up.length > 0}>
          <div className='flex justify-evenly items-start gap-5 lg:gap-10'>
            {counter_up.map((counter, index) => (
              <div
                key={index}
                className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 lg:gap-5'
              >
                <PrismicImage field={counter.icon} className='w-[30px] h-[30px] sm:w-[34px] sm:h-[34px]' />
                <div>
                  <ShowCaseCounterUp
                    counterNumber={counter.counter_number}
                    isCounterUpPlus={counter.is_counter_up_plus}
                  />
                  <RichText
                    field={counter.label}
                    className='mb-0 text-xs sm:text-sm font-semibold mt-2 sm:mt-0 text-center sm:text-left'
                  />
                </div>
              </div>
            ))}
          </div>
        </ConditionRender>
        <div className='flex justify-center sm:justify-start'>
          <ClientButtonWrapper
            className='w-fit px-6 py-[10px]'
            label={button_label}
            type={button_type}
            link={button_link}
            form={form_selection}
            variant='solid'
            color='orange'
          />
        </div>
      </div>
    </div>
  )
}

export default ShowCaseDefaultLefSide
