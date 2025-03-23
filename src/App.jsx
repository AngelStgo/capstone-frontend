// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArtistCard from './components/ArtistCard'
import Review from './components/Review'
import ApiDisplay from './components/ApiDisplay'
import Footer from './components/Footer'

function App() {

  return (
    <div className='mainPage'>
      <Header/>
      <NavBar/>
      <hr/>
      <ArtistCard/>
      <Review/>
      <hr/>
      <ApiDisplay/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default App
