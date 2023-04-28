import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>AppFooter</h2>
    </div>
  )
})

AppFooter.displayName = 'AppFooter'
export default AppFooter
