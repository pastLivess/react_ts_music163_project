import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { UserLoginWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = memo((props: IProps) => {
  return (
    <UserLoginWrapper className="sprite_02">
      <p className="login-text">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href="" className="login-btn sprite_02">
        用户登录
      </a>
    </UserLoginWrapper>
  )
})

UserLogin.displayName = 'UserLogin'
export default UserLogin
