import React, { useEffect, useState } from 'react';
import './card.css';
import CalendarIcon from '../../assets/estrela-do-calendario.png';
import UserIcon from '../../assets/usuarios.png';

const Card = ({ month, totalGuests, totalEvents }) => {
  const [personName, setPersonName] = useState("Pessoa");
  const [eventName, setEventName] = useState("Evento");

  console.log(month);
  useEffect(() => {
    if (totalGuests > 1) {
      setPersonName("Pessoas");
    }
  
    if (totalEvents > 1) {
      setEventName("Eventos");
    }
  }, []);


  return (
    <>
      <div className='card'>
        <div className='cardMonthTitle'>
          <p className='titleMonth'>{month}</p>
        </div>

        <div className='cardInformation'>
          <div className='information'>
            <img src={CalendarIcon} alt='Icone de calendário'/>
            <text>{totalGuests} {personName}</text>
          </div>    

          <div className='information'>
            <img src={UserIcon} alt='Icone de usuário'/>
            <text>{totalEvents} {eventName}</text>
          </div>      

        </div>

      </div>

    </>
  );
}

export default Card;