import React from 'react'
import './graphic.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';

const Graphic = () => {
  return (
    <div className='mainGraphic'>
        <Sidebar />
        <HeaderInternal text="Grafico"/>
    </div>
  )
}

export default Graphic