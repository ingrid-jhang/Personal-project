const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1/pets
router.get('/', (req, res) => {
  db.getPets()
    .then((pets) => {
      res.json(pets)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getPet(id)
    .then((pet) => {
      res.json(pet)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

module.exports = router
