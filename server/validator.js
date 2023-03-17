const genres = require('../dataset/genres.json')

const validator = (movie) => {
  if (
    movie.title && movie.title.length >= 3
    && movie.year && movie.year >= 1900 && movie.year <= 2040
    && movie.rating && movie.rating >= 0 && movie.rating <= 10
    // see whether genres are contained within genreOptions
    && movie.genre && movie.genre.reduce((acc, genre) => acc && genres.includes(genre), true)
    && movie.duration && movie.duration.length <= 6 && movie.duration.match(/([0-9]h\s[0-5]?[0-9]m)/)
  ) {
    return true
  }
  return false
}

module.exports = validator
