import styled, { CSSProperties } from 'styled-components'
import synvia from './synvia_black.svg'

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  border-bottom: 1px solid #ccc;
  box-shadow: 2px 2px 6px #ccc;
  justify-content: center;
  align-items: center;
  background: white;
`

export const Logo = styled.img.attrs({
  src: synvia,
})``

export const colFlexMiddle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}
