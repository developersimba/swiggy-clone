import React from 'react'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import Details from './components/Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
  )
}

export default App
