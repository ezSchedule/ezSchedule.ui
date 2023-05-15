import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registerPart3.css';
import onBackPressed from '../../../components/assets/left-arrow.png'
import userAvatar from '../../../components/assets/user-avatar.png'

const RegisterPart3 = () => {
  const navigate = useNavigate();

  const hendleSubmit = (e) => { }

  return (
    <div className='mainFormPart3'>
      <div className='container'>
        <form onSubmit={hendleSubmit}>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/registerPart2")} />
            <h1>Perfil</h1>
          </div>

          <div className='inputsContainer'>
            <img className='imgAvatar' src={userAvatar}/>
            <input id="syndicate" type="text" placeholder='Insira seu token' />
          </div>

          <Link className='button' to="">Finalizar</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPart3