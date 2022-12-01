import React from "react";
import "../AboutClients/Clients.css";
import { clients } from "../../clientsSliderdb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="about__clients">
        <div className="about__clients__container">
          <h1 className="about__clients__label">Клиенты говорят о нас</h1>
          <Slider {...settings}>
            {clients.map((el) => {
              return (
                <div className="about__cients__slider__card" key={el.id}>
                  <img src={el.image} alt="Клиенты говорят о нас" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clients;
