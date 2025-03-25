// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InfoBar from './components/InfoBar'
import ArtistCard from './components/ArtistCard'
import Review from './components/Review'
import ApiDisplay from './components/ApiDisplay'
import Footer from './components/Footer'
import ArtistPage from '../pages/ArtistPage'

import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import AppointmentPage from '../pages/AppointmentPage'
import Homepage from '../pages/HomePage'

// useState,

function App() {
  
  return (
    <div className="mainPage">
      <NavBar/>
        <Routes>
         <Route path="/" element={<Homepage />} />
          <Route path="/api/artist/:id" element={<ArtistPage />} />
         <Route path="/appointment" element={<AppointmentPage/>}/>
       </Routes>
      <Header/>

      <nav>
        <InfoBar/>
      </nav>

      {/* <Header/> */}
      {/* render your artist in the cards, only need 1 reusable ArtistCard component */}
      
      <article>
         <Review/>
      </article>
     
      <ApiDisplay/>

      <footer>
         <Footer/>
      </footer>
     
    </div>
  )
}

export default App
