import request from 'superagent'

const petUrl = '/api/v1/pets/'

export function getPets() {
  return request.get(petUrl).then((res) => {
    //console.log(res.body)
    return res.body
  })
}

export function getPet(id) {
  return request.get(`${petUrl}${id}`).then((res) => {
    // console.log(res.body)
    return res.body
  })
}
