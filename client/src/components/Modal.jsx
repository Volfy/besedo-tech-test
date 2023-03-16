import { PropTypes } from 'prop-types'
import { useEffect, useRef } from 'react'

function switchWrap(type) {
  switch (type) {
    case 'EDIT':
      return 'edit'
    case 'DELETE':
      return 'delete'
    case 'ADD':
      return 'add'
    default:
      return ''
  }
}

function Modal({
  setShowModal,
  showModal,
  firstClick,
  type,
}) {
  const modalRef = useRef(null)
  const modalStatus = () => {
    if (firstClick) {
      return showModal ? 'absolute modal' : 'absolute modal-hidden'
    }
    return 'hidden'
  }
  const heading = () => {
    switch (type) {
      case 'EDIT':
        return 'Edit NAME'
      case 'DELETE':
        return 'Delete NAME'
      case 'ADD':
        return 'Add a New Movie'
      default:
        return ''
    }
  }
  const handleCloseModal = () => setShowModal(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal()
      }
    }
    const handleClickEscape = (event) => {
      if (modalRef.current && event.key === 'Escape') {
        handleCloseModal()
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
      className={`${modalStatus()}
      w-64 sm:w-72 md:w-96 h-96 z-50 
      right-1/2 left-1/2 -ml-32 -mr-32 sm:-ml-36 sm:-mr-36 md:-ml-48 md:-mr-48 
      top-1/2 bottom-1/2 -mt-48 -mb-48 
      rounded-2xl bg-indigo-900
      shadow-2xl shadow-indigo-900`}
    >
      <div className=' text-white py-2 px-2 flex justify-between items-center'>
        <h3 className='text-xl align-middle ml-4'>{heading()}</h3>
        <button type='button' onClick={handleCloseModal}>
          <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' className='fill-white scale-75'>
            <path d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z' />
          </svg>
        </button>
      </div>
      {switchWrap(type)}
    </div>
  )
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  firstClick: PropTypes.bool.isRequired,
}

export default Modal
