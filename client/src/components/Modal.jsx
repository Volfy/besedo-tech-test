import { PropTypes } from 'prop-types'

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

function Modal({ type }) {
  return (
    <div className='w-96 h-96 absolute right-1/2 left-1/2 -ml-48 -mr-48  z-50 bg-white'>
      {switchWrap(type)}
    </div>
  )
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Modal
