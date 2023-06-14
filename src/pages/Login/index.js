import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import onBackPressed from '../../components/assets/left-arrow.png';
import userWithoutJWTFetch from '../../hooks/userWithoutJWTFetch';
import Swal from 'sweetalert2';
import VLibras from '../../components/internal/Vlibras';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function validateInputs() {
    if (email === "" || email === undefined || password === "" || password === undefined) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Os campos não podem ser vazios!',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      login();
    }
  }

  function login() {
    const loginUser = { email, password };

    userWithoutJWTFetch.post('/login', loginUser)
      .then((res) => {
        saveData(res.data);
        validateAdmin(res.data);
      }).catch((err) => {
        console.clear();
        errorMessage(err.response.status);
      });
  }

  function validateAdmin(data) {
    if (data.isAdmin === 1) navigate('/homeAdm');
    else if (data.isAdmin === 0) navigate('/scheduleTenant');
  }

  function saveData(data) {
    sessionStorage.ID = data.id;
    sessionStorage.AUTH = data.authenticated;
    sessionStorage.ADMIN = data.isAdmin;
    sessionStorage.TOKEN = data.token;
    sessionStorage.NAME = data.name;
    sessionStorage.EMAIL = data.email;
    sessionStorage.BLOCK = data.residentsBlock;
    sessionStorage.APARTMENT = data.apartmentNumber;
    sessionStorage.PHONE = data.phoneNumber;
    sessionStorage.CPF = data.cpf;
    sessionStorage.CONDOMINIUM = data.idCondominium;
    sessionStorage.IMAGE = "https://ezscheduleusersimages.blob.core.windows.net/ezschedules/" + data.image;
  }

  function errorMessage(status) {
    if (status === 500) {
      alert("Error 500");
    } else if (status === 403) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Email ou senha errados!',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (status === 404) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: "Email ou senha errados!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <>
    <VLibras />
    <div className='mainBodyLogin'>
      <form className='formLogin'>
        <div className='container'>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/")} alt='Back button' />
            <h1>Login</h1>
          </div>

          <div className='contentContainer'>
            <div className='inputContainer'>
              <input type="email" placeholder='Email' required defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Senha' required defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <span>
              <Link className='forgotPassword' to="/sendEmail">Esqueci minha senha</Link>
            </span>
          </div>

          <button type='button' onClick={validateInputs}>Continuar</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login