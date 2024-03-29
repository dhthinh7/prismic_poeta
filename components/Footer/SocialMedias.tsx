import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import React from 'react'

export default async function SocialMedias() {
  const client = createClient()
  const socialMedia = await client.getSingle('social_media')
  return (
    <div>
      <SliceZone slices={socialMedia.data.slices} components={components} />
    </div>
  )
}
