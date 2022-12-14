import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [uslugi, setUslugi] = useState([]);
  const [objects, setObjects] = useState([]);
  const [blog, setBlog] = useState([]);

  //api urls start
  const allProductUrl =
    "https://begzodadmin.pythonanywhere.com/products-api/allproduct/";

  const uslugiUrl =
    "https://begzodadmin.pythonanywhere.com/products-api/category/";

    const objectsUrl = 
    "https://begzodadmin.pythonanywhere.com/applications-api/objects/";

    const blogUrl = 
    "https://begzodadmin.pythonanywhere.com/applications-api/article/";
  //api urls end


  useEffect(() => {
    axios
      .get(`${allProductUrl}`)
      .then((res) => {
        setAllProduct(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${uslugiUrl}`)
      .then((res) => {
        setUslugi(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${objectsUrl}`)
      .then((res) => {
        setObjects(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${blogUrl}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          allProduct,
          uslugi,
          objects,
          blog,
          
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider, Context };
