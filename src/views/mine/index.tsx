import React,{memo} from 'react'
import type  { FC, ReactNode } from 'react'
interface IProps
{
  children?:ReactNode
}

const Mine:FC<IProps> = (props) => {
  return (
    <div>
      <div>Mine</div>
    </div>
  )
}

export default memo(Mine)

