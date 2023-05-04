import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopRankingItemWrapper } from './style'
import { formatImageToSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = memo(({ itemData }: IProps) => {
  console.log(itemData)
  const { tracks } = itemData
  return (
    <TopRankingItemWrapper>
      <div className="top">
        <div className="cover" title={itemData.name}>
          <img src={formatImageToSize(itemData.coverImgUrl, 100)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="title">
          <a href="" title={itemData.name}>
            {itemData.name}
          </a>
          <div className="icon-btn">
            <i className="icon icon-play sprite_02" title="播放">
              播放
            </i>
            <i className="icon icon-collect sprite_02" title="收藏">
              收藏
            </i>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div key={item.id} className="item">
              <span className="ranking-index">{index + 1}</span>
              <div className="ranking-name">
                <a href="" title={item.name}>
                  {item.name}
                </a>
                <div className="control">
                  <a
                    title="播放"
                    href=""
                    className="icon icon-play sprite_02"
                  ></a>
                  <a
                    title="添加到播放列表"
                    href=""
                    className="icon icon-add sprite_icon2"
                  ></a>
                  <a
                    title="收藏"
                    href=""
                    className="icon icon-collect sprite_02"
                  ></a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="more">
        <a href="">查看更多&gt;</a>
      </div>
    </TopRankingItemWrapper>
  )
})

TopRankingItem.displayName = 'TopRankingItem'
export default TopRankingItem
