import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updatePets } from '../actions/pets'

const UpdatePet = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const id = Number(params.id)
  const petsData = useSelector((state) => state.pets)
  const selectedPet = petsData.find((pet) => id === pet.id)
  if (!selectedPet) {
    return <div></div>
  }
  const [location, setlocation] = useState('')

  // location: '',
  // age: '',
  // description: '',
  //})

  function handleChange(event) {
    console.log(event.target.value)
    setlocation(event.target.value)
  }

  function handleUpdate(event) {
    event.preventDefault()
    console.log({ location })
    dispatch(updatePets(id, location))
    navigate(`/${id}`)
  }
  return (
    <>
      <div className="updateForm">
        <h2>Update Imformation</h2>
        <h3>{selectedPet.name}</h3>
        <form>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={handleChange}
          />

          {/* <div>
          <label htmlFor="age">Age:</label>
          <select
            id="age"
            onChange={handleChange}
            name="age"
            className="ui dropdown"
          >
            <option value="">--Please select--</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
          </select>
        </div> */}
          {/* 
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={newImfo.description}
          onChange={handleChange}
        /> */}
          <button onClick={handleUpdate}>Submit</button>
        </form>
      </div>
    </>
  )
}
export default UpdatePet
