import React from 'react'
import './App.css'
import Icon from './components/ItemComponent/Icon'
import location from './assets/Images/svg/location.svg'
function App() {
  return (
    <div>
       <div className="container">
        <Icon item={true} img={location}/>
       </div>
    </div>
  )
}

export default App