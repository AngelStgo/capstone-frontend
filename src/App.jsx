// import { useState } from 'react'
import './App.css'

import ArtistPage from '../pages/ArtistPage'
import NavBar from './components/NavBar'
import AppointmentPage from '../pages/AppointmentPage'
import ReviewPage from '../pages/ReviewPage'
import Homepage from '../pages/HomePage'
import Login from '../pages/Login'


import { Route, Routes } from "react-router-dom";
import ArtistCard from './components/ArtistCard'
import { AuthProvider } from './context/AuthContext'
import ArtistDashboard from '../pages/ArtistDashboard'


function App() {
  
  return (
    <div className="mainPage">
      <NavBar/>

        <Routes>
         <Route path="/home" element={<Homepage />} />
          <Route path="/artist" element={<ArtistCard/>}/>
          <Route path="/artist/:id" element={<ArtistPage />} />
          
          <Route path="/review" element={<ReviewPage/>}/>
         <Route path="/appointment" element={<AppointmentPage/>}/>
         
       </Routes>

       <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/auth/artist/:id" element={<ArtistDashboard/>}/>
          </Routes>
       </AuthProvider>

    </div>
  )
}

export default App
