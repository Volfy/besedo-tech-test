import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import Table from './components/Table'
import Modal from './components/Modal'
import { getMovies } from './requests'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [hasModalBeenShownYet, setHasModalBeenShownYet] = useState(false)
  const [modalType, setModalType] = useState(searchParams.get('type'))
  const [selectedMovieId, setSelectedMovieId] = useState(searchParams.get('movie_id'))

  const isModalShown = modalType !== 'closed'

  useEffect(() => {
    if (modalType && selectedMovieId) {
      // in case of opening url w params, set Modal to not be hidden
      if (!hasModalBeenShownYet) { setHasModalBeenShownYet(true) }
      setSearchParams({ type: modalType, movie_id: selectedMovieId })
    } if (modalType === 'add') {
      if (!hasModalBeenShownYet) { setHasModalBeenShownYet(true) }
      setSearchParams({ type: modalType })
    } if (modalType === 'closed') {
      setSearchParams()
    }
  }, [modalType])

  const handleModalOps = (button, id) => {
    if (!hasModalBeenShownYet) { setHasModalBeenShownYet(true) }
    switch (button) {
      case 'add':
        setModalType('add')
        return
      case 'edit':
        setModalType('edit')
        setSelectedMovieId(id)
        return
      case 'delete':
        setModalType('delete')
        setSelectedMovieId(id)
        return
      case 'close':
        setModalType('closed')
        setSelectedMovieId(null)
        return
      default:
        setModalType('closed')
        setSelectedMovieId(null)
        // eslint-disable-next-line no-console
        console.error('default reached')
    }
  }

  const result = useQuery('movies', getMovies, {
    refetchOnWindowFocus: false,
  })

  if (result.isError) {
    return <div>Error getting data.</div>
  }
  if (result.isLoading) {
    return <div>Loading data, please wait!</div>
  }

  const movieData = result.data

  return (
    <>
      <div
        className={`
        ${hasModalBeenShownYet
          && (isModalShown
            ? 'container-blur'
            : 'container-focus'
          )}
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
            <Table
              movieData={movieData}
              handleModalOps={handleModalOps}
              isModalShown={isModalShown}
            />
          </div>

        </main>

        <footer className='basis-1/12 flex flex-col justify-evenly text-center'>
          <hr className='my-1 md:my-2 w-4/6 self-center' />
          <div>Besedo Full Stack Developer Technical Test</div>
          <div>Andre Sammut</div>
        </footer>
      </div>
      {hasModalBeenShownYet
        ? (
          <Modal
            movieData={movieData}
            selectedMovieId={selectedMovieId}
            modalType={modalType}
            handleModalOps={handleModalOps}
            isModalShown={isModalShown}
          />
        )
        : null}
    </>
  )
}

export default App
