import React from "react";
import "./OrderCall.css";

const OrderCall = () => {
  return (
    <>
      <section className="order__call__sect" id="order_call">
        <div className="order__call__container">
          <h1 className="order__call__label">
            <span>Оперативно</span> поставим технику
          </h1>
          <form className="order__call__form">
            <input
              className="order__call__input"
              placeholder="Ваше имя"
              type="text"
              required
            />
            <input
              className="order__call__input order__form__inp2"
              placeholder="Ваш телефон*"
              required
              type="text"
            />
            <input
              className="order__call__btn"
              type="submit"
              value={"Заказать звонок"}
            />
            <br />
            <div className="order__check__div">
              <input className="order__call__check" type="checkbox" />
              <label>
                Я согласен с условиями обработки и использования моих
                персональных данных
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default OrderCall;
