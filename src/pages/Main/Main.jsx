import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Iframe from '../../components/Iframe/Iframe'
import MainAside from '../../components/mainAside/MainAside'
import MainTexts from '../../components/mainTexts/MainTexts'
import Uslugi from '../../components/Uslugi/Uslugi';
import AboutUs from '../../components/AboutUs/AboutUs';
import OrderCall from '../../components/OrderCall/OrderCall';

const Main = () => {
  return (
    <>
    <Header/>

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