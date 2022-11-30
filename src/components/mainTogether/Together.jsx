import React from "react";
import "../mainTogether/Together.css";
import gruz from "../../assets/images/gruz.png";
import klyuch from "../../assets/images/klyuch.png";
import man from "../../assets/images/man.png";
import watch from "../../assets/images/watch.png";
import { HashLink } from 'react-router-hash-link';

const Together = () => {
  return (
    <>
      <div className="together">
        <div className="together__container">
          <h1 className="together__label">С нами надежно</h1>
          <div className="together__parent">
            <div className="together__left">
              <p>
                Компания Еврокран успешно работает на территории РФ с 2000 года.
                <br />
                <br />
                В нашем автопарке гусеничные и мобильные краны известного
                немецкого бренда. <br /> <br /> Среди них есть модели любой
                грузоподъемности, для погрузочных, монтажных, транспортировочных
                и других работ. <br /> <br />
                Обращение в компанию гарантирует комплексный подход к решению
                поставленных задач. Получить больше информации можно у
                менеджеров Компании Еврокран.
                <br />
                <br />
                <br />
                <HashLink smooth to="#order_call"><button>Заказать звонок</button></HashLink>
              </p>
            </div>
            <div className="together__right">
              <div className="watch">
              <img src={watch} alt="Watch" />
              <h4>Поставка техники <br /> точно в срок</h4>
              </div>
              <div className="klyuch">
              <img src={klyuch} alt="Klyuch" />
              <h4>Сопровождение <br /> спецтехники</h4>
              </div>
              <div className="man">
              <img src={man} alt="Man" />
              <h4>Квалифицированнные <br /> специалисты</h4>
              </div>
              <div className="gruz">
              <img src={gruz} alt="Gruzovoy" />
              <h4>Автопарк от ведущих <br /> мировых производителей</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Together;
