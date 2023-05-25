import React from 'react'
import './scheduleBox.css'
import imgClock from '../../assets/relogio.png'
import imgSchedule from '../../assets/calendario2.png'
import imgPerfil from '../../assets/do-utilizador.png'
const ScheduleBox = () => {
  return (
    <>
      <div className="schedule-box-main">
        <h2>Salão Magnólia</h2>
        <div className="infomations-party">
          <h2>Festa da Gaby</h2>
          <div><img src={imgClock} alt="" /> <span>O dia todo</span></div>
          <div><img src={imgSchedule} alt="" /> <span>Segunda, 13 de Março</span></div>
          <div><img src={imgPerfil} alt="" /> <span>21 Convidados</span></div>
        </div>
      </div>
    </>
  )
}

export default ScheduleBox