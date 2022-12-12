import React from "react";
import "../mainHero/Hero.css";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__parent">
            <div className="hero__left">
              <div className="hero__empty"></div>
              <br />
              <br />
              <h1>
                Аренда спецтехники <br /> Liebherr для любых задач
              </h1>
              <p>
                Мобильные, гусеничные и башенные краны LIEBHERR в аренду для
                любых задач и грузов. работаем по всей России
              </p>
              <div className="hero__btns">
                <HashLink smooth to="#order_call">
                  <button className="hero__btn1">Заказать звонок</button>
                </HashLink>
                <button className="hero__btn2">Каталог техники</button>
              </div>
            </div>
            <div className="hero__right">
              <h1>{"01/04"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
