import React from 'react'
import './index.css'
import imgCalendar from '../../assets/calendarInternal.png'
import imgGraph from '../../assets/grafico.png'
import imgCalendarClock from '../../assets/relogio-calendario.png'
import imgMoney from '../../assets/dinheiro.png'
import imgForum from '../../assets/forum.png'
import imgSettings from '../../assets/configuracoes.png'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
        <nav className='calendarMain'>
            <NavLink to="/homeAdm">
                <img className='img' src={imgCalendar} />
            </NavLink>
            <NavLink to="/graphicAdm">
                <img className='img' src={imgGraph} />
            </NavLink>
            <NavLink to="/servicesAdm">
                <img className='img' src={imgCalendarClock} />
            </NavLink>
            <NavLink to="/paymentAdm">
                <img className='img' src={imgMoney} />
            </NavLink>
            <NavLink to="/forumAdm">
                <img className='img' src={imgForum} />
            </NavLink>
            <div>
                <img className='img' src={imgSettings} />
            </div>
        </nav>
    </>
  )
}

export default Sidebar;