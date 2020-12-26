import React from 'react'
import styled from 'styled-components'
import ShimmerDiv from '../../../components/shimmer'

const StyledShimmer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`

const RowShimmer = styled.div`
  height: auto;
`

export default function Shimmer() {
  return (
    <StyledShimmer>
      {[...Array(6).keys()].map((index) => (
        <RowShimmer key={String(index)}>
          <ShimmerDiv height="50px" width="50px" borderRadius="50%" />
        </RowShimmer>
      ))}
    </StyledShimmer>
  )
}
