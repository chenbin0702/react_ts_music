import React,{memo} from 'react'
import type  { FC, ReactNode } from 'react'
interface IProps
{
  children?:ReactNode
}

const Artist:FC<IProps> = (props) => {
  return (
    <div>
      <div>Artist</div>
    </div>
  )
}

export default memo(Artist)

