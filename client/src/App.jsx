// eslint-disable-next-line import/no-unresolved, import/extensions
import data from './movies'
import addImgUrl from './assets/add.svg'

function App() {
  return (
    <div
      className='w-screen h-screen
      flex flex-col content-center justify-between'
    >
      <header className='basis-1/12 flex flex-col justify-evenly text-center'>
        <h1 className='text-3xl font-bold'>
          Mega Lorem Ipsum
        </h1>
        <hr className='my-2 w-4/6 self-center' />
      </header>

      <main className='basis-10/12 flex flex-col justify-center'>
        <h2
          id='table-description'
          className='self-center text-lg p-6 font-bold'
        >
          IMDb Movie Data
        </h2>

        <div className='h-1 xl:w-5/6 self-center flex-grow overflow-y-scroll scrollbar-hide b'>
          <table aria-labelledby='table-description' className='border-spacing-y-2 border-separate mx-4'>
            {/* caption ruins style, but aria-labelled by  */}
            <colgroup>
              <col className='w-4/12' />
              <col className='w-1/12' />
              <col className='w-1/12' />
              <col className='w-2/12' />
              <col className='w-2/12' />
            </colgroup>
            <colgroup className='w-1/12'>
              <col />
              <col />
            </colgroup>

            <thead className='sticky top-0 z-50'>
              <tr aria-hidden className='absolute bg-white w-full h-4 -z-10'>
                <td colSpan='7' className='w-full' />
              </tr>
              <tr className='rounded-xl shadow-lg bg-slate-600 text-white'>
                <th className='p-3 text-left rounded-l-xl'>
                  Title
                </th>
                <th className='p-3'>
                  Year
                </th>
                <th className='p-3'>
                  Rating
                </th>
                <th className='p-3'>
                  Genre(s)
                </th>
                <th className='p-3'>
                  Duration
                </th>
                <td className='p-3 rounded-r-xl' colSpan={2} />
              </tr>
            </thead>

            <tbody className='rounded-2xl'>
              {data.map((row, idx, _v) => (
                <tr
                  key={row.movie_id}
                  className={`text-center rounded-xl hover:drop-shadow-xl
                  ${idx % 2 ? 'bg-slate-300' : 'bg-slate-100'}`}
                >
                  <td className='p-3 text-left font-bold rounded-l-xl'>
                    {row.title}
                  </td>
                  <td className='p-3'>
                    {row.year}
                  </td>
                  <td className='p-3'>
                    {row.imdb_rating}
                  </td>
                  <td>
                    {row.genre.map((genre) => (
                      <span
                        className='py-1 px-2 m-1 rounded-lg bg-opacity-70 bg-indigo-900 text-slate-50'
                        key={genre}
                      >
                        {genre}
                      </span>
                    ))}
                  </td>
                  <td className='p-3'>
                    {row.duration}
                  </td>
                  <td>
                    <button
                      onClick={() => console.log('edit', row.title)}
                      aria-label='Edit'
                      type='button'
                      className='align-middle'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='48'
                        width='48'
                        className='scale-75 fill-zinc-600 hover:fill-orange-500 '
                      >
                        <title>Edit</title>
                        <path d='M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z' />
                      </svg>
                    </button>
                  </td>
                  <td className='rounded-r-xl pr-0'>
                    <button
                      onClick={() => console.log('delete', row.title)}
                      aria-label='Delete'
                      type='button'
                      className='align-middle'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='48'
                        width='48'
                        className='scale-75 fill-zinc-600 hover:fill-rose-600'
                      >
                        <title>Delete</title>
                        <path d='M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z' />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className='sticky bottom-0'>
              <tr>
                <td colSpan='7' className='text-center bg-slate-400'>
                  <button
                    onClick={() => console.log('add new')}
                    aria-label='add'
                    type='button'
                  >
                    {/** todo: switch to svg with title */}
                    <img src={addImgUrl} alt='' />
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>

      <footer className='basis-1/12 flex flex-col justify-evenly text-center'>
        <hr className='my-2 w-4/6 self-center' />
        <div>Besedo Full Stack Developer Technical Test</div>
        <div>Andre Sammut</div>
      </footer>
    </div>
  )
}

export default App
