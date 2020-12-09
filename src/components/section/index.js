import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledSection = styled.div`
  height: auto;
  padding: 1rem;
  background: ${(props) => props.backgroundColor};
`

const SectionTitle = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  margin-bottom: 25px;
  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
  span {
    position: absolute;
    width: 60px;
    height: 5px;
    background: ${theme.colors.orange};
    border-radius: 5px;
    bottom: 0;
  }
`

/**
 *
 * @param {String} props.title
 * @param {String} props.backgroundColor,
 * @param {ReactNode} props.children
 */
function Section({ title, backgroundColor, children }) {
  return (
    <StyledSection backgroundColor={backgroundColor}>
      <SectionTitle>
        <p>{title}</p>
        <span></span>
      </SectionTitle>
      {children}
    </StyledSection>
  )
}

Section.defaultProps = {
  title: 'Section Title',
  backgroundColor: theme.colors.white,
}

export default Section
