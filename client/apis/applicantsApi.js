import request from 'superagent'

const applicantUrl = '/api/v1/applicants/'

export function getApplicants() {
  return request.get(applicantUrl).then((res) => {
    //console.log(res.body)
    return res.body
  })
}

export function addApplicant(person) {
  return request
    .post(`${applicantUrl}ApplyForm`)
    .send(person)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}
