import React from 'react'
import './personSettings.css'

import HeaderInternal from '../../../components/internal/Header';
import Sidebar from '../../../components/internal/SideBar';
import ColumSettings from '../../../components/internal/ColumSettings';

const PersonalSettings = () => {
  const name = sessionStorage.NAME;

  return (
    <>
        <div className='mainPersonSettings'>
            <Sidebar />
            <HeaderInternal text="Ajustes" />
        </div>
        <div className='personSettingsInside'>
            <ColumSettings name={name}/>
        </div>
    </>
  )
}

export default PersonalSettings