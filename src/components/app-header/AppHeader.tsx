import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>AppHeader</h2>
    </div>
  )
})

AppHeader.displayName = 'AppHeader'
export default AppHeader
