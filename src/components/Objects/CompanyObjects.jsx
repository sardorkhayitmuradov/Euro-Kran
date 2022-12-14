import React, { useContext } from "react";
import "../Objects/CompanyObjects.css";
import { Link } from "react-router-dom";
import { Context } from "../../ContextFetch/context";

const CompanyObjects = () => {
  const [dataLoad, setDataLoad] = React.useState(3);
  const {objects} = useContext(Context);

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
                <Link to={`/pageobject/${el.id}`} className="objects__card" key={el.id}>
                  <img src={el.object_images[0].images} alt={el.title} />
                  <h3>{el.title}</h3>
                </Link>
              );
            })}
          </div>
          <div className="objects__btn">
            <button
              onClick={() => setDataLoad((defaultState) => defaultState + 6)}
              style={{display: dataLoad >= objects.length ? "none" :  null}}

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
