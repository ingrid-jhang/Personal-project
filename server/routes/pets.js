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
// GET ONE PET
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
//ADD
router.post('/form', (req, res) => {
  const newPet = req.body
  db.addNewPet(newPet)
    .then(() => {
      return db.getPets()
    })
    .then((pets) => {
      res.json(pets)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

//UPDATE PET
router.patch('/:id', (req, res) => {
  const id = req.params.id
  const newImfo = req.body
  db.updatePet(id, newImfo)
    .then(() => {
      return db.getPet(id)
    })
    .then((pet) => {
      res.json(pet)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deletePet(id)
    .then(() => {
      return db.getPets()
    })
    .then((pets) => {
      res.json(pets)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

module.exports = router
