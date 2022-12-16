import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../../ContextFetch/context";
import "../AllParams/AllParams.css";

const AllParamas = () => {
  const { allProduct } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const allParams = allProduct?.find((el) => {
    return el.id === +id;
  });
  return (
    <>
      <div className="params">
        <div className="params__container">
          <div className="arenda__labels">
            <h5>
              <span>Главная - </span>Каталог - Страница товара
            </h5>
            <h1>{allParams?.name}</h1>
            <br />
            <br />
            <p>{allParams?.description}</p>
          </div>
          <div className="params__parent">
            <div className="params__imgs">
              <img
                src={allParams?.transport_images[0]?.images}
                alt="Картинка скоро будет добавлена!"
              />
              <img
                src={allParams?.transport_images[1]?.images}
                alt="Картинка скоро будет добавлена!"
              />
            </div>
            <div className="params__desc">
              <h1>{allParams?.type_transport}</h1>
              <p>{allParams?.characteristics}</p>
            </div>
            <div className="params__imgs">
              <img
                src={allParams?.transport_images[2]?.images}
                alt="Картинка скоро будет добавлена!"
              />
              <img
                src={allParams?.transport_images[3]?.images}
                alt="Картинка скоро будет добавлена!"
              />
            </div>
            <div className="btn__back">
              <button
                onClick={() => navigate(-1)}
                className="back__btn"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllParamas;
