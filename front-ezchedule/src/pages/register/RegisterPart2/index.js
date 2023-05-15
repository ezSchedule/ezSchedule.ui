import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MaskPhone from '../../../masks/MaskPhone';
import './registerPart2.css';
import onBackPressed from '../../../components/assets/left-arrow.png'

const RegisterPart2 = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const hendleSubmit = (e) => { }

  return (
    <div className='mainFormPart2'>
      <div className='container'>
        <form onSubmit={hendleSubmit}>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/registerPart1")} />
            <h1>Cadastro</h1>
          </div>
          
          <div className='inputsColumn'>
            <MaskPhone value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Senha' />
            <input type="password" placeholder='Confirmação de senha' />
          </div>
          
          <Link className='button' to="/registerPart3">Continuar</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPart2