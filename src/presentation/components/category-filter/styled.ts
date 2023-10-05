import styled from 'styled-components'

export const CategoryFWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  .active {
    color: #78ad20;
    border: 1px solid #78ad20;
  }
`

export const CategoryButton = styled.div`
  cursor: pointer;
  color: #6f42c1;
  border: 1px solid #6f42c1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  min-width: 55px;
  box-sizing: border-box;
  padding: 8px 10px;
  border-radius: 20px;
  font-size: 0.75em;
  user-select: none;
`
export const CategoryTitle = styled.span`
  font-weight: bold;
`
