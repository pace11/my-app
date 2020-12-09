import React from 'react'
import styled from 'styled-components'
import theme from '../../components/theme'

const StyledCard = styled.div`
  position: relative;
`

const CardImage = styled.div`
  height: 250px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${theme.colors.grey3};
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const CardTitle = styled.p`
  margin: 5px 0 0 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: ${theme.colors.grey1};
`

const CardReleaseDate = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.grey1};
`

const CardLabelRating = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 5px;
  border-radius: 5px;
  background: ${theme.colors.purple};
  color: ${theme.colors.orange};
`

/**
 *
 * @param {Number} props.rating
 * @param {String} props.imgUrl
 * @param {String} props.title
 * @param {String} props.releaseDate
 */
export default function Card({ rating, imgUrl, title, releaseDate }) {
  return (
    <StyledCard>
      {rating !== parseInt(0) && (
        <CardLabelRating>Rating: {rating}</CardLabelRating>
      )}
      <CardImage>
        <img
          src={`${process.env.REACT_APP_URL_IMG}${imgUrl}`}
          alt={`${imgUrl}`}
        />
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardReleaseDate>
        {new Date(releaseDate).toDateString()}
      </CardReleaseDate>
    </StyledCard>
  )
}
