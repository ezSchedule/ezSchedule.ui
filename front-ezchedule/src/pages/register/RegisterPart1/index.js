import React from 'react'
import './registerPart1.css'
import { useState } from 'react';
import MaskCpf from '../../../masks/MaskCpf';
import { Link, useNavigate } from 'react-router-dom';
import onBackPressed from '../../../components/assets/left-arrow.png';

const RegisterPart1 = () => {
  const navigate = useNavigate()

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
      <div className='container'>
        <form onSubmit={hendleSubmit}>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/")}/>
            <h1>Cadastro</h1>
          </div>

          <div className='inputsContainer'>
            <input type="text" placeholder='Nome e sobrenome' />
            <MaskCpf value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <div className='inputsRow'>
              <input className='apartmentInput' type="text" placeholder='Nº Apartamento' />
              <input className='blockInput' id='inputBloco' type="text" placeholder='Bloco' />
            </div>
          </div>

          <Link className='button' to="/registerPart2">Continuar</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPart1