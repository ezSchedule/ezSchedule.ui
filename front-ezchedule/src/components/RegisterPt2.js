import React from 'react'
import './RegisterPt2.css'
import { useState } from 'react';
import MaskCpf from '../masks/MaskCpf';
import MaskPhone from '../masks/MaskPhone';


const RegisterPt2 = () => {

  const [phone, setPhone] = useState('');

  const hendleSubmit = (e) => {
    
  }
  return (
    <div className='mainFormPt2'>
      <form onSubmit={hendleSubmit}>
        <h1>Cadastrar</h1>
            <div className='inputsDivPt2'>
                <div>
                <MaskPhone value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Senha'/>
                <input type="text" placeholder='Confirmação de senha'/>
                </div>
            </div>
            <div className='divButtonPt2'>
                <button type='submit'>Continuar</button>
            </div>
      </form>
    </div>
  )
}

export default RegisterPt2