import React from 'react'
import User from './components/User'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import State from './hooks/State'

const App = () => {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}>Home</Route>
        <Route path='/about' Component={About}>About</Route>
        <Route path='/contact' Component={Contact}>Contact</Route>
        <Route path='/state' element={<State />}>State</Route>
      </Routes>

    </>
  )
}

export default App
