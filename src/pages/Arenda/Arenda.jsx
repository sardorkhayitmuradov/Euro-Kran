import React, { useState } from "react";
import "../Arenda/Arenda.css";
import MuiPagination from "../../pagination/MuiPagination";
import MuiSlider from "../../MuiSlider";

const Arenda = () => {
  const [sliderdb, setSliderdb] = useState([]);
  return (
    <>
      <div className="arenda">
        <div className="arenda__container">
          <div className="arenda__labels">
            <h5>
              <span>Главная -</span> Каталог техники
            </h5>
            <h1>Каталог техники</h1>
          </div>
          <div className="arenda__parent">
            <div className="arenda__filters_parent">
              <div className="arenda__filter1">
                <h1>Параметры</h1>
                <ul>
                  <li>Вид техники</li>
                  <li>
                    <input type="checkbox" />
                    <p>Мобильные краны</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Гусеничные краны</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Низкорамные тралы</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Модульные платформы</p>
                  </li>
                  <br />
                  <li>Грузоподъемность т.</li>
                  <li className="filter__inputs">
                    <input type="number" placeholder="от 40" />
                    <input type="number" placeholder="до 750" />
                  </li>
                  <li>
                    {" "}
                    <MuiSlider />
                  </li>
                  <li>Высота подъема, м.</li>
                  <li className="filter__inputs">
                    <input type="number" placeholder="от 10" />
                    <input type="number" placeholder="до 84" />
                  </li>
                  <li>
                    {" "}
                    <MuiSlider />
                  </li>
                  <br />
                  <li
                    onClick={() => window.location.reload()}
                    className="disable__li"
                  >
                    Очистить фильтр
                  </li>
                  <li className="btn__li">
                    <button>Показать</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="arenda__krans__parent">
              {sliderdb?.map((el) => {
                return (
                  <div className="arenda__krans__card" key={el.id}>
                    <img src={el.img} alt={el.name} />
                    <div className="arenda__card__body">
                      <h2>{el.name}</h2>
                      <div className="arenda__card__twink">
                        <p>Грузоподъемность:</p>
                        <p>{el.tonna}</p>
                      </div>
                      <div className="arenda__card__twink">
                        <p>Грузоподъемность:</p>
                        <p>{el.metr}</p>
                      </div>
                      <div className="arenda__card__twink arenda__twink__arrow">
                        <p style={{ fontWeight: "700" }}>Все характеристики</p>
                        <p
                          className="arenda__arrow"
                          style={{ color: "#FFBF1D80" }}
                        >
                          {"→"}
                        </p>
                      </div>
                      <div className="arenda__card__btn">
                        <button>{el.btn}</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <MuiPagination setSliderdb={(p) => setSliderdb(p)} />
        </div>
      </div>
    </>
  );
};

export default Arenda;
