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
    /* margin-right: 251px; */
  }
  .content {
    width: 709px;
    padding: 20px 0 40px 20px;
  }
`
export const RecommendLeftWrapper = styled.div`
  width: 729px;
  /* flex: 1 0 auto; */
`
export const RecommendRightWrapper = styled.div`
  width: 250px;
  height: 150px;
  margin-left: 1px;
  .user-login {
  }
`
