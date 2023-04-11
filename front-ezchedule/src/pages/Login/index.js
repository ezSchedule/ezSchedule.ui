import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mainForm'>
      <form>
        <h1>Entrar</h1>
        <div className='inputsDivLogin'>
          <div>
            <input type="text" placeholder='Email' required />
            <input type="text" placeholder='Senha' required />
          </div>
          <span>
            <Link to="/sendEmail">Esqueci minha senha</Link>
          </span>
        </div>
        <div className='divButtonLogin'>
          <button type='submit'>Continuar</button>
        </div>
      </form>
    </div>
  )
}

export default Login