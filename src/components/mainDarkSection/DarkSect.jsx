import React from "react";
import "./DarkSect.css";
import one from "../../assets/images/01.png";
import two from "../../assets/images/02.png";
import three from "../../assets/images/03.png";
import four from "../../assets/images/04.png";

const DarkSect = () => {
  return (
    <>
      <section className="dark__sect" >
        <div className="dark__sect__img">
          <div className="dark__sect__container">
            <h1 className="dar__sect__label">
              Из чего складывается стоимость аренды
            </h1>
            <div className="dark__sect__parent">
              <div className="dark__sect__card">
                <img src={one} alt="ZERO-ONE" />
                <p>
                  Стоимость аренды крана определяется так: 8 (восемь) часов
                  работы каждой единицы спецтехники в течение смены.
                </p>
              </div>
              <div className="dark__sect__card">
                <img src={two} alt="ZERO-TWO" />
                <p>
                  География доставки спецтехники – вся территория РФ и страны
                  СНГ.
                </p>
              </div>
              <div className="dark__sect__card">
                <img src={three} alt="ZERO-THREE" />
                <p>
                  Стоимость мобилизации и демобилизации за МКАД и на территорию
                  в границах ТТК обговаривается индивидуально и требует
                  дополнительной оплаты.
                </p>
              </div>
              <div className="dark__sect__card">
                <img src={four} alt="ZERO-FOUR" />
                <p>
                  Обозначенная в прайс-листе стоимость услуг включает НДС – 20
                  %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DarkSect;
