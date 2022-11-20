exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('applicants')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('applicants').insert([
        {
          id: 1,
          pet_id: 2,
          name: 'Ingrid',
          phone: '0234567890',
          age: 29,
          location: 'Napier',
          about: `I love cats`,
          applied_time: new Date(Date.now()),
        },
      ])
    })
}
