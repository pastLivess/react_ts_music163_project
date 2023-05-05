import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopRankingWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1/SectionHeaderV1'
import { useAppSelector } from '@/hooks/types/app'
import TopRankingItem from '../top-ranking-item/TopRankingItem'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = memo(() => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    shallowEqual
  )
  return (
    <TopRankingWrapper>
      <SectionHeaderV1 title="榜单" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item?.id} itemData={item} />
        })}
      </div>
    </TopRankingWrapper>
  )
})

TopRanking.displayName = 'TopRanking'
export default TopRanking
