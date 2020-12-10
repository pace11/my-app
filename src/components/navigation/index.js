import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${theme.colors.purple};
  color: ${theme.colors.orange};
  p {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
`

/**
 *
 * @param {String} props.title
 */
function Navigation({ title }) {
  return (
    <StyledNavigation>
      <p>{title}</p>
    </StyledNavigation>
  )
}

Navigation.defaultProps = {
  title: 'MOVIEDB APP',
}

export default Navigation