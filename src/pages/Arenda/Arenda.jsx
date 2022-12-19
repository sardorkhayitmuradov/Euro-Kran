import React, { useContext, useState } from "react";
import "../Arenda/Arenda.css";
import MuiSlider from "../../MuiSlider";
import Box from "@mui/material/Box";
import x from "../../assets/images/x-modal.svg";
import Modal from "@mui/material/Modal";
import { Context } from "../../ContextFetch/context";
import { Link } from "react-router-dom";
import MuiSlider2 from "../../MuiSlider2";

const Arenda = () => {
  const { allProduct, filter } = useContext(Context);
  const [dataLoada, setDataLoada] = useState(6);
  const { Order, uslugi } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState();
  const [mui, setMui] = useState([0, 998]);
  const [mui1, setMui1] = useState([20, 998]);
  const [radio, setRadio] = useState();

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

  if (!allProduct) {
    return <h1>Loading...</h1>;
  }

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
                  <li>Вид техники:</li>
                  {uslugi?.map((el) => {
                    return (
                      <li className="category" key={el.id}>
                        <input
                          type="radio"
                          onClick={() =>  setRadio(el.id) }
                          name="charlie"
                        />
                        <p>{el?.title}</p>
                      </li>
                    );
                  })}
                  <br />
                  <li>Грузоподъемность т.</li>
                  <li>
                    <MuiSlider mui={mui} setMui={setMui} />
                  </li>
                  <li>Высота подъема м.</li>
                  <li>
                    <MuiSlider2 mui1={mui1} setMui1={setMui1} />
                  </li>
                  <br />
                  <li
                    onClick={() => window.location.reload()}
                    className="disable__li"
                  >
                    Очистить фильтр
                  </li>
                  <li className="btn__li">
                    <button onClick={() => filter({
                      id:radio,
                      mintonn:mui[0],
                      maxtonn:mui[1],
                      minmeter:mui1[0],
                      maxmeter:mui1[1]
                    })}>Показать</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="arenda__krans__parent">
              {allProduct?.length > 0 ? (
                allProduct?.slice(0, dataLoada).map((el) => {
                  return (
                    <div className="arenda__krans__card" key={el.id}>
                      <img src={el.transport_images[0].images} alt={el.name} />
                      <div className="arenda__card__body">
                        <h2>{el.name}</h2>
                        <div className="arenda__card__twink">
                          <p>Грузоподъемность:</p>
                          <div className="span__twink">
                            <p>{el.ton}</p>
                            <p style={{ paddingLeft: "3px" }}>{" тонн"}</p>
                          </div>
                        </div>
                        <div className="arenda__card__twink">
                          <p>Длина стрелы:</p>
                          <p>
                            {el.arrow_length}
                            {" м"}
                          </p>
                        </div>
                        <Link
                          to={`/characters/${el.id}`}
                          className="arenda__card__twink arenda__twink__arrow"
                        >
                          <p style={{ fontWeight: "700" }}>Все характеристики</p>
                          <p
                            className="arenda__arrow"
                            style={{ color: "#FCB427" }}
                          >
                            {"→"}
                          </p>
                        </Link>
                        <div className="arenda__card__btn">
                          <button
                            onClick={() => {
                              handleOpen();
                              setId(el.id);
                            }}
                          >
                            Aрендовать
                          </button>
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
                              <form
                                onSubmit={(event) => Order(event, id)}
                                className="arenda__modal__form"
                              >
                                <input
                                  className="modal__form"
                                  type="email"
                                  placeholder="Ваша почта"
                                />
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
                })
              ): (
                <div className="nothing">
                  <h1>Nothing found...</h1>
                </div>
              )}
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
