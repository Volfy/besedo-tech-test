const data = require('./movies-original.json')

const cleanedData = data.map(row => ({
  title: row.title,
  year: row.year,
  imbd_rating: row.imbd_rating,
  genre: row.genre,
  duration: row.duration,
  movie_id: row.movie_id,
}))

const fs = require('fs')
fs.writeFileSync(
  'movies.json',
  JSON.stringify(cleanedData)
)