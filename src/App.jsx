// import { useState } from 'react'
import './App.css'

import ArtistPage from '../pages/ArtistPage'
import NavBar from './components/NavBar'
import AppointmentPage from '../pages/AppointmentPage'
import ReviewPage from '../pages/ReviewPage'
import Homepage from '../pages/HomePage'


import { Route, Routes } from "react-router-dom";
import ArtistCard from './components/ArtistCard'


function App() {
  
  return (
    <div className="mainPage">
      <NavBar/>

        <Routes>
         <Route path="/" element={<Homepage />} />
          <Route path="/api/artist" element={<ArtistCard/>}/>
          <Route path="/api/artist/:id" element={<ArtistPage />} />
          <Route path="/review" element={<ReviewPage/>}/>
         <Route path="/appointment" element={<AppointmentPage/>}/>
       </Routes>

    </div>
  )
}

export default App
