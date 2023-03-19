const supertest = require('supertest')
const index = require('../index')

const api = supertest(index)

describe('read', () => {
  test('movies are returned as json', async () => {
    await api
      .get('/api/movies')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('genres are returned as json', async () => {
    await api
      .get('/api/genres')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('a single movie can be accessed with its id', async () => {
    const movies = await api.get('/api/movies')
    const contents = movies.body
    const res = await api.get(`/api/movies/${contents[0].movie_id}`)

    expect(res.body).toHaveLength(1)
    expect(res.body[0].title).toContain(contents[0].title)
  })
})

describe('create', () => {
  test('movies can be added', async () => {
    const initialRes = await api.get('/api/movies')

    const newMovie = {
      title: 'Testing Film 1',
      year: 1998,
      rating: 5,
      duration: '2h 30m',
      genre: ['Crime', 'Drama', 'Thriller'],
    }

    await api
      .post('/api/movies')
      .send(newMovie)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const res = await api.get('/api/movies')
    const titles = res.body.map((r) => r.title)

    expect(res.body).toHaveLength(initialRes.body.length + 1)
    expect(titles).toContain('Testing Film 1')
  })
  test('movies must be uniquely titled', async () => {
    const newMovie = {
      title: 'Testing Film 2',
      year: 1998,
      rating: 5,
      duration: '2h 30m',
      genre: ['Crime', 'Drama', 'Thriller'],
    }

    const duplicateMovie = {
      title: 'Testing Film 2',
      year: 1998,
      rating: 5,
      duration: '2h 30m',
      genre: ['Crime', 'Drama', 'Thriller'],
    }

    await api
      .post('/api/movies')
      .send(newMovie)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const res = await api
      .post('/api/movies')
      .send(duplicateMovie)
      .expect(400)

    expect(res.body.error).toContain('movie is not unique')
  })
  test('movies must be valid', async () => {
    //  nb: validator tested separately
    const newMovie = {
      title: 'Te',
      year: 1998,
      rating: 5,
      duration: '2h 30m',
      genre: ['Crime', 'Drama', 'Thriller'],
    }

    const res = await api
      .post('/api/movies')
      .send(newMovie)
      .expect(400)

    expect(res.body.error).toContain('movie is not valid')
  })
})

describe('update', () => {
  test('can update movie', async () => {
    const movies = await api.get('/api/movies')
    const contents = movies.body
    const res = await api.get(`/api/movies/${contents[0].movie_id}`)

    const updatedMovie = {
      ...res.body[0],
      title: 'Something else',
    }

    await api
      .put(`/api/movies/${contents[0].movie_id}`)
      .send(updatedMovie)
      .expect(200)

    const updated = await api.get(`/api/movies/${contents[0].movie_id}`)
    expect(updated.body[0].title).toContain('Something else')
  })
  test('updated movie must be real', async () => {
    await api
      .put('/api/movies/200')
      .send({})
      .expect(404)
  })
  test('updated movie must be uniquely titled', async () => {
    const movies = await api.get('/api/movies')
    const contents = movies.body
    const res = await api.get(`/api/movies/${contents[0].movie_id}`)

    const updatedMovie = {
      ...res.body[0],
      title: 'The Shawshank Redemption',
    }

    await api
      .put(`/api/movies/${contents[0].movie_id}`)
      .send(updatedMovie)
      .expect(400)

    const updated = await api.get(`/api/movies/${contents[0].movie_id}`)
    expect(updated.body[0].title).toContain(res.body[0].title)
  })
  test('updated movie must be valid', async () => {
    const movies = await api.get('/api/movies')
    const contents = movies.body
    const res = await api.get(`/api/movies/${contents[0].movie_id}`)

    const updatedMovie = {
      ...res.body[0],
      title: 'Th',
    }

    await api
      .put(`/api/movies/${contents[0].movie_id}`)
      .send(updatedMovie)
      .expect(400)

    const updated = await api.get(`/api/movies/${contents[0].movie_id}`)
    expect(updated.body[0].title).toContain(res.body[0].title)
  })
})

describe('delete', () => {
  test('can delete a movie', async () => {
    const movies = await api.get('/api/movies')
    const contents = movies.body
    await api
      .delete(`/api/movies/${contents[0].movie_id}`)
      .expect(204)

    const res = await api.get('/api/movies')
    expect(res.body).toHaveLength(contents.length - 1)
    expect(res.body[0].title).not.toContain(contents[0].title)
  })
  test('non existent movie does not cause error', async () => {
    const movies = await api.get('/api/movies')
    const contents = movies.body
    await api
      .delete('/api/movies/200')
      .expect(204)
    const res = await api.get('/api/movies')
    expect(res.body).toHaveLength(contents.length)
  })
})
