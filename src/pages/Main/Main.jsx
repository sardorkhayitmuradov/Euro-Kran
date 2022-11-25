import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Iframe from '../../components/Iframe/Iframe'
import MainAside from '../../components/mainAside/MainAside'

const Main = () => {
  return (
    <>
    <Header/>

    <MainAside/>
    <Iframe/>
    <Footer/>
    </>
  )
}

export default Main