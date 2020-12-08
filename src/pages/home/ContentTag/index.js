import React from 'react'
import Tag from '../../../components/tag'
import Shimmer from './shimmer'

/**
 *
 * @param {Array, Object} props.items
 * @param {Number} props.data
 * @param {Boolean} props.isLoadingTag
 * @param {Function} props.onClick
 */
export default function ContentTag({
  items,
  data,
  isLoadingTag,
  onClick,
}) {
  if (isLoadingTag) return <Shimmer />
  return <Tag items={items} onClick={onClick} data={data} />
}
