import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AppHeaderWrapper } from './stlye'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = memo((props: IProps) => {
  return (
    <AppHeaderWrapper>
      <div className="header">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
    </AppHeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'
export default AppHeader
