import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`

const RowContent = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden scroll;
`

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navigation />
      <RowContent>{children}</RowContent>
    </StyledLayout>
  )
}
