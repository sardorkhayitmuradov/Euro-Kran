import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Iframe from '../../components/Iframe/Iframe'
import MainAside from '../../components/mainAside/MainAside'
import MainTexts from '../../components/mainTexts/MainTexts'
import Uslugi from '../../components/mainUslugi/Uslugi';
import AboutUs from '../../components/mainAboutUs/AboutUs';
import OrderCall from '../../components/mainOrderCall/OrderCall';
import DarkSect from '../../components/mainDarkSection/DarkSect'
import CatalogTechniques from '../../components/mainCatalog/CatalogTechniques'

const Main = () => {
  return (
    <>
    <Header/>

    <CatalogTechniques/>
    <DarkSect/>
    <OrderCall/>
    <AboutUs/>
    <Uslugi/>
    <MainTexts/>
    <MainAside/>
    <Iframe/>
    <Footer/>
    </>
  )
}

export default Main