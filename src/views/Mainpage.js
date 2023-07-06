import React from 'react'
import Header from '../components/Header/Header'
import ProductSection from '../components/ProductSection/ProductSection'
import Usluga from '../components/Usluga/Usluga'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import SwiperCo from '../components/Carusel1/Swiper'
import Partner from '../components/Partner/Partner'
function Mainpage() {
  return (
    <>
      <Header/>  
      <ProductSection/>
      <Usluga/>
      <About/>
      <SwiperCo/>
      <Partner/>
      <Footer/>
    </>
  )
}

export default Mainpage