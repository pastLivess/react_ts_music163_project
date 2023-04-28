import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import {
  AppHeaderWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper
} from './stlye'
interface IProps {
  children?: ReactNode
}
import headerTitlesData from '@/assets/data/header-titles.json'
import { NavLink, useLocation } from 'react-router-dom'

const AppHeader: FC<IProps> = memo((props: IProps) => {
  const { pathname } = useLocation()

  function showItem({ type, title, path }: any) {
    if (type === 'path') {
      return (
        <NavLink to={path}>
          {title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={path} rel="noreferrer" target="_blank">
          {title}
        </a>
      )
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="header">
        <HeaderLeftWrapper>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="header-titles">
            {headerTitlesData.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <div className="search">
            <Input
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
              bordered={true}
            />
          </div>
          <span className="center">创作者中心</span>
          <span className="profile">登录</span>
        </HeaderRightWrapper>
      </div>
      {pathname !== '/discover' && pathname !== '/discover/recommend' && (
        <div className="subnav"></div>
      )}
    </AppHeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'
export default AppHeader
