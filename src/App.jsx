
import './App.css'

import ArtistPage from '../pages/ArtistPage'
import NavBar from './components/NavBar'
import AppointmentPage from '../pages/AppointmentPage'
import ReviewPage from '../pages/ReviewPage'
import Homepage from '../pages/HomePage'
import Login from '../pages/Login'


import { Route, Routes } from "react-router-dom";
import ArtistCard from './components/ArtistCard'
// import { AuthProvider } from './context/AuthContext.jsx'
import ArtistDashboard from '../pages/ArtistDashboard'



function App() {
  
  return (
    <>
      

 {/* <AuthProvider> */}
      <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/artist" element={<ArtistCard/>}/>
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/review" element={<ReviewPage/>}/>
            <Route path="/appointment" element={<AppointmentPage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/artist/:id/dashboard" element={<ArtistDashboard />} />
          </Routes>
       {/* </AuthProvider> */}

    </>
  )
}

export default App
