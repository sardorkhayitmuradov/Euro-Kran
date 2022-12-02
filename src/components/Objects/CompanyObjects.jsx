import React from "react";
import "../Objects/CompanyObjects.css";
import { objects } from "../../objectsDb";
import { Link } from "react-router-dom";

const CompanyObjects = () => {
  const [dataLoad, setDataLoad] = React.useState(9);

  return (
    <>
      <div className="objects">
        <div className="objects__container">
          <h5 className="objects__link">
            Главная - <span>Объекты</span>
          </h5>
          <h1 className="objects__label">
            Работа спецтехники от Компании Еврокран
          </h1>
          <div className="objects__db">
            {objects?.slice(0, dataLoad).map((el) => {
              return (
                <Link to={"/pageobject"} className="objects__card" key={el.id}>
                  <img src={el.img} alt={el.title} />
                  <h3>{el.title}</h3>
                  <h4>{el.city}</h4>
                </Link>
              );
            })}
          </div>
          <div className="objects__btn">
            <button
              onClick={() => setDataLoad((defaultState) => defaultState + 6)}
              style={{display: dataLoad === objects.length ? "none" :  null}}

            >
              Загрузить ещё
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyObjects;
