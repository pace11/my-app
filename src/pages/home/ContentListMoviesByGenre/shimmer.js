import React from 'react'
import styled from 'styled-components'
import ShimmerDiv from '../../../components/shimmer'

const StyledShimmer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`

const RowShimmer = styled.div`
  height: auto;
`

export default function Shimmer() {
  return (
    <StyledShimmer>
      {[...Array(3).keys()].map((i) => (
        <RowShimmer key={String(i)}>
          <ShimmerDiv height="250px" width="100%" />
          <ShimmerDiv height="15px" width="80%" />
          <ShimmerDiv height="15px" width="60%" />
        </RowShimmer>
      ))}
    </StyledShimmer>
  )
}
