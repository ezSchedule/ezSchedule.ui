import './sidebarTenant.css'
import imgCalendar from '../../assets/calendarInternal.png'
import imgSuitcase from '../../assets/suitcase.png'
import imgCalendarClock from '../../assets/relogio-calendario.png'
import imgMoney from '../../assets/dinheiro.png'
import imgForum from '../../assets/forum.png'
import imgSettings from '../../assets/configuracoes.png'
import { NavLink } from 'react-router-dom'
const SidebarTenant = () => {
  return (
    <>
        <nav className='calendarMain'>
            <NavLink to="/*">
                <img className='img' src={imgSuitcase} />
            </NavLink>
            <NavLink to="/paymentTenant">
                <img className='img' src={imgCalendarClock} />
            </NavLink>
            <NavLink to="/*">
                <img className='img' src={imgMoney} />
            </NavLink>
            <NavLink to="/*">
                <img className='img' src={imgForum} />
            </NavLink>
            <NavLink to="/configurationTenant">
                <img className='img' src={imgSettings} />
            </NavLink>
        </nav>
    </>
  )
}

export default SidebarTenant;