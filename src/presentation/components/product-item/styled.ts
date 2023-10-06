import styled, { CSSProperties } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 135px;
  gap: 18px;
  img {
    width: 100%;
  }

  .always-visble {
    display: block !important;
    opacity: 1 !important;
  }

  svg {
    transition: opacity ease 0.5s;
    display: none;
    opacity: 0;
  }

  &:hover {
    svg {
      display: block;
      opacity: 1;
    }
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
`
export const ProductId = styled.span``

export const ProductTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 0.9em;
  height: 40px;
`

export const Image = styled.div<{ bgimage?: string }>`
  width: 135px;
  height: 135px;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const ProductCategory = styled.div`
  box-sizing: border-box;
  display: flex;
  align-self: self-start;
  background: #6f42c1;
  color: white;
  padding: 6px 10px;
  height: 30px;
  border-radius: 4px;
`

export const favoriteStyles: CSSProperties = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  zIndex: 900,
  cursor: 'pointer',
}
