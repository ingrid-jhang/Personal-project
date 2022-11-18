import React, { useState } from 'react'
import { addNewPet } from '../apiClient'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
  name: '',
  gender: '',
  breed: '',
  location: '',
  age: '',
  color: '',
  description: '',
  type_id: 0,
  fee: 125,
  image: '',
}

function AddPet() {
  const [form, setForm] = useState(initialFormData)
  const navigate = useNavigate()

  // const [image, setImage] = useState(initialFormData.image)
  // function onImageChange(e) {
  //   console.log(typeof e.target)
  //   console.log(e.target.value)
  //   console.log(image)
  //   setImage(e.target.value)
  //   // setImage(URL.createObjectURL(e.target.image))
  // }

  function handleChange(event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addNewPet(form)
      .then((newPets) => {
        console.log(newPets)
        setForm(initialFormData) //clean the input after submit
        navigate('/')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div className="inputForm">
        <h2>Add new Pet</h2>

        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="name">
              Name:
              <input
                id="name"
                onChange={handleChange}
                value={form.name}
                name="name"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="type_id">Animal Type:</label>
            <select
              id="type_id"
              onChange={handleChange}
              name="type_id"
              className="ui dropdown"
            >
              <option value="0">--Please select--</option>
              <option value="1">Cat</option>
              <option value="2">Dog</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              onChange={handleChange}
              name="gender"
              className="ui dropdown"
            >
              <option value="">--Please select--</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div>
            <label htmlFor="breed">
              Breed:
              <input
                id="breed"
                onChange={handleChange}
                value={form.breed}
                name="breed"
              />
            </label>
          </div>
          <div>
            <label htmlFor="location">
              Location:
              <input
                id="location"
                onChange={handleChange}
                value={form.location}
                name="location"
              />
            </label>
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
            <label htmlFor="color">
              Color:
              <input
                id="color"
                onChange={handleChange}
                value={form.color}
                name="color"
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Description:
              <input
                className="inputDescriptionBox"
                id="description"
                onChange={handleChange}
                value={form.description}
                name="description"
                placeholder="Tell us something about him/her.."
              />
            </label>
          </div>
          {/* <div>
            <label htmlFor="image">
              Image:
              <input
                // className="inputfileBox"
                type="file"
                id="image"
                onChange={onImageChange}
                value={image}
                name="image"
              />
            </label>
            <img src={image} alt="#" />
          </div> */}

          <button>Add it !</button>
        </form>
      </div>
    </>
  )
}

export default AddPet
