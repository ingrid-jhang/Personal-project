import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updatePets } from '../actions/pets'

const UpdatePet = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const id = Number(params.id)
  const petsData = useSelector((state) => state.pets)
  const selectedPet = petsData?.find((pet) => id === pet.id)

  const [newInfo, setNewInfo] = useState({
    location: '',
    age: '',
    description: '',
  })
  useEffect(() => {
    setNewInfo({
      location: selectedPet?.location || '',
      age: selectedPet?.age || '',
      description: selectedPet?.description || '',
    })
  }, [petsData])

  function handleChange(event) {
    //console.log(event.target.value)
    setNewInfo({ ...newInfo, [event.target.name]: event.target.value })
  }

  function handleUpdate(event) {
    event.preventDefault()
    console.log(newInfo)
    dispatch(updatePets(id, newInfo))
    navigate(`/${id}`)
  }
  if (!selectedPet) {
    return <div></div>
  }
  return (
    <>
      <div className="updateForm">
        <h2>Update Information</h2>

        <h3>{selectedPet.name}</h3>
        <form>
          <div>
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              id="location"
              value={newInfo.location}
              onChange={handleChange}
            />
          </div>
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
          <div>
            <label htmlFor="description">Description: </label>
            <input
              className="inputDescriptionBox"
              type="text"
              name="description"
              id="description"
              value={newInfo.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={handleUpdate}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default UpdatePet
