import React from 'react'
import './marketlogo.css'

function MarketLogo({img}) {
  return (
    <div className='marketlogo__list'>
        <img src={img} alt="marketlogoimage" />
    </div>
  )
}

export default MarketLogo