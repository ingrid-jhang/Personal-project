exports.up = function (knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.integer('type_id')
    table.string('breed')
    table.string('name')
    table.string('age')
    table.string('gender')
    table.string('color')
    table.string('location')
    table.string('description')
    table.integer('fee')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('pets')
}
