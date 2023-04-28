import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background-color: #242424;
  .header {
    height: 100px;
    /* background-color: orange; */
    ${(props) => props.theme.mixin.wrapv1}
  }
`
export const HeaderLeftWrapper = styled.div`
  width: 176px;
  height: 69px;
  display: flex;
  align-items: center;
  .logo {
    display: block;
    height: 100%;
    flex: 1 0 176px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .header-titles {
    display: flex;
    text-align: center;
    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 70px;
      &:hover {
        background: #000;
        text-decoration: none;
      }
      &:hover > a {
        color: #fff;
      }
      &:last-of-type {
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 15px;
          right: -24px;
        }
      }
      a {
        width: 70px;
        height: 100%;
        padding: 0 5px;
        line-height: 70px;
        font-size: 14px;
        color: #ccc;
        &.active {
          background: #000;
          text-decoration: none;
          color: #fff;
        }
      }
      .active .icon {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRightWrapper = styled.div``
