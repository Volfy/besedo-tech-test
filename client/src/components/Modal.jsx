import { PropTypes } from 'prop-types'
import { useEffect, useRef } from 'react'

function Form({ modalType, row }) {
  const add = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  const addOrEditForm = () => (
    <form action='' onSubmit={add} className='flex-grow flex flex-col justify-between pb-6 px-6'>
      <label htmlFor='title' className='text-lg text-white flex gap-4'>
        Title:
        <input
          type='text'
          name='title'
          id='title'
          defaultValue={row.title || ''}
          minLength='3'
          required
          className='text-black'
        />
      </label>
      <label htmlFor='year' className='text-lg text-white flex gap-4'>
        Year:
        <input
          type='number'
          name='year'
          id='year'
          defaultValue={row.year || ''}
          min='1900'
          max='2040'
          required
          className='text-black'
        />
      </label>
      <label htmlFor='rating' className='text-lg text-white flex gap-4'>
        Rating:
        <input
          type='number'
          name='rating'
          id='rating'
          defaultValue={row.imdb_rating || ''}
          min='0'
          max='10'
          step='0.1'
          required
          className='text-black'
        />
      </label>
      <label htmlFor='genre' className='text-lg text-white flex gap-4'>
        Genre(s):
        <select
          name='genre'
          id='genre'
          defaultValue={row.genre || ['']}
          multiple
          required
          className='text-black'
        >
          <option defaultValue='Action'>Action</option>
          <option defaultValue='Drama'>Drama</option>
          <option defaultValue='Fantasy'>Fantasy</option>
        </select>
      </label>
      <label htmlFor='duration' className='text-lg text-white flex gap-4'>
        Duration:
        <input
          type='text'
          name='duration'
          id='duration'
          defaultValue={row.duration || ''}
          pattern='[0-9]h\s[0-5]?[0-9]m'
          required
          onInvalid={(event) => event.target.setCustomValidity('Please enter a value in the form Xh XXm or Xh Xm')}
          onInput={(event) => event.target.setCustomValidity('')}
          className='text-black'
        />
      </label>
      <button type='submit' className={`rounded-xl bg-white w-1/4 p-1 ${row.movie_id ? 'hover:bg-orange-500' : 'hover:bg-green-500'} hover:text-white`}>
        {row.movie_id ? 'Edit' : 'Add'}
      </button>
    </form>
  )

  const deleteForm = (
    <form action='' onSubmit={add} className='flex-grow flex flex-col justify-between pb-6 px-6'>
      <div className='text-lg text-white flex gap-4'>Are you sure you want to delete? </div>
      <input
        type='submit'
        id='deletebtn'
        value='Delete'
        className='rounded-xl w-1/4 p-1 bg-white text-rose-600 hover:text-white hover:bg-rose-600'
      />
    </form>
  )

  switch (modalType) {
    case 'edit':
      return addOrEditForm()
    case 'delete':
      return deleteForm
    case 'add':
      return addOrEditForm()
    default:
      return ''
  }
}
Form.propTypes = {
  modalType: PropTypes.string.isRequired,
  row: PropTypes.object,
}

Form.defaultProps = {
  row: {},
}

function Modal({
  data,
  isModalShown,
  hasModalBeenShownYet,
  modalType,
  handleModalOps,
  selectedMovieId,
}) {
  const modalRef = useRef(null)

  const getModalClasses = () => {
    if (hasModalBeenShownYet) {
      return isModalShown ? 'absolute modal' : 'absolute modal-hidden'
    }
    return 'hidden'
  }

  const heading = () => {
    switch (modalType) {
      case 'edit':
        return `Edit ${data
          .filter((m) => m.movie_id === selectedMovieId)[0]
          .title}`
      case 'delete':
        return `Delete ${data
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
          <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' className='fill-white scale-75'>
            <title>Close</title>
            <path d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z' />
          </svg>
        </button>
      </div>
      <Form modalType={modalType} row={data.filter((m) => m.movie_id === selectedMovieId)[0]} />
    </div>
  )
}

Modal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  modalType: PropTypes.string.isRequired,
  handleModalOps: PropTypes.func.isRequired,
  selectedMovieId: PropTypes.string,
  isModalShown: PropTypes.bool.isRequired,
  hasModalBeenShownYet: PropTypes.bool.isRequired,
}
Modal.defaultProps = {
  selectedMovieId: null,
}

export default Modal
