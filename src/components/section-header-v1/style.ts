import styled from 'styled-components'

export const SectionHeaderV1Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  /* line-height: 33px; */
  .left {
    display: flex;
    .title {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .keywords {
      display: flex;
      margin: 7px 0 0 20px;
      .item {
        > a {
          color: #333;
          &:hover {
            color: #666;
            text-decoration: underline;
          }
        }
        .divider {
          margin: 0 10px;
          color: #ccc;
        }
      }
    }
  }
  .right {
    /* margin-top: 9px; */
    > a {
      color: #333;
      &:hover {
        color: #666;
        text-decoration: underline;
      }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`
