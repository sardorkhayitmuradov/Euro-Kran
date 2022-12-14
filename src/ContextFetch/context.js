import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [uslugi, setUslugi] = useState([]);
  const [objects, setObjects] = useState([]);
  const [blog, setBlog] = useState([]);

  //modal start
  const [open, setOpen] = useState(false);
  //modal end
  //notificates
  const notError = () =>
    toast("Oops! Something get wrong...", {
      style: {
        background: "#fcb427",
        color: "#fff",
      },
    });

  //api urls start
  const allProductUrl =
    "https://begzodadmin.pythonanywhere.com/products-api/allproduct/";

  const uslugiUrl =
    "https://begzodadmin.pythonanywhere.com/products-api/category/";

  const objectsUrl =
    "https://begzodadmin.pythonanywhere.com/applications-api/objects/";

  const blogUrl =
    "https://begzodadmin.pythonanywhere.com/applications-api/article/";

  const contactsUrl =
    "https://begzodadmin.pythonanywhere.com/applications-api/create-app/";

  const orderUrl =
    "https://begzodadmin.pythonanywhere.com/orders-api/create-order";
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

  const Contacts = (event) => {
    event.preventDefault();
    axios
      .post(`${contactsUrl}`, {
        name: event.target[0].value,
        email: event.target[1].value,
        number: event.target[2].value,
        sms: event.target[3].value,
      })
      .then((res) => {
        if (res.status === 201) {
          setOpen(true);
        }
        if (res.status !== 201) {
          notError();
        }
      })
      .catch(() => {
        notError();
      });
  };

  const Order = (event, productId) => {
    event.preventDefault();
    axios
      .post(`${orderUrl}`, {
        product: productId,
        name: event.target[1].value,
        email: event.target[0].value,
        number: event.target[2].value,
      })
      .then((res) => {
        if (res.status === 201) {
          window.location.reload();
        }
        if (res.status !== 201) {
          notError();
        }
      })
      .catch(() => {
        notError();
      });
  };

  return (
    <div>
      <Context.Provider
        value={{
          allProduct,
          uslugi,
          objects,
          blog,
          Contacts,
          open,
          setOpen,
          Order,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider, Context };
