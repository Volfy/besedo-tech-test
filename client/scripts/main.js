const movieTableBody = document.querySelector('#movie-table tbody')

// TEMPORARY --- Implement backend
import data from '../../dataset/movies.json' assert { type: 'json' }

data.forEach(d => {
  const newRow = document.createElement('tr')
  newRow.id = d.movie_id
  const title = document.createElement('td')
  const year = document.createElement('td')
  const rating = document.createElement('td')
  const genre = document.createElement('td')
  const duration = document.createElement('td')
  title.textContent = d.title
  year.textContent = d.year
  rating.textContent = d.imbd_rating
  genre.textContent = d.genre
  duration.textContent = d.duration
  
  const edit = document.createElement('td')
  const editBtn = document.createElement('button')
  editBtn.onclick = () => console.log(`edit ${d.title}`)
  editBtn.textContent = 'Edit'
  edit.appendChild(editBtn)
  const del = document.createElement('td')
  const delBtn = document.createElement('button')
  delBtn.onclick = () => console.log(`del ${d.title}`)
  delBtn.textContent = 'Delete'
  del.appendChild(delBtn)

  newRow.append(title, year, rating, genre, duration, edit, del)
  movieTableBody.appendChild(newRow)
})
