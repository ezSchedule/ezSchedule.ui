import React, { useState, useEffect } from 'react';
import './graphic.css';
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import Carousel from '../../../components/internal/Carousel/carousel';
import GraphicInside from '../../../components/internal/Graphic/index';
import GraphicFetch from '../../../hooks/scheduleFetch';
import { now } from 'lodash';

const Graphic = () => {
  const year = new Date();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    GraphicFetch.get(`/findSchedule/${sessionStorage.CONDOMINIUM}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  }, []);

  return (
    <>
      <div className='mainGraphic'>
        <Sidebar />
        <HeaderInternal text={year.getFullYear()} />
      </div>
      {isLoading ? ( 
        <div className='content'>Carregando...</div>
      ) : data ? (
        <div className='content'>
          <div className='sideBarMonth'>
            <Carousel data={data} />
          </div>
          <div className='graphic'>
            <GraphicInside data={data} />
          </div>
        </div>
      ) : (
        <div className='content'>Sem dados para apresentar</div>
      )}
    </>
  );
};

export default Graphic;
