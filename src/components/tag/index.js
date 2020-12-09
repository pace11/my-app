import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledTag = styled.div`
  height: auto;
  padding: 0;
  margin-bottom: 25px;
`

const TagList = styled.div`
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

/**
 *
 * @param {Array, Object} props.items
 * @param {Number} props.data
 * @param {Function} props.onClick
 */
export default function Tag({ items, data, onClick }) {
  return (
    <StyledTag>
      {items &&
        items.map((item) => (
          <TagList
            key={String(item.id)}
            onClick={() => onClick(item)}
            isSelected={data === item.id}
          >
            {item.name}
          </TagList>
        ))}
    </StyledTag>
  )
}
