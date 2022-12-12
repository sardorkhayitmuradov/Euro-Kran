import React from "react";
import "../mainCatalog/CatalogTechniques.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderdb } from "../../sliderdb";

const CatalogTechniques = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="catalog__tech">
        <div className="catalog__tech__container">
          <h1 className="catalog__tech__label">Каталог техники</h1>
          <span>{"←   →"}</span>
        </div>
        <div className="catalog__tech__slider">
          <Slider {...settings}>
            {sliderdb.slice(0,8).map((el) => {
              return (
                <div className="slider__card" key={el.id}>
                  <img src={el.img} alt={el.name} />
                  <div className="card__body">
                    <h2>{el.name}</h2>
                    <div className="slider__card__twink">
                      <p>Грузоподъемность:</p>
                      <p>{el.tonna}</p>
                    </div>
                    <div className="slider__card__twink">
                      <p>Грузоподъемность:</p>
                      <p>{el.metr}</p>
                    </div>
                    <div className="slider__card__twink">
                      <p style={{ fontWeight: "700" }}>Все характеристики</p>
                      <p style={{ color: "#FFBF1D80" }}>{"→"}</p>
                    </div>
                    <div className="slider__card__btn">
                      {" "}
                      <button>{el.btn}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CatalogTechniques;
