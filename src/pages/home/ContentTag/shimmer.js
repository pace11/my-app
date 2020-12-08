import React from 'react'
import styled from 'styled-components'
import ShimmerDiv from '../../../components/shimmer'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 0;
`

const RowShimmer = styled.div`
  height: auto;
`

export default function Shimmer() {
  return (
    <Container>
      <RowShimmer>
        <ShimmerDiv height="20px" width="100%" />
      </RowShimmer>
    </Container>
  )
}
