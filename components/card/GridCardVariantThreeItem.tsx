import React from 'react'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import RichText from '../shared/RichText'
import { Simplify } from '@/prismicio-types'
import ConditionRender from '../shared/ConditionRender'
import ClientButtonWrapper from '../shared/button/ClientButtonWrapper'

interface IGridCardVariantTwoItem {
  card: Simplify<Content.GridCardSliceGridCardVariantThreePrimaryCardsItem>
}

const GridCardVariantThreeItem = ({ card }: IGridCardVariantTwoItem) => {
  const { icon, title, description, button_label, button_type, button_link, form_selection } = card
  return (
    <div className='sm:w-1/2 md:w-1/3 sm:p-5 lg:p-9'>
      <div className='h-full w-[270px] sm:w-full flex flex-col items-start justify-center gap-[15px] shadow-ds p-5 rounded-tl-[30px] bg-white border border-transparent hover:border-primary transition-all duration-300 ease-in-out'>
        <div className='w-[75px] h-[75px] overflow-hidden'>
          <PrismicNextImage
            field={icon}
            width={75}
            height={75}
            className='rounded-full w-full aspect-square object-cover object-center'
          />
        </div>
        <div className='flex-grow'>
          <RichText field={title} className='text-left text-xl font-bold text-slate-gray mb-0' />
          <RichText field={description} className='text-left text-slate-gray mt-[15px]' />
        </div>

        <div className='text-left'>
          <ConditionRender condition={button_type === 'Link'}>
            <PrismicNextLink field={button_link} className='text-xl text-primary font-bold'>
              {button_label}
            </PrismicNextLink>
          </ConditionRender>

          <ConditionRender condition={button_type === 'Form Modal'}>
            <ClientButtonWrapper
              className='w-full !px-[25px] !py-[10px]'
              label={button_label}
              type={button_type}
              link={button_link}
              form={form_selection}
              variant='solid'
              color='orange'
            />
          </ConditionRender>
        </div>
      </div>
    </div>
  )
}

export default GridCardVariantThreeItem
