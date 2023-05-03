import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  transition: all 50ms linear 0s;
  /* background: url('http://p1.music.126.net/GDIycUWDSRusx2FQwlq9YA==/109951168578571221.jpg?imageView&blur=40x20'); */
  /* background-size: 6000px; */
  /* background-position: center center; */
  .banner {
    position: relative;
    display: flex;
    width: 980px;
    height: 285px;
    margin: 0 auto;
  }
`
export const LeftBannerWrapper = styled.div`
  width: 730px;
  height: 100%;
  .item-image {
    width: 100%;
    height: 285px;
  }
  .dots {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 259px;
    left: 0;
    width: 730px;
    height: 20px;
    .item {
      cursor: pointer;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
      &:hover,
      &.active {
        background-position: -16px -343px;
      }
    }
  }
`
export const RightBannerWrapper = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  position: relative;
  flex: 1;
  background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
  .download {
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
    background-position: 0 9999px;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    text-align: center;
    color: #8d8d8d;
  }
  &:hover > .download {
    background-position: 0 -290px;
  }
`
export const BannerControlWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;
  .btn {
    cursor: pointer;
    position: absolute;
    width: 37px;
    height: 63px;
    background: url(${require('@/assets/img/banner_sprite.png')}) 0 9999px
      no-repeat;
  }
  .prev {
    left: -68px;
    background-position: 0 -360px;
    &:hover {
      background-position: 0 -430px;
    }
  }
  .next {
    right: -68px;
    background-position: 0 -508px;
    &:hover {
      background-position: 0 -578px;
    }
  }
`
