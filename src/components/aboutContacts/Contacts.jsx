import React from "react";
import "../aboutContacts/Contacts.css";
import clock from "../../assets/images/contact-clock.svg";
import email from "../../assets/images/email.svg";
import geo from "../../assets/images/geo.svg";
import telefon from "../../assets/images/telefon.svg";

const Contacts = () => {
  return (
    <>
      <div className="about__contacts">
        <div className="about__contacts__container">
          <h1 className="about__contacts__label">Контакты</h1>
          <div className="about__contacts__parent">
            <div className="about__contacts__left">
              <p>
                Ежедневно мы развиваемся и стараемся стать лучше для вас,
                поэтому всегда рады получить от вас обратную связь с пожеланиями
                и идеями по улучшению наших продуктов! <br /> <br /> Если у вас
                остались вопросы или есть предложения как стать лучше пишите
                нам!
              </p>
              <br />
              <div className="contacts__geo">
                <img src={geo} alt="Location" />
                <p>
                  г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул.{" "}
                  <br />
                  Куликовская, 12
                </p>
              </div>
              <br />
              <div className="contacts__icons">
                <div className="contacts__phones">
                  <img src={telefon} alt="Phone" />
                  <div className="numbers">
                    <p>+7 (499)929-96-66</p>
                    <p className="numbers__center">+7 (985)364-55-18</p>
                    <p>+7 (985)226-20-30</p>
                  </div>
                </div>
                <div className="contacts__twink">
                  <div className="contacts__email">
                    <img src={email} alt="Email" />
                    <p>evro-k@yandex.ru</p>
                  </div>
                  <div className="contacts__clock">
                    <img src={clock} alt="Clock" />
                    10:00 - 17:00
                  </div>
                </div>
              </div>
            </div>
            <div className="about__contacts__right">
              <form action="#">
                <input className="input1" type="text" placeholder="Имя" required />
                <div className="right__email__tel">
                  <input className="input2" type="email" placeholder="E-mail" />
                  <input className="input3" type="text" placeholder="Телефон" />
                </div>
                <textarea name="message" className="input4" placeholder="Сообщение"></textarea>
                <div className="check__label">
                  <input type="checkbox"  required/>
                  <label htmlFor="#">
                    Я согласен с условиями обработки и использования моих
                    персональных данных
                  </label>
                </div>
                <input className="input__btn" type="submit" value={"Оставить заявку"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
