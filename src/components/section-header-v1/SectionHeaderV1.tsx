import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SectionHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const SectionHeaderV1: FC<IProps> = memo((props: IProps) => {
  const keyWords = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <SectionHeaderV1Wrapper className="sprite_02">
      <div className="left ">
        <Link to="/discover/songs" className="title">
          热门推荐
        </Link>
        <div className="keywords">
          {keyWords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <Link to="/discover/songs">{item}</Link>
                {index < keyWords.length - 1 && (
                  <span className="divider">|</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to="/discover/songs">更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </SectionHeaderV1Wrapper>
  )
})

SectionHeaderV1.displayName = 'SectionHeaderV1'
export default SectionHeaderV1
