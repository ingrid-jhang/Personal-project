const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPets,
  getPet,
}

function getPets(db = connection) {
  return db('pets').select()
}

function getPet(id, db = connection) {
  return db('pets').select().where('id', id).first()
}
