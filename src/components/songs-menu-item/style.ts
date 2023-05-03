import styled from 'styled-components'

export const SongMenuItemWrapper = styled.div`
  margin: 20px 0 0 0;
  .item {
    width: 140px;
    height: 204px;
    .cover {
      position: relative;
      width: 140px;
      height: 140px;
      > img {
        width: 100%;
        height: 100%;
      }
      > a {
        background-position: 0 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .bottom {
        position: absolute;
        display: flex;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        .icon-play {
          position: absolute;
          right: 10px;
          bottom: 5px;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
        .icon-headset {
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin: 9px 5px 9px 10px;
        }
        .view-count {
          margin: 7px 0 0 0;
        }
      }
    }
    .desc {
      margin: 8px 0 3px;
      font-size: 14px;
      width: 100%;
      a {
        max-width: 100%;
        color: #000;
        vertical-align: middle;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
