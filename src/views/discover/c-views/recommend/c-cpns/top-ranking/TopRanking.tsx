import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopRankingWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1/SectionHeaderV1'
interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = memo((props: IProps) => {
  return (
    <TopRankingWrapper>
      <SectionHeaderV1 title="榜单" />
      <div className="content"></div>
    </TopRankingWrapper>
  )
})

TopRanking.displayName = 'TopRanking'
export default TopRanking
