import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../ContextFetch/context";
import "../UslugiProducts/Products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { uslugi } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  const uslugFind = uslugi?.find((el) => {
    return el.id === +id;
  });
  return (
    <>
      <div className="products__container">
        <h1 className="products__label">Все продукты этой категории</h1>
        <div className="products__parent">
          {uslugFind?.transport_category.map((el) => {
            return (
              <div className="product__card777__parent" key={el.id}>
                {el?.transport_images?.slice(0, 1).map((img) => {
                  return (
                    <div className="card__product777">
                      <img src={img.images} alt="Foto" />
                      <div className="card_content">
                        <h3>{el.name}</h3>
                        <div className="card__body777">
                          <div className="product__twink">
                            <p>тонн:</p>
                            <p>{el.ton}</p>
                          </div>
                          <div className="product__twink">
                            <p>метр:</p>
                            <p>{el.arrow_length}</p>
                          </div>
                          <button onClick={() => navigate("/catalog")}>
                            Открыть в каталог
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
