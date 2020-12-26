import React, { useEffect, useState } from 'react'
import theme from '../../components/theme'
import Layout from '../../layout'
import Section from '../../components/section'
import ContentStory from './ContentStory'
import ContentTag from './ContentTag'
import ContentListMoviesByGenre from './ContentListMoviesByGenre'
import {
  fetchMoviesNowPlaying,
  fetchGenres,
  fetchMoviesByGenre,
} from '../../api'

export default function Home() {
  const [nowPlaying, setNowPlaying] = useState([])
  const [nowPlayingId, setNowPlayingId] = useState(0)
  const [tag, setTag] = useState([])
  const [movies, setMovies] = useState([])
  const [selectTag, setSelectTag] = useState(28)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [isLoadingLoadMore, setIsLoadingLoadMore] = useState(false)
  const [isLoadingListMovie, setIsLoadingListMovie] = useState(false)
  const [isLoadingTag, setIsLoadingTag] = useState(false)
  const [isLoadingNowPlaying, setIsLoadingNowPlaying] = useState(
    false,
  )
  const [showStoryDetail, setShowStoryDetail] = useState(false)
  const [timer, setTimer] = useState({
    second: 1,
    start: false,
  })

  useEffect(() => {
    let myInterval
    if (timer.start && timer.second <= 6) {
      myInterval = setInterval(() => {
        setTimer((prevState) => ({
          ...prevState,
          second: prevState.second + 1,
        }))
      }, 1000)
    }
    return () => {
      clearInterval(myInterval)
    }
  }, [timer])

  useEffect(() => {
    if (timer.start && timer.second === 5) {
      setNowPlayingId((nowPlaying) => nowPlaying + 1)
      setTimer((prevState) => ({ ...prevState, second: 0 }))
    }
  }, [timer])

  useEffect(() => {
    setIsLoadingNowPlaying(true)
    fetchMoviesNowPlaying().then((res) => {
      if (res.name !== 'Error') {
        setNowPlaying(res.results)
        setIsLoadingNowPlaying(false)
      }
    })
  }, [])

  useEffect(() => {
    setIsLoadingTag(true)
    fetchGenres().then((res) => {
      if (res.name !== 'Error') {
        setTag(res.genres)
        setIsLoadingTag(false)
      }
    })
  }, [])

  useEffect(() => {
    setIsLoadingListMovie(true)
    fetchMoviesByGenre().then((res) => {
      if (res.name !== 'Error') {
        setMovies(res.results)
        setPage(res.page)
        setTotalPage(res.total_pages)
        setTotalResults(res.total_results)
        setIsLoadingListMovie(false)
      }
    })
  }, [])

  const HandleSelectTag = (val) => {
    setIsLoadingListMovie(true)
    setSelectTag(val.id)
    fetchMoviesByGenre(1, val.id).then((res) => {
      if (res.name !== 'Error') {
        setMovies(res.results)
        setIsLoadingListMovie(false)
      }
    })
  }

  const HandleClickLoadMore = () => {
    setIsLoadingLoadMore(true)
    fetchMoviesByGenre(page + 1, selectTag).then((res) => {
      if (res.name !== 'Error') {
        setMovies((movies) => movies.concat(res.results))
        setPage(res.page)
        setIsLoadingLoadMore(false)
      }
    })
  }

  const HandleClickStoryDetail = (key) => {
    setNowPlayingId(key)
    setShowStoryDetail(!showStoryDetail)
    setTimer((prevState) => ({ ...prevState, start: true }))
  }

  const HandleCloseStory = () => {
    setShowStoryDetail(!showStoryDetail)
    setTimer((prevState) => ({
      ...prevState,
      second: 0,
      start: false,
    }))
  }

  return (
    <Layout
      showStoryDetail={showStoryDetail}
      onClick={() => HandleCloseStory()}
      items={nowPlaying[nowPlayingId]}
      percentage={timer && timer.second}
    >
      <Section title="Now Playing">
        <ContentStory
          items={nowPlaying}
          isLoadingSlider={isLoadingNowPlaying}
          handleClickStoryDetail={HandleClickStoryDetail}
        />
      </Section>
      <Section
        title="List By Genre"
        backgroundColor={theme.colors.grey4}
      >
        <ContentTag
          items={tag}
          data={selectTag}
          isLoadingTag={isLoadingTag}
          onClick={(val) => HandleSelectTag(val)}
        />
        <ContentListMoviesByGenre
          items={movies}
          results={movies && movies.length}
          totalResults={totalResults}
          page={page}
          totalPage={totalPage}
          isLoadingListMovie={isLoadingListMovie}
          isLoadingLoadMore={isLoadingLoadMore}
          handleClickLoadMore={HandleClickLoadMore}
        />
      </Section>
    </Layout>
  )
}
