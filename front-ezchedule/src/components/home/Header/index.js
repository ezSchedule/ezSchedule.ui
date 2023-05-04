import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className='headerInside'>
            <div className='icon'>
                <img src={Logo} onClick="" alt="" />
            </div>
            <Link to={'/login'} className='textToEnter'> Entrar</Link>
        </div>
    </header>
  )
}

export default Header