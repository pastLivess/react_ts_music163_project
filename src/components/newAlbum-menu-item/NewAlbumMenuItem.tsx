import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NewAlbumMenuItemWrapper } from './style'
import { Link } from 'react-router-dom'
import { formatImageToSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumMenuItem: FC<IProps> = memo(({ itemData }: IProps) => {
  // console.log(itemData)

  return (
    <NewAlbumMenuItemWrapper className="sprite_02">
      <div className="cover">
        <img src={formatImageToSize(itemData.picUrl, 100)} alt="" />
        <Link to="/" className="sprite_cover"></Link>
        <i className="icon icon-play"></i>
      </div>
      <p className="album-name">
        <a href="">{itemData.name}</a>
      </p>
      <p className="album-artist">
        <a href="">{itemData.artist.name}</a>
      </p>
    </NewAlbumMenuItemWrapper>
  )
})

NewAlbumMenuItem.displayName = 'NewAlbumMenuItem'
export default NewAlbumMenuItem
