const express = require('express')
const router = express.Router()

const db = require('../db/db')

//GET
router.get('/applicants', (req, res) => {
  db.getApplicants()
    .then((applicants) => {
      res.json(applicants)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

//ADD
router.post('/applyForm', (req, res) => {
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
