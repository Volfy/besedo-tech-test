const fs = require('fs')

const data = require('./movies-original.json')

const cleanedData = data.map((row) => ({
  title: row.title,
  year: row.year,
  rating: row.imbd_rating,
  genre: row.genre.split(','),
  duration: row.duration,
  movie_id: row.movie_id,
}))

const genreOptions = [...new Set(data.map((row) => row.genre).join().split(','))]
console.log(genreOptions)

fs.writeFileSync(
  'movies.json',
  JSON.stringify(cleanedData),
)
