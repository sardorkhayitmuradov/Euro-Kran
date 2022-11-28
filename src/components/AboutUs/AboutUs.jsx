import React from "react";
import "../AboutUs/AboutUs.css";
import about from "../../assets/images/about.png";

const AboutUs = () => {
  return (
    <>
      <section className="about__us__sect">
        <div className="about__us__card2">
          <div className="about__us__card1">
            <h1>ABOUT</h1>
          </div>
          <div className="about__contents">
            <h2>О нас</h2>
            <p>
              Компания ЕвроКран – это команда специалистов, обеспечивающих
              эффективное использование высокопроизводительных немецких
              автокранов марки LIEBHERR. <br /> <br /> Мы работаем с 2000 года и
              за это время не раз доказали свой профессионализм и
              компетентность: сегодня нам доверяют крупнейшие предприятия
              России. <br /> <br /> Мы обладаем собственным парком с более чем 50
              единицами техники и находимся в черте Москвы. Поэтому мы можем
              подать любую технику в любую точку города незамедлительно, что
              бывает весьма кстати в случае возникновения каких-либо
              непредвиденных ситуаций.
            </p>
          </div>
        </div>
        <div className="about__us__card3">
          <img src={about} alt="About-Us" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
