import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Iframe from '../../components/Iframe/Iframe'
import Products from '../../components/UslugiProducts/Products'

const AllProducts = () => {
  return (
    <>
       <Header/>
        <Products/>
       <Iframe/>
       <Footer/>
    </>
  )
}

export default AllProducts