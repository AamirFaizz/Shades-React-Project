
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shades from './pages/Shades.jsx'
import Demos from './pages/Demos.jsx'
import Features from './pages/Features.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Services.jsx'
import Contacts from './pages/Contact.jsx'
import GetStarted from './pages/Getstarted.jsx'

const App = () => {
  return (
    <div className='bg-[#e3eef8] min-h-screen w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shades />} />
        <Route path='/demos' element={<Demos/>}/>
        <Route path='/features' element={<Features />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/getstarted' element={<GetStarted />} />
      </Routes>
    </div>
  )
}

export default App