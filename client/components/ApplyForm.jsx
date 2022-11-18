import React, { useState } from 'react'
import { addNewPet } from '../apiClient'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
  name: '',
  phone: '',
  location: '',
  age: '',
  aboutYou: '',
}

function ApplyForm() {
  const [form, setForm] = useState(initialFormData)
  const navigate = useNavigate()

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
        <h2>Apply to adopt me</h2>

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
            <label htmlFor="phone">
              Phone number:
              <input
                id="phone"
                onChange={handleChange}
                value={form.phone}
                name="phone"
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
            <label htmlFor="aboutYou">
              About you:
              <input
                className="inputaboutYouBox"
                id="aboutYou"
                onChange={handleChange}
                value={form.aboutYou}
                name="aboutYou"
                placeholder="Tell us something about you.."
              />
            </label>
          </div>

          <button>Apply Now !</button>
        </form>
      </div>
    </>
  )
}

export default ApplyForm
