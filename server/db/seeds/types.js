/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('types').del()
  await knex('types').insert([
    { id: 1, name: 'Cats' },
    { id: 2, name: 'Dogs' },
  ])
}
