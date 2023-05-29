import React from 'react'
import './card.css'

const Card = ({ month, totalGuests, totalEvents }) => {

  return (
    <>
      <div className='card'>
        <div className='cardMonthTitle'>
          <p className='titleMonth'>{month}</p>
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