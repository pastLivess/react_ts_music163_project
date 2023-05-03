import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1/SectionHeaderV1'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = memo((props: IProps) => {
  return (
    <HotRecommendWrapper>
      <SectionHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
    </HotRecommendWrapper>
  )
})

HotRecommend.displayName = 'HotRecommend'
export default HotRecommend
