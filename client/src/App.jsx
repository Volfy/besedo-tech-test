import { useState } from 'react'
import data from './movies'
import Table from './components/Table'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [firstClick, setFirstClick] = useState(false)

  return (
    <>
      <div
        className={`${firstClick && (showModal ? 'container-blur' : 'container-focus')}
        w-screen h-screen
        flex flex-col content-center md:justify-evenly`}
      >
        <header className='mt-2 md:mt-0 md:basis-1/12 flex flex-col justify-evenly text-center'>
          <h1 className='text-2xl md:text-3xl font-bold'>
            Mega Lorem Ipsum
          </h1>
          <hr className='my-2 w-4/6 self-center' />
        </header>

        <main className='basis-10/12 flex flex-col justify-center'>
          <h2
            id='table-description'
            className='self-center text-lg p-1 md:p-6 font-bold'
          >
            IMDb Movie Data
          </h2>

          <div className='h-1 2xl:w-4/6 self-center flex-grow overflow-y-scroll scrollbar-hide b'>
            <Table data={data} showModal={showModal} />
          </div>

          <button
            type='button'
            onClick={() => {
              if (!firstClick) { setFirstClick(true) }
              setShowModal(!showModal)
            }}
          >
            SHOW MODAL
          </button>
        </main>

        <footer className='basis-1/12 flex flex-col justify-evenly text-center'>
          <hr className='my-1 md:my-2 w-4/6 self-center' />
          <div>Besedo Full Stack Developer Technical Test</div>
          <div>Andre Sammut</div>
        </footer>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} firstClick={firstClick} type='ADD' />
    </>
  )
}

export default App
