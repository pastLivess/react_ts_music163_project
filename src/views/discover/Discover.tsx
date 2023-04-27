import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Discover</h2>
    </div>
  )
})

Discover.displayName = 'Discover'
export default Discover
