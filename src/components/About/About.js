import React from 'react'
import './about.css'
import Button from '../Buttun'
function About() {
  return (
    <section id='about' className='about-section'>
      <div className="container">
        <h2 >О КОМПАНИИ</h2>
        <div className="about-section__wrapper">
        <div>
            <p className='about-section__text'>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
            <Button text={'Узнать больше'} item={true} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default About