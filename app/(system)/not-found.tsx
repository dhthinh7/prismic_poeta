import React from 'react'
import Link from 'next/link'
import Button from '@/components/0shared/button/Button'

export default function NotFound() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center text-blue-dianna'>
      <h1 className='text-9xl font-bold'>404</h1>
      <p className='mt-4 text-lg text-gray-400'>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <div className='mt-6'>
        <Button>
          <Link href='/'>Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
