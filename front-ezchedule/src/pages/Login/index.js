import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import onBackPressed from '../../components/assets/left-arrow.png';

const Login = () => {
  return (
    <div className='mainBodyLogin'>
      <form className='formLogin'>
        <div className='imageContainer'>
          <Link className='onBack' to="/">
            <img src={onBackPressed} />
          </Link>
        </div>

        <div className='container'>

          <h1>Entrar</h1>

          <div className='contentContainer'>
            <div className='inputContainer'>
              <input type="text" placeholder='Email' required />
              <input type="text" placeholder='Senha' required />
            </div>
            <span>
              <Link className='forgotPassword' to="/sendEmail">Esqueci minha senha</Link>
            </span>
          </div>
            <button type='submit'>Continuar</button>

        </div>
      </form>
    </div>
  )
}

export default Login