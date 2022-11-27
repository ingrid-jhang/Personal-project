import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { getApplicants } from '../apis/applicantsApi'

const Applicants = () => {
  const [applicantsData, setApplicantsData] = useState([])
  useEffect(() => {
    //console.log(applicantsData)
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
            petName,
          }) => {
            return (
              <div key={id}>
                <p className="ui header">{name}</p>
                <p className="ui small header">PET ID: {pet_id}</p>
                <p className="ui small header">PET NAME: {petName}</p>
                <p className="ui small header">PHONE: {phone}</p>
                <p className="ui small header">AGE: {age}</p>
                <p className="ui small header">EMAIL: {email}</p>
                <p className="ui small header">LOCATION: {location}</p>
                <p className="ui small header">ABOUT: {about}</p>
                <p className="ui small header">
                  APPLIED TIME: {new Date(applied_time).toLocaleString()}
                </p>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}
export default Applicants
