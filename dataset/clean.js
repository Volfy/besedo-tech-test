const fs = require('fs')

const data = require('./movies-original.json')

/*
ideally, with a database solution:
genres would be stored in a separate table or document,
and movies would use the genre foreign key.

for simplicity, this is not emulated.
*/

const genreOptions = [...new Set(data.map((row) => row.genre).join().split(','))]

const cleanedData = data.map((row) => ({
  title: row.title,
  year: row.year,
  rating: row.imbd_rating,
  genre: row.genre.split(','),
  duration: row.duration,
  movie_id: row.movie_id,
}))
  // shuffles the array to stop it from looking sorted
  .sort(() => ((Math.random() > 0.5) ? 1 : -1))

fs.writeFileSync(
  'movies.json',
  JSON.stringify(cleanedData),
)

fs.writeFileSync(
  'genres.json',
  JSON.stringify(genreOptions),
)
