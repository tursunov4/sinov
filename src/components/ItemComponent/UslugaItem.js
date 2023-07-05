import React from 'react'
import Buttun from './Buttun'
import './usluga.css'
function UslugaItem({img}) {
  return (
    <div className='usluga__list'>
      <img  className='usluga__img' src={img} alt="uslagaimgae" />
      <div className="usluga__text">
        <h2 className='usluga__title'>СЕРВИС ОБОРУДОВАНИЯ</h2>
        <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
      <span className='usluga__button'>
      <Buttun item={true} text={'Подробнее'}/>
      </span>
      </div>
    </div>
  )
}

export default UslugaItem