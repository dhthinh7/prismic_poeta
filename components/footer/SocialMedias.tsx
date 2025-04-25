import React from 'react'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'

export default async function SocialMedias() {
  const client = createClient()
  try {
    const socialMedia = await client.getSingle('social_media')
    return <SliceZone slices={socialMedia.data.slices} components={components} />
  } catch (error) {
    //
  }
}
