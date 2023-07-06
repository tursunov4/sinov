import React from 'react'
import './newsitem.css'
import Button from './Buttun'
function NewsItem({img}) {
  return (
    <div className='newsitem__list'>
      <div className="newsitem__item">
      <h3>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h3> 
        <h4>26.07.2021</h4>
        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
         <span className='newsitem__button'>
         <Button text={'Подробнее'} item={true}/>
         </span>
         <img className='newsitem__image' src={img} alt="newsimg" />
      </div>
    </div>
  )
}

export default NewsItem