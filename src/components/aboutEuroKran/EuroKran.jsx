import React from "react";
import { NavLink } from "react-router-dom";
import "../aboutEuroKran/EuroKran.css";
import video from "../../assets/images/about-video.png";

const EuroKran = () => {
  return (
    <>
      <div className="about__euro__kran">
        <div className="about__euro__kran__container">
          <div className="about__title__link">
            <NavLink>
              <span>Главная</span> - О компании
            </NavLink>
          </div>
          <h1 className="about__euro__kran__label">О Компании Еврокран</h1>
          <div className="about__euro__kran__parent">
            <div className="about__euro__kran__left">
              <p>
                Компания ЕвроКран – это команда специалистов, обеспечивающих
                эффективное использование высокопроизводительных немецких
                автокранов марки LIEBHERR. Мы работаем с 2000 года и за это
                время не раз доказали свой профессионализм и компетентность:
                сегодня нам доверяют крупнейшие предприятия России. <br /> <br /> Наши
                операторы автокранов – это профессионалы с опытом и всеми
                необходимыми навыками, прошедшие обучение в самой фирме
                LIEBHERR. <br /> <br /> Для нас не существует слишком сложных задач, мы готовы
                выполнить любые работы: <br /> <br /> монтаж/демонтаж башенных кранов, турбин
                ТЭЦ, куполов храмов, церквей, вращающихся печей, реакторов
                синтеза метанола, металлических конструкций; монтаж вышек
                сотовой связи; строительство зданий, сооружений, мостов;
                установка рекламных щитов; перевозка автотрейлерами
                крупногабаритных и тяжеловесных грузов.
              </p>
            </div>
            <div className="about__euro__kran__right">
              <img src={video} alt="About-video" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EuroKran;
