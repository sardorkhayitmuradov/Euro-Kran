import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({children}) => {
       const [allProduct,setAllProduct] = useState([]);

       useEffect(() => {
              axios
              .get('https://begzodadmin.pythonanywhere.com/products-api/allproduct/')
              .then((res) => {
                     setAllProduct(res.data);
              })
              .catch((err) => {
                     alert(err);
              }) ;
       },[])

       return (
              <div>
                <Context.Provider
                  value={{
                     allProduct
                  }}
                >
                  {children}
                </Context.Provider>
              </div>
            );
}

export { ContextProvider, Context };