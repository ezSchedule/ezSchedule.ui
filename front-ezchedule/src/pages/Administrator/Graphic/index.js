import React from 'react'
import './graphic.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import Carousel from '../../../components/internal/Carousel/carousel';

const Graphic = () => {
  return (
    <>
      <div className='mainGraphic'>
        <Sidebar />
        <HeaderInternal text="Váriavel ano" />
      </div>


      <div className='graphic'>

        <div className='sideBarMonth'>
          <Carousel />
        </div>

        <span></span>
      </div>
    </>
  )
}

export default Graphic