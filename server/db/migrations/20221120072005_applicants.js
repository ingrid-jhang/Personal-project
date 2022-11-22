exports.up = function (knex) {
  return knex.schema.createTable('applicants', (table) => {
    table.increments('id').primary()
    table.integer('pet_id')
    table.string('name')
    table.string('phone')
    table.string('location')
    table.integer('age')
    table.string('about')
    table.string('email')
    table.date('applied_time')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('applicants')
}
