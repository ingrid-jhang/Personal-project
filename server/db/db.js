const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPets,
  getPet,
  getPetsByType,
  addNewPet,
}

function getPets(db = connection) {
  return db('pets').select()
}

function getPet(id, db = connection) {
  return db('pets').select().where('id', id).first()
}

function getPetsByType(id, db = connection) {
  return db('pets')
    .join('types', 'pets.type_id', 'types.id')
    .where('type_id', id)
    .select(
      'id',
      'name',
      'breed',
      'age',
      'location',
      'image',
      'pets.type_id as type'
    )
}

function addNewPet(newPet, db = connection) {
  return db('pets').insert(newPet)
}
