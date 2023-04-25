import React from 'react'
import './graphic.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import Carousel from '../../../components/internal/Carousel/carousel';
import GraphicInside from '../../../components/internal/Graphic/index';

const Graphic = () => {
  return (
    <>
      <div className='mainGraphic'>
      <Sidebar />
      <HeaderInternal text="2023" />
      </div>


      <div className='content'>

        <div className='sideBarMonth'>
          <Carousel />
        </div>

        <div className='graphic'>
          <GraphicInside />
        </div>
      </div>
    </>
  )
}

export default Graphic