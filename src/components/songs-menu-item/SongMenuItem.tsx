import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SongMenuItemWrapper } from './style'
import { Link } from 'react-router-dom'
import { formatCount, formatImageToSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<IProps> = memo(({ itemData }: IProps) => {
  // console.log(itemData)

  return (
    <SongMenuItemWrapper>
      <div className="item">
        <div className="cover">
          <img
            src={formatImageToSize(itemData.picUrl, 140)}
            alt={itemData.name}
            title={itemData.name}
          />
          <Link to="/" className="sprite_cover"></Link>
          <div className="bottom sprite_cover">
            <div className="icon-play sprite_icon"></div>
            <div className="icon-headset sprite_icon"></div>
            <div className="view-count">{formatCount(itemData.playCount)}</div>
          </div>
        </div>
        <div className="desc">
          <Link to="/">{itemData.name}</Link>
        </div>
      </div>
    </SongMenuItemWrapper>
  )
})

SongMenuItem.displayName = 'SongMenu'
export default SongMenuItem
