import React from 'react'
import './icon.css'
function Icon({img , item}) {
  return (
    <span className={item ? 'iconitem__carusel' :'iconitem__logo'}>
        <img src={img} alt="icon" />
    </span>
  )
}

export default Icon