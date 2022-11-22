import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { getApplicants } from '../apis/applicantsApi'

const Applicants = () => {
  const [applicantsData, setApplicantsData] = useState([])
  useEffect(() => {
    console.log(applicantsData)
    getApplicants()
      .then((data) => {
        setApplicantsData(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <div className="pets-container">
        <h2>Hi</h2>
        {applicantsData.map(
          ({
            id,
            name,
            pet_id,
            phone,
            age,
            location,
            email,
            about,
            applied_time,
          }) => {
            return (
              <div key={id}>
                <h2 className="ui header">{name}</h2>
                <p className="ui small header">{pet_id}</p>
                <p className="ui small header">{phone}</p>
                <p className="ui small header">{age}</p>
                <p className="ui small header">{email}</p>
                <p className="ui small header">{location}</p>
                <p className="ui small header">{about}</p>
                <p className="ui small header">{applied_time}</p>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}
export default Applicants
