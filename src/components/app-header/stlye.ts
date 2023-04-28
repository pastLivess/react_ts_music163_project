import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background-color: skyblue;
  .header {
    height: 100px;
    background-color: orange;
    ${(props) => props.theme.mixin.wrapv1}
  }
`
