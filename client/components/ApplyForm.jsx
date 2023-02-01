import React, { useState } from 'react'
import { addApplicant, getApplicants } from '../apis/applicantsApi'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const initialFormData = {
  name: '',
  phone: '',
  location: '',
  age: '',
  about: '',
  email: '',
}

function ApplyForm() {
  const [form, setForm] = useState(initialFormData)
  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params.id)
  const petsData = useSelector((state) => state.pets)
  const selectedPet = petsData.find((pet) => id === pet.id)
  if (!selectedPet) {
    return <div></div>
  }

  function handleChange(event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      pet_id: selectedPet.id,
      applied_time: new Date(Date.now()),
      [name]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addApplicant(form)
      .then((form) => {
        console.log(form)
        getApplicants()
        setForm(initialFormData) //clean the input after submit
        navigate('/applicants')
        alert('We will contact you soon :)')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div className="inputForm">
        <h2>Apply to adopt {selectedPet.name}</h2>

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
            <label htmlFor="email">
              Email:
              <input
                id="email"
                onChange={handleChange}
                value={form.email}
                name="email"
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
            <label htmlFor="about">
              About you:
              <input
                className="inputBox"
                id="about"
                onChange={handleChange}
                value={form.about}
                name="about"
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
