import React, { useState } from "react";
import "../mainCatalog/CatalogTechniques.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Context } from "../../ContextFetch/context";
import Box from "@mui/material/Box";
import x from "../../assets/images/x-modal.svg";
import Modal from "@mui/material/Modal";
import { useContext } from "react";

const CatalogTechniques = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {allProduct} = useContext(Context);

  if(!allProduct){
    return <h1>Loading...</h1>
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
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
      <section className="catalog__tech">
        <div className="catalog__tech__container">
          <h1 className="catalog__tech__label">Каталог техники</h1>
          <span>{"←   →"}</span>
        </div>
        <div className="catalog__tech__slider">
          <Slider {...settings}>
            {allProduct?.map((el) => {
              return (
                <div className="slider__card" key={el.id}>
                  {/* <img src={el.img} alt={el.name} /> */}
                  <div className="card__body">
                    <h2>{el.name}</h2>
                    <div className="slider__card__twink">
                      <p>Грузоподъемность:</p>
                      <p>{el.ton}</p>
                    </div>
                    <div className="slider__card__twink">
                      <p>Грузоподъемность:</p>
                      <p>{el.arrow_length}</p>
                    </div>
                    <div className="slider__card__twink">
                      <p style={{ fontWeight: "700" }}>Все характеристики</p>
                      <p style={{ color: "#FFBF1D80" }}>{"→"}</p>
                    </div>
                    <div className="slider__card__btn">
                      {" "}
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
                                Я согласен с условиями обработки и использования
                                моих персональных данных
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
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CatalogTechniques;
