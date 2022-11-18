import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getPet } from '../apiClient'

const PetSummary = () => {
  const [petData, setPetData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getPet(id)
      .then((petData) => {
        setPetData(petData)
        console.log(petData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {/* <div className="list-box ui padded container segment "> */}
      <div className="pet-container">
        <img className="image" src={petData.image} alt="pets" />
        <div className="pet-imfo">
          <h1>{petData.name}</h1>
          <p>
            {petData.gender === 'Female' && <i className="venus icon"></i>}
            {petData.gender === 'Male' && <i className="mars icon"></i>}
            {petData.gender}/{petData.breed}
          </p>
          <p>
            <i className="map marker alternate icon"></i>
            {petData.location}
          </p>
          <p>{petData.age}</p>
          <p>Color: {petData.color}</p>
          <p>{petData.description}</p>
        </div>
        <div className="applyButton">
          <p>
            <i className="check icon"></i>Desexed
          </p>

          <p>
            <i className="check icon"></i>Microchipped
          </p>

          <p>
            <i className="check icon"></i>Microchipped
          </p>

          <p>
            <i className="check icon"></i>Worming and flea treatment
          </p>
          <Link to={`/${petData.id}/ApplyForm`}>
            <button className="small ui orange button">Adopt Me !</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default PetSummary
