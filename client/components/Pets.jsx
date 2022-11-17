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

  //get type from select
  function handleChange(e) {
    setType(e.target.value)
  }

  function filterPet(pets) {
    if (!type) {
      return true
    }
    return pets.type_id == type
  }
  const filteredPets = petsData.filter(filterPet)
  console.log(filteredPets)

  //HANDCHANGE
  return (
    <>
      <div className="formButton">
        <Link to={`/pets/form`}>
          <button>ADD PET</button>
        </Link>
      </div>
      <div className="selectBar">
        <label htmlFor="pet-select" className="ui small header">
          Choose a pet:
        </label>
        <select name="pets" id="pet-select" onChange={handleChange}>
          <option value="">--Please choose a type--</option>
          <option value="">All Pets</option>
          {/* typeDB map the options value={id} */}
          <option value="2">Dogs</option>
          <option value="1">Cats</option>
        </select>
      </div>
      <div className="pets-container">
        {filteredPets.map(({ id, name, breed, age, location, image }) => {
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
