import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SectionHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const SectionHeaderV1: FC<IProps> = memo(
  ({
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  }: IProps) => {
    return (
      <SectionHeaderV1Wrapper className="sprite_02">
        <div className="left">
          <Link to="/discover/songs" className="title">
            {title}
          </Link>
          <div className="keywords">
            {keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <Link to="/discover/songs">{item}</Link>
                  {index < keywords.length - 1 && (
                    <span className="divider">|</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="right">
          <Link to={moreLink}>{moreText}</Link>
          <i className="icon sprite_02"></i>
        </div>
      </SectionHeaderV1Wrapper>
    )
  }
)

SectionHeaderV1.displayName = 'SectionHeaderV1'
export default SectionHeaderV1
