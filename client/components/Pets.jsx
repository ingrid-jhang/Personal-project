import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPets } from '../apiClient'

const Pets = () => {
  const [petsData, setPrtsData] = useState([])

  useEffect(() => {
    getPets()
      .then((pets) => {
        console.log(pets)
        setPrtsData(pets)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className="pets-container">
        {petsData.map(({ id, name, breed, age, location, image }) => {
          return (
            <Link to={`/pets/${id}`} key={id}>
              <div key={id}>
                <img className="image" src={image} alt="pets" />
                <h2 className="ui header">{name}</h2>
                <p className="ui small header">
                  {breed} . {age}
                </p>
                <p className="ui small header">
                  <i className="map marker alternate icon"></i>
                  {location}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
export default Pets
