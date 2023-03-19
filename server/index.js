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

app.post('/api/movies/', (req, res) => {
  const movie = req.body
  // validate and check uniqueness
  if (validator(movie)) {
    if (!movies.filter((m) => m.title === movie.title).length) {
      // ideally handled by DB
      movie.movie_id = `tt${generateId()}`
      movies = movies.concat(movie)
      res.status(201).json(movie)
      return
    }
    res.status(400).send({ error: 'movie is not unique' }).end()
  }
  res.status(400).send({ error: 'movie is not valid' }).end()
})

// update

app.put('/api/movies/:id', (req, res) => {
  const movie = req.body
  if (!movies.map((m) => m.movie_id).includes(req.params.id)) {
    res.status(404).send({ error: 'movie does not exist' }).end()
  }
  // validate and check uniqueness
  if (validator(movie)) {
    if (!movies.filter((m) => m.title === movie.title && m.movie_id !== req.params.id).length) {
      movies = movies.map((m) => (m.movie_id === req.params.id ? movie : m))
      res.json(movie)
      return
    }
    res.status(400).send({ error: 'movie is not unique' }).end()
  }
  res.status(400).send({ error: 'movie is not valid' }).end()
})

// delete

app.delete('/api/movies/:id', (req, res) => {
  movies = movies.filter((m) => m.movie_id !== req.params.id)
  res.sendStatus(204)
})

// port could be extracted out into a config file
app.listen(3001)

module.exports = app
