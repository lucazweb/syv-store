import styled, { keyframes } from 'styled-components'

const dualRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #6f42c1 transparent #6f42c1 transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`
