import React from "react";
import "../mainRealProjects/RealProjects.css";
import redKran from "../../assets/images/red-kran.png";
import darkKran from "../../assets/images/dark-kran.png";
import darkKran1 from "../../assets/images/dark-kran1.png";
import darkKran2 from "../../assets/images/dark-kran2.png";
import location from "../../assets/images/location.svg";
import {Link} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const RealProjects = () => {
  return (
    <>
      <div className="real__projects">
        <div className="real__projects__container">
          <h1 className="real__projects__label">Реализованные проекты</h1>
        </div>
        <div className="real__projects__carousel">
          <img src={darkKran1} alt="Euro-Kran" />
          <img src={redKran} alt="Euro-Kran" />
          <img src={darkKran2} alt="Euro-Kran" />
          <img src={darkKran} alt="Euro-Kran" />
          <img src={darkKran} alt="Euro-Kran" />
          <img src={darkKran} alt="Euro-Kran" />
          <img src={darkKran} alt="Euro-Kran" />
          <img src={darkKran} alt="Euro-Kran" />
          <img src={darkKran2} alt="Euro-Kran" />
          <img src={redKran} alt="Euro-Kran" />
          <img src={darkKran1} alt="Euro-Kran" />
        </div>
      </div>
      <div className="real__projects__parent">
        <div className="real__projects__left">
          <img src={redKran} alt="Red-Kran" />
        </div>
        <div className="real__projects__right">
          <h2>Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750</h2>
          <br />
          <br />
          <div className="right__location">
            <img src={location} alt="Location" />
            <h3>Калужская обл., Дзержинский район, пос. Полотняный завод</h3>
          </div>
          <br />
          <br />
          <p>
            Монтаж вакуумных колонн К-201 и К-2 «Техническое перевооружение
            установки АТ-101» Монтаж произведен двумя гусеничными кранами
            LIEBHERR LR1300 и LIEBHERR LR1750.
          </p>
          <br />
          <br />
          <HashLink smooth to="/blog" className="real__projects__right__link">
          Подробнее <span> {"→"}</span>
          </HashLink>
          <h1 className="real__projects__back__text">Eurocran</h1>
        </div>
      </div>
    </>
  );
};

export default RealProjects;
