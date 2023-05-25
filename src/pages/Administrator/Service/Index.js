import React from 'react'
import './Service.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import ServiceList from '../../../components/internal/Service/Index';

const Service = () => {
  return (
    <>
      <div className='mainService'>
        <Sidebar />
        <HeaderInternal text="Serviços" />
      </div>
      <div className='serviceInside'>
        <ServiceList />
      </div>
    </>
  )
}

export default Service;