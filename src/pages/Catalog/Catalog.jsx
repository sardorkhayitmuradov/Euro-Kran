import React from 'react';
import Contacts from '../../components/aboutContacts/Contacts';
import Zagolovok from '../../components/aboutZagolovok/Zagolovok';
import Consultation from '../../components/CatalogConsultation/Consultation';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import Iframe from '../../components/Iframe/Iframe';

const Catalog = () => {
  return (
    <>
       <Header/>

       <Consultation/>
       <Zagolovok/>
       <Contacts/>
       <Iframe/>
       <Footer/>
    </>
  )
}

export default Catalog