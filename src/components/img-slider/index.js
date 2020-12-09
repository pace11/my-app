import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import theme from '../theme'

const StyledImgSlider = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${theme.colors.grey4};
  img {
    width: 100%;
    height: 100%;
  }
`

const ImgSliderTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 5px;
  background: ${theme.colors.purple};
  border-radius: 5px;
  box-sizing: border-box;
  p {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${theme.colors.orange};
    text-align: center;
  }
`

/**
 *
 * @param {Array, Object} props.items
 */
export default function ImgSlider({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }

  return (
    <Slider {...settings}>
      {items &&
        items.map((item) => (
          <StyledImgSlider key={String(item.id)}>
            <img
              src={`${process.env.REACT_APP_URL_IMG}${item.backdrop_path}`}
              alt={`${item.backdrop_path}`}
            />
            <ImgSliderTitle>
              <p>{item.title}</p>
            </ImgSliderTitle>
          </StyledImgSlider>
        ))}
    </Slider>
  )
}
