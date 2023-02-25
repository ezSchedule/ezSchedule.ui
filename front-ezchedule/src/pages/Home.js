import React from 'react';
import './Home.css';
import AdvertisingBanner from '../components/AdvertisingBanner';
import Arrow from '../components/Arrow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


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