import { PropTypes } from 'prop-types'
import { useEffect, useRef } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  createMovie,
  deleteMovie,
  getGenres,
  updateMovie,
} from '../requests'

function AddForm({ handleSubmit, genres }) {
  return (
    <form action='' onSubmit={handleSubmit} className='flex-grow flex flex-col justify-between pb-6 px-6 text-lg text-white'>
      <label htmlFor='title' className='flex gap-4'>
        Title:
        <input
          type='text'
          name='title'
          id='title'
          minLength='3'
          required
          className='text-black w-36 md:w-96 rounded-xl px-2'
        />
      </label>
      <label htmlFor='year' className='flex gap-4'>
        Year:
        <input
          type='number'
          name='year'
          id='year'
          min='1900'
          max='2040'
          required
          className='text-black rounded-xl px-2'
        />
      </label>
      <label htmlFor='rating' className='flex gap-4'>
        Rating:
        <input
          type='number'
          name='rating'
          id='rating'
          min='0'
          max='10'
          step='0.1'
          required
          className='text-black rounded-xl px-2'
        />
      </label>
      <label htmlFor='genre' className='flex gap-4'>
        Genre(s):
        <select
          name='genre'
          id='genre'
          multiple
          required
          className='text-black rounded-xl px-2'
        >
          {genres.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </label>
      <label htmlFor='duration' className='flex gap-4'>
        Duration:
        <input
          type='text'
          name='duration'
          id='duration'
          pattern='[0-9]h(\s[0-5]?[0-9]m)?'
          required
          onInvalid={(event) => event.target.setCustomValidity('Please enter a value in the form Xh XXm or Xh Xm')}
          onInput={(event) => event.target.setCustomValidity('')}
          className='text-black w-24 rounded-xl px-2'
        />
      </label>
      <button type='submit' className='self-end rounded-xl text-black bg-white w-1/4 p-1 hover:bg-green-500 hover:text-white'>
        Add
      </button>
    </form>
  )
}
AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
}

function EditForm({ row, handleSubmit, genres }) {
  return (
    <form action='' onSubmit={handleSubmit} className='flex-grow flex flex-col justify-between pb-6 px-6 text-lg text-white'>
      <label htmlFor='title' className='flex gap-4'>
        Title:
        <input
          type='text'
          name='title'
          id='title'
          defaultValue={row.title || ''}
          minLength='3'
          required
          className='text-black w-36 md:w-96 rounded-xl px-2'
        />
      </label>
      <label htmlFor='year' className='flex gap-4'>
        Year:
        <input
          type='number'
          name='year'
          id='year'
          defaultValue={row.year || ''}
          min='1900'
          max='2040'
          required
          className='text-black rounded-xl px-2'
        />
      </label>
      <label htmlFor='rating' className='flex gap-4'>
        Rating:
        <input
          type='number'
          name='rating'
          id='rating'
          defaultValue={row.rating || ''}
          min='0'
          max='10'
          step='0.1'
          required
          className='text-black rounded-xl px-2'
        />
      </label>
      <label htmlFor='genre' className='flex gap-4'>
        Genre(s):
        <select
          name='genre'
          id='genre'
          defaultValue={row.genre || ['']}
          multiple
          required
          className='text-black rounded-xl px-2'
        >
          {genres.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </label>
      <label htmlFor='duration' className='flex gap-4'>
        Duration:
        <input
          type='text'
          name='duration'
          id='duration'
          defaultValue={row.duration || ''}
          pattern='[0-9]h(\s[0-5]?[0-9]m)?'
          required
          onInvalid={(event) => event.target.setCustomValidity('Please enter a value in the form Xh XXm or Xh Xm')}
          onInput={(event) => event.target.setCustomValidity('')}
          className='text-black w-24 rounded-xl px-2'
        />
      </label>
      <button type='submit' className='self-end rounded-xl text-black bg-white w-1/4 p-1 hover:bg-orange-500 hover:text-white'>
        Edit
      </button>
    </form>
  )
}
EditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  row: PropTypes.object.isRequired,
}

function DeleteForm({ handleSubmit }) {
  return (
    <form action='' onSubmit={handleSubmit} className='flex-grow flex flex-col justify-between pb-6 px-6'>
      <div className='text-lg text-white flex gap-4'>Are you sure you want to delete? </div>
      <input
        type='submit'
        id='deletebtn'
        value='Delete'
        className='self-end rounded-xl w-1/4 p-1 bg-white text-rose-600 hover:text-white hover:bg-rose-600'
      />
    </form>
  )
}
DeleteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

function Form({ modalType, row, handleClose }) {
  const queryClient = useQueryClient()

  const newMovieMutation = useMutation(createMovie)
  const updateMovieMutation = useMutation(updateMovie)
  const deleteMovieMutation = useMutation(deleteMovie)

  const result = useQuery('genres', getGenres, {
    refetchOnWindowFocus: false,
  })
  if (result.isLoading) {
    return <div>Loading genres.</div>
  }
  if (result.isError) {
    return <div>Error getting genres.</div>
  }

  const genres = result.data

  const handleAdd = (event) => {
    event.preventDefault()
    const newMovie = {
      title: event.target.title.value,
      year: event.target.year.value,
      rating: event.target.rating.value,
      duration: event.target.duration.value,
      genre: [...event.target.genre].filter((g) => g.selected).map((g) => g.value),
    }
    newMovieMutation.mutate(newMovie, {
      onSuccess: (movie) => {
        const movies = queryClient.getQueryData('movies')
        queryClient.setQueryData('movies', movies.concat({ ...newMovie, movie_id: movie.movie_id }))
      },
    })
    handleClose()
  }
  const handleEdit = (event) => {
    event.preventDefault()
    const editedMovie = {
      title: event.target.title.value,
      year: event.target.year.value,
      rating: event.target.rating.value,
      duration: event.target.duration.value,
      genre: [...event.target.genre].filter((g) => g.selected).map((g) => g.value),
      movie_id: row.movie_id,
    }
    updateMovieMutation.mutate(editedMovie, {
      onSuccess: () => {
        const movies = queryClient.getQueryData('movies')
        queryClient.setQueryData(
          'movies',
          movies.map((m) => (m.movie_id === editedMovie.movie_id ? editedMovie : m)),
        )
      },
    })
    handleClose()
  }
  const handleDelete = (event) => {
    event.preventDefault()
    deleteMovieMutation.mutate(row.movie_id, {
      onSuccess: () => {
        const movies = queryClient.getQueryData('movies')
        queryClient.setQueryData(
          'movies',
          movies.filter((m) => (m.movie_id !== row.movie_id)),
        )
      },
    })
    handleClose()
  }

  switch (modalType) {
    case 'add':
      return <AddForm handleSubmit={handleAdd} genres={genres} />
    case 'edit':
      return <EditForm handleSubmit={handleEdit} row={row} genres={genres} />
    case 'delete':
      return <DeleteForm handleSubmit={handleDelete} />
    default:
      return ''
  }
}
Form.propTypes = {
  modalType: PropTypes.string.isRequired,
  row: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
}

Form.defaultProps = {
  row: {},
}

function Modal({
  movieData,
  isModalShown,
  modalType,
  handleModalOps,
  selectedMovieId,
}) {
  const modalRef = useRef(null)

  const getModalClasses = () => (isModalShown ? 'absolute modal' : 'absolute modal-hidden')

  const heading = () => {
    switch (modalType) {
      case 'edit':
        return `Edit ${movieData
          .filter((m) => m.movie_id === selectedMovieId)[0]
          .title}`
      case 'delete':
        return `Delete ${movieData
          .filter((m) => m.movie_id === selectedMovieId)[0]
          .title}`
      case 'add':
        return 'Add a New Movie'
      default:
        return ''
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalOps('close')
      }
    }
    const handleClickEscape = (event) => {
      if (modalRef.current && event.key === 'Escape') {
        handleModalOps('close')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleClickEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleClickEscape)
    }
  }, [modalRef])

  return (
    <div
      ref={modalRef}
      className={`${getModalClasses()}
      flex flex-col justify-between
      w-64 sm:w-72 md:w-96 h-96 z-50 
      right-1/2 left-1/2 -ml-32 -mr-32 sm:-ml-36 sm:-mr-36 md:-ml-48 md:-mr-48 
      top-1/2 bottom-1/2 -mt-48 -mb-48 
      rounded-2xl bg-indigo-900
      shadow-2xl shadow-indigo-900`}
    >
      <div className='text-white py-2 px-2 flex justify-between items-center'>
        <h3 className='text-xl align-middle ml-4'>{heading()}</h3>
        <button type='button' onClick={() => handleModalOps('close')}>
          <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' className='fill-white scale-75 hover:scale-100 hover:fill-red-500'>
            <title>Close</title>
            <path d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z' />
          </svg>
        </button>
      </div>
      <Form
        modalType={modalType}
        handleClose={() => handleModalOps('close')}
        row={movieData.filter((m) => m.movie_id === selectedMovieId)[0]}
      />
    </div>
  )
}

Modal.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.object).isRequired,
  modalType: PropTypes.string.isRequired,
  handleModalOps: PropTypes.func.isRequired,
  selectedMovieId: PropTypes.string,
  isModalShown: PropTypes.bool.isRequired,
}
Modal.defaultProps = {
  selectedMovieId: null,
}

export default Modal
