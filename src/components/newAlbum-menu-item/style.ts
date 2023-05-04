import styled from 'styled-components'

export const NewAlbumMenuItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background-position: -260px 100px;
  .cover {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
    > img {
      width: 100%;
      height: 100%;
    }
    > a {
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .album-name {
    display: flex;
    > a {
      color: #000;
    }
  }
  .album-artist {
    > a {
      color: #666;
    }
  }
  .album-name,
  .album-artist {
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    > a {
      font-size: 12px;
    }
  }
`
