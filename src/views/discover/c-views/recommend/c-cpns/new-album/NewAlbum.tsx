import React, { memo, useRef } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { NewAlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1/SectionHeaderV1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/hooks/types/app'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = memo((props: IProps) => {
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum
    }),
    shallowEqual
  )
  console.log(newAlbum)

  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlerArrowClick(arrow: string) {
    if (arrow === 'prev') carouselRef.current?.prev()
    else carouselRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <SectionHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="disk">
        <div className="inner">
          <i
            onClick={() => handlerArrowClick('prev')}
            className="arrow arrow-left sprite_02"
          ></i>
          <div className="banner">
            <Carousel speed={1500} ref={carouselRef} dots={false}>
              {[0, 1].map((item) => {
                return (
                  <div className="album-list" key={item}>
                    {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <div key={album.id}>{album.name}</div>
                    })}
                  </div>
                )
              })}
            </Carousel>
          </div>
          <i
            onClick={() => handlerArrowClick('next')}
            className="arrow arrow-right sprite_02"
          ></i>
        </div>
      </div>
    </NewAlbumWrapper>
  )
})

NewAlbum.displayName = 'NewAlbum'
export default NewAlbum
