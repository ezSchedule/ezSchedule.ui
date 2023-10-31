import React from 'react'
import './card.css'
import CalendarIcon from '../../assets/calendar-star.png';
import UserIcon from '../../assets/users.png';


const Card = ({ month, totalGuests, totalEvents }) => {

  return (
    <>
      <div className='card'>
        <div className='cardMonthTitle'>
          <p className='titleMonth'>{month}</p>
        </div>

        <div className='cardInformation'>
        <div className='information'>
            <img src={CalendarIcon} alt='Icone de calendário'/>
            <text>{totalGuests} Pessoas</text>
          </div>    

          <div className='information'>
            <img src={UserIcon} alt='Icone de usuário'/>
            <text>{totalEvents} Eventos</text>
          </div>      

        </div>

      </div>

    </>
  )
}

export default Card;