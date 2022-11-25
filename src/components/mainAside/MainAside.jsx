import React from "react";
import "../mainAside/mainAside.css";
import kran from "../../assets/images/aside-kran.png";

const MainAside = () => {
  return (
    <>
      <aside className="main__aside">
        <div className="aside__container">
          <div className="aside__grid__parent">
            <div className="aside__grid__left">
              <h1 className="aside__grid__left__h1">Остались вопросы?</h1>
              <p className="aside__grid__left__p">
                Оставьте заявку на звонок и мы ответим на все ваши вопросы в
                самое ближайшее время
              </p>
              <form className="aside__form">
                <input
                  className="aside__form__input"
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className="aside__form__input"
                  type="tel"
                  placeholder="Ваш телефон*"
                  required
                />
                <input
                  className="aside__form__input"
                  type="email"
                  placeholder="Ваша почта"
                />
                <textarea
                  className="aside__form__input"
                  placeholder="Оставьте ваш вопрос"
                ></textarea>
                <div className="aside__form__check__div">
                <input type="checkbox" className="aside__form__check" />
                <label htmlFor="#">
                  Я согласен с условиями обработки и использования моих
                  персональных данных
                </label>
                </div>
                <input className="aside__form__btn" type="submit" value="Заказать звонок" />
              </form>
            </div>
            <div className="aside__grid__right">
              <img src={kran} alt="Kran" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MainAside;
