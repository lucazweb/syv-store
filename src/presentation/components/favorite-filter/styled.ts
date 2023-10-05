import styled from 'styled-components'

export const FilterTitle = styled.span`
  font-weight: bold;
`

export const InputToggle = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + .react-switch-label .react-switch-button {
    left: 85%;
    transform: translateX(-100%);
  }
`

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 70px;
  height: 20px;
  background: grey;
  border-radius: 3px;
  position: relative;
  transition: background-color 0.2s;

  &:active .react-switch-button {
    width: 20px;
  }
  & .react-switch-button {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 34%;
    height: 100%;
    border-radius: 3px;
    transition: 0.2s;
    background: #fff;
  }
`

export const FavoriteFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .ischecked {
    background: #86bd2c !important;
  }
  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    height: 20px;
    /* background: #86bd2c; */
    border-radius: 30px;
    position: relative;
    transition: background-color 0.2s;
    &:active .react-switch-button {
      width: 20px;
    }
    & .react-switch-button {
      content: '';
      position: absolute;
      top: 2px;
      left: 4px;
      width: 34%;
      height: 75%;
      border-radius: 30px;
      transition: 0.2s;
      background: #fff;
    }
  }
`
