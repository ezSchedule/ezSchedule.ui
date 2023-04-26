import React from 'react'
import './columSettings.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/Perfil.png"
import { useState } from 'react'
import { useEffect } from 'react'

const ColumSettings = (props) => {
  const [name, setName] = useState("endryl");
  const [cpf, setCpf] = useState(sessionStorage.CPF);
  const [apartment, setApartment] = useState(sessionStorage.APARTMENT);
  const [block, setBlock] = useState(sessionStorage.BLOCK);
  const [phone, setPhone] = useState(sessionStorage.PHONE);
  const [email, setEmail] = useState(sessionStorage.EMAIL);

  return (
    <>
      <div className='mainColumSettings'>
        <div className='settingsInformation'>
          <InputInformation attribute="Nome" information={name}/>
          <InputInformation attribute="Sobrenome" information="Nunes"/>
          <InputInformation attribute="CPF" information=" 739.748.090-10"/>
          <InputInformation attribute="Nº Apartamento" information="45"/>
          <InputInformation attribute="Bloco" information="5"/>
          <InputInformation attribute="Telefone" information="11 957806515"/>
          <InputInformation attribute="Email" information="Vinicius@gmail.com"/>
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