import React from 'react';
import Zagolovok from '../../components/aboutZagolovok/Zagolovok';
import Consultation from '../../components/CatalogConsultation/Consultation';
import ContactsForm from '../../components/Contacts/ContactsForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import Iframe from '../../components/Iframe/Iframe';
import Arenda from '../Arenda/Arenda';

const Catalog = () => {
  return (
    <>
       <Header/>
      <Arenda/>
       <Consultation/>
       <Zagolovok/>
       <ContactsForm/>
       <Iframe/>
       <Footer/>
    </>
  )
}

export default Catalog