import React from 'react'
import styled from 'styled-components'
import ShimmerDiv from '../../../components/shimmer'

const StyledShimmer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 0;
`

const RowShimmer = styled.div`
  height: auto;
`

export default function Shimmer() {
  return (
    <StyledShimmer>
      <RowShimmer>
        <ShimmerDiv height="200px" width="100%" />
      </RowShimmer>
    </StyledShimmer>
  )
}
