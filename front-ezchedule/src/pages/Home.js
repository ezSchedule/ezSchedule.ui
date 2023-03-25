import React from 'react';
import './Home.css';
import AdvertisingBanner from '../components/home/AdvertisingBanner';
import Arrow from '../components/home/Arrow';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import HowItWorks from '../components/home/HowItWorks';
import UseFecth from '../hooks/UseFecth'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <UseFecth />
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