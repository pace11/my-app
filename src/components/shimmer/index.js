import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../components/theme'

const shimmerAnimation = keyframes`
  0% {
    background-position: -25rem 0;
  }
  100% {
    background-position: 25rem 0;
  }
`

const StyledShimmer = styled.div`
  animation-name: ${shimmerAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  background-color: ${theme.colors.grey1};
  background-image: linear-gradient(
    80deg,
    ${() =>
      `${theme.colors.grey3} 10%, ${theme.colors.grey5} 100%, ${theme.colors.grey3} 30%`}
  );
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-size: 50rem 10rem;
  margin-bottom: 10px;
  border-radius: 5px;
`

/**
 *
 * @param {String, Number} props.height
 * @param {String, Number} props.width
 */
export default function Shimmer({ height, width }) {
  return <StyledShimmer height={height} width={width} />
}
