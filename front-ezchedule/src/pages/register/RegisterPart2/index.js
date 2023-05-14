import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MaskPhone from '../../../masks/MaskPhone';
import './registerPart2.css';
import onBackPressed from '../../../components/assets/left-arrow.png'

const RegisterPart2 = () => {
  const [phone, setPhone] = useState('');
  const hendleSubmit = (e) => { }

  return (
    <div className='mainFormPart2'>
      <div className='container'>
        <div className='imageContainer'>

          <div className='navBarContainer'>
            <div className='buttonBack'>
              <Link className='onBack' to="/">
                <img src={onBackPressed} />
              </Link>
            </div>
            <div className='title'>
              <p>Cadastro</p>
            </div>
          </div>

        </div>
        
        <form onSubmit={hendleSubmit}>
          <div className='inputsContainer'>
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