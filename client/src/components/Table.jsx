import { useMediaQuery } from '@react-hook/media-query'
import { PropTypes } from 'prop-types'

function LargeRow({ row, idx, handleModalOps }) {
  return (
    <tr
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
      <td className='p-3'>
        {row.duration}
      </td>
      <td>
        <div className='flex flex-wrap lg:flex-nowrap justify-center '>
          {row.genre.map((genre) => (
            <span
              className='py-1 px-2 m-1 rounded-lg bg-opacity-70 bg-indigo-900 text-slate-50'
              key={genre}
            >
              {genre}
            </span>
          ))}
        </div>
      </td>
      <td>
        <button
          onClick={() => handleModalOps('edit', row.movie_id)}
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
          onClick={() => handleModalOps('delete', row.movie_id)}
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
  )
}

LargeRow.propTypes = {
  row: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handleModalOps: PropTypes.func.isRequired,
}

function Card({ row, idx, handleModalOps }) {
  return (
    <tr className={`flex flex-col w-10/12 rounded-2xl m-3 p-6 shadow-xl
      ${idx % 2 ? 'bg-slate-300' : 'bg-slate-100'}`}
    >
      <td className='font-bold text-lg py-3'>
        {row.title}
      </td>
      <td>
        <span className='font-bold'>Year: </span>
        {row.year}
      </td>
      <td>
        <span className='font-bold'>Rating: </span>
        {row.imdb_rating}
      </td>
      <td>
        <span className='font-bold'>Duration: </span>
        {row.duration}
      </td>
      <td>
        <span className='font-bold'>Genre(s): </span>
        {row.genre.map((genre) => (
          <div
            className='inline-block py-0.5 px-1 m-1 rounded-lg bg-opacity-70 bg-indigo-900 text-slate-50'
            key={genre}
          >
            {genre}
          </div>
        ))}
      </td>
      <td className='text-center'>
        <button
          onClick={() => handleModalOps('edit', row.movie_id)}
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
        <button
          onClick={() => handleModalOps('delete', row.movie_id)}
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
  )
}

Card.propTypes = {
  row: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handleModalOps: PropTypes.func.isRequired,
}

function Table({ data, handleModalOps, isModalShown }) {
  const isSmallWidth = useMediaQuery('(min-width: 768px)')

  return (
    <table
      aria-labelledby='table-description'
      className='border-spacing-y-2 border-separate mx-1 md:mx-4'
    >
      {isSmallWidth
        ? (
          <>
            <colgroup>
              <col className='w-2/6' />
              <col className='w-1/6' />
              <col className='w-1/6' />
              <col className='w-1/6' />
              <col className='w-2/6' />
            </colgroup>
            <colgroup className='w-fit'>
              <col className='w-1' />
              <col className='w-1' />
            </colgroup>
          </>
        )
        : <colgroup className='w-full' />}

      <thead className='hidden md:table-header-group sticky top-0 z-40'>
        <tr aria-hidden className='absolute bg-white w-full h-4 -z-10'>
          {/* hide table rows underneath headers due to rounded corners */}
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
            Duration
          </th>
          <th className='p-3'>
            Genre(s)
          </th>
          <td className='p-3 rounded-r-xl' colSpan={2} />
        </tr>
      </thead>

      <tbody className='rounded-2xl flex flex-col justify-center items-center w-full md:table-row-group'>
        {data.map((row, idx, _v) => (
          isSmallWidth
            ? <LargeRow row={row} idx={idx} key={row.movie_id} handleModalOps={handleModalOps} />
            : <Card row={row} idx={idx} key={row.movie_id} handleModalOps={handleModalOps} />
        ))}
      </tbody>

      <tfoot className='sticky bottom-0'>
        <tr>
          <td
            colSpan='7'
            className='text-right pointer-events-none
            lg:text-center z-10'
          >
            <button
              onClick={() => handleModalOps('add')}
              aria-label='Add a Movie'
              type='button'
              className={`bg-green-500 hover:bg-white rounded-full p-4 m-4
              group hover:ring-4 hover:ring-green-500 hover:shadow-xl
              lg:m-1 lg:p-3
              ${isModalShown ? null : 'pointer-events-auto'}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='48'
                width='48'
                className='scale-120 fill-white group-hover:fill-green-500'
              >
                <title>Add</title>
                <path d='M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z' />
              </svg>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleModalOps: PropTypes.func.isRequired,
  isModalShown: PropTypes.bool.isRequired,
}

export default Table
