import React from 'react'
import './partner.css'
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import previcon from "../../assets/Images/svg/prev.svg"
import nexticon from "../../assets/Images/svg/next.svg"
import img from '../../assets/Images/png/cl1.png'
import icon2 from '../../assets/Images/svg/up-arrow (1) 1.svg'
import MarketLogo from '../MarketLogo'
import cll1 from '../../assets/Images/png/cll1.png'
import cll2 from '../../assets/Images/png/cll2.png'
import cll3 from '../../assets/Images/png/cll3.png'
import cll4 from '../../assets/Images/png/cll4.png'
import cll5 from '../../assets/Images/png/cll5.png'
import cll6 from '../../assets/Images/png/cll6.png'
import cll7 from '../../assets/Images/png/cll7.png'
import cll8 from '../../assets/Images/png/cll8.png'
function Partner() {
    let data = [
        {
          id: 1,
           img1:cll1,
           img2:cll5
        },
      
        {
          id: 2,
           img1:cll2,
           img2:cll6
        },
        {
           id: 3,
           img1:cll3,
           img2:cll7
        },
        {
           id: 4,
           img1:cll4,
           img2:cll8
        },
      
      ];
  return (
    <section className='partner-section'>
        <div className="container">
            <h2>ПАРТНЕРЫ</h2>
            <div className="partner-section__wrapper">
            <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 4,
          focus: "center",
          gap: "4rem",

          breakpoints: {
            1253: {
              perPage: 4,
              gap: "10rem",
            

            },
            1133:{
                perPage: 4,
                gap: "20rem",
            },
            984:{
                perPage: 2,
                gap: "5rem",
            },
            830:{
                perPage: 2,
                gap: "15rem",
            },
            675: {
              perPage: 2,
              gap: "10rem",
            },
            576: {
              perPage: 1,
              gap: "10rem",
            },
          },
        }}
        aria-label="My Favorite Images"
        hasTrack={false}
      >
       <SplideTrack>
       {data.map((item) => (
          <SplideSlide>
          <MarketLogo img={item.img1}/>
          <MarketLogo img={item.img2}/>
          </SplideSlide>
        ))}
       </SplideTrack>
       <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <img src={previcon} alt="" />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <img src={nexticon} alt="" />
            </button>
          </div>
         </Splide>
            </div>
        </div>
    </section>
  )
}

export default Partner