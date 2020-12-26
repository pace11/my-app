import React, { Fragment } from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Slider from 'react-slick'

const StyledImgStory = styled.div`
  width: auto;
  height: auto;
  position: relative;
  overflow: hidden;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.purple};
    padding: 1px;
    cursor: pointer;
  }
  outline: none;
`

/**
 *
 * @param {Array, Object} props.items
 */
export default function ImgSlider({ items, handleClickStoryDetail }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
  }

  return (
    <Fragment>
      <Slider {...settings}>
        {items &&
          items.map((item, i) => (
            <StyledImgStory
              key={String(item.id)}
              onClick={() => handleClickStoryDetail(i)}
            >
              <img
                src={`${process.env.REACT_APP_URL_IMG}${item.backdrop_path}`}
                alt={`${item.backdrop_path}`}
              />
            </StyledImgStory>
          ))}
      </Slider>
    </Fragment>
  )
}
