import React from 'react'
import './ProducSection.css'
import ProductItem from '../ProductItem'
import pro1 from '../../assets/Images/png/product1.png'
import pro2 from '../../assets/Images/png/product2.png'
import pro3 from '../../assets/Images/png/product3.png'
import pro4 from '../../assets/Images/png/product4.png'
import pro5 from '../../assets/Images/png/product5.png'
import pro6 from '../../assets/Images/png/product6.png'
import icon2 from '../../assets/Images/svg/up-arrow (1) 1.svg'
function ProductSection() {
  return (
    <section id='hhh' className="product-section">
     <div className="container">
     <h3>ПРОДУКЦИЯ</h3>
        <ul className="porduct-section__list">
      
      
             <ProductItem img={pro1} text={'Эндоваскулярная хирургия'} />
        
            
             <ProductItem img={pro2} text={'Лабораторная диагностика'} />
            
          
             <ProductItem img={pro3} text={'Кардиохирургия'} />
            


             <ProductItem img={pro4} text={'ДИАБЕТ'} />
            
             <ProductItem img={pro5} text={'ЭНДОУРОЛОГИЯ'} />
        
             <ProductItem img={pro6} text={'АРИТМОЛОГИЯ'} />
       
       
        </ul>
        <h4 className='product-section__next'>
          <span>Перейти в каталог нашей продукции </span>
          <img src={icon2} alt="icon2" />
        </h4>
     </div>
     <h2>УСЛУГИ</h2>
    </section>
  )
}

export default ProductSection