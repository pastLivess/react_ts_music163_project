import React, { memo, useRef } from 'react'
import type { ElementRef, ReactNode, FC } from 'react'
import {
  BannerControlWrapper,
  LeftBannerWrapper,
  RightBannerWrapper,
  TopBannerWrapper
} from './style'
import { Carousel } from 'antd'
interface IProps {
  banners: any[]
  children?: ReactNode
}

const TopBanner: FC<IProps> = memo(({ banners }: IProps) => {
  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlerBtnClick(control: string) {
    if (control === 'prev') CarouselRef.current?.prev()
    else CarouselRef.current?.next()
  }
  return (
    <TopBannerWrapper
    // style={{
    //   background: `url('${}) center center / 6000px`
    // }}
    >
      <div className="banner">
        <LeftBannerWrapper>
          <Carousel
            ref={CarouselRef}
            easing="ease-in"
            autoplaySpeed={2000}
            autoplay
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
