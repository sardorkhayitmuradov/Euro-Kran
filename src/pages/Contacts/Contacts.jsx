import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import Iframe from '../../components/Iframe/Iframe';
import ContactsForm from '../../components/Contacts/ContactsForm';
import "../Contacts/Contacts.css";

const Contacts = () => {
  return (
    <>
       <Header/>
       <ContactsForm/>
       <Iframe/>
       <Footer/>
    </>
  )
}

export default Contacts