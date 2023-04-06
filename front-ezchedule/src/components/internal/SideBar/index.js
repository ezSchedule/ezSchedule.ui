import React from 'react'
import './index.css'
import imgCalendar from '../../assets/calendarInternal.png'
import imgGraph from '../../assets/grafico.png'
import imgCalendarClock from '../../assets/relogio-calendario.png'
import imgMoney from '../../assets/dinheiro.png'
import imgForum from '../../assets/forum.png'
import imgSettings from '../../assets/configuracoes.png'
const Calendar = () => {
  return (
    <>
        <div className='calendarMain'>
            <div>
                <img src={imgCalendar} />
            </div>
            <div>
                <img src={imgGraph} />
            </div>
            <div>
                <img src={imgCalendarClock} />
            </div>
            <div>
                <img src={imgMoney} />
            </div>
            <div>
                <img src={imgForum} />
            </div>
            <div>
                <img src={imgSettings} />
            </div>
        </div>
    </>
  )
}

export default Calendar