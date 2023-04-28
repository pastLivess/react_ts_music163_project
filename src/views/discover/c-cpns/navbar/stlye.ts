import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  height: 35px;
  background-color: ${(props) => props.theme.color.primary};
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
  .nav {
    display: flex;
    align-items: center;
    height: 34px;
    ${(props) => props.theme.mixin.wrapv1}
    padding-left: 180px;
    /* transform: translateX(-50%, -50%); */
    .item {
      margin: 0 16px;
      > a {
        color: #fff;
        padding: 3px 13px;
        border-radius: 20px;
        &.active {
          background: ${(props) => props.theme.color.thirdly};
        }
        &:hover {
          background: ${(props) => props.theme.color.thirdly};
        }
      }
    }
  }
`
