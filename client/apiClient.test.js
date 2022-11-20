import nock from 'nock'

import { getPets, getPet } from './apiClient'

describe('get all the pets', () => {
  it('get pets from the api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets/')
      .reply(200, {
        results: [
          { id: 1, name: 'Coco' },
          { id: 2, name: 'Charlie' },
        ],
      })

    return getPets().then((backgrounds) => {
      expect(backgrounds.results).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })

  it('get pet from the api by id', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets/2')
      .reply(200, { id: 2, name: 'Charlie' })

    return getPet(2).then((background) => {
      expect(background.name).toBe('Charlie')
      expect(scope.isDone()).toBe(true)
    })
  })
})
