import React from 'react'
import Login from './components/Login'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    </>
  )
}

export default App
