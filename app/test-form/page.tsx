import React from 'react'
import TalkToExpert from '@/components/forms/TalkToExpert'
import ContactUs from '@/components/forms/ContactUs'

const page = () => {
  return (
    <div className='py-10 mx-auto'>
      <TalkToExpert className='max-w-[800px] px-1' />
      <ContactUs className='max-w-[800px] px-1' />
    </div>
  )
}

export default page
