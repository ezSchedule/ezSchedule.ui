import React from 'react';
import './calendar.css';
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import Calendar from '../../../components/internal/Calendar';
const calendar = () => {
  return (
    <>
      <div className='mainCalendar'>
        <Sidebar />
        <HeaderInternal text="Calendario" />
      </div>
      <div className='calendar'>
          <Calendar />
      </div>
    </>
  )
}

export default calendar;