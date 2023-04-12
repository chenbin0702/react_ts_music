import React,{memo} from 'react'
import type  { FC, ReactNode } from 'react'
interface IProps
{
  children?:ReactNode
}

const Focus:FC<IProps> = (props) => {
  return (
    <div>
      <div>Focus</div>
    </div>
  )
}

export default memo(Focus)

