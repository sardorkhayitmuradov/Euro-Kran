import React, { useContext } from "react";
import "../mainAside/mainAside.css";
import kran from "../../assets/images/aside-kran.png";
import { Toaster } from "react-hot-toast";
import Box from "@mui/material/Box";
import x from "../../assets/images/x-modal.svg";
import Modal from "@mui/material/Modal";
import { Context } from "../../ContextFetch/context";

const MainAside = () => {
  
  const { Contacts, open, setOpen } = useContext(Context);
  const handleClose = () => setOpen(false);
    //modal styles 
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 620,
      height: 403,
      border: "none",
      boxShadow: "none",
      p: 10,
      textAlign: "center",
      paddingTop: "70px",
    };

  return (
    <>
      <aside className="main__aside">
        <div className="aside__container">
          <div className="aside__grid__parent">
            <div className="aside__grid__left">
              <h1 className="aside__grid__left__h1">Остались вопросы?</h1>
              <p className="aside__grid__left__p">
                Оставьте заявку на звонок и мы ответим на все ваши вопросы в
                самое ближайшее время
              </p>
              <form className="aside__form" onSubmit={Contacts}>
                <input
                  className="aside__form__input"
                  type="text"
                  placeholder="Ваше имя"
                />
                   <input
                  className="aside__form__input"
                  type="email"
                  placeholder="Ваша почта"
                />
                <input
                  className="aside__form__input"
                  type="tel"
                  placeholder="Ваш телефон*"
                  required
                />
                <textarea
                  className="aside__form__input"
                  placeholder="Оставьте ваш вопрос"
                ></textarea>
                <input
                  className="aside__form__btn"
                  type="submit"
                  value="Заказать звонок"
                />
                <Toaster />
              </form>
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                hideBackdrop={true}
              >
                <Box sx={style} className="contact__modal">
                  <img
                    className="modal__closer"
                    onClick={() => {
                      handleClose()
                      window.location.reload()
                    }}
                    src={x}
                    alt="X-modal"
                  />
                  <h1 className="modal__title">Ваша заявка отправлена</h1>
                  <p className="modal__paragraf">
                    Мы позвоним вам в самое ближайшее время
                  </p>
                  <button
                    className="modal__btn"
                    onClick={() => window.location.reload()}
                  >
                    Вернуться
                  </button>
                </Box>
              </Modal>
            </div>
            <div className="aside__grid__right">
              <img src={kran} alt="Kran" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MainAside;
