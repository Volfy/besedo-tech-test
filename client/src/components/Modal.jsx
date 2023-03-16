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

function Modal({ showModal, firstClick, type }) {
  const modalStatus = () => {
    if (firstClick) {
      return showModal ? 'absolute modal' : 'absolute modal-hidden'
    }
    return 'hidden'
  }
  return (
    <div className={`${modalStatus()}
    w-96 h-96 z-50 
    right-1/2 left-1/2 -ml-48 -mr-48 
    top-1/2 bottom-1/2 -mt-48 -mb-48 
    rounded-2xl bg-indigo-900
    shadow-2xl shadow-indigo-900`}
    >
      {switchWrap(type)}
    </div>
  )
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  firstClick: PropTypes.bool.isRequired,
}

export default Modal
