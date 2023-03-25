import React from 'react';
import './Header.css';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className='headerInside'>
            <div className='icon'>
                <img src={Logo} alt="" />
            </div>
            <Link to={'/login'} className='textToEnter'> Entrar</Link>
        </div>
    </header>
  )
}

export default Header