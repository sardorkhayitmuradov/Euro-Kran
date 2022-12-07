import React, { useState } from "react";
import "../Arenda/Arenda.css";
import MuiPagination from "../../pagination/MuiPagination";
import MuiSlider from "../../MuiSlider";
import { Dropdown } from "rsuite";

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
              <div
                className="arenda__filter1 arenda__filter2"
                style={{ marginTop: "40px" }}
              >
                <h1>Парк техники</h1>
                <div className="arenda__dropdown1">
                  <Dropdown
                    defaultOpen="true"
                    className="rsuit__btn"
                    title="Мобильные краны Liebherr LTM"
                  >
                    <Dropdown.Item>LTM 1040 (40 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1050 (50 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1070 (70 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1090 (90 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1095 (95 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1120 (120 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1250 (250 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1300 (300 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1400 (400 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1500 (500 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1750 (750 т.)</Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="arenda__dropdown1">
                  <Dropdown
                    className="rsuit__btn"
                    title="Гусеничные краны Liebherr LR"
                  >
                    <Dropdown.Item>LTM 1040 (40 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1050 (50 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1070 (70 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1090 (90 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1095 (95 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1120 (120 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1250 (250 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1300 (300 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1400 (400 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1500 (500 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1750 (750 т.)</Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="arenda__dropdown1">
                  <Dropdown className="rsuit__btn" title="Низкорамные тралы">
                    <Dropdown.Item>LTM 1040 (40 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1050 (50 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1070 (70 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1090 (90 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1095 (95 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1120 (120 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1250 (250 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1300 (300 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1400 (400 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1500 (500 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1750 (750 т.)</Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="arenda__dropdown1">
                  <Dropdown className="rsuit__btn" title="Модульные платформы">
                    <Dropdown.Item>LTM 1040 (40 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1050 (50 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1070 (70 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1090 (90 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1095 (95 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1120 (120 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1250 (250 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1300 (300 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1400 (400 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1500 (500 т.)</Dropdown.Item>
                    <Dropdown.Item>LTM 1750 (750 т.)</Dropdown.Item>
                  </Dropdown>
                </div>
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
