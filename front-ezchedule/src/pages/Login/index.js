import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import onBackPressed from '../../components/assets/left-arrow.png';
import userFetch from '../../hooks/userFetch';
import Swal from 'sweetalert2';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function Login() {
    const loginUser = { email, password };

    userFetch.post('/login', loginUser)
      .then((res) => {
        saveData(res.data);
        navigate("/homeAdm");
      }).catch((err) => {
        console.clear();
        console.log(err);
        errorMessage(err.response.status)
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
    sessionStorage.CONDOMINIUM = data.idCondominium;
  }

  function errorMessage(status) {
    if (status == 500) {
      console.log("Error 500");
    } else if (status == 403) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Email ou Senha estão errados!',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (status == 404) {
      Swal.fire({
        position: 'top-center',
        icon: 'warning',
        title: 'Email não existe!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className='mainBodyLogin'>
      <form className='formLogin'>
        <div className='navBarContainer'>
        
          <div className='buttonBack'>
            <Link className='onBack' to="/">
              <img src={onBackPressed} />
            </Link>
          </div>
          <div className='title'>
            <p>Entrar</p>
          </div>
          
        </div>

        <div className='container'>
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