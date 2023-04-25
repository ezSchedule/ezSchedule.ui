import React, { useEffect, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import onBackPressed from '../../components/assets/left-arrow.png';
import axios from 'axios';
import httpFetch from '../../hooks/httpFetch';
import { containerClasses } from '@mui/material';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login() {
    const loginUser = { email, password }

    httpFetch.post('/users/login', loginUser)
      .then((res) => {
        console.log("Login success");
        console.log(res)
        sessionStorage.TOKEN = res.data.token;
      }).catch((err) => {
        var status = err.response.status
        if (status == 500) {
          console.log("Error 500");
        } else if (status == 403) {
          console.log("Password or email is wrong");
        }
        console.log(err);
      });
  }

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
              <input type="text" placeholder='Email' required defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder='Senha' required defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <span>
              <Link className='forgotPassword' to="/sendEmail">Esqueci minha senha</Link>
            </span>
          </div>
          <button type='button' onClick={login}>Continuar</button>

        </div>
      </form>
    </div>
  )
}

export default Login