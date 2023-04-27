import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  )
})

Recommend.displayName = 'Recommend'
export default Recommend
