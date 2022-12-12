import React, { useContext, useState } from "react";
import "../Arenda/Arenda.css";
import MuiSlider from "../../MuiSlider";
import { Dropdown } from "rsuite";
import Box from "@mui/material/Box";
import x from "../../assets/images/x-modal.svg";
import Modal from "@mui/material/Modal";
import { Context } from "../../ContextFetch/context";

const Arenda = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { allProduct } = useContext(Context);
  const [dataLoada, setDataLoada] = useState(6);
  console.log(dataLoada);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 679,
    height: 750,
    bgcolor: "rgba(243, 243, 243, 0.7)",
    backdropFilter: "blur(4px)",
    border: "none",
    boxShadow: "none",
    p: 15,
    textAlign: "center",
    paddingTop: "100px",
  };
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
              {allProduct?.slice(0, dataLoada).map((el) => {
                return (
                  <div className="arenda__krans__card" key={el.id}>
                    <img src={el.transport_images[0].images} alt={el.name} />
                    <div className="arenda__card__body">
                      <h2>{el.name}</h2>
                      <div className="arenda__card__twink">
                        <p>Грузоподъемность:</p>
                        <p>{el.ton}</p>
                      </div>
                      <div className="arenda__card__twink">
                        <p>Грузоподъемность:</p>
                        <p>{el.arrow_length}</p>
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
                        <button onClick={handleOpen}>Aрендовать</button>
                        <Modal
                          open={open}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          hideBackdrop={true}
                        >
                          <Box sx={style} className="contact__modal">
                            <img
                              className="modal__closer"
                              onClick={handleClose}
                              src={x}
                              alt="X-modal"
                            />
                            <h1 className="modal__title">
                              Арендовать спецтехнику
                            </h1>
                            <p className="modal__paragraf">
                              Оставьте заявку на звонок и мы ответим на все ваши
                              вопросы в самое ближайшее время
                            </p>
                            <form action="#" className="arenda__modal__form">
                              <input
                                className="modal__form"
                                type="text"
                                placeholder="Ваше имя"
                              />
                              <input
                                className="modal__form"
                                type="text"
                                placeholder="Ваш телефон*"
                                required
                              />
                              <input
                                className="modal__form"
                                type="email"
                                placeholder="Ваша почта"
                              />
                              <div className="modal__form__checkbox">
                                <input type="checkbox" />

                                <label htmlFor="#">
                                  Я согласен с условиями обработки и
                                  использования моих персональных данных
                                </label>
                              </div>
                              <input
                                className="modal__form__btn"
                                type="submit"
                                value={"Оставить заявку"}
                              />
                            </form>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="objects__btn">
          <button
            onClick={() => setDataLoada((defaultState) => defaultState + 3)}
            style={{
              display: dataLoada >= allProduct?.length ? "none" : null,
            }}
          >
            Загрузить ещё
          </button>
        </div>
      </div>
    </>
  );
};

export default Arenda;
