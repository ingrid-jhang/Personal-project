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
  const [newImfo, setNewImfo] = useState({
    location: '',
    age: '',
    description: '',
  })

  function handleChange(event) {
    console.log(event.target.value)
    setNewImfo(event.target.value)
  }

  function handleUpdate(event) {
    event.preventDefault()
    console.log(newImfo)
    dispatch(updatePets(selectedPet.id, { newImfo }))
    navigate(`/${selectedPet.id}`)
  }
  return (
    <>
      <h2>Update Imfo</h2>
      <p>{selectedPet.name}</p>
      <form>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          value={newImfo.location}
          onChange={handleChange}
        />

        <div>
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
        </div>

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={newImfo.description}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Submit</button>
      </form>
    </>
  )
}
export default UpdatePet
