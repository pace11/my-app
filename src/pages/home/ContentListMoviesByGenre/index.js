import React, { Fragment } from 'react'
import styled from 'styled-components'
import Card from '../../../components/card'
import Button from '../../../components/button'
import Shimmer from './shimmer'

const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`

const RowLoadMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

/**
 *
 * @param {Array, Object} props.items
 * @param {Boolean} props.isLoadingLoadMore
 * @param {Boolean} props.isLoadingListMovie,
 * @param {String, Number} props.results,
 * @param {String, Number} props.totalResults,
 * @param {String, Number} props.page,
 * @param {String, Number} props.totalPage,
 * @param {Function} props.handleClickLoadMore,
 */
export default function ContentListMoviesByGenre({
  items,
  results,
  totalResults,
  page,
  totalPage,
  isLoadingLoadMore,
  isLoadingListMovie,
  handleClickLoadMore,
}) {
  if (isLoadingListMovie) return <Shimmer />
  return (
    <Fragment>
      <ListCard>
        {items &&
          items.map((item) => (
            <Card
              key={String(item.id)}
              imgUrl={item.poster_path}
              rating={item.vote_average}
              title={item.title}
              releaseDate={item.release_date}
            />
          ))}
      </ListCard>
      {page < totalPage && (
        <RowLoadMore>
          <Button
            isLoading={isLoadingLoadMore}
            onClick={handleClickLoadMore}
          >
            Load More {`${results}/${totalResults}`}
          </Button>
        </RowLoadMore>
      )}
    </Fragment>
  )
}
