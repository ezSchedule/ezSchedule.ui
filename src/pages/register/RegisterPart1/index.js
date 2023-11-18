import React from 'react'
import './registerPart1.css'
import { useState } from 'react';
import MaskCpf from '../../../masks/MaskCpf';
import { useLocation, useNavigate } from 'react-router-dom';
import onBackPressed from '../../../components/assets/left-arrow.png';
import Swal from 'sweetalert2';

const RegisterPart1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  location.state = location.state === null ? {} : location.state;

  const [name, setName] = useState(location.state.name);
  const [cpf, setCpf] = useState(location.state.cpf);
  const [apartment, setApartment] = useState(location.state.apartmentNumber);
  const [block, setBlock] = useState(location.state.residentsBlock);
  const [subscribed, setSubscribed] = useState(location.state.subscribed === undefined ? 0 : location.state.subscribed);

  const body = {
    name: name,
    cpf: cpf,
    apartmentNumber: apartment,
    residentsBlock: block,
    subscribed: subscribed
  }

  function validateField() {
    if (name === "" || name === undefined) {
      modal("O campo nome não pode ser vazio!");
    } else if (cpf === "" || cpf === undefined) {
      modal("O campo cpf não pode ser vazio!");
    } else if (apartment === "" || apartment === undefined) {
      modal("O campo número do apartamento não pode ser vazio!");
    } else if (block === "" || block === undefined) {
      modal("O campo bloco não pode ser vazio!");
    } else if (name.length < 3) {
      modal("O campo nome não pode ter menos que 3 caracteres!");
    } else if (name.length > 45) {
      modal("O campo nome não pode ter mais que 45 caracteres!");
    } else {
      nextPage();
    }
  }

  function nextPage() {
    navigate('/registerPart2', { state: body })
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
      <div className='mainForm'>
      <div className='container'>
        <form>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/")} alt='Back button' />
            <h1>Cadastro</h1>
          </div>

          <div className='inputsContainer'>

            <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder='Nome e sobrenome' />
            <MaskCpf value={cpf} onChange={(e) => setCpf(e.target.value)} />

            <div className='inputsRow'>
              <input value={apartment} className='apartmentInput' type="text" onChange={(e) => setApartment(e.target.value)} placeholder='Nº Apartamento' />
              <input value={block} className='blockInput' id='inputBloco' type="text" onChange={(e) => setBlock(e.target.value)} placeholder='Bloco' />
            </div>

            <div className='inputsRadio'>
              <label className='titleRadio'>
                Deseja receber mensagens no email?
              </label>
              <input type="radio" id='yes' name='email-alert' onChange={() => setSubscribed(1)} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id='no' name='email-alert' onChange={() => setSubscribed(0)} />
              <label htmlFor="no">No</label>
            </div>

          </div>

          <button type='button' className='button' onClick={() => validateField()}>
            Continuar
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default RegisterPart1