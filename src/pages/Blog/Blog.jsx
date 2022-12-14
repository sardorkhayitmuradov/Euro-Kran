import React, { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import "../Blog/Blog.css";
import { Link } from "react-router-dom";
import { Context } from "../../ContextFetch/context";

const Blog = () => {
  const [more, setMore] = useState(9);
  const {blog} = useContext(Context);

  return (
    <>
      <Header />
      <div className="blog">
        <div className="objects__container">
          <h5 className="objects__link">
            Главная - <span>Статьи</span>
          </h5>
          <div className="objects__params">
            <h1 className="objects__label">СТАТЬИ О СПЕЦТЕХНИКЕ</h1>
          </div>
          <div className="blog__parent">
            {blog?.slice(0, more).map((el) => {
              return (
                <div className="blog__card" key={el.id}>
                  <img src={el.article_images[0].images} alt={el.title} />
                  <div className="blog__body">
                    <h3>{el.title}</h3>
                    <p>{el.desc.slice(0,150)}...</p>
                    <Link to={`/pageblog/${el.id}`}>
                      <button>Подробнее</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="objects__btn">
            <button
              onClick={() => setMore((defaultState) => defaultState + 3)}
              style={{ display: more >= blog.length ? "none" : null }}
            >
              Загрузить ещё
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
