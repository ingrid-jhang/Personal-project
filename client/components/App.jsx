import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Pets from './Pets'
import PetSummary from './PetSummary'
import AddPet from './AddPet'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pets />} />
          <Route path="/pets/form" element={<AddPet />} />
          <Route path="/pets/:id" element={<PetSummary />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
