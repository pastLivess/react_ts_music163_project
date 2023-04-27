import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Mine</h2>
    </div>
  )
})

Mine.displayName = 'Mine'
export default Mine
