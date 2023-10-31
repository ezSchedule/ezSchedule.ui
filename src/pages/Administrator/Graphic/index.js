import './graphic.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import Carousel from '../../../components/internal/Carousel/carousel';

import GraphicInside from '../../../components/internal/Graphic/index';
import GraphicFetch from '../../../hooks/scheduleFetch';
import React, { useState, useEffect } from 'react'

const Graphic = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    GraphicFetch.get(`/findSchedule/v2/2`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className='mainGraphic'>
        <Sidebar />
        <HeaderInternal text="2023" />
      </div>
      {
        data ?
          <div className='content'>
            <div className='sideBarMonth'>
              <Carousel data={data} />
            </div>
            <div className='graphic'>
              <GraphicInside data={data} />
            </div>
          </div>
          :
          <div className='content'>Sem dados para apresentar</div>
      }
    </>
  )
}

export default Graphic