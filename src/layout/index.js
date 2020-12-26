import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import ContentStoryDetail from './ContentStoryDetail'

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const RowContent = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden scroll;
`

/**
 *
 * @param {ReactNode} props.children
 */
export default function Layout({
  percentage,
  items,
  showStoryDetail,
  onClick,
  children,
}) {
  return (
    <StyledLayout>
      {showStoryDetail ? (
        <ContentStoryDetail
          percentage={percentage}
          onClick={onClick}
          items={items}
        />
      ) : (
        <Fragment>
          <Navigation />
          <RowContent>{children}</RowContent>
        </Fragment>
      )}
    </StyledLayout>
  )
}
