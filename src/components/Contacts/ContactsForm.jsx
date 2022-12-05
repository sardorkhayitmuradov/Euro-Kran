import React, { useState } from "react";
import "../Contacts/ContactsForm.css";
import clock from "../../assets/images/contact-clock.svg";
import email from "../../assets/images/email.svg";
import geo from "../../assets/images/geo.svg";
import telefon from "../../assets/images/telefon.svg";
import file from "../../assets/images/file.svg";
import Box from "@mui/material/Box";
import x from "../../assets/images/x-modal.svg";
import Modal from "@mui/material/Modal";

const ContactsForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phone, setPhone] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 620,
    height: 403,
    // bgcolor: "transparent",
    // backdropFilter: "blur(10px)",
    border: "none",
    boxShadow: "none",
    p: 10,
    textAlign: "center",
    paddingTop: "100px",
  };
  return (
    <>
      <div className="contacts">
        <div className="contacts__container">
          <div className="contacts__labels">
            <h5>
              <span>Главная -</span> Контакты
            </h5>
            <h1>Контакты</h1>
          </div>
          <div className="about__contacts__parent">
            <div className="about__contacts__left">
              <div className="contacts__geo">
                <img src={geo} alt="Location" />
                <p>
                  г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул.{" "}
                  <br />
                  Куликовская, 12
                </p>
              </div>
              <br />
              <div className="contacts__icons">
                <div className="contacts__phones">
                  <img src={telefon} alt="Phone" />
                  <div className="numbers">
                    <p>+7 (499)929-96-66</p>
                    <p className="numbers__center">+7 (985)364-55-18</p>
                    <p>+7 (985)226-20-30</p>
                  </div>
                </div>
                <div className="contacts__twink">
                  <div className="contacts__email">
                    <img src={email} alt="Email" />
                    <p>evro-k@yandex.ru</p>
                  </div>
                  <div className="contacts__clock">
                    <img src={clock} alt="Clock" />
                    10:00 - 17:00
                  </div>
                </div>
              </div>
              <div className="contacts__form__rekvizitla">
                <h4>Реквизиты:</h4>
                <div className="contacts__phones">
                  <img src={file} alt="Phone" />
                  <div className="numbers">
                    <p>ООО "Компания Еврокран" </p>
                    <p className="numbers__center">ИНН: 7718999293</p>
                    <p>ОГРН: 5147746130593</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__contacts__right">
              <form action="#">
                <input
                  className="input1"
                  type="text"
                  placeholder="Имя"
                  required
                />
                <div className="right__email__tel">
                  <input className="input2" type="email" placeholder="E-mail" />
                  <input
                    className="input3"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Телефон"
                  />
                </div>
                <textarea
                  name="message"
                  className="input4"
                  placeholder="Сообщение"
                ></textarea>
                <div className="check__label">
                  <input type="checkbox" required />
                  <label htmlFor="#">
                    Я согласен с условиями обработки и использования моих
                    персональных данных
                  </label>
                </div>
                <input
                  disabled={!phone}
                  className="input__btn"
                  type="button"
                  value={"Оставить заявку"}
                  onClick={handleOpen}
                />
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
                    onClick={handleClose}
                    src={x}
                    alt="X-modal"
                  />
                  <h1 className="modal__title">Ваша заявка отправлена</h1>
                  <p className="modal__paragraf">
                    Мы позвоним вам в самое ближайшее время
                  </p>
                  <button className="modal__btn">Вернуться</button>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="contacts__form__how">
            <h4>Как добраться:</h4>
            <p>
              Принимая во внимание показатели успешности, глубокий уровень
              погружения играет определяющее значение для прогресса
              профессионального сообщества. Лишь предприниматели в сети
              интернет, которые представляют собой яркий пример
              континентально-европейского типа политической культуры, будут
              ограничены исключительно образом мышления. Кстати, активно
              развивающиеся страны третьего мира смешаны с не уникальными
              данными до степени совершенной неузнаваемости, из-за чего
              возрастает их статус бесполезности.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsForm;
