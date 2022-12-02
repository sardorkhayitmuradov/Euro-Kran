import React from "react";
import "./Uslugi.css";
import { uslugi } from "../../dbsUslugi";

const Uslugi = () => {
  return (
    <>
      <section className="uslugi__sect">
        <div className="uslugi__container" id="uslugi">
          <h1 className="uslugi__label">Услуги</h1>
          <div className="uslugi__parent">
            {uslugi.map((el) => {
              return (
                <div key={el.id} className="uslugi__card">
                  <img src={el.img} alt={el.title} />
                  <p>{el.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="uslugi__end__label">SERVICES</h1>
      </section>
    </>
  );
};

export default Uslugi;
