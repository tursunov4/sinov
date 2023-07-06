import React from "react";
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import "./splide.css";
import previcon from "../../assets/Images/svg/prev.svg"
import nexticon from "../../assets/Images/svg/next.svg"
import img from '../../assets/Images/png/cl1.png'
import icon2 from '../../assets/Images/svg/up-arrow (1) 1.svg'
const SwiperCo = () => {
  let data = [
    {
      id: 1,
      title: " Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      date: "26.07.2021",
      text: " С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в  исполнении...",
    },
    {
      id: 2,
      title: " Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      date: "26.07.2021",
      text: " С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в  исполнении...",
    },
    {
      id: 3,
      title: " Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      date: "26.07.2021",
      text: " С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в  исполнении...",
    },
    {
      id: 3,
      title: " Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      date: "26.07.2021",
      text: " С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в  исполнении...",
    },
  ];
  return (
    <section className="carusel-section">
    <div className="container">
      <h2 className="carusel-section__title">НОВОСТИ</h2>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 3,
          focus: "center",
          gap: "4rem",

          breakpoints: {
            1253: {
              perPage: 3,
              gap: "10rem",
            

            },
            1133:{
                perPage: 3,
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
              perPage: 1,
              gap: "17rem",
            },
          },
        }}
        aria-label="My Favorite Images"
        hasTrack={false}
      >
       <SplideTrack>
       {data.map((item) => (
          <SplideSlide>
            <div className="splide-con">
              <div className="splide-chil"></div>
              <img className="splide-img" src={img}  />
              <a className="splide-link">{item.title}</a>
              <p className="splide-date">{item.date}</p>
              <p className="splide-text">{item.text}</p>
              <a href="#" className="splid-button">
                Подробнее
              </a>
            </div>
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
      <h4 className='product-section__next'>
          <span>Перейти в каталог нашей продукции </span>
          <img src={icon2} alt="icon2" />
        </h4>
    </div>
    </section>
  );
};

export default SwiperCo;
