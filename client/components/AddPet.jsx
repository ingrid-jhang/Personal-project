import React, { useState } from 'react'
import { addNewPet } from '../apiClient'

const initialFormData = {
  name: '',
  gender: '',
  breed: '',
  location: '',
  age: '',
  color: '',
  description: '',
}

function AddPet(props) {
  const [form, setForm] = useState(initialFormData)

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
    addNewPet(form) // from line2
      .then((newPets) => {
        console.log(newPets)
        props.setPetsDataFn(newPets) //props from App.jsx
        setForm(initialFormData) //clean the input after submit
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <h2>Add new Pet</h2>

      <form onSubmit={handleSubmit}>
        <div>
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
          <label htmlFor="gender">
            Gender:
            <input
              id="gender"
              onChange={handleChange}
              value={form.gender}
              name="gender"
            />
          </label>
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
          <label htmlFor="age">
            Age:
            <input
              id="age"
              onChange={handleChange}
              value={form.age}
              name="age"
            />
          </label>
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
              id="description"
              onChange={handleChange}
              value={form.description}
              name="description"
            />
          </label>
        </div>
        <button>Add it !</button>
      </form>
    </>
  )
}

export default AddPet
