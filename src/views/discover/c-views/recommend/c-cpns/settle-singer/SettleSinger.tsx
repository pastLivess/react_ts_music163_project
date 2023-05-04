import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SettleSingerWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2/SectionHeaderV2'
import { useAppSelector } from '@/hooks/types/app'
import { shallowEqual } from 'react-redux'
import { formatImageToSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = memo((props: IProps) => {
  const { topArtist } = useAppSelector(
    (state) => ({
      topArtist: state.recommend.topArtist
    }),
    shallowEqual
  )
  console.log(topArtist)

  return (
    <SettleSingerWrapper>
      <SectionHeaderV2
        title="入驻歌手"
        moreText="查看更多&gt;"
        moreLink="/discover/artist/signed"
      />
      <div className="singer-list">
        {topArtist.map((item) => {
          return (
            <div key={item.id} className="singer-item">
              <a href="">
                <div className="favor">
                  <img src={formatImageToSize(item.picUrl, 80)} alt="" />
                </div>
                <div className="info">
                  <p className="artist-name">{item.name}</p>
                  <p className="artist-info">{item.alias[0]}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className="apply">
        <a href="" className="btn sprite_button">
          <i className="sprite_button">申请成为网易音乐人</i>
        </a>
      </div>
    </SettleSingerWrapper>
  )
})

SettleSinger.displayName = 'SettleSinger'
export default SettleSinger
