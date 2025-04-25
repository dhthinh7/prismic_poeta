'use client'

import { NumberField } from '@prismicio/client'
import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'

interface IShowCaseCounterUp {
  counterNumber: NumberField
  isCounterUpPlus: boolean
}
const ShowCaseCounterUp = ({ counterNumber, isCounterUpPlus }: IShowCaseCounterUp) => {
  const countUpRef = useRef(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: counterNumber || 0
  })

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (target.isIntersecting) {
          start()
        }
      },
      { threshold: 1.0 }
    )

    if (countUpRef.current) {
      observerRef.current.observe(countUpRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [start])

  return (
    <div className='text-2xl sm:text-[34px] font-bold text-center sm:text-left'>
      <span ref={countUpRef} />
      {isCounterUpPlus && counterNumber && <span>+</span>}
    </div>
  )
}

export default ShowCaseCounterUp
