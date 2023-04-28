import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background-color: #242424;
  .header {
    display: flex;
    /* background-color: orange; */
    ${(props) => props.theme.mixin.wrapv1}
  }
  .subnav {
    height: 5px;
    z-index: 999;
    background-color: ${(props) => props.theme.color.primary};
  }
`
export const HeaderLeftWrapper = styled.div`
  /* width: 176px; */
  height: 69px;
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  .logo {
    height: 100%;
    width: 176px;
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
        width: 90px;
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
export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* flex: 1 0 auto; */
  .search {
    width: 158px;
    border-radius: 32px;
    overflow: hidden;
    .ant-input {
      font-size: 12px;
    }
    /* flex: 1; */
  }
  .center {
    cursor: pointer;
    width: 90px;
    border: 1px solid #4f4f4f;
    line-height: 32px;
    color: #ccc;
    border-radius: 20px;
    margin: 0 10px;
  }
  .profile {
    cursor: pointer;
    width: 50px;
    color: #787878;
  }
`
