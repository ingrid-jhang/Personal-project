import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPets } from '../apiClient'

const Pets = () => {
  const [petsData, setPetsData] = useState([])
  const [type, setType] = useState('')
  useEffect(() => {
    getPets()
      .then((pets) => {
        console.log(pets)
        setPetsData(pets)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function filterPet(pet) {
    if (!type) {
      return true
    }
    return pet.type_id == type
  }
  const filterPets = petsData.filter(filterPet)
  console.log(filterPets)

  function handleChange(e) {
    setType(e.target.value)
  }

  //HANDCHANGE
  return (
    <>
      <label htmlFor="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="">All Pets</option>
        <option value="2">Dog</option>
        <option value="1">Cat</option>
      </select>
      <div className="pets-container">
        {filterPets.map(({ id, name, breed, age, location, image }) => {
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
