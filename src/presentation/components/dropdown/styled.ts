import styled from 'styled-components'
import caretDown from './caret-down-solid.svg'

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`

export const DropLabel = styled.span`
  font-weight: bold;
  font-size: 0.9em;
`

export const DropdownWrapper = styled.div`
  margin: 0;
  z-index: 10000;
  box-sizing: border-box;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #6f42c1;
  position: relative;
  transition: border-color ease 0.3s;
  &:hover {
    border: 1px solid #86bd2c;
  }
  * {
    z-index: 10;
  }

  .dropdown-content {
    background: white;
    color: #6f42c1;
    position: absolute;
    top: 110%;
    left: 0;
    border-radius: 10px;
    border: 1px solid #6f42c1;
    width: 100%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.07);
    .item {
      padding: 10px;
      border-radius: 0px;
      cursor: pointer;
      &:first-child {
        border-radius: 10px 10px 0 0;
      }
      &:last-child {
        border-radius: 0 0 10px 10px;
      }
      &:hover {
        background: #fcfcfc;
      }
    }
  }
`

export const DropdownButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-indent: 8px;
  background-color: white;
  background-image: url(${caretDown});
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 48%;
  background-size: 8px;
  border-radius: 20px;
  color: #6f42c1;
  font-size: 0.9em;
  font-weight: 500;
`
