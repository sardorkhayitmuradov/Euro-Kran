import React from 'react';
import Zagolovok from '../../components/aboutZagolovok/Zagolovok';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import CompanyObjects from '../../components/Objects/CompanyObjects';
import "../Objects/Objects.css";

const Objects = () => {
  return (
    <>
       <Header/>
       <CompanyObjects/>
       <Zagolovok/>
       <Footer/>
    </>
  )
}

export default Objects