import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  /* background-color: #fff; */
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: url(${require('@/assets/img/wrap-bg.png')}) repeat-y 100% 100%;
  .main {
    display: flex;
  }
`
export const RecommendLeftWrapper = styled.div`
  width: 729px;
  height: 150px;
  padding: 20px;
  /* background-color: skyblue; */
`
export const RecommendRightWrapper = styled.div`
  /* flex: 1 0 250px; */
  width: 250px;
  height: 150px;
  margin-left: 1px;
  /* background-color: orange; */
`
