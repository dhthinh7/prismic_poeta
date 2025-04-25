import { useState, useEffect } from 'react'

interface ScreenDimensions {
  width: number
  height: number
}

const useScreenDimensions = (): ScreenDimensions => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    return {
      width: 0,
      height: 0
    }
  })

  const handleResize = () => {
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return screenDimensions
}

export default useScreenDimensions
