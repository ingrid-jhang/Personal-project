const express = require('express')
const router = express.Router()

const db = require('../db/db')

//GET
router.get('/', (req, res) => {
  db.getApplicants()
    .then((applicants) => {
      //console.log(applicants)
      res.json(applicants)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

//ADD
router.post('/ApplyForm', (req, res) => {
  // const id = req.params.pet_id
  const person = req.body
  db.addApplicant(person)
    .then(() => {
      return db.getApplicants()
    })
    .then((applicants) => {
      res.json(applicants)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})
module.exports = router
