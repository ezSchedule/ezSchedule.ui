import React from 'react'
import './columSettings.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/Perfil.png"
import { useState } from 'react'

const ColumSettings = (props) => {
  const [name, setName] = useState(sessionStorage.NAME);
  const [lastName, setLastName] = useState();
  const [cpf, setCpf] = useState(sessionStorage.CPF);
  const [apartment, setApartment] = useState(sessionStorage.APARTMENT);
  const [block, setBlock] = useState(sessionStorage.BLOCK);
  const [phone, setPhone] = useState(sessionStorage.PHONE);
  const [email, setEmail] = useState(sessionStorage.EMAIL);

  function updateTenant() {
    const updateTenant = {

    }
  }

  return (
    <>
      <div className='mainColumSettings'>
        <div className='settingsInformation'>
          <InputInformation attribute="Nome" information={name} insert={setName} />
          <InputInformation attribute="Sobrenome" information={lastName} insert={setLastName} />
          <InputInformation attribute="CPF" information={cpf} insert={setCpf} />
          <InputInformation attribute="Nº Apartamento" information={apartment} insert={setApartment} />
          <InputInformation attribute="Bloco" information={block} insert={setBlock} />
          <InputInformation attribute="Telefone" information={phone} insert={setPhone} />
          <InputInformation attribute="Email" information={email} insert={setEmail} />
        </div>
        <div className='settingsImg'>
          <img src={ImgPerfil} />
          <p>{props.name}</p>
        </div>
      </div>
      <div className='settingsButtons'>
        <button id='cancel'>Cancelar</button>
        <button>Salvar</button>
      </div>
    </>
  )
}

export default ColumSettings