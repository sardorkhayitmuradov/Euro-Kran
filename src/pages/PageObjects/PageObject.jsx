import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import "../PageObjects/PageObject.css";
import { objects } from "../../objectsDb";
import { useNavigate } from "react-router-dom";
import people from "../../assets/params/people.png";
import red from '../../assets/params/red-gruz.png';
import gumbaz from '../../assets/params/gumbaz.png';
import box from '../../assets/params/box.png';
import kalakolcik from '../../assets/params/kalakolcik.png';
import tower from '../../assets/params/tower.png';
import gum from '../../assets/params/gum.png';

const PageObject = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="objects">
        <div className="objects__container">
          <h5 className="objects__link">
            Главная - <span>Объекты</span>
          </h5>
          <div className="objects__params">
            <h1 className="objects__label">
              Разгрузка и монтаж трансформатора
            </h1>
            <p className="page__object__p">
              Разгрузка и монтаж трансформатора ТРДН 80000-110 весом 90т на
              объекте: НПЗ, г.Туапсе Работу выполняет автокран LIEBHERR
              LTM1500грузоподъемностью 500т.
            </p>
            <div className="page__object__params__parent">
              <img src={people} alt="People" />
              <div className="small__params__images">
                     <img src={red} alt="Red-gruz" />
                     <img src={gumbaz} alt="Gumbaz" />
                     <img src={box} alt="Box" />
                     <img src={kalakolcik} alt="Kalakolchik" />
                     <img src={tower} alt="Tower" />
                     <img src={gum} alt="Blue-gumbaz" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page__object__zagolovok">
        <div className="zagolovok">
          <div className="zagolovok__container">
            <h1 className="zagolovok__label">Заголовок</h1>
            <p className="zagolovok__content">
              Гусеничный кран LR 1750 находит свое применение в строительстве
              электростанций, нефтеперерабатывающих заводов, на строительных
              площадках мостов и при монтаже ветросиловых установок. <br />{" "}
              <br /> Эта 750-тонная машина имеет универсальное применение со
              своей 140-метровой основной стрелой, 105-метровым управляемым
              удлинителем стрелы, 21-метровым монтажным удлинителем,
              деррик-оборудованием и 400-тонным подвесным противовесом или
              балластировочной тележкой. <br /> <br />
              Компактные габариты компонентов подъемного крана и их умеренный
              индивидуальный вес позволяют обеспечить экономичную
              транспортировку этого подъемного крана к строительной площадке.{" "}
              <br /> <br /> Этот 750-тонный кран может также использоваться с
              выдвижными опорами, имеющими опорную базу 13 x 13 м.
              Результирующая грузоподъемность в этом случае может быть увеличена
              до 370 %. Гусеничный кран LR 1750 находит свое применение в
              строительстве электростанций, нефтеперерабатывающих заводов, на
              строительных площадках мостов и при монтаже ветросиловых
              установок. <br /> <br /> Эта 750-тонная машина имеет универсальное
              применение со своей 140-метровой основной стрелой, 105-метровым
              управляемым удлинителем стрелы, 21-метровым монтажным удлинителем,
              деррик-оборудованием и 400-тонным подвесным противовесом или
              балластировочной тележкой. <br /> <br /> Компактные габариты
              компонентов подъемного крана и их умеренный индивидуальный вес
              позволяют обеспечить экономичную транспортировку этого подъемного
              крана к строительной площадке. <br /> <br /> Этот 750-тонный кран
              может также использоваться с выдвижными опорами, имеющими опорную
              базу 13 x 13 м. Результирующая грузоподъемность в этом случае
              может быть увеличена до 370 %.Гусеничный кран LR 1750 находит свое
              применение в строительстве электростанций, нефтеперерабатывающих
              заводов, на строительных площадках мостов и при монтаже
              ветросиловых установок. <br /> <br />
              Эта 750-тонная машина имеет универсальное применение со своей
              140-метровой основной стрелой, 105-метровым управляемым
              удлинителем стрелы, 21-метровым монтажным удлинителем,
              деррик-оборудованием и 400-тонным подвесным противовесом или
              балластировочной тележкой. <br /> <br />
              Компактные габариты компонентов подъемного крана и их умеренный
              индивидуальный вес позволяют обеспечить экономичную
              транспортировку этого подъемного крана к строительной площадке.{" "}
              <br /> <br /> Этот 750-тонный кран может также использоваться с
              выдвижными опорами, имеющими опорную базу 13 x 13 м.
              Результирующая грузоподъемность в этом случае может быть увеличена
              до 370 %. <br /> <br />
            </p>
          </div>
        </div>
      </div>
      <div className="objects">
        <div className="objects__container">
          <h1 className="objects__label">Другие объекты</h1>
          <div className="objects__db">
            {objects?.slice(0, 3).map((el) => {
              return (
                <div className="objects__card" key={el.id}>
                  <img src={el.img} alt={el.title} />
                  <h3>{el.title}</h3>
                  <h4>{el.city}</h4>
                </div>
              );
            })}
          </div>
          <div className="objects__btn">
            <button onClick={() => navigate("/objects")}>Смотреть все</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageObject;
