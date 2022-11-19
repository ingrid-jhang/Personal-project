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
export function addNewPet(form) {
  return request
    .post(`${petUrl}form`)
    .send(form)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

//UPDATE
export function updatePet(id, newImfo) {
  return request
    .patch(`${petUrl}${id}`)
    .send(newImfo)
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
