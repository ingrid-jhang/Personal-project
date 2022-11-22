import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removePet } from '../actions/pets'

const PetSummary = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const id = Number(params.id)
  const petsData = useSelector((state) => state.pets)
  const selectedPet = petsData.find((pet) => id === pet.id)
  if (!selectedPet) {
    return <div></div>
  }
  function handlleDelete(event) {
    event.preventDefault()
    dispatch(removePet(id))
    navigate('/')
  }

  return (
    <>
      {/* <div className="list-box ui padded container segment "> */}
      <div className="pet-container">
        <img className="image" src={selectedPet.image} alt="pets" />
        <div className="pet-imfo">
          <h1>{selectedPet.name}</h1>
          <p>
            {selectedPet.gender === 'Female' && <i className="venus icon"></i>}
            {selectedPet.gender === 'Male' && <i className="mars icon"></i>}
            {selectedPet.gender}/{selectedPet.breed}
          </p>
          <p>
            <i className="map marker alternate icon"></i>
            {selectedPet.location}
          </p>
          <p>{selectedPet.age}</p>
          <p>Color: {selectedPet.color}</p>
          <p>{selectedPet.description}</p>
        </div>
        <div className="applyButton">
          <p>
            <i className="check icon"></i>Desexed
          </p>

          <p>
            <i className="check icon"></i>I have been microchipped
          </p>

          <p>
            <i className="check icon"></i>Vaccinations up to date
          </p>

          <p>
            <i className="check icon"></i>Worming and flea treatment
          </p>
          <p>Fee : ${selectedPet.fee}</p>
          <Link to={`/${selectedPet.id}/ApplyForm`}>
            {/* <Link to={`/ApplyForm`}> */}
            <button className="small ui orange button">Adopt !</button>
          </Link>
        </div>
        <div className="deleteNupdate">
          <Link to={`/${selectedPet.id}/Update`}>
            <button className="ui inverted yellow button">Update !</button>
          </Link>
          <button
            onClick={handlleDelete}
            className="small ui inverted red button"
          >
            Adopted
          </button>
        </div>
      </div>
    </>
  )
}
export default PetSummary
