import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Focus</h2>
    </div>
  )
})

Focus.displayName = 'Focus'
export default Focus
