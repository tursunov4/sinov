import React from 'react'
import './product.css'
import Buttun from '../Button/Buttun'
function ProductItem({img}) {
  return (
    <div className='productitem__list'>
       <div className="productitem__item">
       <img width={220} height={220} className='productitem__image' src={img} alt="productimage" />
        <p className='productitem__text'>Эндоваскулярная хирургия</p>
        <Buttun  text={'Посмотреть все'}/>
       </div>
    </div>
  )
}

export default ProductItem