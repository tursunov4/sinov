import React from 'react'
import './App.css'
import MarketLogo from './components/ItemComponent/MarketLogo'
import logo from './assets/Images/logo1.png'
function App() {
  return (
    <div>
       <div className="container">
       <MarketLogo img={logo}/>
       </div>
    </div>
  )
}

export default App