import React from "react";
import "../aboutFacts/Facts.css";
import one from "../../assets/images/01.png";
import two from "../../assets/images/02.png";
import three from "../../assets/images/03.png";
import four from "../../assets/images/04.png";

const Facts = () => {
  return (
    <>
      <section className="dark__sect">
        <div className="dark__sect__img">
          <div className="dark__sect__container">
            <h1 className="dar__sect__label">Несколько фактов о нас</h1>
            <div className="dark__sect__parent">
              <div className="dark__sect__card">
                <img src={one} alt="ZERO-ONE" />
                <h1>Прозрачность</h1>
                <p>работаем с клиентами без посредников</p>
              </div>
              <div className="dark__sect__card">
                <img src={two} alt="ZERO-TWO" />
                <h1>Ответственность</h1>
                <p>
                  исполняем обязательства в соответствии с договором и
                  гарантируем завершение работы в срок
                </p>
              </div>
              <div className="dark__sect__card">
                <img src={three} alt="ZERO-THREE" />
                <h1>Профессионализм</h1>
                <p>
                  постоянная подготовка кадров для безопасной работы со
                  спецтехникой любой сложности
                </p>
              </div>
              <div className="dark__sect__card">
                <img src={four} alt="ZERO-FOUR" />
                <h1>Качество</h1>
                <p>
                  высший класс обслуживания заказчиков и новейший парк техники
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;
