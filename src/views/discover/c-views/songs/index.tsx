import React,{memo} from 'react'
import type  { FC, ReactNode } from 'react'
interface IProps
{
  children?:ReactNode
}

const Songs:FC<IProps> = (props) => {
  return (
    <div>
      <div>Songs</div>
    </div>
  )
}

export default memo(Songs)

