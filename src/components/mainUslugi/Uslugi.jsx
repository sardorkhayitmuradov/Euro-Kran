import React, {useContext} from "react";
import "./Uslugi.css";
// import { uslugi } from "../../dbsUslugi";
import { Context } from "../../ContextFetch/context";
import { Link } from "react-router-dom";

const Uslugi = () => {
  const {uslugi} = useContext(Context);
  return (
    <>
      <section className="uslugi__sect">
        <div className="uslugi__container" id="uslugi">
          <h1 className="uslugi__label">Услуги</h1>
          <div className="uslugi__parent">
            {uslugi?.map((el) => {
              return (
                <Link to={`/allproducts/${el.id}`} key={el.id} className="uslugi__card">
                  <img src={el.image} alt={el.title} />
                  <p>{el.title}</p>
                </Link>
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
