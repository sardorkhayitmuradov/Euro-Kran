import React from "react";
import "../mainSpecTech/SpecTech.css";
import kran from "../../assets/images/specTech.png";
import { Link } from "react-router-dom";

const SpecTech = () => {
  return (
    <>
      <div className="spec__tech">
        <div className="spec__tec__container">
         <div className="spec__tec__titles">
         <h1 className="spec__tec__label">
            <span>Спецтехника</span> в аренду
          </h1>
          <h1 className="spec__tec__name">LIEBHERR</h1>
         </div>
          <div className="spec__tec__parent">
            <div className="spec__tec__left">
              <img src={kran} alt="Special-Technique" />
            </div>
            <div className="spec__tec__right">
              <h2>Гусеничные краны</h2>
              <p>
                Аренда гусеничного крана – актуальная услуга для многих
                строительных площадок. Использование спецтехники существенно
                упрощает погрузку - выгрузку материалов, оптимизирует рабочий
                процесс.
              </p>
              <Link>
                {" "}
                <button>Выбрать спецтехнику</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecTech;
