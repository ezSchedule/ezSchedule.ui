import React from 'react';
import './calendar.css';
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
const calendar = () => {
  return (
    <div className='mainCalendar'>
        <Sidebar />
        <HeaderInternal text="Calendario"/>
    </div>
  )
}

export default calendar;