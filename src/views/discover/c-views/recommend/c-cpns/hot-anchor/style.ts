import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  margin-top: 15px;
  .hotdj-list {
    margin: 20px 0 0 20px;

    .hotdj-item {
      display: flex;
      align-items: center;
      width: 210px;
      height: 50px;
      .cover {
        width: 40px;
        margin-right: 10px;
        > img {
          width: 40px;
          height: 40px;
          box-shadow: 0 0 1px #333333 inset;
        }
      }
      .info {
        width: 160px;
        line-height: 21px;
        .nickname {
          width: 100%;
          > a {
            font-size: 12px;
          }
        }
        .position {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
  }
`
