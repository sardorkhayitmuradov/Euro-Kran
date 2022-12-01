import React from 'react'
import EuroKran from '../../components/aboutEuroKran/EuroKran'
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

       <Iframe/>
       <Footer/>
    </>
  )
}

export default About