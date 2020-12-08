import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
// import theme from '../theme'

const Container = styled.div`
  height: auto;
  padding: 0;
  margin-bottom: 25px;
`

const StyledTag = styled.div`
  display: inline-block;
  padding: 0px 8px 4px 8px;
  background: ${(props) =>
    props.isSelected ? theme.colors.purple : `transparent`};
  box-shadow: ${(props) =>
    props.isSelected
      ? `0px 0px 0px 0px`
      : `0px 0px 0px 1px black inset`};
  border-radius: 5px;
  margin: 0 5px 5px 0;
  cursor: pointer;
  outline: none;
  color: ${(props) =>
    props.isSelected ? theme.colors.orange : `black`};
`

export default function Tag({ items, onClick, data }) {
  return (
    <Container>
      {items &&
        items.map((item) => (
          <StyledTag
            key={String(item.id)}
            onClick={() => onClick(item)}
            isSelected={data === item.id}
          >
            {item.name}
          </StyledTag>
        ))}
    </Container>
  )
}
