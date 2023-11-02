import React from 'react'
import './card.css'
import CalendarIcon from '../../assets/calendar-star.png';
import UserIcon from '../../assets/users.png';


const Card = ({ month, totalGuests, totalEvents }) => {

  function nameMounth(month){

    var day = new Date().getDay();
    var year = new Date().getFullYear();
    var strDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('pt-br', {month: 'long'});
    var strDateFormated = strDate.charAt(0).toUpperCase() + strDate.slice(1);

    return strDateFormated;
  }

  return (
    <>
      <div className='card'>
        <div className='cardMonthTitle'>
          <p className='titleMonth'>{nameMounth(month)}</p>
        </div>

        <div className='cardInformation'>
          <div className='information'>
            <img src={CalendarIcon} alt='Icone de calendário' />
            <text>{totalGuests} Pessoas</text>
          </div>

          <div className='information'>
            <img src={UserIcon} alt='Icone de usuário' />
            <text>{totalEvents} Eventos</text>
          </div>

        </div>

      </div>

    </>
  )
}

export default Card;