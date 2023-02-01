const request = require('supertest')
const server = require('../server')
const { getPets } = require('../db/db')
jest.mock('../db/db')
jest.spyOn(console, 'error').mockImplementation(() => {})

describe('GET /api/v1/pets', () => {
  it('renders all pets', () => {
    getPets.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          type_id: 1,
          breed: 'Domestic Short Hair',
          name: 'Totoro',
          age: 'Adult',
          gender: 'Female',
          color: 'Tabby',
          location: 'Napier',
          description: 'Love me',
          fee: 125,
          image: '/images/Totoro.jpeg',
        },
        {
          id: 2,
          type_id: 1,
          breed: 'Domestic Short Hair',
          name: 'Mimi',
          age: 'Young',
          gender: 'Female',
          color: 'Ginger/White',
          location: 'Chrischurch',
          description: 'Meow!',
          fee: 125,
          image: '/images/Mimi.jpeg',
        },
      ])
    )
    return request(server)
      .get('/api/v1/pets')
      .then((res) => {
        expect(res.text).toContain('Totoro')
        expect(res.text).toContain('Mimi')
      })
  })
})
