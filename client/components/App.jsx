import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPets } from '../actions/pets'

import Footer from './Footer'
import Header from './Header'
import Pets from './Pets'
import PetSummary from './PetSummary'
import AddPet from './AddPet'
import ApplyForm from './ApplyForm'
import UpdatePet from './UpdatePet'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPets())
  }, [])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pets />} />
          <Route path="/form" element={<AddPet />} />
          <Route path="/:id" element={<PetSummary />} />
          <Route path="/:id/Update" element={<UpdatePet />} />
          <Route path="/:id/ApplyForm" element={<ApplyForm />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
