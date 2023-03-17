import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

export const getMovies = () => axios
  .get(`${baseUrl}/movies`)
  .then((res) => res.data)

export const getGenres = () => axios
  .get(`${baseUrl}/genres`)
  .then((res) => res.data)

export const createMovie = (movie) => axios
  .post(`${baseUrl}/movies`, movie)
  .then((res) => res.data)

export const updateMovie = (movie) => axios
  .put(`${baseUrl}/movies/${movie.movie_id}`, movie)
  .then((res) => res.data)

export const deleteMovie = (movie) => axios
  .delete(`${baseUrl}/movies${movie.movie_id}`)
  .then((res) => res.data)
