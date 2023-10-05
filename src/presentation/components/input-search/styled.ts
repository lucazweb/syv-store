import styled from 'styled-components'
import searchBg from './search_bg.png'

export const StyledInput = styled.input`
  appearance: none;
  outline: none;
  width: 100%;
  padding: 12px 28px;
  border-radius: 20px;
  background-color: white;
  background-image: url(${searchBg});
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 98%;
  background-position-y: 50%;
  font-size: 0.8em;
  border: 1px solid #6f42c1;
  transition: border-color ease 0.3s;
  &:hover,
  &:focus {
    border: 1px solid #86bd2c;
  }

  &::placeholder {
    color: #333;
  }
`
