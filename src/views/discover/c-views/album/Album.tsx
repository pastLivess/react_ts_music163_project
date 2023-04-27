import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Album</h2>
    </div>
  )
})

Album.displayName = 'Album'
export default Album
