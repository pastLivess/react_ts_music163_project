import styled from 'styled-components'

export const SectionHeaderV2Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 35px;
  border-bottom: 1px solid #ccc;
  margin: 0 20px;
  .singer {
    /* border-bottom: 2px solid #d13030; */
    font-size: 100%;
  }
  .more {
    display: block;
    &:hover {
      color: #666;
    }
  }
`
