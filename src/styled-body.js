import React from 'react'
import styled from 'styled-components'

const StyledBodyComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledChildren = styled.div`
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 360px) {
    width: 100%;
  }
  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 425px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 425px;
  }
`

/**
 *
 * @param {ReactNode} props.children
 */
export default function BodyComponent({ children }) {
  return (
    <StyledBodyComponent>
      <StyledChildren>{children}</StyledChildren>
    </StyledBodyComponent>
  )
}
