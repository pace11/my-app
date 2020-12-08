import React from 'react'
import Slider from '../../../components/img-slider'
import Shimmer from './shimmer'

/**
 *
 * @param {Array, Object} props.items
 * @param {Boolean} props.isLoadingSlider
 */
export default function ContentSlider({ items, isLoadingSlider }) {
  if (isLoadingSlider) return <Shimmer />
  return <Slider items={items} />
}
