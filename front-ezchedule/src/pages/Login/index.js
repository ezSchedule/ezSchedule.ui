import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import onBackPressed from '../../components/assets/left-arrow.png';
import httpFetch from '../../hooks/httpFetch';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function Login() {
    const loginUser = { email, password };

    httpFetch.post('/users/login', loginUser)
      .then((res) => {
        saveData(res.data);
        navigate("/homeAdm");
      }).catch((err) => {
        console.clear();
        errorMessage(err.response.status);
        console.log(err);
      });
  }

  function saveData(data) {
    sessionStorage.ID = data.id;
    sessionStorage.TOKEN = data.token;
    sessionStorage.NAME = data.name;
    sessionStorage.EMAIL = data.email;
    sessionStorage.BLOCK = data.residentsBlock;
    sessionStorage.APARTMENT = data.apartmentNumber;
    sessionStorage.PHONE = data.phoneNumber;
    sessionStorage.CPF = data.cpf;
  }

  function errorMessage(status) {
    if (status == 500) {
      alert("Error 500");
    } else if (status == 403) {
      alert("Password or email is wrong");
    } else if (status == 404) {
      alert("Email doesn't exist");
    }
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
              <input type="email" placeholder='Email' required defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Senha' required defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <span>
              <Link className='forgotPassword' to="/sendEmail">Esqueci minha senha</Link>
            </span>
          </div>
          <button type='button' onClick={Login}>Continuar</button>
        </div>
      </form>
    </div>
  )
}

export default Login