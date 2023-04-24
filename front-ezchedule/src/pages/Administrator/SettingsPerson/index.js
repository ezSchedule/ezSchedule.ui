import React from 'react'
import './personSettings.css'

import HeaderInternal from '../../../components/internal/Header';
import Sidebar from '../../../components/internal/SideBar';
import ColumSettings from '../../../components/internal/ColumSettings';

const PersonalSettings = () => {
  return (
    <>
        <div className='mainPersonSettings'>
            <Sidebar />
            <HeaderInternal text="Ajustes" />
        </div>
        <div className='personSettingsInside'>
            <ColumSettings />
        </div>
    </>
  )
}

export default PersonalSettings