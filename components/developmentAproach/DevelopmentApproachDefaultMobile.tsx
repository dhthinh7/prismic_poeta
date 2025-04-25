'use client'

import React, { useMemo, useRef } from 'react'
import { Content } from '@prismicio/client'
import { E_SCREEN_SIZE } from '@/constants/enum'
import RichText from '../shared/RichText'
import { PrismicNextImage } from '@prismicio/next'
import ConditionRender from '../shared/ConditionRender'
import { PrismicLink } from '@prismicio/react'
import { cn } from '@/lib/utils'
import useElementBounding from '@/hooks/useElementBounding'
import useScreenDimensions from '@/hooks/useScreenDimensions'
import HeaderSection from '../shared/section/HeaderSection'

interface IDevelopmentApproachDefaultMobile {
  slice: Content.DevelopmentApproachSlice
}

const DevelopmentApproachDefaultMobile = ({ slice }: IDevelopmentApproachDefaultMobile) => {
  const { title, sub_title, main_image, notes } = slice.primary

  const ref = useRef<HTMLDivElement>(null)
  const notesListRef = useRef<HTMLDivElement>(null)
  const centralImageRef = useRef<HTMLDivElement>(null)

  const { width: containerWidth } = useElementBounding(ref)
  const { width: imageWith } = useElementBounding(centralImageRef)
  const { width: screenWidth } = useScreenDimensions()
  const { height: noteListHeight } = useElementBounding(notesListRef)

  const emptyWidth = containerWidth - imageWith

  const noteList = useMemo(() => {
    const _notes = []
    for (let i = 0; i < 8; i++) {
      notes[i] ? _notes.push(notes[i]) : _notes.push(null)
    }

    return _notes
  }, [notes])

  const getTranslateX = (index: number) => {
    switch (index) {
      case 0:
      case 7:
        return 'translate-x-0'
      case 1:
      case 6:
        return screenWidth > E_SCREEN_SIZE.SM ? 'translate-x-[70px]' : 'translate-x-[40px]'
      case 2:
      case 5:
        return screenWidth > E_SCREEN_SIZE.SM ? 'translate-x-[130px]' : 'translate-x-[80px]'
      default:
        return screenWidth > E_SCREEN_SIZE.SM ? 'translate-x-[160px]' : 'translate-x-[90px]'
    }
  }

  return (
    <div ref={ref} className='flex flex-col gap-10 sm:gap-[50px] lg:hidden'>
      <HeaderSection title={title} subTitle={sub_title} />

      <div className='w-full flex flex-col justify-center' style={{ height: `${noteListHeight}px` }}>
        <div
          ref={centralImageRef}
          className='rounded-full shadow-[ 0px 4px 4px 0px rgba(0, 0, 0, 0.25)] w-[100px] h-[100px] sm:w-[240px] sm:h-[240px] relative'
          style={{ background: 'linear-gradient(180deg, #FF4B01 0%, #992D01 100%)' }}
        >
          <PrismicNextImage
            field={main_image}
            className='w-[105%] flex justify-start overflow-hidden rounded-full aspect-square object-cover'
          />

          <div className=''>
            <ConditionRender condition={notes.length > 0}>
              <div
                ref={notesListRef}
                className='flex flex-col justify-start items-start gap-3 absolute top-1/2 w-full'
                style={{
                  transform: `translate(calc(50% - 30px), -50%)`
                }}
              >
                {noteList.slice(0, 8).map((note, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-2 h-[50px] transition-transform duration-200 hover:scale-105',
                      getTranslateX(index)
                    )}
                    style={{
                      width: `${emptyWidth - 20}px`
                    }}
                  >
                    <div className='w-full h-full relative'>
                      {note ? (
                        <PrismicLink field={note.link}>
                          <div className='h-full flex flex-col rounded-l-full rounded-r-full overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                            <div>
                              <RichText
                                className='bg-[#FF4B01] text-[10px] font-semibold text-white pl-14 py-[2px] pr-2 line-clamp-1'
                                field={note.title}
                              />
                            </div>
                            <div className='flex-grow'>
                              <RichText
                                className='text-[10px] leading-[12px] pl-14 py-[2px] pr-2 line-clamp-2'
                                field={note.description}
                                classNameWrapper='h-full flex items-center bg-white'
                              />
                            </div>
                          </div>
                          <div className='absolute left-0 top-0 w-[50px] h-[50px] border-4 border-white bg-[#FF4B01] text-white text-center text-[20px] font-semibold capitalize rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-center'>
                            {index + 1}
                          </div>
                        </PrismicLink>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ConditionRender>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevelopmentApproachDefaultMobile
