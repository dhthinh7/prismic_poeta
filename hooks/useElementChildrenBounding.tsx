import { RefObject, useEffect, useState } from 'react'
import useElementBounding from './useElementBounding'

const useElementChildrenBounding = <T extends HTMLElement, K extends HTMLElement>(
  refChildren: RefObject<T>,
  refParent: RefObject<K>
) => {
  const [bounding, setBounding] = useState<{ x: number; y: number; left: number; right: number }>({
    x: 0,
    y: 0,
    left: 0,
    right: 0
  })

  const { left: leftChildren, top: topChildren, right: rightChildren } = useElementBounding(refChildren)
  const { left: leftParent, top: topParent, right: rightParent } = useElementBounding(refParent)

  useEffect(() => {
    setBounding({
      x: leftChildren - leftParent,
      y: topChildren - topParent,
      left: leftChildren - leftParent,
      right: rightParent - rightChildren
    })
  }, [leftChildren, leftParent, rightChildren, rightParent, topChildren, topParent])

  return bounding
}

export default useElementChildrenBounding
