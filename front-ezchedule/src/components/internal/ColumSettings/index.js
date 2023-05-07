import React from 'react'
import './columSettings.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/Perfil.png"
import httpFetch from '../../../hooks/httpFetch';
import { useState } from 'react'

const ColumSettings = (props) => {
  const id = sessionStorage.ID;
  const token = sessionStorage.TOKEN;
  const [name, setName] = useState(sessionStorage.NAME);
  const [lastName, setLastName] = useState();
  const [cpf, setCpf] = useState(sessionStorage.CPF);
  const [apartmentNumber, setApartment] = useState(sessionStorage.APARTMENT);
  const [residentsBlock, setBlock] = useState(sessionStorage.BLOCK);
  const [phoneNumber, setPhone] = useState(sessionStorage.PHONE);
  const [email, setEmail] = useState(sessionStorage.EMAIL);

  function updateTenant() {
    const updateTenant = { 
      name, 
      cpf, 
      apartmentNumber, 
      residentsBlock, 
      phoneNumber, 
      email 
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };


    httpFetch.put(`/users/update-tenant?id=${id}`, updateTenant, config)
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.clear();
        errorMessage(err.response.status)
      });
  }

  function errorMessage(status) {
    if (status == 500) {
      alert("Error 500");
    } else if (status == 401) {
      alert("You don't have permission for that");
    } else if (status == 404) {
      alert("Misspelled information");
    }
  }

  return (
    <>
      <div className='mainColumSettings'>
        <div className='settingsInformation'>
          <InputInformation attribute="Nome" information={name} insert={setName} />
          <InputInformation attribute="Sobrenome" information={lastName} insert={setLastName} />
          <InputInformation attribute="CPF" information={cpf} insert={setCpf} />
          <InputInformation attribute="Nº Apartamento" information={apartmentNumber} insert={setApartment} />
          <InputInformation attribute="Bloco" information={residentsBlock} insert={setBlock} />
          <InputInformation attribute="Telefone" information={phoneNumber} insert={setPhone} />
          <InputInformation attribute="Email" information={email} insert={setEmail} />
        </div>
        <div className='settingsImg'>
          <img src={ImgPerfil} />
          <p>{props.name}</p>
        </div>
      </div>
      <div className='settingsButtons'>
        <button id='cancel'>Cancelar</button>
        <button onClick={updateTenant}>Salvar</button>
      </div>
    </>
  )
}

export default ColumSettings