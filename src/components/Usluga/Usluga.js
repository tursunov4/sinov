import React from 'react'
import UslugaItem from '../UslugaItem'
import './usluga.css'
import usl from '../../assets/Images/png/usulaga1.png'
import usl2 from '../../assets/Images/png/usulaga2.png'
import usl3 from '../../assets/Images/png/usulaga3.png'
function Usluga() {
  return (
    <section id='usluga' className='usluga-section'>
        <div className="container">
        <div className="useluga-section__wrapper">
        <UslugaItem title1={'СЕРВИС ОБОРУДОВАНИЯ'} title2={'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......'} img={usl}/>
        <UslugaItem title1={'РЕГИСТРАЦИИ'} title2={'Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....'} img={usl2}/>
        <UslugaItem title1={'УСЛУГИ ЛОГИСТИКИ'} title2={'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....'} img={usl3}/>
        </div>
        </div>
    </section>
  )
}

export default Usluga