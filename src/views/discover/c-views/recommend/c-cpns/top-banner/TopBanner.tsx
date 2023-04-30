import React, { memo, useEffect, useRef, useState } from 'react'
import type { ElementRef, ReactNode, FC } from 'react'

import {
  BannerControlWrapper,
  LeftBannerWrapper,
  RightBannerWrapper,
  TopBannerWrapper
} from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'
interface IProps {
  banners: any[]
  children?: ReactNode
}

const TopBanner: FC<IProps> = memo(({ banners }: IProps) => {
  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  function handlerBtnClick(control: string) {
    if (control === 'prev') CarouselRef.current?.prev()
    else CarouselRef.current?.next()
  }
  function handlerAfterChange(current: number) {
    console.log(current)
    setCurrentIndex(current)
  }
  let imgUrl = `${banners[currentIndex]?.imageUrl}`
  if (imgUrl) {
    imgUrl = imgUrl + '?imageView&blur=40x20'
  }
  return (
    <TopBannerWrapper
      style={{
        background: `url("${imgUrl}") center center / 6000px`
      }}
    >
      <div className="banner">
        <LeftBannerWrapper>
          <Carousel
            afterChange={handlerAfterChange}
            ref={CarouselRef}
            effect="fade"
            autoplay
            dots={false}
            waitForAnimate={true}
          >
            {banners.map((item) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img
                    className="item-image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </LeftBannerWrapper>
        <RightBannerWrapper>
          <div className="download"></div>
          <p className="text">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </RightBannerWrapper>
        <BannerControlWrapper>
          <div
            onClick={() => handlerBtnClick('prev')}
            className="btn prev"
          ></div>
          <div
            onClick={() => handlerBtnClick('next')}
            className="btn next"
          ></div>
        </BannerControlWrapper>
      </div>
    </TopBannerWrapper>
  )
})

TopBanner.displayName = 'TopBanner'
export default TopBanner
