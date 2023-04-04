import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='mainForm'>
      <form>
        <h1>Entrar</h1>
            <div className='inputsDivLogin'>
                <div>
                <input type="text" placeholder='Email' required/>
                <input type="text" placeholder='Senha' required/>
                </div>
                  <span>
                  <a href="">Esqueci minha senha</a>
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