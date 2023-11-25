import React, { useEffect, useState } from 'react';
import './home.css';
import AdvertisingBanner from '../../components/home/AdvertisingBanner';
import Arrow from '../../components/home/Arrow';
import Contact from '../../components/home/Contact';
import Footer from '../../components/home/Footer';
import Header from '../../components/home/Header';
import HowItWorks from '../../components/home/HowItWork';


const Home = () => {

  return (
    <>
      <Header />
      <AdvertisingBanner />
      <Arrow />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  )
}

export default Home