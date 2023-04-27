import React, { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Discover</h2>
      {/* 显示二级路由 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
})

Discover.displayName = 'Discover'
export default Discover
