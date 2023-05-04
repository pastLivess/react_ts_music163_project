import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SectionHeaderV2Wrapper } from './style'
interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const SectionHeaderV2: FC<IProps> = memo(
  ({ title = '默认标题', moreText, moreLink }: IProps) => {
    return (
      <SectionHeaderV2Wrapper>
        <h3 className="singer">{title}</h3>
        {moreText && moreLink && (
          <a href={moreLink} className="more">
            {moreText}
          </a>
        )}
      </SectionHeaderV2Wrapper>
    )
  }
)

SectionHeaderV2.displayName = 'SectionHeaderV2'
export default SectionHeaderV2
