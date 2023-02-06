import React from 'react';
import './Header.css';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
        <div className='headerInside'>
            <div className='icon'>
                <img src={Logo} alt="" />
            </div>
            <div className='textToEnter'>Entrar</div>
        </div>
    </header>
  )
}

export default Header