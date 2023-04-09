import React from 'react'
import './graphic.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import GraphicInside from '../../../components/internal/Graphic';

const Graphic = () => {
  return (
    <>
    <div className='mainGraphic'>
        <Sidebar />
        <HeaderInternal text="Grafico"/>
    </div>
    <div className='graphic'>
      <div></div>
      <span></span>
    </div>
    </>
  )
}

export default Graphic