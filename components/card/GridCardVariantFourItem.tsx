import React from 'react'
import { Simplify } from '@/prismicio-types'
import { Content, ImageField, RichTextField } from '@prismicio/client'
import Line from '../0shared/line/Line'
import { PrismicImage } from '@prismicio/react'
import RichText from '../0shared/RichText'
import { PrismicNextImage } from '@prismicio/next'
import ClientButtonWrapper from '../0shared/button/ClientButtonWrapper'

interface IGridCardVariantFourItem {
  card: Simplify<Content.GridCardSliceGridCardVariantFourPrimaryCardsItem>
}
const GridCardVariantFourItem = ({ card }: IGridCardVariantFourItem) => {
  return (
    <div className='w-full sm:w-1/2 sm:p-5 lg:w-1/3'>
      <div className='h-full flex flex-col gap-5 px-[25px] py-[30px] pb-10 rounded-[10px] shadow-card bg-white  border border-transparent hover:border-primary transition-all duration-300 ease-in-out'>
        <CardInfo icon={card.icon} title={card.title} description={card.description} />
        <Line height='1px' width='100%' backgroundColor='#C3D4F1' />
        <CardSpecialList card={card} />
        <ClientButtonWrapper
          className='w-full !px-[25px] !py-[10px]'
          label={card.button_label}
          type={card.button_type}
          link={card.button_link}
          form={card.form_selection}
          variant='solid'
          color='orange'
        />
      </div>
    </div>
  )
}

export default GridCardVariantFourItem

interface ICardInfo {
  icon: ImageField
  title: RichTextField
  description: RichTextField
}

const CardInfo = ({ icon, title, description }: ICardInfo) => {
  return (
    <div className='flex flex-col gap-[15px]'>
      <div className='w-11 h-11'>
        <PrismicImage field={icon} width={44} height={44} className='w-full h-full object-cover object-center' />
      </div>
      <RichText field={title} className='text-[30px] font-semibold text-blue-dianna mb-0' />
      <RichText field={description} className='text-blue-dianna mb-0' />
    </div>
  )
}

interface ICardSpecialList {
  card: Simplify<Content.GridCardSliceGridCardVariantFourPrimaryCardsItem>
}

const CardSpecialList = ({ card }: ICardSpecialList) => {
  return (
    <div className='mb-4 flex-grow'>
      <RichText field={card.title} className='text-[#879499] mb-0' />
      <ul className='flex flex-col gap-5 mt-5'>
        <SpecialListItem icon={card.special_list_item_one_icon} label={card.special_list_item_one} />
        <SpecialListItem icon={card.special_list_item_two_icon} label={card.special_list_item_two} />
        <SpecialListItem icon={card.special_list_item_three_icon} label={card.special_list_item_three} />
        <SpecialListItem icon={card.special_list_item_four_icon} label={card.special_list_item_four} />
      </ul>
    </div>
  )
}

interface ISpecialListItem {
  icon: ImageField<never>
  label: RichTextField
}

const SpecialListItem = ({ icon, label }: ISpecialListItem) => {
  return (
    <li className='flex gap-[10px] items-start justify-start'>
      <PrismicNextImage field={icon} className='w-6 h-6 object-cover object-center rounded-full' />
      <RichText field={label} className='font-semibold text-blue-dianna mb-0' />
    </li>
  )
}
