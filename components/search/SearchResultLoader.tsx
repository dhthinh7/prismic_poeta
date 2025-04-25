import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils'

function dynamicWidth(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const SearchResultLoader = () => {
  return (
    <div className='flex flex-col gap-9'>
      {Array.from({ length: 5 }, (_, index) => ({ id: index })).map((item) => {
        return (
          <div key={item.id} className='flex flex-col gap-5 text-slice-title'>
            <Skeleton
              className={cn('h-10 bg-slate-200')}
              style={{
                width: dynamicWidth(60, 30) + '%'
              }}
            />
            <Skeleton
              className={cn('h-6 bg-slate-200')}
              style={{
                width: dynamicWidth(100, 50) + '%'
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SearchResultLoader
