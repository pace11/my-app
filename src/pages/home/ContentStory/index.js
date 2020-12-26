import React from 'react'
import Story from '../../../components/story'
import Shimmer from './shimmer'

/**
 *
 * @param {Array, Object} props.items
 * @param {Boolean} props.isLoadingSlider
 */
export default function ContentSlider({
  items,
  isLoadingSlider,
  handleClickStoryDetail,
}) {
  if (isLoadingSlider) return <Shimmer />
  return (
    <Story
      items={items}
      handleClickStoryDetail={handleClickStoryDetail}
    />
  )
}
