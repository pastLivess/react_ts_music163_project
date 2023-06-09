import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Artist</h2>
    </div>
  )
})

Artist.displayName = 'Artist'
export default Artist
