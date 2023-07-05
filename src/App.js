import React from 'react'
import './App.css'
import UslugaItem from './components/ItemComponent/UslugaItem'
import usuga from './assets/Images/usluga.png'
function App() {
  return (
    <div>
       <div className="container">
        <UslugaItem img={usuga}/>
       </div>
    </div>
  )
}

export default App