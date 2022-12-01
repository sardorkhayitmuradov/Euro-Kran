import React from "react";
import "./Uslugi.css";
import {uslugi} from "../../dbsUslugi";

const Uslugi = () => {
  return (
    <>
    <section className="uslugi__sect" id="uslugi">
      <div className="uslugi__container">
        <h1 className="uslugi__label">Услуги</h1>
          <div className="uslugi__parent">
          {uslugi.map((el) => {
          return(
            <div key={el.id} className="uslugi__card">
              <img src={el.img} alt={el.title} />
              <p>{el.title}</p>
            </div>
          )
        })}
          </div>
      </div>
    </section>
    </>
  )
};

export default Uslugi;
