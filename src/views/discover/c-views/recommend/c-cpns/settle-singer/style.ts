import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top: 15px;
  .singer-list {
    margin: 6px 0 14px 20px;
    .singer-item {
      margin-top: 14px;
      > a {
        display: flex;
        width: 210px;
        height: 70px;
        background: #fafafa;
        &:hover {
          background: #f4f4f4;
        }
        .favor {
          width: 70px;
          height: 70px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          flex: 1;
          width: 133px;
          height: 60px;
          /* line-height: 60px; */
          padding-left: 14px;
          border: 1px solid #e9e9e9;
          border-left: none;
          .artist-name {
            width: 90%;
            font-size: 14px;
            font-weight: 700;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
          .artist-info {
            cursor: pointer;
            width: 90%;
            color: #666;
            margin-top: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
        }
      }
    }
  }
  .apply {
    .btn {
      display: block;
      width: 210px;
      border-radius: 4px;
      color: #333;
      margin-left: 20px;
      background-position: right -100px;
      padding: 0 4px 0 0;
      &:hover {
        background-position: right -182px;
      }
      &:hover > i {
        background-position: 0 -141px;
      }
      > i {
        display: block;
        text-align: center;
        height: 31px;
        line-height: 31px;
        font-weight: bold;
        font-style: normal;
        color: #333;
        background-position: 0 -59px;
        padding: 0 15px 0 20px;
        pointer-events: none;
      }
    }
  }
`
