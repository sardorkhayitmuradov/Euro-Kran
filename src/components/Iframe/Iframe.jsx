import React from "react";
import "../Iframe/Iframe.css";

const Iframe = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.7007237118883!2d37.56195281589371!3d55.57240928050546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada4a6a11d69%3A0xa77bf916d0edbca6!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7LiwgMTIsINCc0L7RgdC60LLQsCwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAxMTc2Mjg!5e0!3m2!1sru!2s!4v1669280104609!5m2!1sru!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="iframe"
      ></iframe>
    </>
  );
};

export default Iframe;
