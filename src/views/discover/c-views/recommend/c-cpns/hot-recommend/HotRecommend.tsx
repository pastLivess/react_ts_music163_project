import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1/SectionHeaderV1'

import { useAppSelector } from '@/hooks/types/app'
import { shallowEqual } from 'react-redux'
import SongMenuItem from '@/components/songs-menu-item/SongMenuItem'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = memo((props: IProps) => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqual
  )
  console.log(hotRecommend)

  return (
    <HotRecommendWrapper>
      <SectionHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="hot-recommend">
        {hotRecommend.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})

HotRecommend.displayName = 'HotRecommend'
export default HotRecommend
