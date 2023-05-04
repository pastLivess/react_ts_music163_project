import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 20px;
  .disk {
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner {
      position: relative;
      height: 184px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #fff;
      .arrow {
        position: absolute;
        cursor: pointer;
        top: 71px;
        width: 17px;
        height: 17px;
      }
      .arrow-left {
        left: 4px;
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
      .arrow-right {
        right: 4px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
      .banner {
        position: relative;
        width: 625px;
        height: 180px;
        overflow: hidden;
        margin-right: 16px;
      }
    }
  }
`
