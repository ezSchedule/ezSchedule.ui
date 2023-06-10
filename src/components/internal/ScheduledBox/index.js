import React from 'react'
import { useState, useEffect } from 'react'
import './scheduleBox.css'
import imgClock from '../../assets/relogio.png'
import imgSchedule from '../../assets/calendario2.png'
import imgPerfil from '../../assets/do-utilizador.png'
import scheduleFetch from '../../../hooks/scheduleFetch'
const ScheduleBox = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    scheduleFetch.get(`/tenant/${sessionStorage.ID}`)
      .then((response) => {
        console.log(response.data)
        setSchedules(response.data)
      }).catch((err) => {
        console.log(err);
      });
    console.log(schedules)
  }, [])
  return (
    <>
      {
        schedules ?
          schedules.map(
            (schedule) => (
              <div key={schedule.id} className="schedule-box-main">
                <h2>{schedule.saloon.saloonName}</h2>
                <div className="infomations-party">
                  <h2>{schedule.nameEvent}</h2>
                  <div><img src={imgClock} alt="" /> <span>O dia todo</span></div>
                  <div><img src={imgSchedule} alt="" /> <span>{schedule.dateEvent}</span></div>
                  <div><img src={imgPerfil} alt="" /> <span>{schedule.totalNumberGuests} Convidados</span></div>
                </div>
              </div>
            )
          )
          :
          ''
      }
    </>
  )
}

export default ScheduleBox