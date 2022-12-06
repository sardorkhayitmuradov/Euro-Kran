import React from "react";
import "../CatalogConsultation/Consultation.css";

const Consultation = () => {
  return (
    <>
      <div className="consultation">
        <div className="consultation__container">
              <h1>Нужна помощь в подборе? </h1>
          <div className="consultation__form">
            <form action="#">
              <input className="consul__name" placeholder="Имя" type="text" required />
              <input className="consul__tel" type="text" placeholder="Телефон" required/>
              <input type="submit" className="consul__btn" value={"Получить консультацию"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
