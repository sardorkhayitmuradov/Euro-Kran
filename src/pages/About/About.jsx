import React from 'react'
import Clients from '../../components/AboutClients/Clients'
import EuroKran from '../../components/aboutEuroKran/EuroKran'
import Facts from '../../components/aboutFacts/Facts'
import Zagolovok from '../../components/aboutZagolovok/Zagolovok'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Iframe from '../../components/Iframe/Iframe'
import Uslugi from '../../components/mainUslugi/Uslugi'

const About = () => {
  return (
    <>
       <Header/>
       <EuroKran/>
       <Uslugi/>
       <Clients/>
       <Facts/>
       <Zagolovok/>

       <Iframe/>
       <Footer/>
    </>
  )
}

export default About