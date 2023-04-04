import React from 'react'
import './registerPt3.css'
import { useState } from 'react';
import MaskCpf from '../../../masks/MaskCpf';
import MaskPhone from '../../../masks/MaskPhone';


const RegisterPt3 = () => {


  const hendleSubmit = (e) => {

  }
  return (
    <div className='mainFormPt3'>
      <form onSubmit={hendleSubmit}>
        <h1>Eu sou...</h1>
            <div className='inputsDivPt3'>
                <div>
                <input type="text" placeholder='Morador'/>
                <input type="text" placeholder='Sindico'/>
                </div>
            </div>
            <div className='divButtonPt3'>
                <button type='submit'>Continuar</button>
            </div>
      </form>
    </div>
  )
}

export default RegisterPt3