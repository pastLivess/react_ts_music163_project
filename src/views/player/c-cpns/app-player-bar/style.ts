import styled from 'styled-components'

export const AppPlayBarWrapper = styled.div`
  position: fixed;
  _position: absolute;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
  .playbar {
    position: absolute;
    zoom: 1;
    /* top: -53px; */
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    top: -53px;
    visibility: visible;
    .bg {
      height: 53px;
      zoom: 1;
      margin-right: 67px;
      background-position: 0 0;
      background-repeat: repeat-x;
    }
    .updn {
      position: relative;
      z-index: 11;
      .left {
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 -380px;
        > a {
          background-position: -80px -380px;
          display: block;
          width: 18px;
          height: 18px;
          margin: 6px 0 0 17px;
        }
      }
      .right {
        position: absolute;
        top: -1px;
        right: 0;
        width: 15px;
        height: 54px;
        background-position: -52px -393px;
        pointer-events: none;
      }
    }
    .wrap {
      /* margin-left: -498.5px; */
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 3px;
      z-index: 15;
      width: 980px;
      height: 47px;
      margin: 0 auto;
      margin-left: -490px;
    }
  }
`
export const PlayBarControlWrapper = styled.div<any>`
  .btns {
    display: flex;
    align-items: center;
    width: 137px;
    margin-top: 5px;
    .prev {
      background-position: 0 -130px;
      width: 28px;
      height: 28px;
      margin-right: 8px;
      margin-top: 5px;
      text-indent: -9999px;
      &:hover {
        background-position: -30px -130px;
      }
    }
    .play {
      width: 36px;
      height: 36px;
      background-position: ${(props) =>
        props?.isPlaying ? '0 -165px' : '0 -204px'};
      margin-right: 8px;
      text-indent: -9999px;
      &:hover {
        background-position: ${(props) =>
          props?.isPlaying ? '-40px -165px' : '-40px -204px'};
      }
    }
    .next {
      background-position: -80px -130px;
      width: 28px;
      height: 28px;
      margin-right: 8px;
      margin-top: 5px;
      text-indent: -9999px;
      &:hover {
        background-position: -110px -130px;
      }
    }
  }
`
export const PlayBarInfoWrapper = styled.div`
  display: flex;
  .head {
    position: relative;
    *zoom: 1;
    margin-right: 15px;
    margin-top: 5px;
    width: 34px;
    height: 34px;
    > img {
      width: 34px;
      height: 34px;
    }
    > a {
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }
  .play {
    display: flex;
    flex-direction: column;
    width: 581px;
    height: 37px;
    .words {
      display: flex;
      align-items: center;
      height: 28px;
      overflow: hidden;
      color: #e8e8e8;
      text-shadow: 0 1px 0 #171717;
      .music-name {
        max-width: 300px;
        color: #e8e8e8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        &:hover {
          text-decoration: underline;
        }
      }
      .artist-name {
        max-width: 220px;
        margin-left: 15px;
        color: #9b9b9b;
        > a {
          color: #9b9b9b;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .src {
        width: 15px;
        height: 15px;
        margin: 2px 0 0 13px;
        background-position: -110px -103px;
        &:hover {
          background-position: -130px -103px;
        }
      }
    }
    .pbar {
      position: relative;
      width: 466px;

      .time {
        position: absolute;
        top: 0;
        right: -84px;
        color: #797979;
        text-shadow: 0 1px 0 #121212;
        .current {
          color: #a1a1a1;
          font-style: normal;
          text-align: left;
          font-size: inherit;
        }
        > em {
          margin: 0 3px;
        }
      }
      .ant-slider {
        position: relative;
        /* top: -3px; */
        margin: 0;
        /* width: 493px; */
        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background-color: ${(props) => props.theme.color.primary};
        }
        .ant-slider-handle {
          inset-block-start: none;
          &::after {
            top: -5px;
            right: -13px;
            width: 22px;
            height: 24px;
            box-shadow: none;
            background: url(${require('@/assets/img/sprite_icon.png')});
            background-position: 0 -250px;
            background-color: transparent;
            /* &:hover {
              background-position: 0 -280px;
            } */
          }
          /* &:hover {
            inset-inline-start: -5px;
            inset-block-start: -5px;
            width: 22px;
            height: 24px;
          } */
        }
      }
    }
  }
`

export const PlayBarOperatorWrapper = styled.div`
  display: flex;
  .operator {
    display: flex;
    width: 87px;
    .pip {
      position: relative;
      background: url(${require('@/assets/img/icon-pip.png')}) no-repeat 0 0;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
      &:hover {
        background-position-y: -25px;
      }
    }
    .like {
      background-position: -88px -163px;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }
  .control {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
    width: 113px;
    margin-left: 13px;
    .m-vol {
      visibility: hidden;
      position: absolute;
      top: -113px;
      left: 9px;
      width: 32px;
      height: 113px;
    }
    .icon.volume {
      background-position: -2px -248px;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
      &:hover {
        background-position: -31px -248px;
      }
    }
    .icon.mode {
      background-position: -66px -344px;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
      &:hover {
        background-position: -93px -344px;
      }
    }
    .add {
      position: relative;
      zoom: 1;
      width: 59px;
      height: 36px;
      &:hover > a {
        background-position: -42px -98px;
        text-decoration: none;
      }
      .tip {
        display: none;
        position: absolute;
        top: -51px;
        left: -65px;
        clear: both;
        width: 152px;
        height: 49px;
        background-position: 0 -287px;
        text-align: center;
        color: #fff;
        line-height: 37px;
      }
      > a {
        display: block;
        width: 59px;
        padding-left: 21px;
        background-position: -42px -68px;
        line-height: 27px;
        text-align: center;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        text-indent: 0;
        text-decoration: none;
        height: 25px;
        margin: 11px 2px 0 0;
      }
    }
    .tip-1 {
      display: none;
      top: -35px;
      left: 12px;
      width: 81px;
      height: 39px;
      line-height: 34px;
      background-position: 0 -457px;
      text-align: center;
      color: #fff;
    }
  }
`
