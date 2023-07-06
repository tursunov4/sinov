import React from 'react'
import './footer.css'
import Icon from '../Icon'
import convert from '../../assets/Images/svg/conver.svg'
import location from "../../assets/Images/svg/location.svg"
import phone from '../../assets/Images/svg/phone.svg'
import Buttun from '../Buttun'
import siteLogo from '../../assets/Images/svg/sitelogo.svg'
function Footer() {
  return (
   <section className='footer-section'>
      <div className="container">
       <div className="footer-section__wrapper">
        <div className="footer-section__contact">
         <div className="footer-contact__list">
            <h3>Контакты</h3>
            <div className="footer__contact-item">
                <div className="contact-item__list">
                <a className='heeee' href='https://maps.google.com/maps?q=New+York'>
                <Icon img={location}/>
                <p className='h__location-text'>г.Ташкент, Чиланзар <br />  10 квартал, дом 3/1</p>
               </a>
               <a href='#'>
                <Icon img={convert}/>
                <div className='headerw__phone-number'>
                   <p>info@medol.uz</p>               
                </div>
               </a>
                </div>
                <div className="contact-item__list2">
                <a href='tel:998712766253'>
                <Icon img={phone}/>
                <div className='headerr__phone-number'>
                   <p>+998 71 276-62-53</p>
                   <p>+998 71 276-62-54</p>
                </div>
               </a>
                <div className='footer-contact__button'>
                  <Buttun text={'Оставить заявку'} item={true}/>
                </div>
                </div>
            </div>
         </div>
         <div className="footer-contact__list2">
          <img src={siteLogo} alt="sitelogo" />
          <p className='footer-contact__text'>
          Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.
          </p>
         </div>
        </div>
        <div className="footer-section__links">
            <ul className="footer-section__links-list">
                <li>
                   <span> <a href='#about'>О компании</a></span>
                    <a href="#"> История</a>
                    <a href="#"> Партнеры </a>
                    <a href="#">  Вакансии</a>
                </li>
                <li>
                    <span itemID='hhh'> <a href="#hhh">Продукция</a> </span>
                    <a href="#">Эндоваскулярная хирургия </a>
                    <a href="#"> Аритмология</a>
                    <a href="#"> Кардиохирургия</a>
                    <a href="#"> Лабораторная диагностика</a>
                    <a href="#"> Хирургия </a>
                    <a href="#">  Эндоурология </a>
                    <a href="#"> Нейрохирургия </a>
                    <a href="#">Анестезиология и реанимация </a>
                    <a href="#">Диабет</a>
                </li>
                <li>
                    <span> <a href="#usluga">Услуги </a> </span>
                    <a href="#"> Сервис </a>
                    <a href="#">  Регистрации </a>
                    <a href="#">  Услуги логистики</a>

                </li>
            </ul>
        </div>
       </div>
    </div>
   </section>
  )
}

export default Footer