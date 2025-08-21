import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './components/header/Navber';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Navber />
      <Banner/>
      <Footer/>
    </>
  )
}

export default App