import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MaskPhone from '../../../masks/MaskPhone';
import './registerPart2.css';
import onBackPressed from '../../../components/assets/left-arrow.png';
import Swal from 'sweetalert2';
import VLibras from '../../../components/internal/Vlibras';

const RegisterPart2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  location.state = location.state == null ? {} : location.state;

  const name = location.state.name;
  const cpf = location.state.cpf;
  const apartment = location.state.apartmentNumber;
  const block = location.state.residentsBlock;
  const subscribed = location.state.subscribed;
  const [phone, setPhone] = useState(location.state.phoneNumber);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  const [confirmPassword, setConfirmPassword] = useState("");

  const body = {
    name: name,
    cpf: cpf,
    apartmentNumber: apartment,
    residentsBlock: block,
    subscribed: subscribed,
    phoneNumber: phone,
    email: email,
    password: password
  }

  function validateField() {
    if (phone === "" || phone === undefined) {
      modal("O campo telefone não pode ser vazio!");
    } else if (email === "" || email === undefined) {
      modal("O campo email não pode ser vazio!");
    } else if (password === "" || password === undefined) {
      modal("O campo senha não pode ser vazio!");
    } else if (confirmPassword === "" || confirmPassword === undefined) {
      modal("O campo confirmar senha não pode ser vazio!");
    } else if (password !== confirmPassword) {
      modal("O campo senha não pode ser diferente da confirmação!");
    } else {
      nextPage();
    }
  }

  function nextPage() {
    navigate('/registerPart3', { state: body })
  }

  function modal(text) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <>
      <VLibras />
      <div className='mainFormPart2'>
      <div className='container'>
        <form>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/registerPart1", { state: body })} alt='Back button' />
            <h1>Cadastro</h1>
          </div>

          <div className='inputsColumn'>
            <MaskPhone value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input value={email} type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} minLength={8} maxLength={16} required />
            <input type="password" placeholder='Confirmação de senha' onChange={(e) => setConfirmPassword(e.target.value)} minLength={8} maxLength={16} required />
          </div>

          <button type='button' className='button' onClick={() => validateField()}>Continuar</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default RegisterPart2