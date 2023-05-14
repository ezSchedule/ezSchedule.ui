import React from 'react';
import { Link } from 'react-router-dom';
import './registerPart3.css';
import userAvatar from '../../../components/assets/user-avatar.png'
import onBackPressed from '../../../components/assets/left-arrow.png'

const RegisterPart3 = () => {
  const hendleSubmit = (e) => { }

  return (
    <div className='mainFormPart3'>
      <div className='container'>
      <div className='imageContainer'>

        <div className='navBarContainer'>
          <div className='buttonBack'>
            <Link className='onBack' to="/">
              <img src={onBackPressed} />
            </Link>
          </div>
          <div className='title'>
            <p>Perfil</p>
          </div>
        </div>

      </div>

        <form onSubmit={hendleSubmit}>
          <div className='inputsContainer'>

            <div className='perfil'>
              <Link className='avatar' to="/">
                <img src={userAvatar} />
              </Link>
            </div>
            <div className='token'>
              <input id="tenant" type="text" placeholder='Insira seu token' disabled />
            </div>
            
          </div>
          <Link className='button' to="">Finalizar</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPart3