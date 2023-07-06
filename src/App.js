import React from 'react'
import './App.css'
import Mainpage from './views/Mainpage'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
      </Routes>
     
    </div>
  )
}

export default App