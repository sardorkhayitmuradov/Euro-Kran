import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Iframe from '../../components/Iframe/Iframe'
import MainAside from '../../components/mainAside/MainAside'
import MainTexts from '../../components/mainTexts/MainTexts'

const Main = () => {
  return (
    <>
    <Header/>

    <MainTexts/>
    <MainAside/>
    <Iframe/>
    <Footer/>
    </>
  )
}

export default Main