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
  getApplicants,
  addApplicant,
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
function updatePet(id, newInfo, db = connection) {
  return db('pets').where('id', id).update(newInfo)
}

///////////
function getApplicants(db = connection) {
  return db('applicants')
    .join('pets', 'pets.id', 'applicants.pet_id')
    .select(
      'pets.name as petName',
      'applicants.id',
      'applicants.pet_id',
      'applicants.name',
      'applicants.phone',
      'applicants.location',
      'applicants.age',
      'applicants.about',
      'applicants.email',
      'applicants.applied_time'
    )
}

function addApplicant(person, db = connection) {
  return db('applicants')
    .join('pets', 'pets.id', 'applicants.pet_id')
    .insert(person)
}
