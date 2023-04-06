import React from 'react';
import './calendar.css';
import Calendar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
const calendar = () => {
  return (
    <div className='mainCalendar'>
        <Calendar />
        <HeaderInternal />
    </div>
  )
}

export default calendar;