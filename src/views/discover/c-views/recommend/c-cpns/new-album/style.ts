import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 20px;
  .disk {
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px 0;
    border: 1px solid #d3d3d3;
    width: 689px;
    /* transform: translateX(-16px); */
    .inner {
      position: relative;
      height: 184px;
      background: #f5f5f5;
      padding: 0 16px;
      /* width: 673px; */
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
        width: 645px;
        height: 180px;
        overflow: hidden;
        margin-right: 16px;
        .album-list {
          display: flex;
          margin-top: 28px;
          height: 180px;
        }
      }
    }
  }
`
