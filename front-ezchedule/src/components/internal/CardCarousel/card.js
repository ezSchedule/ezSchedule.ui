import React, { useEffect, useState } from 'react'
import './card.css'
import GraphicFetch from '../../../hooks/graphicFetch';

const Card = () => {

  const [totalGuests, setTotalGuests] = useState();
  const [totalEvents, setTotalEvents] = useState();

  useEffect(() => {

    GraphicFetch.get(`0`)
      .then((res) => {
        
        
      })
      .catch((err) => {
        console.log(err);
      });

      
  });

  return (
    <>
      <div className='card'>
        <div className='cardMonthTitle'>
          <p className='titleMonth'>Janeiro</p>
        </div>

        <div className='cardInformation'>
          <p className='information'>{totalGuests} Pessoas</p>
          <p className='information'>{totalEvents} Eventos</p>

        </div>

      </div>




    </>
  )
}

export default Card;