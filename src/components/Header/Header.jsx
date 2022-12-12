import React, { useState } from "react";
import "../Header/Header.css";
import logo from "../../assets/images/logo.svg";
import clock from "../../assets/images/clock.svg";
import location from "../../assets/images/location.svg";
import call from "../../assets/images/call.svg";
import search from "../../assets/images/search.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline #FCD127",
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <nav className="header__nav1">
          <div className="header__container">
            <ul className="header__nav1__ul">
              <li className="link_logo">
                <NavLink to={"/"}>
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
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/catalog"
                  >
                    Каталог
                  </NavLink>
                </li>
                <li className="nav2__ul_link nav__ul__link2">
                  <HashLink smooth to="/#uslugi">
                    Услуги
                  </HashLink>
                </li>
                <li className="nav2__ul_link nav__ul__link3">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/about"
                  >
                    О компании
                  </NavLink>
                </li>
                <li className="nav2__ul_link nav__ul__link4">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/objects"
                  >
                    Объекты
                  </NavLink>
                </li>
                <li className="nav2__ul_link nav__ul__link6">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/blog"
                  >
                    Блог
                  </NavLink>
                </li>
                <li className="nav2__ul_link nav__ul__link7">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/contacts"
                  >
                    Контакты
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mobile__mode">
          <button className="sidebar__btn" onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <Drawer
            open={isOpen}
            direction="left"
            // size={"500px"}
            className="bla bla bla"
          >
            <div className="side__bar">
              <a onClick={toggleDrawer} className="close">
                ×
              </a>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li>
                  <HashLink smooth to="/#uslugi">
                    Услуги
                  </HashLink>
                </li>
                <li>
                  <Link to="/about">О компании</Link>
                </li>
                <li>
                  <Link to="/objects">Объекты</Link>
                </li>
                <li>
                  <Link to="/blog">Блог</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
