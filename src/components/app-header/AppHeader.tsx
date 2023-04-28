import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import {
  AppHeaderWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper
} from './stlye'
interface IProps {
  children?: ReactNode
}
import headerTitlesData from '@/assets/data/header-titles.json'
import { Link } from 'react-router-dom'

const AppHeader: FC<IProps> = memo((props: IProps) => {
  function showItem({ type, title, path }: any) {
    if (type === 'path') {
      return <Link to={path}>{title}</Link>
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
        <HeaderRightWrapper></HeaderRightWrapper>
      </div>
    </AppHeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'
export default AppHeader
