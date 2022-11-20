import request from 'superagent'

const petUrl = '/api/v1/pets/'

//GET PETS
export function getPets() {
  return request.get(petUrl).then((res) => {
    //console.log(res.body)
    return res.body
  })
}
//GET ONE PET
export function getPet(id) {
  return request.get(`${petUrl}${id}`).then((res) => {
    // console.log(res.body)
    return res.body
  })
}
//ADD
export function addNewPet(pet) {
  return request
    .post(`${petUrl}form`)
    .send(pet)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

//UPDATE
export function updatePet(id, { location, age, description }) {
  return request
    .patch(`${petUrl}${id}/Update`)
    .send({ location, age, description })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}
//DELETE
export function deletePet(id) {
  return request.delete(`${petUrl}${id}`).then((res) => {
    console.log(res.body)
    // console.log(res.body)
    return res.body
  })
}

////APPLICANTS

export function getApplicants() {
  return request.get(`${petUrl}`).then((res) => {
    //console.log(res.body)
    return res.body
  })
}

export function addApplicant(person) {
  return request
    .post(`${petUrl}applyForm`)
    .send(person)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}
