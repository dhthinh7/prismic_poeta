import React from 'react'
import { prismicUtils } from '@/lib/utils/prismic.util'
import { Content } from '@prismicio/client'

interface IVideoBlockDefault {
  slice: Content.VideoBlockSlice
}

const VideoBlockDefault = ({ slice }: IVideoBlockDefault) => {
  const { source, is_local: local } = slice.primary
  const srcUrl = prismicUtils.getUrl(source)

  if (local) {
    return (
      <video controls className='aspect-[16/9] h-full w-full p-0'>
        {srcUrl && <source src={srcUrl} type='video/mp4' />}
      </video>
    )
  }

  // Validate youtube/vimeo
  const isYouTube = srcUrl.includes('youtube.com') || srcUrl.includes('youtu.be')
  const isVimeo = srcUrl.includes('vimeo.com')

  const getEmbedUrl = () => {
    if (isYouTube) return srcUrl.replace('watch?v=', 'embed/')
    if (isVimeo) return `https://player.vimeo.com/video/${srcUrl.split('/').pop()}`
    return null
  }

  const embedUrl = getEmbedUrl()

  return embedUrl ? (
    <iframe
      width='100%'
      height={400}
      src={embedUrl}
      frameBorder={0}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Video'
      className='aspect-[16/9] h-full w-full p-0'
    />
  ) : (
    <p className='text-red-500 text-center'>Invalid video source</p>
  )
}

export default VideoBlockDefault

{
  /* <iframe
width='100%'
height={400}
src={`https://www.youtube-nocookie.com/embed/${videoId}`}
frameBorder={0}
allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
allowFullScreen
title={'Youtube video'}
className='aspect-[16/9] h-full w-full p-0'
/> */
}
