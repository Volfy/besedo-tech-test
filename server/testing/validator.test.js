const validator = require('../validator')

describe('validator', () => {
  test('returns true if data is valid', () => {
    const returned = (validator({
      title: 'Something',
      year: 1998,
      rating: 2,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(true)
  })
  test('returns false if missing field', () => {
    let returned = (validator({
      year: 1998,
      rating: 2,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      rating: 2,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      year: 1998,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      year: 1998,
      rating: 2,
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      year: 1998,
      rating: 2,
      genre: ['Drama'],
    }))
    expect(returned).toEqual(false)
  })
  test('returns false if title is shorter than 3 character', () => {
    const returned = (validator({
      title: 'So',
      year: 1998,
      rating: 2,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
  })
  test('returns false if year is not within 1900-2040', () => {
    let returned = (validator({
      title: 'Something',
      year: 1200,
      rating: 2,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      year: 2050,
      rating: 2,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
  })
  test('returns false if rating is not within 0-10', () => {
    let returned = (validator({
      title: 'Something',
      year: 1998,
      rating: -5,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      year: 2050,
      rating: 11,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
  })
  test('returns false if genre is fake', () => {
    const returned = (validator({
      title: 'Something',
      year: 1200,
      rating: 2,
      genre: ['FakeGenre'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(false)
  })
  test('returns false if duration does not match pattern', () => {
    let returned = (validator({
      title: 'Something',
      year: 1200,
      rating: 2,
      genre: ['Drama'],
      duration: '2',
    }))
    expect(returned).toEqual(false)
    returned = (validator({
      title: 'Something',
      year: 1200,
      rating: 2,
      genre: ['Drama'],
      duration: '2h 40m aaaa',
    }))
    expect(returned).toEqual(false)
  })
  test('returns true for any duration match', () => {
    let returned = (validator({
      title: 'Something',
      year: 1998,
      rating: 5,
      genre: ['Drama'],
      duration: '2h 20m',
    }))
    expect(returned).toEqual(true)
    returned = (validator({
      title: 'Something',
      year: 1998,
      rating: 5,
      genre: ['Drama'],
      duration: '2h',
    }))
    expect(returned).toEqual(true)
    returned = (validator({
      title: 'Something',
      year: 1998,
      rating: 5,
      genre: ['Drama'],
      duration: '2h 2m',
    }))
    expect(returned).toEqual(true)
  })
})
