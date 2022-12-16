import React from 'react';
import Zagolovok from '../../components/aboutZagolovok/Zagolovok';
import AllParamas from '../../components/AllParams/AllParamas';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import OrderCall from '../../components/mainOrderCall/OrderCall';

const Characters = () => {
  return (
    <>
       <Header/>
       <AllParamas/>
       <Zagolovok/>
       <OrderCall/>
       <Footer/>
    </>
  )
}

export default Characters;