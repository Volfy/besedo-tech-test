import { PropTypes } from 'prop-types'
import { useEffect, useRef } from 'react'

function Modal({
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
        console.log(selectedMovieId)
        return 'Edit NAME'
      case 'delete':
        console.log(selectedMovieId)
        return 'Delete NAME'
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
      w-64 sm:w-72 md:w-96 h-96 z-50 
      right-1/2 left-1/2 -ml-32 -mr-32 sm:-ml-36 sm:-mr-36 md:-ml-48 md:-mr-48 
      top-1/2 bottom-1/2 -mt-48 -mb-48 
      rounded-2xl bg-indigo-900
      shadow-2xl shadow-indigo-900`}
    >
      <div className=' text-white py-2 px-2 flex justify-between items-center'>
        <h3 className='text-xl align-middle ml-4'>{heading()}</h3>
        <button type='button' onClick={() => handleModalOps('close')}>
          <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' className='fill-white scale-75'>
            <title>Close</title>
            <path d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
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
