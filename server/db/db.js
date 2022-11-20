const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPets,
  getPet,
  getPetsByType,
  addNewPet,
  deletePet,
  updatePet,
  addApplicant,
  getApplicants,
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

function deletePet(id, db = connection) {
  return db('pets').del().where('id', id)
}
function updatePet(id, newImfo, db = connection) {
  return db('pets').where('id', id).update(newImfo)
}

function addApplicant(person, db = connection) {
  return db('applicants').insert(person)
}

function getApplicants(db = connection) {
  return db('applicants').select()
}
