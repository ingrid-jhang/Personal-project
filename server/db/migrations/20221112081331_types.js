exports.up = (knex) => {
  return knex.schema.createTable('types', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('types')
}
