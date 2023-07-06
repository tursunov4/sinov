import React from 'react'
import Icon from '../Icon'
import location from "../../assets/Images/svg/location.svg"
import phone from '../../assets/Images/svg/phone.svg'
import sitelogo from '../../assets/Images/svg/sitelogo.svg'
import lupa from '../../assets/Images/svg/lupa.svg'
import facebook from '../../assets/Images/svg/facebook.svg'
import flag from '../../assets/Images/png/Frame 2.png'
import icon from '../../assets/Images/svg/icon.svg'
import mashina from '../../assets/Images/png/mashina.png'
import dumaloq from '../../assets/Images/svg/dumaloq.svg'
import Button from '../Buttun'
import { NavLink } from 'react-router-dom'
import './header.css'
function Header() {
  return (
     <section className='header__section'>
      <div className="container">
         <div className="header-section__link">
           <div className='header-section__location'>
           <ul>
               <a className='hee' href='https://maps.google.com/maps?q=New+York'>
                <Icon img={location}/>
                <p className='header__location-text'>г.Ташкент, Чиланзар <br />  10 квартал, дом 3/1</p>
               </a>
               <a href='tel:998712766253'>
                <Icon img={phone}/>
                <div className='header__phone-number'>
                   <p>+998 71 276-62-53</p>
                   <p>+998 71 276-62-54</p>
                </div>
               </a>
            </ul>
            <img width={200} height={58} src={sitelogo} alt="site-logo" />
           </div>
           <div className='header__call'>
            <span className='lupa'>
            <Icon  img={lupa}/>
            </span>
            <a href='https://ru-ru.facebook.com/' className="header__facebook">
                <img src={facebook} alt="facebook-icon" />
                <p className="facebook-text">
                   Мы на Facebook
                </p>
            </a>
            <span className="header__select">
              <img src={flag} alt="flag" />
              <p className="header__language">
                 Русский
              </p>
              <img src={icon} alt="icon" />
            </span>
           </div>

         </div>
        <div className="header-section__navbar">
         <NavLink className={'navbar'} to={'/a'}>
             МАГАЗИН    
         </NavLink>
         <NavLink className={'navbar'} to={'/'}>
           О КОМПАНИИ
         </NavLink>
         <NavLink className={'navbar'} to={'/b'}>
         ПРОДУКЦИЯ 
         </NavLink>
         <NavLink className={'navbar'} to={'/c'}>
         УСЛУГИ                
         </NavLink>
         <NavLink className={'navbar'} to={'/d'}>
           АКЦИИ И НОВОСТИ                                 
         </NavLink>
         <NavLink className={'navbar1'} to={'/e'}>
            ОБРАТНАЯ СВЯЗЬ                                
         </NavLink>
        </div>
        <div className="header-section__title">
          <div className="header-title__text">
          <h2>Анализатор <br /> ABL800 FLEX</h2>
          <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
           <span >  <Button text={'Подробнее'}/> </span>
          </div>
          <img className='header-section__mashinimage' src={mashina} alt="mashina" />
        </div>
        <div  className='dumaloq'>         
        <img src={dumaloq} alt="dumaloq" />
        </div>
      </div>
     </section>
  )
}

export default Header