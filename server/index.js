const express = require('express')
const cors = require('cors')
const validator = require('./validator')

const generateId = () => Math.floor(Math.random() * 100000000)

// while server is running, data will be saved,
// but data is not persisted when server is closed.
// ideally, data would be in a database
let movies = require('../dataset/movies.json')
const genres = require('../dataset/genres.json')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

// read

app.get('/api/genres', (req, res) => {
  res.json(genres)
})

app.get('/api/movies', (req, res) => {
  res.json(movies)
})

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.filter((m) => m.movie_id === req.params.id)
  return movie.length ? res.json(movie) : res.sendStatus(404)
})

// create

app.post('/api/movies/', (req, res, next) => {
  const movie = req.body
  // validate and check uniqueness
  try {
    if (validator(movie)) {
      if (!movies.filter((m) => m.title === movie.title).length) {
        // ideally handled by DB
        movie.movie_id = `tt${generateId()}`
        movies = movies.concat(movie)
        res.json(movie)
        return
      }
      throw new Error('Movie is not unique')
    }
    throw new Error('Invalid Movie')
  } catch (error) {
    next(error)
  }
})

// update

app.put('/api/movies/:id', (req, res, next) => {
  const movie = req.body
  // validate and check uniqueness
  try {
    if (validator(movie)) {
      if (!movies.filter((m) => m.title === movie.title && m.movie_id !== movie.movie_id).length) {
        movies = movies.map((m) => (m.movie_id === movie.movie_id ? movie : m))
        res.json(movie)
        return
      }
      throw new Error('Movie is not unique')
    }
    throw new Error('Invalid Movie')
  } catch (error) {
    next(error)
  }
})

// delete

app.delete('/api/movies/:id', (req, res) => {
  movies = movies.filter((m) => m.movie_id !== req.params.id)
  res.sendStatus(204)
})

const errorHandler = (req, res, error) => {
  res.status(400).send({ error: error.message })
}

app.use(errorHandler)

// port could be extracted out into a config file
app.listen(3001)
