import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledButton = styled.button`
  width: auto;
  padding: 5px 10px;
  background: ${theme.colors.orange};
  color: ${theme.colors.white};
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  border-radius: 5px;
  cursor: pointer;
  :active {
    opacity: 0.8;
  }
`

export default function Button({ onClick, children, isLoading }) {
  return (
    <StyledButton isLoading={isLoading} onClick={onClick}>
      {isLoading ? 'Loading ...' : children}
    </StyledButton>
  )
}
