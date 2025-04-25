import { ReactNode } from 'react'
type TConditionRender = {
  children: ReactNode
  condition?: unknown
}
const ConditionRender = ({ children, condition }: TConditionRender) => {
  return condition ? <>{children}</> : null
}

export default ConditionRender
