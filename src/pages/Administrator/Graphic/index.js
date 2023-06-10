import React, { useState, useEffect } from 'react'
import './graphic.css'
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import Carousel from '../../../components/internal/Carousel/carousel';

import GraphicInside from '../../../components/internal/Graphic/index';
import GraphicFetch from '../../../hooks/graphicFetch';

const Graphic = () => {
  const token = sessionStorage.TOKEN;
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [data, setData] = useState([]);

  useEffect(() => {
    GraphicFetch.get(`/findSchedule/1`, config)
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


      <div className='content'>

        <div className='sideBarMonth'>
          {data && <Carousel data={data} />}
        </div>

        <div className='graphic'>
          {
            data ?
              <GraphicInside data={data} />
              :
              <div>Não possuí agendamentos</div>
          }
        </div>
      </div>
    </>
  )
}

export default Graphic