import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Songs</h2>
    </div>
  )
})

Songs.displayName = 'Songs'
export default Songs
