import React from 'react'
import './product.css'
import Buttun from './Buttun'
function ProductItem({img , text}) {
  return (
    <div className='productitem__list'>
       <div className="productitem__item">
         <span className='dddd'>
         <img width={220} height={220} className='productitem__image' src={img} alt="productimage" />
       <span className='productitem__button'>
       <Buttun  text={'Посмотреть все'}/>
       </span>
         </span>
        <p className='productitem__text'>{text}</p>
       </div>
    </div>
  )
}

export default ProductItem