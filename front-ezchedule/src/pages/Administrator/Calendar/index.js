import React from 'react';
import './calendar.css';
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import MyCalendar from '../../../components/internal/Calendar';

const calendar = () => {
  return (
    <>
      <div className='main-calendar'>
        <Sidebar />
        <HeaderInternal text="Calendario" />
      </div>
      <div className='calendar'>
          <MyCalendar />
      </div>
    </>
  )
}

export default calendar;