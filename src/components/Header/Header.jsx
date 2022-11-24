import React from "react";
import "../Header/Header.css";
import logo from "../../assets/images/logo.svg";
import clock from "../../assets/images/clock.svg";
import location from "../../assets/images/location.svg";
import call from "../../assets/images/call.svg";
import search from '../../assets/images/search.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="header__nav1">
          <div className="header__container">
            <ul className="header__nav1__ul">
              <li className="link_logo">
                <NavLink>
                  <img src={logo} alt="Logo" />
                </NavLink>
              </li>
              <li className="link_item link_item1">
                <NavLink>
                  Аренда спецтехники <br /> LIEBHERR c 2000 года
                </NavLink>
              </li>
              <li className="link_item link_item2">
                <img src={clock} alt="Clock" />
                <p>10:00-17:00</p>
              </li>
              <li className="link_item link_item3">
                <img src={location} alt="Location" />
                <p>
                  г. Москва, <br /> ул. Куликовская, 12
                </p>
              </li>
              <li className="link_item link_item4">
                <NavLink>
                  <button>Свяжитесь со мной</button>
                </NavLink>
              </li>
              <li className="link_item link_item5">
                <a
                  href="tel:+7 (499)929-96-66"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img src={call} alt="Call" />
                  <span>
                    <p>+7 (499)929-96-66</p>
                    <p>+7 (985)226-20-30</p>
                    <p>+7 (985)364-55-18</p>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="header__nav2">
          <div className="header__container">
           <div className="nav2__parent">
           <ul className="header__nav2__ul">
              <li className="nav2__ul_link nav__ul__link1">
                <NavLink>Каталог</NavLink>
              </li>
              <li className="nav2__ul_link nav__ul__link2">
                <NavLink>Услуги</NavLink>
              </li>
              <li className="nav2__ul_link nav__ul__link3">
                <NavLink>О компании</NavLink>
              </li>
              <li className="nav2__ul_link nav__ul__link4">
                <NavLink>Объекты</NavLink>
              </li>
              <li className="nav2__ul_link nav__ul__link5">
                <NavLink>Цены</NavLink>
              </li>
              <li className="nav2__ul_link nav__ul__link6">
                <NavLink>Блог</NavLink>
              </li>
              <li className="nav2__ul_link nav__ul__link7">
                <NavLink>Контакты</NavLink>
              </li>
            </ul>
            <div className="nav2__buttonIn">
              <input className="nav2__input" type="text" id="enter" />
              <button className="nav2__input__btn" id="clear">
                <img src={search} alt="Search" />
              </button>
            </div>
           </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
