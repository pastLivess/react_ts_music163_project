import styled from 'styled-components'

export const TopRankingItemWrapper = styled.div`
  flex: 1;
  .top {
    display: flex;
    height: 100px;
    padding-left: 19px;
    .cover {
      position: relative;
      width: 80px;
      height: 80px;
      > img {
        width: 100%;
        height: 100%;
      }
      > a {
        background-position: -145px -57px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      flex: 1;
      margin: 6px 0 0 10px;
      > a {
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon-btn {
        display: flex;
        margin-top: 10px;
        .icon {
          cursor: pointer;
          display: block;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          text-indent: -9999px;
        }
        .icon-play {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .icon-collect {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .ranking-list {
    .item {
      display: flex;
      align-items: center;
      height: 32px;
      margin-left: 12px;
      &:nth-child(-n + 3) .ranking-index {
        color: #c10d0c;
      }

      .ranking-index {
        width: 35px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
      .ranking-name {
        display: flex;
        width: 180px;
        > a {
          display: block;
          width: 170px;
          height: 32px;
          line-height: 32px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          &:hover {
            text-decoration: underline;
            color: #000;
          }
          &:hover + .control {
            display: flex;
          }
        }
        .control {
          display: none;
          width: 82px;
          margin-top: 7px;
          .icon {
            display: block;
            width: 17px;
            height: 17px;
            margin-right: 10px;
          }
          .icon-play {
            background-position: -267px -268px;
          }
          .icon-add {
            margin: 2px 6px 0 0;
            background-position: 0 -700px;
          }
          .icon-collect {
            background-position: -297px -268px;
          }
          &:hover {
            display: flex;
          }
        }
      }
    }
  }
  .more {
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
    > a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
