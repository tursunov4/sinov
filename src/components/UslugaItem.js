import React from 'react'
import Buttun from './Buttun'
import './usluga.css'
function UslugaItem({img , title1 , title2}) {
  return (
    <div className='usluga__list'>
      <img  className='usluga__img' src={img} alt="uslagaimgae" />
      <div className="usluga__text">
        <h2 className='usluga__title'>{title1}</h2>
        <p>{title2}</p>
      <span className='usluga__button'>
      <Buttun item={true} text={'Подробнее'}/>
      </span>
      </div>
    </div>
  )
}

export default UslugaItem