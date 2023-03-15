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
  title.classList.add('name-cell')
  year.textContent = d.year
  year.classList.add('year-cell')
  rating.textContent = d.imbd_rating
  rating.classList.add('rating-cell')
  genre.textContent = d.genre
  genre.classList.add('genre-cell')
  duration.textContent = d.duration
  duration.classList.add('duration-cell')
  
  const edit = document.createElement('td')
  const editBtn = document.createElement('button')
  const editImg = document.createElement('img')
  editImg.src = './img/edit.svg'
  editImg.ariaHidden = true
  editBtn.appendChild(editImg)
  editBtn.ariaLabel = 'Edit'
  editBtn.onclick = () => console.log(`edit ${d.title}`)
  edit.appendChild(editBtn)
  const del = document.createElement('td')
  const delBtn = document.createElement('button')
  const delImg = document.createElement('img')
  delImg.src = './img/delete.svg'
  delImg.ariaHidden = true
  delBtn.appendChild(delImg)
  delBtn.ariaLabel = 'Delete'
  delBtn.onclick = () => console.log(`del ${d.title}`)
  del.appendChild(delBtn)

  newRow.append(title, year, rating, genre, duration, edit, del)
  movieTableBody.appendChild(newRow)
})
