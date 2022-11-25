import React from "react";
import "../footer/Footer.css";
import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import vk from "../../assets/images/vk.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import yandex from "../../assets/images/yandex.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="footer__parent">
            <ul className="footer__ul1">
              <li>
                <img src={logo} alt="Logo" />
              </li>
              <li>Аренда мобильных и гусеничных кранов LIEBHERR</li>
              <li>© 2000-2021 Все права защищены</li>
            </ul>
            <ul className="footer__ul2">
              <li className="footer__li__title">Клиентам</li>
              <li>О компании</li>
              <li>Услуги</li>
              <li>Каталог техники</li>
              <li>Аренда кранов</li>
              <li>Наши работы</li>
              <li>Прайс-лист</li>
              <li>Контакты</li>
            </ul>
            <ul className="footer__ul3">
              <li className="footer__li__title">Техника</li>
              <li>Гусеничные краны</li>
              <li>Мобильные краны</li>
              <li>Низеорамные краны</li>
              <li>Модульные платформы </li>
            </ul>
            <ul className="footer__ul4">
              <li className="footer__li__title">Услуги</li>
              <li>Аренда гусеничного крана</li>
              <li>Аренда мобильного крана</li>
              <li>Аренда башенного крана</li>
              <li>Перевозка негабаритного груза</li>
              <li>Разработка ппрк</li>
            </ul>
            <ul className="footer__ul5">
              <button className="footer__ul5__btn">Свяжитесь со мной</button>
              <li>
                <img src={instagram} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
                <img src={whatsapp} alt="Whatstapp" />
                <img src={vk} alt="VK" />
                <img src={yandex} alt="Yandex" />
              </li>
            </ul>
            <ul className="footer__ul6">
              <li className="footer__li__title">Контакты</li>
              <li>+7 (499)929-96-66</li>
              <li>+7 (985)364-55-18</li>
              <li>+7 (985)226-20-30</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
