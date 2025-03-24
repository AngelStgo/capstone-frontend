// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArtistCard from './components/ArtistCard'
import Review from './components/Review'
import ApiDisplay from './components/ApiDisplay'
import Footer from './components/Footer'
import ArtistPage from './components/ArtistPage'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// useState,

function App() {
// useState[useState, img, setImg] = useState([])
// useEffect(( ) => {
  // fetchImgs = async() => {
    // const data = await getUserImg(:id) }
    // setImgs(data) })
    // fetchImgs
// 
  //function,  get tattoo artist photos. async, user:id , 
  // try - catch , const res = await.fetch ` ${api_url}/api/artist/:id ` return await res.json()
  
  return (
    <div className="mainPage">
      <Header/>

      <nav>
        <NavBar/>
      </nav>

      <Header/>
      {/* render your artist in the cards, only need 1 reusable ArtistCard component */}

      <main>
      <Router>
      <Routes>
        <Route path="/" element={<ArtistCard />} />
        <Route path="/api/artist/:id" element={<ArtistPage />} />
      </Routes>
    </Router>
      </main>
      
      
      <article>
         <Review name="Fabio" review="" artistName="Lucimar" rating={5}/>
      </article>
     
      <ApiDisplay/>

      <footer>
         <Footer/>
      </footer>
     
    </div>
  )
}

export default App
