import { RefObject, useEffect, useState } from 'react'

const useElementBounding = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [elementBounding, setElementBounding] = useState<Omit<DOMRect, 'toJSON'>>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0
  })
  useEffect(() => {
    if (!ref.current) return

    if (typeof window !== 'undefined') {
      const updateBounding = () => {
        if (ref.current) {
          setElementBounding(ref.current.getBoundingClientRect())
        }
      }

      // Update bounding on resize
      window.addEventListener('resize', updateBounding)

      // Set initial bounding box
      updateBounding()

      return () => {
        window.removeEventListener('resize', updateBounding)
      }
    }
  }, [ref])

  return elementBounding
}

export default useElementBounding
