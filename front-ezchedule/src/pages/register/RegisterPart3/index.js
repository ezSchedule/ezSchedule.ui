import React from 'react';
import { Link } from 'react-router-dom';
import './registerPart3.css';
import onBackPressed from '../../../components/assets/left-arrow.png'

const RegisterPart3 = () => {
  const hendleSubmit = (e) => { }

  return (
    <div className='mainFormPart3'>
      <div className='container'>
        <div className='imageContainer'>
          <Link className='onBack' to="/registerPart2">
            <img src={onBackPressed} />
          </Link>
        </div>
        <form onSubmit={hendleSubmit}>
          <h1>Eu sou...</h1>
          <div className='inputsContainer'>
            <input id="tenant" type="text" placeholder='Morador' disabled />
            <input id="syndicate" type="text" placeholder='Sindico' disabled />
          </div>
          <Link className='button' to="">Cadastrar</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPart3