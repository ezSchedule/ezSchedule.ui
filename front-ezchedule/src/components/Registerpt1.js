import React from 'react'
import './RegisterPt1.css'
import { useState } from 'react';
import MaskCpf from '../masks/MaskCpf';


const RegisterPt1 = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [numberApartment, setNumberApartment] = useState('');
  const [bloco, setBloco] = useState('');

  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario sem recarregar a página...")

    //mostrando dados que peguei do form
    console.log(name)
    console.log(surname)
    console.log(cpf)
    console.log(numberApartment)
    console.log(bloco)

    //apagando do formulario os dados após enviar
    setName('');
    setSurname('');
    setCpf('');
    setNumberApartment('');
    setBloco('');
  }
  return (
    <div className='mainForm'>
      <form onSubmit={hendleSubmit}>
        <h1>Cadastrar</h1>
            <div className='inputsDiv'>
                <div>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Sobrenome'/>
                <MaskCpf value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </div>
            </div>
            <div className='inputsDiv2'>
                <div>
                <input type="text"placeholder='N Apartamento' />
                <input id='inputBloco' type="text" placeholder='Bloco'/>
                </div>
            </div>
            <div className='divButton'>
                <button type='submit'>Continuar</button>
            </div>
      </form>
    </div>
  )
}

export default RegisterPt1