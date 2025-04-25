'use client'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import RichText from '../0shared/RichText'
import useElementBounding from '@/hooks/useElementBounding'
import ConditionRender from '../0shared/ConditionRender'
import { cn } from '@/lib/utils'
import { PrismicLink } from '@prismicio/react'
import useScreenDimensions from '@/hooks/useScreenDimensions'
import { E_SCREEN_SIZE } from '@/constants/enum'

interface IDevelopmentApproachDefaultDesktop {
  slice: Content.DevelopmentApproachSlice
}

const DevelopmentApproachDefaultDesktop = ({ slice }: IDevelopmentApproachDefaultDesktop) => {
  const { title, sub_title, main_image, notes } = slice.primary

  const [screen, setScreen] = useState<number>(0)

  const ref = useRef<HTMLDivElement>(null)
  const centralImageRef = useRef<HTMLDivElement>(null)

  const { width: containerWidth } = useElementBounding(ref)
  const { width: imageWith } = useElementBounding(centralImageRef)
  const { width: screenWidth } = useScreenDimensions()

  const emptyWidth = (containerWidth - imageWith) / 2

  const noteList = useMemo(() => {
    const _notes = []
    for (let i = 0; i < 8; i++) {
      notes[i] ? _notes.push(notes[i]) : _notes.push(null)
    }

    return _notes
  }, [notes])

  const getTranslateX = useCallback(
    (index: number) => {
      switch (index) {
        case 0:
        case 7:
          return 'translate-x-0'
        case 1:
        case 6:
          return screen > E_SCREEN_SIZE.XL
            ? 'translate-x-[150px]'
            : screen > E_SCREEN_SIZE.LG
              ? 'translate-x-[90px]'
              : 'translate-x-[50px]'
        case 2:
        case 5:
          return screen > E_SCREEN_SIZE.XL
            ? 'translate-x-[220px]'
            : screen > E_SCREEN_SIZE.LG
              ? 'translate-x-[180px]'
              : 'translate-x-[150px]'
        default:
          return screen > E_SCREEN_SIZE.XL
            ? 'translate-x-[260px]'
            : screen > E_SCREEN_SIZE.LG
              ? 'translate-x-[210px]'
              : 'translate-x-[180px]'
      }
    },
    [screen]
  )

  useEffect(() => {
    setScreen(screenWidth)
  }, [screenWidth])

  return (
    <div ref={ref} className='hidden lg:flex flex-col lg:flex-row justify-center py-40'>
      <span className='text-transparent'>{screen}</span>
      <div className='relative'>
        <div
          className='absolute top-1/2 -translate-x-full -translate-y-1/2 flex flex-col gap-10'
          style={{
            width: `${emptyWidth}px`
          }}
        >
          <RichText field={title} className='text-5xl xl:text-[64px] leading-[60px] font-semibold  pr-5' />
          <RichText field={sub_title} className='text-2xl xl:text-[32px] leading-[30px] font-semibold  pr-5' />
        </div>
        <div
          ref={centralImageRef}
          className='rounded-full shadow-[ 0px 4px 4px 0px rgba(0, 0, 0, 0.25)] w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] xl:w-[360px] xl:h-[360px]'
          style={{ background: 'linear-gradient(180deg, #FF4B01 0%, #992D01 100%)' }}
        >
          <PrismicNextImage
            field={main_image}
            className='w-[105%] flex justify-center items-center overflow-hidden rounded-full aspect-square object-cover'
          />
        </div>
        <ConditionRender condition={notes.length > 0}>
          <div
            className='flex flex-col justify-start items-start gap-3 absolute top-1/2 w-full'
            style={{
              transform: `translate(calc(50% - 30px), -50%)`
            }}
          >
            {noteList.slice(0, 8).map((note, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-2 h-[60px] transition-transform duration-200 hover:scale-105',
                  getTranslateX(index)
                )}
                style={{
                  width: `${emptyWidth - 80}px`
                }}
              >
                <div className='w-full h-full relative'>
                  {note ? (
                    <PrismicLink field={note.link}>
                      <div className='h-full flex flex-col rounded-l-full rounded-r-full overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                        <div>
                          <RichText
                            className='bg-[#FF4B01] text-sm font-semibold text-white pl-16 py-[2px] pr-4 line-clamp-1'
                            field={note.title}
                          />
                        </div>
                        <div className='flex-grow'>
                          <RichText
                            className='text-[10px] leading-[12px] pl-16 py-[2px] pr-4 line-clamp-2'
                            field={note.description}
                            classNameWrapper='h-full flex items-center bg-white'
                          />
                        </div>
                      </div>
                      <div className='absolute left-0 top-0 w-[60px] h-[60px] border-4 border-white bg-[#FF4B01] text-white text-center text-[20px] font-semibold leading-[54px] capitalize rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
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
  )
}

export default DevelopmentApproachDefaultDesktop
