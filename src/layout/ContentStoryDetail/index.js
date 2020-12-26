import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../components/theme'

const Zoom = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`

const StyledStoryDetail = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.purple};
  animation: ${Zoom} 0.3s ease-out;
  p {
    margin: 0;
  }
  span {
    position: absolute;
    color: ${theme.colors.white};
    right: 0;
    margin: 10px 5px;
    z-index: 999;
    background-color: ${theme.colors.orange};
    padding: 2px 5px 5px 5px;
    font-size: 12px;
    color: ${theme.colors.white};
    border-radius: 5px;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    transition-timing-function: ease-in-out;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
`

const StyledProgress = styled.div`
  position: absolute;
  width: ${(props) => props.percentage * 20}%;
  height: 5px;
  background-color: ${theme.colors.orange};
  border-radius: 10px;
`

function ContentStoryDetail({ items, percentage, onClick }) {
  return (
    <StyledStoryDetail>
      <StyledProgress percentage={percentage} />
      <img
        src={`${process.env.REACT_APP_URL_IMG}${items.poster_path}`}
        alt={`${items.poster_path}`}
      />
      <span onClick={onClick}>Close</span>
    </StyledStoryDetail>
  )
}

ContentStoryDetail.defaultProps = {
  percentage: 100,
}

export default ContentStoryDetail
