import { RefObject, useEffect } from "react"

const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callBack: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callBack()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, callBack])
}

export default useClickOutside