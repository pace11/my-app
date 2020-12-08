import Axios from 'axios'

const url = process.env.REACT_APP_URL_MOVIEDB
const apiKey = process.env.REACT_APP_API_KEY
const nowPlayingUrl = `${url}/movie/now_playing`
const genreUrl = `${url}/genre/movie/list`
const moviesUrl = `${url}/discover/movie`

export const fetchMoviesNowPlaying = async () => {
  try {
    const { data } = await Axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    })
    return data
  } catch (error) {
    return error
  }
}

export const fetchGenres = async () => {
  try {
    const { data } = await Axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
      },
    })
    return data
  } catch (error) {
    return error
  }
}

export const fetchMoviesByGenre = async (page = 1, genre_id = 28) => {
  try {
    const { data } = await Axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: page,
        with_genres: genre_id,
      },
    })
    return data
  } catch (error) {
    return error
  }
}
